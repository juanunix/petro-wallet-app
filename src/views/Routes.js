import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

import Home from './Home';
import Transfer from './Transfer';

import '../../node_modules/mdi/css/materialdesignicons.min.css'

class Routes extends Component {

    render() {
        const pathname = window.location.pathname;
        return (
            <div>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/transfer'} component={Transfer}/>
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