import React from 'react'

class Footer extends React.Component {

    render() {
        return (
            <footer className="HolyGrail-footer">
                <p>{this.props.textFooter}</p>
            </footer>
        )
    }
}

module.exports = Footer;