import React from 'react';
import logoImg from '../../images/logo.png'

const Header = () => {
    return (
       <div className="header_section">
           <div className="logo">
               <img src={logoImg} alt=""/>
           </div>
       </div>
    );
};

export default Header;