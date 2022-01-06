import './Clock.scss';
import { Component } from "react";


class Clock extends Component {
    setIntervalRef;

    componentDidMount() {
        if (!this.props.time) {
            this.props.timeChange(this.getCurrentTimeText());
        }
        this.tickTok();
    }

    tickTok() {
        this.setIntervalRef = setInterval(() => {
            this.props.timeChange(this.getCurrentTimeText());
        }, 1000);
    }

    getCurrentTimeText() {
        const date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();

        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        return h + ":" + m + ":" + s;
    }

    render() {
        return <div className="clock">{this.props.time}</div>;
    }

    componentWillUnmount() {
        clearInterval(this.setIntervalRef);
    }
}

export default Clock;