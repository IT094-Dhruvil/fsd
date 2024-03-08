import './navigation.css'
import React from 'react'
import { Link,NavLink, useNavigate } from 'react-router-dom'

const Navigation = () => {

    const navigate=useNavigate();
  return (
    <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/teams'}>Teams</NavLink>
        <NavLink to={'/about'}>About us</NavLink>
        <NavLink to={'/about'}>Conact us</NavLink>
        
    </nav>
  )
}

export default Navigation