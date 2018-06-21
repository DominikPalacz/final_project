import React from 'react'

class AsideRight extends React.Component {
    handleCSell = (e) => {
        if (typeof this.props.propsMethod == 'function') {
            this.props.propsMethod(e);
        }
    };


    render() {
        return (
            <aside className="HolyGrail-R">
                <ul>
                    <li>Stan konta BTC</li>
                    <p>{this.props.valueBtc + " BTC"}</p>
                    <button onClick={e => this.handleCSell(e)}>Sprzedaj BTC</button>
                </ul>
            </aside>
        )
    }

}

module.exports = AsideRight;