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
        this.upCount = this.upCount.bind(this);
        this.downCount = this.downCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }

    upCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    downCount = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    resetCount = () => {
        this.setState({
            count: 0
        });
    };
    
    


    render() {
        return(
            <div className="main">
                <div class="count">
                    {this.state.count}
                </div>

            
                <div className="buttonGroup">
                    <Button buttonName="Up" methodName={this.upCount}/>
                    <Button buttonName="Down" methodName={this.downCount}/>
                    <Button buttonName="Reset" methodName={this.resetCount}/>
                </div>
            </div>
        )
    }
};

export default MainPage;