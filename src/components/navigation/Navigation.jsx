import React from 'react'
import {
  Link
} from "react-router-dom";
import classes from './navigation.module.scss'

const Navigation = () => {
  return (
    <ul className={classes.AppNav}>
      <li className={classes.AppNavItem}>
        <Link to="/">Текущие</Link>
        <span className={classes.AppNavCount}>1</span>
      </li>
      <li className={classes.AppNavItem}>
        <Link to="/completed">Завершенные</Link>
        <span className={classes.AppNavCount}>2</span>
      </li>
      <li className={classes.AppNavItem}>
        <Link to="/deleted">Удаленные</Link>
        <span className={classes.AppNavCount}>3</span>
      </li>
    </ul>
  )
}

export default Navigation
