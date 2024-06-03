import React, { useState } from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus animi ullam ducimus placeat, ad eos ea nulla eveniet blanditiis?</p>
      <div className="explore-menu-list">
        {menu_list.map((value,index)=>
        {
           return(
             <div onClick={()=>setCategory(prev=>prev===value.menu_name?"All":value.menu_name)} key={index} className="explore-menu-list-items">
                <img className={category===value.menu_name?"active":""} src={value.menu_image} alt=''/>
                <p>{value.menu_name}</p>
             </div>
           )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
