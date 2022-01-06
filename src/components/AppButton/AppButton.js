import { Component } from "react";
import './AppButton.scss'

class AppButton extends Component {

    render() {
        return <button onClick={this.props.onBtnClick} className="button-main">{this.props.btnText}</button>
    }
}
export default AppButton;