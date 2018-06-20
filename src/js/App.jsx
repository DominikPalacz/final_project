import React from 'react';
import './../sass/main.scss';

class WebsiteTemplate extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            addDepositHistory: 0,
            currentCourseCenter: 0,
            plnValueLeft: 0,
            btcValueRight: 0,
            take: 0,
        };
    }

    componentDidMount() {

        this.intervalId = setInterval(() => {
            fetch('https://www.bitmarket.pl/json/BTCPLN/ticker.json')
                .then(resp => resp.json())
                .then(json => {
                    this.setState({
                        currentCourseCenter: (json.last + Math.floor((Math.random() * 10000) + 1))
                    });
                })
        }, 1000)

    }

    handleClickPayment() {
        let value = prompt("Podaj kwotę");
        this.setState({
                plnValueLeft: value,
                addDepositHistory: value
            }
        )
    }

    handleClickBuy() {
        this.setState({
            btcValueRight: this.state.plnValueLeft / this.state.currentCourseCenter,
            plnValueLeft: 0,
        })
    }

    handleClickSell() {
        this.setState({
            plnValueLeft: Math.floor(this.state.btcValueRight * this.state.currentCourseCenter),
            btcValueRight: 0,
        })
    }

    handleClickPaycheck() {
        let takeValue = prompt("Ile chcesz kasy ?");
            this.setState({
                take: takeValue,
                plnValueLeft: Number(this.state.plnValueLeft) - Number(takeValue),


            })

    }

    //TODO Add Modal Dialogs in React

    render() {
        return (
            <section className="HolyGrail">

                <header className="HolyGrail-header">
                    <h1>Najlpeszy symulator girłdy BITCOIN</h1>
                    <img src="../../imgages/btc.png" alt=""/>
                </header>

                <div className="HolyGrail-body">

                    <aside className="HolyGrail-L">
                        <ul>
                            <li>Stan konta PLN</li>
                            <p>{this.state.plnValueLeft + " PLN"}</p>
                            <button onClick={e => this.handleClickBuy(e)}>Kup BTC</button>
                        </ul>
                    </aside>

                    <main className="HolyGrail-content">
                        <div>
                            <p>Aktualny kurs BTC</p>
                            <h1>{this.state.currentCourseCenter}</h1>
                        </div>
                        <div>
                            <button onClick={e => this.handleClickPayment(e)}>Dokonaj wpłaty PLN</button>
                        </div>
                        <div>Historia wpłat:</div>
                        <p>{this.state.addDepositHistory}</p>
                        <button onClick={e => this.handleClickPaycheck(e)}>Wypłać PLN</button>
                        <div>Wypłacono:</div>
                        <p>{this.state.take}</p>
                        <img
                            src="https://cryptocurrencynews.com/wp-content/uploads/sites/3/2018/03/Bitcoin-Price-Watch-BTC-USD-Breaks-Above-8000-Once-Again-678x381.jpg"
                            alt="BTC"/>
                    </main>
                    <aside className="HolyGrail-R">
                        <ul>
                            <li>Stan konta BTC</li>
                            <p>{this.state.btcValueRight + " BTC"}</p>
                            <button onClick={e => this.handleClickSell(e)}>Sprzedaj BTC</button>
                        </ul>
                    </aside>

                </div>

                <footer className="HolyGrail-footer">
                    <p>&copy; 2018 by Dominik Palacz</p>
                </footer>

            </section>
        )
    }
}

class App extends React.Component {

    render() {
        return (

            <WebsiteTemplate
                // header={
                //     <h1>by Dominik Palacz</h1>
                // }
                // content={
                //     <div>
                //         <p>Handluj na wirtualnej giełdzie BITCOINEM i zarabiaj na kolejne kursy w CodersLab</p>
                //     </div>
                // }
                // menu={
                //     <ul>
                //         <li>LISTA LEWA</li>
                //     </ul>
                // }
                // ad={
                //     <ul>
                //         <li>LISTA PRAWA</li>
                //     </ul>
                // }
                // footer={
                //     <p>&copy; 2018 Dominik Palacz</p>
                // }
            />

        )
    }
}

module.exports = App;
