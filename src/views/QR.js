import React, {Component} from 'react';

export default class QR extends Component {
    render(){
        let {value} = this.props;
        value = parseFloat(value);
        return (
            <div>
                <div className='balance-box'>
                    <p>{`Parabéns!
                    Você acabou de gerar um pagamento no valor de `}</p>
                    <span
                        className='transfer-balance'>{`R$ ${(value || 0).toFixed(2).toString().replace(".", ",")}`}</span>
                </div>
                <br/><br/>
                <div className='padding20Both'>
                    <img src={'/icons/qrcode_premmia.png'}/>
                    <p className='transfer-text' style={{color: 'red'}}>{"Mostre esse código para o frentista de um posto Petrobras!"}</p>
                </div>
            </div>
        );
    }
}