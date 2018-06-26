import React from 'react';

class CenterMain extends React.Component {

    handleClickCenter = (e) => {
        if (typeof this.props.actionClickC == 'function') {
            this.props.actionClickC(e);
        }
    };

    handleClickPay = (e) => {
        if (typeof this.props.actionClickP == 'function') {
            this.props.actionClickP(e);
        }
    }

    render() {

        if (this.props.timeProps >= 1) {
            return (
                <main className="HolyGrail-content">
                    <div>
                        <h3>Time is money! You have {this.props.timeProps} seconds</h3>
                        <p>Current BTC rate</p>
                        <h1>{this.props.courseApi}</h1>
                        <h2>{this.props.courseApiHistory}</h2>
                    </div>
                    <div>
                        <button onClick={this.handleClickCenter}>payment to</button>
                    </div>
                    <div>Deposit history:</div>
                    <p>{this.props.addHistory}</p>
                    <button onClick={e => this.handleClickPay(e)}>payment from</button>
                    <div>Paid:</div>
                    <p>{this.props.stateTake}</p>
                    {/*<img*/}
                    {/*src="https://cryptocurrencynews.com/wp-content/uploads/sites/3/2018/03/Bitcoin-Price-Watch-BTC-USD-Breaks-Above-8000-Once-Again-678x381.jpg"*/}
                    {/*alt="BTC"/>*/}
                </main>
            )
        } else {
            return (
                <main className="HolyGrail-content">
                    <p>Money is sometimes ... sometimes it is;) and sometimes it is not!</p>
                    <div>Been paid:</div>
                    <p>{this.props.addHistory}</p>
                    <button onClick={e => this.handleClickPay(e)}>Money payment</button>
                    <div>Paid:</div>
                    <p>{this.props.stateTake}</p>
                    <img
                        src="https://cryptocurrencynews.com/wp-content/uploads/sites/3/2018/03/Bitcoin-Price-Watch-BTC-USD-Breaks-Above-8000-Once-Again-678x381.jpg"
                        alt="BTC"/>
                </main>
            )
        }


    }

}

module.exports = CenterMain;