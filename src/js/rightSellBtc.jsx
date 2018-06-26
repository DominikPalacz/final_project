import React from 'react'

class AsideRight extends React.Component {
    handleCSell = (e) => {
        if (typeof this.props.propsMethod == 'function') {
            this.props.propsMethod(e);
        }
    };


    render() {
        if(this.props.valueBtc){
            return (
                <aside className="HolyGrail-R">
                    <ul>
                        <li>Cryptocurrency account status</li>
                        <p>{this.props.valueBtc + " BTC"}</p>
                        <button onClick={e => this.handleCSell(e)}>Sell</button>
                    </ul>
                </aside>
            )
        } else {
            return (
                <aside className="HolyGrail-R">
                    <ul>
                        <li>Cryptocurrency account status</li>
                        <p>{this.props.valueBtc + " BTC"}</p>
                    </ul>
                </aside>
            )
        }

    }

}

module.exports = AsideRight;