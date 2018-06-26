import React from 'react';
import {Router, Link} from 'react-router-dom'

class Header extends React.Component {


    render() {
        return (
            <header className="HolyGrail-header">
                <Link to="/">_BTC_-</Link>
                <Link to="/ltc">-_LTC_</Link>
                <h1>{this.props.title}</h1>
                <div className="img"></div>
                {/*<p>Przyszłość jest kwestią dzisiejszych wyborów.</p>*/}
                <img src="./images/btc.png" alt="btc2"/>
            </header>
        )
    }
}

module.exports = Header;

// pamiętać o importowaniu !!! import {Router, Link} from 'react-router-dom'