import React from 'react'
import Logo from '../../assets/img/logo.png'
import './menu.css'
//import ButtonLink from './components/buttonLink'
import Button from '../button'
import {Link} from 'react-router-dom'

function Menu(){
  return (
    <nav className="Menu">
     <Link to="/">
      <img className="Logo" src={Logo} alt="IgorFlix Logo" />
     </Link>
     <Button as={Link} className="ButtonLink" to="/cadastro/video">
      Novo Video
     </Button>
    </nav>

  );
}

export default Menu
