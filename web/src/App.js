import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

export class App extends Component {

    state = {
        webdata: [],
        loading: true
    };

    componentDidMount() {

        axios.get('http://localhost:4000/flats')
            .then(res => {
                const webdata = res.data;
                this.setState({webdata});
                this.setState({loading: false});
            })
    }

    render() {
        if (this.state.loading) {
            return (

                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <button onClick={this.fetchFlats}>Обновить данные</button>
                        <h1>loading...</h1>
                    </header>
                </div>
            )
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <button onClick={this.fetchFlats}>Обновить данные</button>
                    <div className="count">
                        <p>Количество сдаваемых квартир: {this.state.totalrooms}</p>
                        <p>Средняя цена: {this.state.averagecost}</p>
                    </div>
                    <div className="date">
                        <p>Введите дату:</p>
                        <input type="date" id="onedayf"/>-
                        <input type="date" id="nextdayf"/>
                        <button onClick={this.fetchFlatsDate}>Показать квартиры</button>
                    </div>
                    <div className="butt">
                        <button onClick={this.fetchRoom}>Комната</button>
                        <div className="count">
                            <p>Количество сдаваемых квартир: {this.state.totalrooms1}</p>
                            <p>Средняя цена: {this.state.averagecost1}</p>
                        </div>
                        <div className="date">
                            <p>Введите дату:</p>
                            <input type="date" id="onedayr"/>-
                            <input type="date" id="nextdayr"/>
                            <button onClick={this.fetchRoomDate}>Показать квартиры</button>
                        </div>
                    </div>

                    <div className="butt">
                        <button onClick={this.fetchGost}>Гостинки</button>
                        <div className="count">
                            <p>Количество сдаваемых квартир: {this.state.totalrooms2}</p>
                            <p>Средняя цена: {this.state.averagecost2}</p>
                        </div>
                        <div className="date">
                            <p>Введите дату:</p>
                            <input type="date" id="onedayg"/>-
                            <input type="date" id="nextdayg"/>
                            <button onClick={this.fetchGostDate}>Показать квартиры</button>
                        </div>
                    </div>

                    <div className="butt">
                        <button onClick={this.fetchOne}>1-комнатные</button>
                        <div className="count">
                            <p>Количество сдаваемых квартир: {this.state.totalrooms3}</p>
                            <p>Средняя цена: {this.state.averagecost3}</p>
                        </div>
                        <div className="date">
                            <p>Введите дату:</p>
                            <input type="date" id="oneday1"/>-
                            <input type="date" id="nextday1"/>
                            <button onClick={this.fetchOneDate}>Показать квартиры</button>
                        </div>
                    </div>

                    <div className="butt">
                        <button onClick={this.fetchTwo}>2-комнатные</button>
                        <div className="count">
                            <p>Количество сдаваемых квартир: {this.state.totalrooms4}</p>
                            <p>Средняя цена: {this.state.averagecost4}</p>
                        </div>
                        <div className="date">
                            <p>Введите дату:</p>
                            <input type="date" id="oneday2"/>-
                            <input type="date" id="nextday2"/>
                            <button onClick={this.fetchTwoDate}>Показать квартиры</button>
                        </div>
                    </div>

                    <div className="butt">
                        <button onClick={this.fetchThree}>3-комнатные</button>
                        <div className="count">
                            <p>Количество сдаваемых квартир: {this.state.totalrooms5}</p>
                            <p>Средняя цена: {this.state.averagecost5}</p>
                        </div>
                        <div className="date">
                            <p>Введите дату:</p>
                            <input type="date" id="oneday3"/>-
                            <input type="date" id="nextday3"/>
                            <button onClick={this.fetchThreeDate}>Показать квартиры</button>
                        </div>
                    </div>

                    <div className="butt">
                        <button onClick={this.fetchFour}>4-комнатные</button>
                        <div className="count">
                            <p>Количество сдаваемых квартир: {this.state.totalrooms6}</p>
                            <p>Средняя цена: {this.state.averagecost6}</p>
                        </div>
                        <div className="date">
                            <p>Введите дату:</p>
                            <input type="date" id="oneday4"/>-
                            <input type="date" id="nextday4"/>
                            <button onClick={this.fetchFourDate}>Показать квартиры</button>
                        </div>
                    </div>
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
                        <td>Площадь (кв. м.)
                            {this.state.webdata.map(post =>
                                <tr key={post.id}>{post.Square}</tr>
                            )}
                        </td>
                        <td>Цена (руб.)
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
    };

    fetchFlats= async () => {

        const {data} = await axios.get('http://localhost:4000/flats');
        this.setState({webdata: data});
        this.setState({loading: false});

        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total = total + data[i].Price;
        }

        const avcost = (total / data.length);

        this.setState({totalrooms: data.length});
        this.setState({averagecost: avcost.toFixed(2)});

    };

    fetchRoom = async () => {

        const {data} = await axios.get('http://localhost:4000/room');
        this.setState({webdata: data});
        this.setState({loading: false});

        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total = total + data[i].Price;
        }

        const avcost = (total / data.length);

