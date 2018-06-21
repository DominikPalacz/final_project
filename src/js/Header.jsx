import React from 'react'

class Header extends React.Component {


    render() {
        return (
            <header className="HolyGrail-header">
                <h1>{this.props.title}</h1>
                <div className="img"></div>
                <img src="../../images/btc.png" alt="btc2"/>
            </header>
        )
    }
}

module.exports = Header;