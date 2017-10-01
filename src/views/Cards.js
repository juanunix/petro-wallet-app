import React, {Component} from 'react';
import Parse from 'parse';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Cards extends Component {
    state = {
        cards: [],
        currentUser: Parse.User.current()
    };

    render(){
        return (
            <div>
                <div className='balance-box'>
                    <p>{"Cartões cadastrados"}</p>
                    <span className='transfer-balance'>{2}</span>
                </div>
                <div className='padding20Both'>
                    <p className='transfer-text'>{'Cartões'}</p>
                    <div className="premmia-box">
                        <ul>
                            <li className='card-number'>
                                {"•••• •••• •••• 7654"}
                                <a className='remove-card'>{" Remover"}</a>
                            </li>
                            <li className='card-number'>
                                {"•••• •••• •••• 3009"}
                                <a className='remove-card'>{" Remover"}</a>
                            </li>
                        </ul>
                    </div>
                    <RaisedButton label='Adicionar Cartão' primary={true} className='transfer-btn'
                                  onClick={() => this.transfer()}/>
                    <RaisedButton label='Solicitar Cartão Petrobras' secondary={true}  onClick={() => this.transfer()}/>
                </div>
            </div>
        );
    }
}