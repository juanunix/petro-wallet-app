import React, {Component} from 'react';
import Parse from 'parse';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class AddBalance extends Component {

    render() {
        return (
            <div>
                <p className='transfer-text'>{'Selecione o cartão'}</p>
                <div className="premmia-box">
                    <ul>
                        <li className='card-number'>
                            {"•••• •••• •••• 7654"}
                        </li>
                        <li className='card-number'>
                            {"•••• •••• •••• 3009"}
                            <a className='mdi mdi-check'></a>
                        </li>
                    </ul>
                </div>
                <p className='transfer-text'>Valor</p>
                <div className="premmia-box">
                    <TextField type='number' hintText='R$10,00' value={this.props.value}
                               onChange={(evt) => this.props.onChangeValue(evt.target.value)}/>
                </div>
                <RaisedButton label='Carregar Valor' primary={true} className='transfer-btn'
                              onClick={() => this.props.onRecharge()}/>

            </div>
        );
    }
}