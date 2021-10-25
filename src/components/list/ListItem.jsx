import React from 'react'
import classes from './list.module.scss'

let options = {
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

const ListItem = ({id, index, createAt, text, doneTask, onClickDelete, done}) => {

  const date = new Date(createAt)

  return (
    <li key={id} className={done ? classes.ListTasksDone : ''}>
      <p>
        {text}
        {<span>Создана: {date.toLocaleString('ru', options)}</span>}
      </p>
      <div>
        <button 
          onClick={() => 
          doneTask(id, index)} 
          className={
            done ? classes.ListTasksDesabledBtn : classes.ListTasksDoneBtn
          }
        >Done</button>
        <button onClick={() => onClickDelete(id)} className={classes.ListTasksDeleteBtn}>Delete</button>
      </div>
    </li>
  )
}

export default ListItem
