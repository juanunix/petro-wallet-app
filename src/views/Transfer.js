import React, {Component} from 'react';
import Parse from 'parse';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Transfering from './Transfering';

export default class Transfer extends Component {

    state = {
        cpf: '',
        value: '',
        open: false,
        currentUser: Parse.User.current(),
        loading: false
    };

    handleClose = () => {
        this.setState({open: false});
    };

    actions = [
        <FlatButton
            label="Ok"
            primary={true}
            onClick={this.handleClose}
        />
    ];

    transfer() {
        const {cpf, value} = this.state;
        this.setState({loading: true});
        Parse.Cloud.run('transferBalance', {cpf, value}).then((user) => {
            this.setState({cpf: '', value: '', currentUser: user, loading: false});
        }, (error) => {
            console.error(error);
            this.setState({error: 'Não foi possível realizar a tranferencia', open: true});
        })
    }

    componentDidMount() {
        this.state.currentUser.fetch().then((user) => {
            this.setState({currentUser: user});
        });
    }

    render() {

        return (
            <div>
                {this.state.loading ? <Transfering/> :
                    <div>
                        <div className='balance-box'>
                            <p>{"Saldo disponível"}</p>
                            <span
                                className='transfer-balance'>{`R$ ${(this.state.currentUser.get("balance") || 0).toFixed(2).toString().replace(".", ",")}`}</span>
                        </div>
                        <div className='padding20Both'>
                            <p className='transfer-text'>Favorecido</p>
                            <div className="premmia-box">
                                <TextField type='number' hintText='CPF' value={this.state.cpf}
                                           floatingLabelText="Digite o CPF"
                                           onChange={(evt) => this.setState({cpf: evt.target.value})}/>
                            </div>
                        </div>
                        <div className='padding20Both'>
                            <p className='transfer-text'>Valor</p>
                            <div className="premmia-box">
                                <TextField type='number' hintText='R$10,00' value={this.state.value}
                                           floatingLabelText="Digite o valor a transferir"
                                           onChange={(evt) => this.setState({value: evt.target.value})}/>
                            </div>
                        </div>
                        <div>
                            <RaisedButton label='Transferir' primary={true} className='transfer-btn'
                                          onClick={() => this.transfer()}/>
                            <Dialog
                                actions={this.actions}
                                modal={false}
                                open={this.state.open}
                                onRequestClose={this.handleClose}
                            >
                                {this.state.error}
                            </Dialog>
                        </div>
                    </div>}
            </div>
        );
    }
}