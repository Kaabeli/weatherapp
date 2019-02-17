import React from 'react';


const Searchbar = (props) => {

        return (
            <div>
                <h3>City Weather Search</h3>
                <form onSubmit={props.searchWeather}>
                <label>Search for City: </label>
                <input onChange={props.eventHandler} id="city" name="city" />
                <button type="submit">Search</button>
                </form>
            </div>
        );
    }

export default Searchbar;
