import { Component } from "react";

export default class CCColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'black'
        }
    }

    btnColor = (sendColor) => {
        this.setState({ color: sendColor });
    }
   
    render() {
        return (
            <div style={{
                margin: 20, padding: 15,
                backgroundColor: this.state.color
            }}>
                
                <button onClick={() => this.btnColor('Red')}>Red</button> <br /><br />
                <button onClick={() => this.btnColor('Blue')}>Blue</button> <br /><br />
                <button onClick={() => this.btnColor('Yellow')}>Yellow</button> <br /><br />
                <button onClick={() => this.btnColor('Orange')}>Orange</button> <br /><br />
                <button onClick={() => this.btnColor('Green')}>Green</button> <br /><br />
                <button onClick={() => this.btnColor('Pink')}>Pink</button> <br /><br />
                <button onClick={() => this.btnColor('White')}>White</button> <br /><br />
                <button onClick={() => this.btnColor('Grey')}>Grey</button> <br /><br />
            </div>
        );

    }
}