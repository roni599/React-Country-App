import React from 'react'
import {v4 as uuidv4} from "uuid"

import style from '../Css/Country.module.css'
import Countris from './Countris'

const Country = (props) => {
  return (
    <div className={style.country}>
      {props.country.map((country)=>{
       const newCountry={country,id:uuidv4()}
       return <Countris {...newCountry} key={newCountry.id} onRemove={props.onRemove}/>
      })}
    </div>
  )
}

export default Country
