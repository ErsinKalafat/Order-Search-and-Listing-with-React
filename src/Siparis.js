import React from 'react';
import Tasarim from "./tasarim.module.scss";

class Siparis extends React.Component {

    render() {
        const gelenVeriler = this.props.siparis.map((siparis, index) => {
            if (this.props.siparisBilgisi == siparis.order_id || this.props.siparisBilgisi == siparis.email) {
                return (
                    <tr>
                        <td><input type="checkbox" id={index + 1}/></td>
                        <td><h3>{siparis.urun}</h3>
                            <p>Ürün Kodu : {siparis.urunkodu}</p>
                        </td>
                        <td>{siparis.order_id}</td>
                        <td>{siparis.email}</td>
                        <td>{siparis.fiyat}</td>
                    </tr>
                )
            }

        });
        return (
            <div>
                <table border={1} className={Tasarim.formtablo}>
                    <thead>
                    <tr>
                        <th></th>
                        <th>Ürün İsmi</th>
                        <th>Sipariş No</th>
                        <th>Sipariş Sahibi</th>
                        <th>Fiyat</th>
                    </tr>
                    </thead>
                    <tbody>
                    {gelenVeriler}
                    </tbody>
                </table>


            </div>

        );
    }

}

export default Siparis;