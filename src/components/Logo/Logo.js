import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png' //we need to let know the webpack that we are using image by importing it otherwise while bundling the imahge will not be available
import classes from './Logo.module.css'
const logo=(props)=>(
    <div className={classes.Logo} style={{height:props.height}}>
        <img src={burgerLogo} alt="My Burger"/>

        </div>

)
export default logo;