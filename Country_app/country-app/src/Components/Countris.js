import React from 'react'

import style from '../Css/Countris.module.css'

const Countris = (props) => {
    const{country}=props;
    const{name,flags,capital,population,area}=country;
    let handleRemove=(name)=>{
        props.onRemove(name)
    }
    return (
    <div className={style.countris}>
        <img src={flags.png} alt={name.common}/>
        <p>Name: {name.common}</p>
        <p>Population: {population}</p>
        <p>Capital: {capital}</p>
        <p>Area: {area}</p>
        <button className={style.btn} onClick={()=>{handleRemove(name.common)}}>Remove Country</button>       
    </div>
    )
}

export default Countris
