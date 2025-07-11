import React from 'react'
import profileImage from '../../files/imgs/d22dc2640332ac78ecfbceab30a9bd44.jpg'
import CS from './PfS.module.css'
import Header from '../UI/header/Header'
const ProfilePage = () => {
    return (
        <div className={CS.obertka}>
            <Header/>
            <img src={profileImage} className={CS.profile_picture_user} alt='khyi'></img>
            <div>
                <div className={CS.user_name}>Арсений Ерыкалов</div>
            </div>
        </div>
    )
}

export default ProfilePage