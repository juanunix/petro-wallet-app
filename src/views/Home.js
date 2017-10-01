import React, {Component} from 'react';
import Parse from 'parse';

export default class Home extends Component {
    currentUser = Parse.User.current();

    render() {
        return (
            <div>
                <div className='user-info'>
                    <img
                        src={this.currentUser.get("photoLink") || 'https://vb.northsearegion.eu/files/theme/default-user-icon-profile.png'}
                        alt='user-pic' className='user-pic'/>
                    <div className='paddingTop20'>
                        <p className='user-name'>
                            {this.currentUser.get("name") || "Sem Nome"}
                        </p>
                        <p className='user-cpf'>
                            {this.currentUser.get("username")}
                        </p>
                    </div>
                    <span className='mdi mdi-account-settings-variant user-settings'></span>
                </div>
                <div className="padding20Both">
                    <div>
                        <p className='amount-text'>{"Saldo disponível"}</p>
                        <div className=' amount-value'>
                            <span className='mdi mdi-cash-multiple'/>
                            <span
                                className='amount-value-money'>{`R$ ${(this.currentUser.get("balance") || 0).toFixed(2).toString().replace(".", ",")}`}</span>
                        </div>
                    </div>
                    <div className='premmia-box'>

                    </div>
                </div>
            </div>
        );
    }
}