import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

//придумать виды анализа (подробно их расписать)

class App extends Component {

    state = {
        webdata: [],
        loading: true
    }

    componentDidMount() {

        axios.get('http://localhost:4000/posts')
            .then(res => {
                const webdata = res.data;
                this.setState({webdata});
                this.setState({loading: false});
            })
    }

    render() {

        if(this.state.loading){
            return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <button onClick={() => (
                        axios.get('http://localhost:4000/posts')
                            .then(res => {
                                const webdata = res.data;
                                this.setState({webdata});
                                this.setState({loading: false});
                            }))}>Обновить данные
                    </button>
                    <h1>loading...</h1>
                </header>
                </div>
            )
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <button onClick={() => (
                        axios.get('http://localhost:4000/posts')
                        .then(res => {
                            const webdata = res.data;
                            this.setState({webdata});
                            this.setState({loading: false});
                        }))}>Обновить данные
                    </button>
                </header>

                <div>
                    <table>
                        <td>id
                            {this.state.webdata.map(post =>
                                    <tr key={post.id}>{post.idflat}</tr>
                            )}
                        </td>
                        <td>Тип квартиры
                            {this.state.webdata.map(post =>
                                <tr key={post.id}>{post.TypeOfApartment}</tr>
                            )}
                        </td>
                        <td>Адрес
                            {this.state.webdata.map(post =>
                                <tr key={post.id}>{post.Address}</tr>
                            )}
                        </td>
                        <td>Район
                            {this.state.webdata.map(post =>
                                <tr key={post.id}>{post.Area}</tr>
                            )}
                        </td>
                        <td>Предложение
                            {this.state.webdata.map(post =>
                                <tr key={post.id}>{post.Offer}</tr>
                            )}
                        </td>
                        <td>Площадь
                            {this.state.webdata.map(post =>
                                <tr key={post.id}>{post.Square}</tr>
                            )}
                        </td>
                        <td>Цена
                            {this.state.webdata.map(post =>
                                <tr key={post.id}>{post.Price}</tr>
                            )}
                        </td>
                        <td>Дата
                            {this.state.webdata.map(post =>
                                <tr key={post.id}>{post.Date}</tr>
                            )}
                        </td>
                    </table>
                </div>
            </div>
        );
    }
}

export default App;
