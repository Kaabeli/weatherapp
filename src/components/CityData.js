import React from 'react';


const CityData = (props) => {

    return (
        <tbody>
            {props.searchData.map((data, index) => {
                return (
                    <tr>
                        <td>{data.searchItem}</td>
                        <td>{data.searchTemp}</td>
                        <td>{data.searchWD}</td>
                        <td><button className="glyphicon glyphicon-trash" onClick={() => props.removeCity(index)}>Remove</button></td>
                    </tr>)
            })}
        </tbody>
    );
}

export default CityData;
