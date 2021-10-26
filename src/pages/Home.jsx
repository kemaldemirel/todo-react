import React from 'react'
import From from '../components/form/From'
import Loader from '../components/Loader'
import ListTasks from '../components/list/ListTasks'
import classes from '../App.module.scss'

const Home = ({ isLoaded, addTask, searchValue, tasks, deleteTask, doneTask }) => {
  return (
    <div className={classes.AppInner}>
      {
        isLoaded ? (
          <Loader />
        ) : (
          <>
            <From onClickTask={addTask} />
            <ListTasks
              searchValue={searchValue}
              data={tasks}
              onClickDelete={deleteTask}
              doneTask={doneTask}
            />
          </>
        )
      }

    </div>
  )
}

export default Home
