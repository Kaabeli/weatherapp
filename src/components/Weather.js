import React, { Component } from 'react';
import Searchbar from './Searchbar';
import { isNullOrUndefined } from 'util';



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
            isData: '',
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
                if (responseData.cod === "404") {
                    this.setState({
                        isData: isNullOrUndefined,
                    })
                } else {
                    this.setState({
                        showcity: this.state.city,
                        temperature: responseData.main.temp,
                        weatherDes: responseData.weather[0].description,
                        icon: "http://openweathermap.org/img/w/" + responseData.weather[0].icon + ".png",
                        isData: true,
                    });
                }
            })
    }

    addCity() {
        const addSearchedCity = {
            showcity: this.state.city,
            temperature: this.state.temperature,
            weatherDes: this.state.weatherDes
        }
        this.setState({
            searchData: [
                ...this.state.searchData, addSearchedCity
            ]
        })
    }

    renderIsData() {
        if (this.state.isData === true)
            return (
                <div>
                    <h4> Weather of {this.state.showcity}</h4>
                    <div>Temperature: {this.state.temperature} Celsius</div>
                    <div>Weather: {this.state.weatherDes}</div>
                    <div><img src={this.state.icon} alt="icon" /></div>
                    <label>Click to save:</label>
                    <button type="submit" onClick={() => this.addCity()}>Save</button>
                    <br />
                </div >
            );
    }

    renderError() {
        if (this.state.isData === isNullOrUndefined)
            return (
                <div>
                    <h6>City not found!</h6>
                    <br />
                </div>
            );
    }

    renderCityData() {
        return (
            <tbody>
                {this.state.searchData.map((data, index) => {
                    return (
                        <tr key={index}>
                            <td>{data.showcity}</td>
                            <td>{data.temperature}</td>
                            <td>{data.weatherDes}</td>
                            <td><button onClick={() => this.removeCity(index)}>Remove</button></td>
                        </tr>)
                })}
            </tbody>
        );
    }


    removeCity(index) {
        const searchData = [...this.state.searchData];
        searchData.splice(index, 1);
        this.setState({
            searchData
        });
    }


    render() {
        return (
            <div className="container">

                <Searchbar
                    city={this.state.city}
                    searchWeather={this.searchWeather.bind(this)}
                    eventHandler={this.eventHandler.bind(this)} />
                <br />
                {this.renderError()}
                {this.renderIsData()}
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">City</th>
                            <th scope="col">Temperature</th>
                            <th scope="col">Weather</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    {this.renderCityData()}
                </table>


            </div>
        );
    }
}

export default Weather;
