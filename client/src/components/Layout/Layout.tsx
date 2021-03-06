import React, { useState } from 'react';
import Header from '../Header/Header'; 
import { Link } from 'react-router-dom';

const Layout: React.FC = ({ children }) => {

  const [classNameBurger, setClassNameBurger] = useState("burger");
  const [classNameLink, setClassNameLink] = useState("nav-links-caw");

  const clickBurger = () => {
    if(classNameBurger==="burger"){
      setClassNameBurger("burger toggle")
      setClassNameLink("nav-links-caw nav-drawer")}
    else{
      setClassNameBurger("burger")
      setClassNameLink("nav-links-caw")
    }
  }

  return(
  <>
  <Header>
    <ul className={classNameLink}>
      <Link to="/">
        <li className="link-caw">HOME</li>
      </Link>
      <Link to="/submission">
        <li className="link-caw">SUBMIT AN IDEA</li>
      </Link>
      <Link to="/feedback">
        <li className="link-caw">SUBMITTED IDEAS</li>
      </Link>
    </ul>
    <div 
      className={classNameBurger}
      onClick={clickBurger}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
  </Header>

  <main>{children}</main>
</>
  )
};

export default Layout;
