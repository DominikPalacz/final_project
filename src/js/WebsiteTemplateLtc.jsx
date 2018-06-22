import React from "react";
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import AsideLeft from './leftBuyPln.jsx';
import AsideRight from './rightSellBtc.jsx';
import CenterMain from './centerMain.jsx';

class WebsiteTemplateLtc extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addDepositHistory: 0,
            currentCourseCenter: 0,
            plnValueLeft: 0,
            btcValueRight: 0,
            take: 0,
            timeGame: 90,
            story: []
        };
    }


    componentDidMount() {

        fetch('https://www.bitmarket.pl/graphs/LTCPLN/1y.json')
            .then(r => r.json())
            .then(data => {
                let counter = 0;
                let time = 89;
                this.intervalId = setInterval(() => {
                    this.setState({
                        currentCourseCenter: Math.floor(data[counter].open),
                        timeGame: time,

                    });
                    counter++;
                    time--;

                    if (this.state.timeGame == 0) {
                        clearInterval(this.intervalId);
                    }

                }, 1000);

            });
    }


    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    // ES7 ;)
    handleClickPayment = () => {
        let value = prompt("Podaj kwotę");

        this.setState({
                plnValueLeft: value,
                addDepositHistory: value
            }
        )
    };

    handleClickBuy = () => {
        this.state.story.push(this.state.plnValueLeft);
        this.setState({
            btcValueRight: this.state.plnValueLeft / this.state.currentCourseCenter,
            plnValueLeft: 0,
            story: this.state.story
        })
    };


    handleClickSell = () => {
        this.setState({
            plnValueLeft: Math.floor(this.state.btcValueRight * this.state.currentCourseCenter),
            btcValueRight: 0,
        })
    };

    handleClickPaycheck = () => {
        let takeValue = prompt("Ile chcesz kasy ?");
        this.setState({
            take: takeValue,
            plnValueLeft: Number(this.state.plnValueLeft) - Number(takeValue),
        })

    };

    render() {
        return (
            <section className="HolyGrail-l">

                <Header title='Litecoin'/>

                <div className="HolyGrail-body">

                    <AsideLeft value={this.state.plnValueLeft} actionClick={this.handleClickBuy} props={this.state}
                               history={this.state.story}/>

                    <CenterMain courseApi={this.state.currentCourseCenter}
                                timeProps={this.state.timeGame}
                                actionClickC={this.handleClickPayment}
                                addHistory={this.state.addDepositHistory} actionClickP={this.handleClickPaycheck}
                                stateTake={this.state.take}/>

                    <AsideRight valueBtc={this.state.btcValueRight} propsMethod={this.handleClickSell}/>

                </div>

            </section>
        )
    }
}

module.exports = WebsiteTemplateLtc;