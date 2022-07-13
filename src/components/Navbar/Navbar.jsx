import React from 'react'
import {memo} from 'react'
import style from './navbar.module.sass'

const Navbar = () => {

  {console.log('Re-render')}
  return (
    <>
      <div className= {`${style.header} ${style.header_container}`}>
        Nexon Dev Vina
      </div>
    </>
  
  )
};

export default memo(Navbar);
