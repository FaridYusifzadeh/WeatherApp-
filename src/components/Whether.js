import React from 'react';

const Wheather= props => (
    <div className="infoWeather">
                { props.city &&
                 <div>
                <p>Seher : {props.city}, Olkenin kodu : {props.country}</p>
                <p>Derece : {props.temp} </p>
                <p>Davleniya : {props.pressure} </p>
                <p>Gunun batmasi : {props.sunset} </p>
 
                </div>
                
                }
                <p className="error">{ props.error  } </p>

            </div>
)
export default Wheather;