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
        return (
            <main className="HolyGrail-content">
                <div>
                    <p>Aktualny kurs BTC</p>
                    <h1>{this.props.courseApi}</h1>
                    <h2>{this.props.courseApiHistory}</h2>
                    <h3>{this.props.timeProps}</h3>
                </div>
                <div>
                    <button onClick={this.handleClickCenter}>Dokonaj wpłaty PLN</button>
                </div>
                <div>Historia wpłat:</div>
                <p>{this.props.addHistory}</p>
                <button onClick={e => this.handleClickPay(e)}>Wypłać PLN</button>
                <div>Wypłacono:</div>
                <p>{this.props.stateTake}</p>
                {/*<img*/}
                {/*src="https://cryptocurrencynews.com/wp-content/uploads/sites/3/2018/03/Bitcoin-Price-Watch-BTC-USD-Breaks-Above-8000-Once-Again-678x381.jpg"*/}
                {/*alt="BTC"/>*/}
            </main>
        )
    }

}

module.exports = CenterMain;