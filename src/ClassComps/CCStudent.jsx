import { Component } from "react";

export default class CCStudent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            p1: "",
            p2: "",
            p3: "",
            p4: "",

        };

    }

    chgP1 = () => {
        if (this.state.p1 == "") {
            this.setState({ p1: 'עלייך למלא שם פרטי', p2: "", p3: "" });
        }

    }
    chgP2 = () => {
        if (this.state.p2 == "") {
            this.setState({ p2: 'עלייך למלא שם משפחה', p1: "", p3: "" });
        }

    }
    chgP3 = () => {
        if (this.state.p3 == "") {
            this.setState({ p3: 'עלייך למלא ציון פסיכומטרי', p1: "", p2: "" });
        }


    }
    calc = (m) => {
        let gr = m.target.value;
        if (gr > 555) {
            this.setState({ p4: ' אתה יכול להתקבל ללימודים!' });
        }
        else if (gr <= 555 && gr !== '') {
            this.setState({ p4: ' עליך לנסות שוב בשנה הבאה ' });

        }
    }
    render() {
        return (
            <form action="">

                <p style={{ color: 'red' }}>{this.state.p1}</p>
                First Name: <input type="text" onFocus={this.chgP1} />
                <p style={{ color: 'red' }}>{this.state.p2}</p>
                Last Name: <input type="text" onFocus={this.chgP2} />
                <p style={{ color: 'red' }}>{this.state.p3}</p>
                Grade: <input type="text" onFocus={this.chgP3} onBlur={this.calc} />
                <p style={{ color: 'blue' }}>{this.state.p4} </p>
            </form>
        );
    }
}