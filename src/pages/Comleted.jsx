import React from 'react'
import AllInboxIcon from '@mui/icons-material/AllInboxTwoTone';
import classes from '../App.module.scss'
import listStyles from '../components/list/list.module.scss'

const Comleted = ({ tasks }) => {

  const filteredData = tasks.filter(task => task.done === true)

  return (
    <>
      <div className={classes.AppInner}>
        <h3 style={{ margin: '0' }}>Завершенные задачи:</h3>
        {
          filteredData.length > 0 ? (
            <ul className={listStyles.ListTasks}>
              {
                filteredData.map(task => (
                  <li key={task.id} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '10px', color: '#ccc' }}>Создана {new Date(task.createAt).toLocaleString('ru')}</span>
                    <p style={{ margin: '10px 0' }}>{task.text}</p>
                    <span style={{ fontSize: '10px', color: '#ccc' }}>Завершена {new Date(task.doneDate).toLocaleString('ru')}</span>
                  </li>
                ))
              }
            </ul>
          ) : (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px 40px', color: '#ccc' }}>
          <AllInboxIcon sx={{ fontSize: '60px' }} />
          <span style={{ fontSize: '20px' }}>Список пустой</span>
        </div>
        )
      }

      </div>
    </>
  )
}

export default Comleted
