import React from 'react'
import  Meals from '../../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartbtn from './HeaderCartbtn'


const Header = ({showcartHandler}) => {
  return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>Meals</h1>
            <HeaderCartbtn  setShowCart={showcartHandler}/>
        </header>
        <div className={classes['main']}>
            <img src={Meals} alt='bht kuch'/>

        </div>
    </React.Fragment>
  )
}

export default Header