import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { AiTwotoneHome } from "react-icons/all";
import { FaBars, FaTimes } from "react-icons/all";
import DropdownProperty from '../Dropdown/DropdownProperty';
import DropdownClient from "../Dropdown/DropdownClient";
import DropdownContract from "../Dropdown/DropdownContract";
import './NavBar.css';

function NavBar(){

    //Hooks : useState
    //paire de valeurs : [clickInitial = false, function => modifier la valeur]
    const  [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [dropdown, setDropdown] = useState(false);

    //quand l’utilisateur clique, nous appelons setClick avec une nouvelle valeur(!click)
    //React rafraîchira le composant et lui passera la nouvelle valeur de click.
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton(false);
        }
        else {
            setButton(true);
        }
        window.addEventListener('resize', showButton);
    }

    //affiche dropdown en mode web
    const onMouseEnter = () => {
        if (window.innerWidth < 960){
            setDropdown(false);
        }
        else{
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960){
            setDropdown(false);
        }
        else{
            setDropdown(false);
        }
    }

    return(
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                   <AiTwotoneHome className='nav-bar-icon'/>
                    ImmoPark
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/property' className='nav-links' onClick={closeMobileMenu}>
                            Property <i className='fas fa-caret-down'/>
                        </Link>

                        {dropdown && <DropdownProperty/>}
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/client' className='nav-links' onClick={closeMobileMenu}>
                            Client <i className='fas fa-caret-down'/>
                        </Link>
                        {dropdown && <DropdownClient/>}
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/contract' className='nav-links' onClick={closeMobileMenu}>
                            Contract  <i className='fas fa-caret-down'/>
                        </Link>
                        {dropdown && <DropdownContract/>}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;