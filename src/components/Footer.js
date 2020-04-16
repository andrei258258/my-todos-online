import React from 'react';
import {Link } from "react-router-dom";


const Footer = () => {

    return (
      <footer id="footer">
        <div className="container">
          © 2020 All rights reserved. Made in SC-Brazil.	&nbsp;
          <span className="">
            <Link to='/about' >&nbsp;About Us&nbsp;</Link>
            <Link to='/' >&nbsp;Home&nbsp;</Link>
          </span>
        </div>
      </footer>
    )

}

export default Footer;
