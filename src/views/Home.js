import React, {Component} from 'react';
import Parse from 'parse';
import AddBalance from "./AddBalance";
import Cashing from './Cashing';

export default class Home extends Component {
    currentUser = Parse.User.current();
    state = {
        mode: 'dashboard',
        loading: false,
        value: ''
    };

    recharge() {
        this.setState({loading: true});
        Parse.Cloud.run('recharge', {value: this.state.value}).then((user) => {
            this.setState({loading: false, currentUser: user});
        }, (error) => {
            console.error(error);
        })
    }

    render() {
        return (
            <div>
                {this.state.loading ? <Cashing/> : <div>
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
                        <span className='mdi mdi-account-settings-variant user-settings'/>
                    </div>
                    <div className="padding20Both">
                        <div>
                            <p className='amount-text'>{"Saldo disponível"}</p>
                            <div className=' amount-value'>
                                <span className='mdi mdi-cash-multiple'/>
                                <span
                                    className='amount-value-money'>{`R$ ${(this.currentUser.get("balance") || 0).toFixed(2).toString().replace(".", ",")}`}</span>
                                <span
                                    className={'mdi add-balance ' + (this.state.mode === 'add' ? 'mdi-minus-circle' : 'mdi-plus-circle ')}
                                    onClick={() => this.setState({mode: (this.state.mode === 'add' ? 'dashboard' : 'add')})}/>
                            </div>
                        </div>
                        {this.state.mode === 'dashboard' ?
                            <div className='premmia-box'>
                                <img alt={'premmia'} src={'/icons/Premia.png'} style={{width: 150, height: 50}}/>
                                <p>{this.currentUser.get("premmiaPoints") || 0}</p>
                            </div> : <AddBalance
                                onRecharge={this.recharge.bind(this)}
                                onChangeValue={(value) => this.setState({value})}
                            value={this.state.value}/>}
                    </div>
                </div>}
            </div>
        );
    }
}