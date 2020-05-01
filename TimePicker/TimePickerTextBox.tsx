import * as React from 'react';
import { useState, useEffect } from "react";
import moment, { Moment } from 'moment';
import TimePicker from 'rc-time-picker';
import { FontIcon,Stack,TextField,mergeStyles} from "@fluentui/react"; 



//todo : parametrize this
const format = 'h:mm a';

export interface IProps {
    hourvalue: number|undefined;
    minutevalue: number|undefined;
    readonly:boolean;
    masked:boolean;

    onChange: (hourvalue:number|undefined,minutevalue:number|undefined) => void;
}

const TimePickerTextBox = (props : IProps): JSX.Element => {

    //STATE HOOKS VARIABLES
    const [timevalue, setTimevalue] = useState<moment.Moment|undefined>( ()=> {
        
        if(props.hourvalue !== undefined && props.minutevalue !== undefined)
        {
            return moment().hour(props.hourvalue).minute(props.minutevalue);
        }else{
            return undefined;
        }
    });

    //EEFECT HOOKS
    // When props change
    useEffect(() => {
        
        if(props.hourvalue !== undefined && props.minutevalue !== undefined) 
        {
            //console.log("EFFECT [props.hourvalue, props.minutevalue] : setTimevalue " + props.hourvalue + ":" + props.minutevalue);
            let newTimevalue:Moment = moment().hour(props.hourvalue).minute(props.minutevalue);
            if(newTimevalue !== timevalue)
            {
                setTimevalue(newTimevalue);
            }
            
        }else{
            //console.log("EFFECT [props.hourvalue, props.minutevalue] : setTimevalue undefined");
            setTimevalue(undefined);
        }
    }, [props.hourvalue, props.minutevalue]);

    //When timevalue change => signal back to caller (PCF)
    useEffect(() => {
        if((timevalue === null || timevalue === undefined) && 
            (props.hourvalue !== undefined || props.minutevalue !== undefined))
        {
            //CLEAR
            props.onChange(undefined,undefined)
        }
        else if(timevalue !== null && timevalue !== undefined && (timevalue.hours() !== props.hourvalue 
                                                    || 
                                            timevalue.minutes() !== props.minutevalue))
        {
            //UPDATE WITH NEW VALUE
            props.onChange(timevalue.hours(),timevalue.minutes())
        }      
    }, [timevalue]);

    //EVENT HANDLERS
    const handleChange = (e: Moment) => {
        setTimevalue(e)      
    }

    //STYLES
    const iconClass = mergeStyles({
        fontSize: 30,
        height: 30,
        width: 50,
        margin: "1px",      
    });

    //RENDERING
    if(props.masked){
        return(
            <Stack tokens={{ childrenGap: 2 }} horizontal>
                <FontIcon iconName="Lock" className={iconClass} />     
                <TextField value="*********" style={{width:"100%"}}/>
            </Stack>
        )
    }else{
        return (
            <div>

                <TimePicker
                    showSecond={false}
                    value={timevalue}
                    className="time"
                    onChange={handleChange}
                    format={format}
                    use12Hours
                    inputReadOnly
                    disabled={props.readonly}
                />

            </div>
        );
    }

}
export default TimePickerTextBox;







