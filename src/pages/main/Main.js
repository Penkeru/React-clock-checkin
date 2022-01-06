import Clock from "../../components/clock/Clock";
import AppButton from "../../components/AppButton/AppButton";
import { Component } from "react";
import './Main.scss'
import { AppContext } from "../../context/AppContext";


class MainPage extends Component {
    static contextType = AppContext;
    constructor() {
        super();
        this.state = {
            currentTime: ''
        }
    }

    routeToCheckInPage() {
        const { checkinList, setCheckinList } = this.context;
        checkinList.unshift(this.state.currentTime);
        setCheckinList(checkinList);
        this.props.history.push('/details');
    }

    onTimeChange(currentTime) {
        this.setState({
            currentTime
        })
    }

    render() {
        return <div className="main-container">
            <Clock time={this.state.currentTime} timeChange={this.onTimeChange.bind(this)} />
            <AppButton onBtnClick={this.routeToCheckInPage.bind(this)} btnText="Snooze!!!"></AppButton>
        </div>
    }
}

export default MainPage;