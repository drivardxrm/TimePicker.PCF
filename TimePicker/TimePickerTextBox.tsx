import * as React from 'react';
import { useState, useEffect } from "react";

import moment, { Moment } from 'moment';
import TimePicker from 'rc-time-picker';

import { Stack,TextField, mergeStyles} from "office-ui-fabric-react/lib/index"; 
import { FontIcon} from "office-ui-fabric-react/lib/Icon";


//todo : parametrize this
const format = 'h:mm a';

export interface IProps {
    hourvalue: number;
    minutevalue: number;
    readonly:boolean;
    masked:boolean;

    onChange: (hourvalue:number,minutevalue:number) => void;
}

const TimePickerTextBox = (props : IProps): JSX.Element => {

    //STATE HOOKS VARIABLES
    const [timevalue, setTimevalue] = useState<moment.Moment>(moment().hour(props.hourvalue).minute(props.minutevalue));

    
    useEffect(() => {
        if(timevalue.hours() != props.hourvalue || timevalue.minutes() != props.minutevalue)
        {
            setTimevalue(moment().hour(props.hourvalue).minute(props.minutevalue));
        }
    }, [props.hourvalue, props.minutevalue]);

    useEffect(() => {
        if(timevalue.hours() != props.hourvalue || timevalue.minutes() != props.minutevalue)
        {
            props.onChange(timevalue.hours(),timevalue.minutes())
        }      
    }, [timevalue]);

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

    //main rendering
    if(props.masked){
        return(
            <Stack tokens={{ childrenGap: 2 }} horizontal>
                <FontIcon iconName="Lock" className={iconClass} />     
                <TextField value="*********" style={{width:"100%"}}/>
            </Stack>
        )
    }else{
        return (
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
        );
    }

}
export default TimePickerTextBox;







