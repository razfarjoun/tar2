import { Component } from "react";

export default class CCTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wid: '100%'
        }
    }
    chgWid1 = () => {
        this.setState({ wid: '50%' });
    }

    chgWid2 = () => {
        this.setState({ wid: '100%' });
    }
    render() {
        return (
            <div >

                <table style={{ margin: '0 auto', width: this.state.wid, border: 'solid black 2px', borderCollapse: 'collapse' }} onClick={this.chgWid1} onDoubleClick={this.chgWid2}>
                    <tr>
                        <td style={{ border: 'solid black 2px' }}>test</td>
                        <td style={{ border: 'solid black 2px' }}>test</td>
                    </tr>
                    <tr>
                        <td style={{ border: 'solid black 2px' }}>test</td>
                        <td style={{ border: 'solid black 2px' }}>test</td>
                    </tr>
                    <tr>
                        <td style={{ border: 'solid black 2px' }}>test</td>
                        <td style={{ border: 'solid black 2px' }}>test</td>
                    </tr>
                    <tr>
                        <td style={{ border: 'solid black 2px' }}>test</td>
                        <td style={{ border: 'solid black 2px' }}>test</td>
                    </tr>
                </table>
            </div>
        );
    }
}