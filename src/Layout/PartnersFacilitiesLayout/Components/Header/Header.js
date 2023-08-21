/** @format */

import React from 'react';
import userimg from '../../img/user-img.png';
import Logo from '../../img/logo.png';
import { useSelector } from 'react-redux';

function Header() {
  const adminData = useSelector((state) => state.auth.userInfo);
  const path = window.location.pathname;
  return (
    <header className='header2'>
      <div className='container-fluid'>
        <div className='row'>
          <div
            className={`${
              path === '/partner-dashboard/basicInfo' ||
              path === '/partner-dashboard/payement'
                ? 'offset-lg-1'
                : ''
            } col-lg-3 col-md-3 col-4`}>
            <a href='' className='logo'>
              <img src={Logo} alt='' />
            </a>
          </div>
          <div className={` col-lg-3 col-md-3 col-3 ms-auto`}>
            <ul>
              <li>
                <a href='#'>
                  <div className='img-sec'>
                    <img src={adminData.image} alt='' />
                    <span className='color1'></span>
                  </div>
                  <h3>
                    {adminData.sponsor_name}
                    <span>{adminData.email}</span>
                  </h3>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
