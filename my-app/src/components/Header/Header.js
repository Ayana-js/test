import React from "react";
import {NavLink} from 'react-router-dom'
import style from './Header.module.css'

class Header extends React.Component {
    render() {
        return <nav className={style.nav}>
        <div className={style.item}> 
         <NavLink to="" className={style.item}> Главная </NavLink>
        </div>
        <div className={style.item}> 
         <NavLink to="/about" className={style.item}> О нас </NavLink>
        </div>
        <div className={style.item}> 
        <NavLink to="/portfolio" className={style.item}> Наши объекты </NavLink>
        </div>
        <div className={style.item}> 
        <NavLink to="/news" className={style.item}> Новости </NavLink>
        </div>
        <div className={style.item}> 
        <NavLink to="/contact" className={style.item}> Контакты </NavLink>    
        </div>
        <div className={style.headerContact}> +996 (0706) 55-11-11
            +996 (0556) 55-11-11
            +996 (0776) 55-11-11</div>
      </nav>
    }
}

export default Header