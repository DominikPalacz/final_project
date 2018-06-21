import React from "react";
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import AsideLeft from './leftBuyPln.jsx';
import AsideRight from './rightSellBtc.jsx';
import CenterMain from './centerMain.jsx';

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
                        currentCourseCenter: Math.floor((json.last + Math.floor((Math.random() * 10000) + 1)))
                    });
                })
        }, 1000)
    }

    // ES7 ;)
    handleClickPayment = () => {
        let value = prompt("Podaj kwotę");
        this.setState({
                plnValueLeft: value,
                addDepositHistory: value
            }
        )
    }
    //przekazanie this do komponentu dziecka bo tam ma inny kontekst
    handleClickBuy = () => {
        this.setState({
            btcValueRight: this.state.plnValueLeft / this.state.currentCourseCenter,
            plnValueLeft: 0,
        })
    }


    handleClickSell = () => {
        this.setState({
            plnValueLeft: Math.floor(this.state.btcValueRight * this.state.currentCourseCenter),
            btcValueRight: 0,
        })
    }

    handleClickPaycheck = () => {
        let takeValue = prompt("Ile chcesz kasy ?");
        this.setState({
            take: takeValue,
            plnValueLeft: Number(this.state.plnValueLeft) - Number(takeValue),
        })

    }

    render() {
        return (
            <section className="HolyGrail">

                <Header title='Najlpeszy symulator giełdy BITCOIN'/>

                <div className="HolyGrail-body">

                    <AsideLeft value={this.state.plnValueLeft} actionClick={this.handleClickBuy} props={this.state}/>

                    <CenterMain courseApi={this.state.currentCourseCenter} actionClickC={this.handleClickPayment} addHistory={this.state.addDepositHistory} actionClickP={this.handleClickPaycheck} stateTake={this.state.take}/>

                    <AsideRight valueBtc={this.state.btcValueRight} propsMethod={this.handleClickSell}/>

                </div>

                <Footer textFooter="&copy; 2018 by Dominik Palacz"/>

            </section>
        )
    }
}

module.exports = WebsiteTemplate;