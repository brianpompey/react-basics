import { Component } from 'react';
import Button from './button';
import './mainPage.css'

const initialState = {
    count: 0
};

class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            ...initialState
        }
    }

    render() {
        return(
            <div className="main">
                <div class="count">
                    {this.state.count}
                </div>

            
                <div className="buttonGroup">
                    <Button buttonName="Up" />
                    <Button buttonName="Down"/>
                    <Button buttonName="Reset"/>
                </div>
            </div>
        )
    }
};

export default MainPage;