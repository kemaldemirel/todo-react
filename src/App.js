import React from 'react';
import From from './components/form/From';
import ListTasks from './components/list/ListTasks';

import classes from './App.module.scss'
import Loader from './components/Loader';

function App() {

  const [tasks, setTasks] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [isLoaded, setIsLoaded] = React.useState(true)

  React.useEffect(() => {
    fetch('https://61753daa08834f0017c70b7f.mockapi.io/tasks')
      .then(res => res.json())
      .then(res => {
        res.reverse()
        setTasks(res)
        setIsLoaded(false)
      })
      
  }, [])

  

  const addTask = (newTask) => {
    fetch('https://61753daa08834f0017c70b7f.mockapi.io/tasks', {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: {
          'Content-Type' : 'application/json'
        }
    }).then(res => res.json()).then(res => setTasks([res, ...tasks]))
  }

  const deleteTask = (id) => {
    fetch(`https://61753daa08834f0017c70b7f.mockapi.io/tasks/${id}`, {
        method: 'DELETE'
    }).then(setTasks(tasks.filter(task => task.id !== id)))
  }

  const doneTask = (id) => {
    const [taskDone] = tasks.filter(task => task.id === id)
    const done = !taskDone.done

    fetch(`https://61753daa08834f0017c70b7f.mockapi.io/tasks/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          done: done
        }),
        headers:{
          'Content-Type': 'application/json'
        }
    }).then( setTasks(tasks.map(task => task.id === id ? ({...task, done: done}) : task)))
   
  }

  return (
    <div className={classes.App}>
      <div className={classes.AppHeader}>
        <h1>
          Список задач 
          <span>
            {tasks.length}
          </span>
        </h1>
        <input
          value={searchValue} 
          type="text" 
          placeholder="Поиск.."
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
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
    </div>
  );
}


export default App;
