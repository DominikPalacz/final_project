import React from 'react';

class AsideLeft extends React.Component {

    handleClick = (e) => {
        if(typeof this.props.actionClick == 'function'){
            this.props.actionClick(e);
        }
    };

    render(){
        return(
            <aside className="HolyGrail-L">
                <ul>
                    <li>Stan konta PLN</li>
                    <p>{this.props.value + " PLN"}</p>
                    <button onClick={this.handleClick}>Kup BTC</button>
                </ul>
            </aside>
        )
    }
}

module.exports = AsideLeft;