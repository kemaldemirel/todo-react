import React from 'react'
import {
  Link
} from "react-router-dom";
import classes from './navigation.module.scss'

const Navigation = ({tasks, completedTasks}) => {
  return (
    <ul className={classes.AppNav}>
      <li className={classes.AppNavItem}>
        <Link to="/">Текущие</Link>
        <span className={classes.AppNavCount}>{tasks.length}</span>
      </li>
      <li className={classes.AppNavItem}>
        <Link to="/completed">Завершенные</Link>
        <span className={classes.AppNavCount}>{completedTasks.length}</span>
      </li>
      <li className={classes.AppNavItem}>
        <Link to="/deleted">Удаленные</Link>
        <span className={classes.AppNavCount}>3</span>
      </li>
    </ul>
  )
}

export default Navigation