        this.setState({totalrooms1: data.length});
        this.setState({averagecost1: avcost.toFixed(2)});

    };

    fetchGost = async () => {

        const {data} = await axios.get('http://localhost:4000/gost');
        this.setState({webdata: data});
        this.setState({loading: false});

        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total = total + data[i].Price;
        }

        const avcost = (total / data.length);

        this.setState({totalrooms2: data.length});
        this.setState({averagecost2: avcost.toFixed(2)});

    };

    fetchOne = async () => {

        const {data} = await axios.get('http://localhost:4000/one');
        this.setState({webdata: data});
        this.setState({loading: false});

        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total = total + data[i].Price;
        }

        const avcost = (total / data.length);

        this.setState({totalrooms3: data.length});
        this.setState({averagecost3: avcost.toFixed(2)});

    };

    fetchTwo = async () => {

        const {data} = await axios.get('http://localhost:4000/two');
        this.setState({webdata: data});
        this.setState({loading: false});

        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total = total + data[i].Price;
        }

        const avcost = (total / data.length);

        this.setState({totalrooms4: data.length});
        this.setState({averagecost4: avcost.toFixed(2)});

    };

    fetchThree = async () => {

        const {data} = await axios.get('http://localhost:4000/three');
        this.setState({webdata: data});
        this.setState({loading: false});

        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total = total + data[i].Price;
        }

        const avcost = (total / data.length);

        this.setState({totalrooms5: data.length});
        this.setState({averagecost5: avcost.toFixed(2)});

    };

    fetchFour = async () => {

        const {data} = await axios.get('http://localhost:4000/four');
        this.setState({webdata: data});
        this.setState({loading: false});

        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total = total + data[i].Price;
        }

        const avcost = (total / data.length);

        this.setState({totalrooms6: data.length});
        this.setState({averagecost6: avcost.toFixed(2)});

    };

    fetchFlatsDate = async () => {

        const dayone = document.getElementById("onedayf").value;
        const daynext = document.getElementById("nextdayf").value;

        if (dayone && daynext) {
            const {data} = await axios.post('http://localhost:4000/dateflats', {
                dayone, daynext
            });

            this.setState({webdata: data});
            this.setState({loading: false});

            let total = 0;

            for (let i = 0; i < data.length; i++) {
                total = total + data[i].Price;
            }

            const avcost = (total / data.length);

            this.setState({totalrooms: data.length});
            this.setState({averagecost: avcost.toFixed(2)});

        }
    };

    fetchRoomDate = async () => {

        const dayone = document.getElementById("onedayr").value;
        const daynext = document.getElementById("nextdayr").value;

        if (dayone && daynext) {
            const {data} = await axios.post('http://localhost:4000/dateroom', {
                dayone, daynext
            });

            this.setState({webdata: data});
            this.setState({loading: false});

            let total = 0;

            for (let i = 0; i < data.length; i++) {
                total = total + data[i].Price;
            }

            const avcost = (total / data.length);

            this.setState({totalrooms1: data.length});
            this.setState({averagecost1: avcost.toFixed(2)});

        }
    };

    fetchGostDate = async () => {
        const dayone = document.getElementById("onedayg").value;
        const daynext = document.getElementById("nextdayg").value;


        // Если данные есть то выполняем запрос, если не то ...
        if (dayone && daynext) {
            const {data} = await axios.post('http://localhost:4000/dategost', {
                dayone, daynext
            });

            this.setState({webdata: data});
            this.setState({loading: false});

            let total = 0;

            for (let i = 0; i < data.length; i++) {
                total = total + data[i].Price;
            }

            const avcost = (total / data.length);

            this.setState({totalrooms2: data.length});
            this.setState({averagecost2: avcost.toFixed(2)});

        }
    };

    fetchOneDate = async () => {

        const dayone = document.getElementById("oneday1").value;
        const daynext = document.getElementById("nextday1").value;

        if (dayone && daynext) {
            const {data} = await axios.post('http://localhost:4000/dateone', {
                dayone, daynext
            });

            this.setState({webdata: data});
            this.setState({loading: false});

            let total = 0;

            for (let i = 0; i < data.length; i++) {
                total = total + data[i].Price;
            }

            const avcost = (total / data.length);

            this.setState({totalrooms3: data.length});
            this.setState({averagecost3: avcost.toFixed(2)});

        }
    };

    fetchTwoDate = async () => {

        const dayone = document.getElementById("oneday2").value;
        const daynext = document.getElementById("nextday2").value;

        if (dayone && daynext) {
            const {data} = await axios.post('http://localhost:4000/datetwo', {
                dayone, daynext
            });

            this.setState({webdata: data});
            this.setState({loading: false});

            let total = 0;

            for (let i = 0; i < data.length; i++) {
                total = total + data[i].Price;
            }

            const avcost = (total / data.length);

            this.setState({totalrooms4: data.length});
            this.setState({averagecost4: avcost.toFixed(2)});

        }
    };

    fetchThreeDate = async () => {

        const dayone = document.getElementById("oneday3").value;
        const daynext = document.getElementById("nextday3").value;

        if (dayone && daynext) {
            const {data} = await axios.post('http://localhost:4000/datethree', {
                dayone, daynext
            });

            this.setState({webdata: data});
            this.setState({loading: false});

            let total = 0;

            for (let i = 0; i < data.length; i++) {
                total = total + data[i].Price;
            }

            const avcost = (total / data.length);

            this.setState({totalrooms5: data.length});
            this.setState({averagecost5: avcost.toFixed(2)});

        }
    };

    fetchFourDate = async () => {

        const dayone = document.getElementById("oneday4").value;
        const daynext = document.getElementById("nextday4").value;

        if (dayone && daynext) {
            const {data} = await axios.post('http://localhost:4000/datefour', {
                dayone, daynext
            });

            this.setState({webdata: data});
            this.setState({loading: false});

            let total = 0;

            for (let i = 0; i < data.length; i++) {
                total = total + data[i].Price;
            }

            const avcost = (total / data.length);

            this.setState({totalrooms6: data.length});
            this.setState({averagecost6: avcost.toFixed(2)});

        }
    }
}

export default App;