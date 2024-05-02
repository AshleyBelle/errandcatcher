import React, { useState } from 'react'
import "./SideNavBar.css"

const SideNavBar = () => {
    const [isExpended, setExpendState] = useState(false);
    const menuItems = [
        {
            text: "Dashboard",
            icon: "icons/grid.svg"
        },
        {
            text: "Dashboard",
            icon: "icons/grid.svg"
        },
        {
            text: "Dashboard",
            icon: "icons/grid.svg"
        }

    ];
  return (
<div className={isExpended ?'side-nav-container' : 'side-nav-container side-nav-container-NX'}>
        <div className='nav-upper'>
            <div className='nav-heading'>
                {isExpended && (
                     <div className='nav-brand'>
                    <img src='icons/Logo.svg' alt='nav brand'></img>
                    <h2>Admin</h2>
                </div>)}
                <button className={isExpended? "hamburger hamburger-in" : "hamburger hamburger-out"}
                    onClick={() => setExpendState(!isExpended)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className='nav-menu'>{menuItems.map(({text, icon}) =>(
                <a href='#' className={ isExpended ? 'menu-item' : 'menu-item menu-item-NX'}>
                    <img src={icon} alt='' srcSet=''/>
                    {isExpended && <p>{text}</p>}
                    {!isExpended &&<div className='tooltip'>{text}</div>}
                </a>
            ))}</div>
        </div>
        <div className='nav-footer'>
            {isExpended && (<div className='nav-details'>
                <img src='icons/grid.svg' alt='admin'></img> 
                <div className='nav-footer-info'>
                    <p className='nav-footer-user-name'>Admin</p>
                    <p className='nav-footer-user-position'>admin</p>
                </div>  
            </div>)}
            <img className='logout-icon' src='icons/icon.svg'></img>
        </div>
    </div>
  )
}

export default SideNavBar
