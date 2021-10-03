import { Component } from 'react';
import Button from './button';
import './mainPage.css'


class MainPage extends Component {
    render() {
        return(
            <div className="main">
                <div class="count">
                    
                </div>

            
                <div className="buttonGroup">
                    <Button buttonName="Up"/>
                    <Button buttonName="Down"/>
                    <Button buttonName="Reset"/>
                </div>
            </div>
        )
    }
};

export default MainPage;