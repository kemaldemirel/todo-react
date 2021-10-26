import React from 'react'
import {
  Link
} from "react-router-dom";
import classes from './navigation.module.scss'

const Navigation = ({tasks}) => {
  return (
    <ul className={classes.AppNav}>
      <li className={classes.AppNavItem}>
        <Link to="/">Текущие</Link>
        <span className={classes.AppNavCount}>{tasks.filter(task => task.done !== true).length}</span>
      </li>
      <li className={classes.AppNavItem}>
        <Link to="/completed">Завершенные</Link>
        <span className={classes.AppNavCount}>{tasks.filter(task => task.done === true).length}</span>
      </li>
    </ul>
  )
}

export default Navigation
