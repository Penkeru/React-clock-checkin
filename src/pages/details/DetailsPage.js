import './DetailsPage.scss';
import { Component } from "react";
import { AppContext } from '../../context/AppContext';
import AppButton from '../../components/AppButton/AppButton';

class DetailsPage extends Component {
    static contextType = AppContext;
    constructor() {
        super();
        this.state = {
            checkinList: []
        }
    }

    componentDidMount() {
        const { checkinList } = this.context;
        this.setState({
            checkinList
        })
    }

    routeToClockPage() {
        this.props.history.push('/home');
    }


    render() {
        return <div className="details-container">
            <div className="check-list">
                <div className="title">This is the following list of clock check-ins:</div>
                <div className="list-container">
                    <ul>
                        {this.state.checkinList.map(item => <li>{item}</li>)}
                    </ul>
                </div>
            </div>
            <div className="actions-btns">
                <AppButton onBtnClick={this.routeToClockPage.bind(this)} btnText="Back to the clock" />
            </div>

        </div>
    }

}

export default DetailsPage;
