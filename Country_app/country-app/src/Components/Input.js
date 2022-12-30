import React,{useState,useEffect} from 'react'
import style from '../Css/input.module.css'

const Input = (props) => {
    const[searchData,setSearchData]=useState('');

    const handleChange=(e)=>{
        setSearchData(e.target.value)
    }
    useEffect(()=>{
        props.onSearch(searchData)
    },[searchData])
  return (
    <div>
      <div className={style.input_div}>
        <input className={style.input} type='text' id='country' name='country' placeholder="Input country name" onChange={handleChange}/>
      </div>
    </div>
  )
}

export default Input
