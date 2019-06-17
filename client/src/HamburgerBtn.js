import React from 'react'
import './App.css'

const hamburgerBtn = props =>(
   <button className='hamburger_btn' onClick={props.click} >
       <div className='line one'></div>
       <div className='line two'></div>
       <div className='line three'></div>
   </button>

)

export default hamburgerBtn