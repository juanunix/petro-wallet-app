import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

import Home from './Home';
import Transfer from './Transfer';
import History from './History';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Cards from './Cards';

import QRCodeGen from './QRCodeGen';
import '../../node_modules/mdi/css/materialdesignicons.min.css'

class Routes extends Component {

    state = {
        mode: 'add'
    };

    render() {
        const pathname = window.location.pathname;
        return (
            <div>
                {this.state.mode === 'add' ?
                    <div>
                        <Route exact path={'/'} component={Home}/>
                        <Route exact path={'/transfer'} component={Transfer}/>
                        <Route path={'/history'} component={History}/>
                        <Route path={'/cards'} component={Cards}/>
                    </div> : <QRCodeGen/>
                }
                <FloatingActionButton style={{marginRight: 20, float: 'right', bottom: 73, backgroundColor: '#089b9a', position: 'absolute', right: 0}}
                onClick={() => this.setState({mode: this.state.mode === 'add' ? 'remove' : 'add'})}>
                    {this.state.mode === 'add' ? <img src={'/icons/Qrcode.png'} style={{height: 36}}/> : <span className='mdi mdi-minus'/>}
                </FloatingActionButton>
                <div className='bottom-bar'>
                    <Link to={'/'} className='bottom-bar-icon'>
                        <img className={'bottom-bar-icon'} src={pathname === '/' ?
                            '/icons/PetroWalletAtivo.svg' : '/icons/PetroWalletDesabilitado.svg'} alt={'petro-wallet'}/>
                    </Link>
                    <Link to={'/transfer'} className={'mdi mdi-share bottom-bar-icon paddingTop6 '
                    + (pathname === '/transfer' ? 'icon-active' : '')}/>
                    <Link to={'/history'} className={'mdi mdi-history bottom-bar-icon paddingTop6 '
                    + (pathname === '/history' ? 'icon-active' : '')}/>
                    <Link to={'/cards'} className={'mdi mdi-credit-card-multiple bottom-bar-icon paddingTop6 '
                    + (pathname === '/cards' ? 'icon-active' : '')}/>
                </div>
            </div>
        );
    }
}

export default Routes;