import React from 'react'
import Logo from '../../assets/img/logo.png'
import './menu.css'
//import ButtonLink from './components/buttonLink'
import Button from '../button'

function Menu(){
  return (
    <nav className="Menu">
     <a href="/">
      <img className="Logo" src={Logo} alt="IgorFlix Logo" />
     </a>
     <Button className="ButtonLink" href="/">
      Novo Video
     </Button>
    </nav>

  );
}

export default Menu
