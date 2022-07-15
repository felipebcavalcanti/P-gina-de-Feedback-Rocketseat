
import React from 'react';
import style from "./Header.module.css";
import logo from "../assets/feedback.jpg";

function Header() {

    return(
        <header className={style.header}>
          <img src={logo} alt="logo image" />  
          
        </header>
    );
};


export default Header;