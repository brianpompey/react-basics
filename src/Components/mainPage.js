import { Component } from 'react';
import Button from './button';


class MainPage extends Component {
    render() {
        return(
            <div className="buttonGroup">
                <Button buttonName="Up"/>
                <Button buttonName="Down"/>
                <Button buttonName="Reset"/>
            </div>
        )
    }
};

export default MainPage;