import React from 'react'
import classes from './list.module.scss'

let options = {
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

const ListItem = ({ id, createAt, text, done, doneTask, onClickDelete }) => {

  const date = new Date(createAt)

  return (
    <li key={id}>
      <p>
        {text}
        {<span>Создана: {date.toLocaleString('ru', options)}</span>}
      </p>
      <div>
        <button
          onClick={() =>
            doneTask(id)}
          className={classes.ListTasksDoneBtn}
        >Done</button>
        <button onClick={() => onClickDelete(id)} className={classes.ListTasksDeleteBtn}>Delete</button>
      </div>
    </li>
  )
}

export default ListItem
