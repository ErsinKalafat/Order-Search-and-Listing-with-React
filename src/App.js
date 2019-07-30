import React from 'react';
import Tasarim from './tasarim.module.scss';
import Siparis from "./Siparis.js";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: '', checked: false};


        this.SiparisNoAl = this.SiparisNoAl.bind(this);
        this.OnayAl = this.OnayAl.bind(this);
    }

    SiparisNoAl(event) {
        this.setState({value: event.target.value});
    }

    OnayAl(event) {
        this.setState({checked: event.target.checked});
    }


    render() {

        const veriler = {
            siparisler: [
                {
                    urunkodu: "20372257",
                    email: "se.yildiz@hotmail.com",
                    urun: "Regalux Saklama Kutusu",
                    order_id: "29960894",
                    fiyat: "134 TL"
                },
                {
                    urunkodu: "45634575",
                    email: "se.yildiz@hotmail.com",
                    urun: "Katlanır Kamp Sandaylesi",
                    order_id: "29960894",
                    fiyat: "49,90 TL"
                },
                {
                    urunkodu: "45353754",
                    email: "mine.ayan@gmail.com",
                    urun: "Zeller Ahşap Çam Saklama Kutusu",
                    order_id: "45858101",
                    fiyat: "29,75 TL"

                }
            ]
        };

        return (
            <div>
                <br/>
                <table className={Tasarim.formtablo}>
                    <tr>
                        <td className={Tasarim.ersinkalafat}>Ersin Kalafat Alegra Challenge - 0506 537 28 49 - ersin0105@gmail.com </td>
                    </tr>
                    <tr>
                        <td className={Tasarim.formbaslik}>
                            SİPARİŞ İADE
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <form>
                                <label>Sipariş numarası veya e-Mail giriniz: </label>
                                <input className={Tasarim.textbox} type="text" value={this.state.value} onChange={this.SiparisNoAl.bind(this)}/>
                            </form>

                        </td>
                    </tr>
                    <br/>
                    <hr/>
                    <br/>
                    <tr>
                        <td className={Tasarim.altbaslik}>
                            Sipariş No veya e-Mail : {this.state.value}
                        </td>
                    </tr>

                </table>


                {<Siparis siparis={veriler.siparisler} siparisBilgisi={this.state.value}/>}

                <table className={Tasarim.formtablo}>
                    <tr>
                        <td>
                            <b>
                                <input type="checkbox" checked={this.state.checked}
                                       onChange={this.OnayAl.bind(this)}
                                />
                                 İade ve gönderim şartlarını okudum ve kabul ediyorum.
                            </b>
                        </td>
                        <td>
                            <input type="submit" value="DEVAM" className={Tasarim.buton}/>
                        </td>
                    </tr>
                </table>

            </div>
        );
    }
}

export default App



