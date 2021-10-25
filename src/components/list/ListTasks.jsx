import React from 'react'
import AllInboxIcon from '@mui/icons-material/AllInboxTwoTone';
import ListItem from './ListItem'
import classes from './list.module.scss'

const ListTasks = ({ data, onClickDelete, searchValue, doneTask }) => {

  return (
    <>
      {
        data.length > 0 ? (
          <ul className={classes.ListTasks}>
            {
              data.filter(task => task.text.toLowerCase().includes(searchValue.toLowerCase()))
                .map((task, index) =>
                  <ListItem
                    key={task.id}
                    {...task}
                    onClickDelete={onClickDelete}
                    done={task.done}
                    doneTask={doneTask}
                  />
                )
            }
          </ul>
        ) : (
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px 40px', color: '#ccc'}}>
            <AllInboxIcon sx={{fontSize: '60px'}} />
           <span style={{fontSize: '20px'}}>Список пустой</span>
          </div>
        )
      }
    </>
  )
}

export default ListTasks
