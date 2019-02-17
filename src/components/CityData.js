import React from 'react';


const CityData = (props) => {

    return (
        <tbody>
            {props.searchData.map((data) => {
                return (
                    <tr>
                    <td>{data.searchItem}</td>
                    <td>{data.searchTemp}</td>
                    <td>{data.searchWD}</td>
                    </tr>)
            })}
        </tbody>
    );
}

export default CityData;
