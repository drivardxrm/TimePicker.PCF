import * as React from 'react';

import moment, { Moment } from 'moment';
import TimePicker from 'rc-time-picker';

//todo : parametrize this
const format = 'h:mm a';

export interface IProps {
    hourvalue: number;
    minutevalue: number;
    onChange: (hourvalue:number,minutevalue:number) => void;
}

export interface IState {
    hourvalue: number;
    minutevalue: number;
    timevalue: moment.Moment;
}

export class TimePickerTextBox extends React.Component<IProps, IState> {

    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = { hourvalue: props.hourvalue, 
                        minutevalue: props.minutevalue, 
                        timevalue: moment().hour(props.hourvalue).minute(props.minutevalue)};
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(props: IProps) {
        this.setState({hourvalue : props.hourvalue ,
                        minutevalue: props.minutevalue, 
                        timevalue: moment().hour(props.hourvalue).minute(props.minutevalue)});
    }

    handleChange(e: Moment) {
        this.setState({hourvalue: e.hours(),minutevalue: e.minutes(), timevalue:e});
        this.props.onChange(e.hours(),e.minutes());
    }

    render() {

        return (
            <TimePicker
                showSecond={false}
                defaultValue={this.state.timevalue}
                className="time"
                onChange={this.handleChange}
                format={format}
                use12Hours
                inputReadOnly
            />
        );

    }

}