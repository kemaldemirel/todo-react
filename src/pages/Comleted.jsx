import React from 'react'
import classes from '../App.module.scss'

const Comleted = ({completedTasks}) => {

  return (
    <div className={classes.AppInner}>
      <h3>Завершенные задачи:</h3>
      <ul>
        {
          completedTasks.map(task => (
            <li key={task.id}>
              Создана {new Date(task.createAt).toLocaleString('ru')}
              <br />
              {task.text}
              <br />
              Завершена {new Date(task.doneDate).toLocaleString('ru')}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Comleted
