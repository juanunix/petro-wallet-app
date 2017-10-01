import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Parse from 'parse';

class Login extends Component {

    state = {
        mode: 'login',
        cpf: '',
        password: '',
        phone: ''
    };

    login(){
        const {cpf, password} = this.state;
        Parse.User.logIn(cpf, password).then(() => {
            window.location.assign("/");
        }, (error) => {
            console.error(error);
        })
    }

    signUp(){
        const {cpf, password, phone} = this.state;
        Parse.User.signUp(cpf, password, {phone}).then(() => {
            window.location.assign("/");
        }, (error) => {
            console.error(error);
        })
    }


    render(){
        return (
            <div>
                <img src='./Logo.png' className='main-logo' alt={'petro-wallet'}/>
                {this.state.mode === 'login' ?
                    <form>
                        <TextField type='number' hintText='CPF' value={this.state.cpf}
                                   onChange={(evt) => this.setState({cpf: evt.target.value})}/>
                        <TextField type='password' hintText='Senha' value={this.state.password}
                                   onChange={(evt) => this.setState({password: evt.target.value})}/>
                        <RaisedButton label='ENTRAR' primary={true} onClick={() => this.login()}/>
                        <RaisedButton label='CADASTRAR' primary={true} onClick={() => this.setState({mode: 'signup'})}/>
                    </form> :
                    <form>
                        <TextField type='number' hintText='CPF' value={this.state.cpf}
                                   onChange={(evt) => this.setState({cpf: evt.target.value})}/>
                        <TextField type='number' hintText='Telefone' value={this.state.phone}
                                   onChange={(evt) => this.setState({phone: evt.target.value})}/>
                        <TextField type='password' hintText='Senha' value={this.state.password}
                                   onChange={(evt) => this.setState({password: evt.target.value})}/>
                        <RaisedButton label='CONFIRMAR' primary={true} onClick={() => this.signUp()}/>
                        <RaisedButton label='VOLTAR' secondary={true} onClick={() => this.setState({mode: 'login'})}/>
                    </form>
                }
            </div>
        );
    }
}

export default Login;
