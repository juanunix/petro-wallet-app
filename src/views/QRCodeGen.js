import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Parse from 'parse';
import QR from './QR';

export default class QRCodeGen extends Component {

    state = {
        mode: "gen",
        password: '',
        value: '',
        open: false,
        currentUser: Parse.User.current()
    };


    render() {
        return (
            <div>
                {this.state.mode === "gen" ?
                    <div>
                        <div className='balance-box'>
                            <p>{"Saldo disponível"}</p>
                            <span
                                className='transfer-balance'>{`R$ ${(this.state.currentUser.get("balance") || 0).toFixed(2).toString().replace(".", ",")}`}</span>
                        </div>
                        <div className='padding20Both'>
                            <p className='transfer-text'>Dados de pagamento</p>
                            <div className="premmia-box">
                                <TextField type='number' hintText='R$ 100,00' value={this.state.value}
                                           floatingLabelText="Digite o valor desejado"
                                           onChange={(evt) => this.setState({value: evt.target.value})}/>
                            </div>
                            <div className="premmia-box">
                                <TextField type='password' hintText='R$ 100,00' value={this.state.password}
                                           floatingLabelText="Digite sua senha"
                                           onChange={(evt) => this.setState({password: evt.target.value})}/>
                            </div>
                            <RaisedButton label='Gerar Pagamento' primary={true} className='transfer-btn'
                                          onClick={() => this.setState({mode: 'qr'})}/>
                        </div>
                    </div> : <QR value={this.state.value}/>}
            </div>
        )
    }
}