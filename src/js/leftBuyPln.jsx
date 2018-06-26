import React from 'react';


class AsideLeft extends React.Component {

    handleClick = (e) => {
        if(typeof this.props.actionClick == 'function'){
            this.props.actionClick(e);
        }
    };

    render(){
        if (this.props.value !== 0){
            return(
                <aside className="HolyGrail-L">
                    <ul>
                        <li>Account balance of money</li>
                        <p>{this.props.value + " PLN"}</p>
                        <button onClick={this.handleClick}>Buy</button>
                        <ul>
                            {this.props.history.map( p => <li>{p}</li>)}
                        </ul>
                    </ul>
                </aside>
            )
        } else {
            return(
                <aside className="HolyGrail-L">
                    <ul>
                        <li>Account balance of money</li>
                        <p>{this.props.value + " PLN"}</p>
                        <ul>
                            {this.props.history.map( p => <li>{p}</li>)}
                        </ul>
                    </ul>
                </aside>
            )
        }

    }
}

module.exports = AsideLeft;