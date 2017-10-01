import React, {Component} from 'react';
import Parse from 'parse';

export default class Transfer extends Component {
    currentUser = Parse.User.current();

    render(){
        return (
          <div className='balance-box'>
              <p>{"Saldo disponível"}</p>
              <span className='transfer-balance'>{`R$ ${(this.currentUser.get("balance") || 0).toFixed(2).toString().replace(".", ",")}`}</span>
          </div>
        );
    }
}