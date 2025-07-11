import React from 'react'
import Image from '../../../files/icons/home.png'
import CS from './Header.module.css'
const Header = () => {
    return (
        <div className={CS.header}>
            <div>
                <img src={Image} alt='home'/>
                <div>Home</div>
            </div>
        </div>
    )
}

export default Header