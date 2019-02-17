import React, { Component } from 'react';
import Searchbar from './Searchbar';
import CityData from './CityData';



class Weather extends Component {

    constructor() {
        super();
        this.state = {
            temperature: null,
            weatherDes: '',
            icon: '',
            city: '',
            showcity: '',
            searchData: [],
        }
    }

    eventHandler = (e) => {
        this.setState({
            city: e.target.value
        });
    }


    searchWeather = (e) => {
        e.preventDefault();
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + this.state.city + "&units=metric&APPID=b452af841ef38883145b7302033d8de9")
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    showcity: this.state.city,
                    temperature: responseData.main.temp,
                    weatherDes: responseData.weather[0].description,
                    icon: "http://openweathermap.org/img/w/" + responseData.weather[0].icon + ".png",
                    searchData: [...this.state.searchData, {
                        searchItem: this.state.city,
                        searchTemp: responseData.main.temp,
                        searchWD: responseData.weather[0].description
                    }]
                });
            })
    }



    render() {
        return (
            <div className="container">

                <Searchbar
                    city={this.state.city}
                    searchWeather={this.searchWeather.bind(this)}
                    eventHandler={this.eventHandler.bind(this)} />
                <br />
                <h4>Weather of {this.state.showcity}</h4>
                <div>Temperature: {this.state.temperature} Celsius</div>
                <div>Weather: {this.state.weatherDes}</div>
                <div><img src={this.state.icon} alt="icon" /></div>
                <br />

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">City</th>
                                <th scope="col">Temperature</th>
                                <th scope="col">Weather</th>
                            </tr>
                        </thead>
                        <CityData
                        searchData={this.state.searchData} />
                    </table>


            </div>
        );
    }
}

export default Weather;
