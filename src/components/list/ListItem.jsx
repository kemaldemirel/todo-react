import React from 'react'
import classes from './list.module.scss'


const ListItem = ({id, index, text, doneTask, onClickDelete, done}) => {
  return (
    <li key={id} className={done ? classes.ListTasksDone : ''}>
      <p>
        {text}
        {/* <span>Создана: {createAt.toLocaleString('ru', optionsDate)}</span> */}
      </p>
      <div>
        <button onClick={() => doneTask(id, index)} className={classes.ListTasksDoneBtn}>Done</button>
        <button onClick={() => onClickDelete(id)} className={classes.ListTasksDeleteBtn}>Delete</button>
      </div>
    </li>
  )
}

export default ListItem
