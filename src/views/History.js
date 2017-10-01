import React, {Component} from 'react';
import Parse from 'parse';

const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

export default class History extends Component {
    currentUser = Parse.User.current();

    state = {
        histories: [],
        total: 0
    };

    componentDidMount(){
        let query = new Parse.Query('History');
        query.equalTo("user", this.currentUser).find().then((histories) => {
            let total = 0;
            histories.forEach((h) => {total += h.get("value")});
            this.setState({histories, total})
        }, (error) => {
            console.error(error);
        })
    }

    render() {
        return (
            <div>
                <div className='balance-box'>
                    <p>{"Ultimos 30 dias"}</p>
                    <span
                        className='transfer-balance'>{`R$ ${this.state.total.toFixed(2).toString().replace(".", ",")}`}</span>
                </div>
                <div className='padding20Both'>
                    <p className='transfer-text'>{'Histórico'}</p>
                    <div className="premmia-box">
                        {this.state.histories.length > 0 ? <ul>
                            {this.state.histories.map((h) => (
                                <li key={h.id}>
                                    {`R$ ${h.get('value').toFixed(2).toString().replace(".", ",")}`}
                                    <span>{" "+h.get('createdAt').getHours()+":"+h.get('createdAt').getMinutes()}</span>
                                    <span>{`${h.get('createdAt').getDate()} ${monthNames[h.get('createdAt').getUTCMonth()].substr(0, 3)}`}</span>
                                </li>
                            ))}
                        </ul> : <p>Nenhuma atividade registrada</p>}
                    </div>
                </div>
            </div>
        );
    }
}