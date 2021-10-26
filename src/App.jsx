import React from 'react';
import Navigation from './components/navigation/Navigation';
import Comleted from './pages/Comleted';
import Deleted from './pages/Deleted';

import { Switch, Route } from 'react-router-dom'

import classes from './App.module.scss'
import Home from './pages/Home';


function App() {

  const [tasks, setTasks] = React.useState([])
  const [completedTasks, setCompletedTasks] = React.useState([])
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
      .then(fetch(`https://61753daa08834f0017c70b7f.mockapi.io/doneTasks`)
      .then(res => res.json())
      .then(res => setCompletedTasks([...res])))
  }, [])

  console.log(tasks)

  const addTask = (newTask) => {
    fetch('https://61753daa08834f0017c70b7f.mockapi.io/tasks', {
      method: 'POST',
      body: JSON.stringify(newTask),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(res => setTasks([res, ...tasks]))
  }

  const deleteTask = (id) => {
    fetch(`https://61753daa08834f0017c70b7f.mockapi.io/tasks/${id}`, {
      method: 'DELETE'
    }).then(setTasks(tasks.filter(task => task.id !== id)))
  }

  const doneTask = async (id) => {
    const response = await fetch(`https://61753daa08834f0017c70b7f.mockapi.io/tasks/${id}`, {
      method: 'DELETE',
    })
    
    const task = await response.json()
    await setCompletedTasks([...completedTasks, {...task, doneDate: Date.now()}])
    await setTasks(tasks.filter(task => task.id !== id))

    await fetch(`https://61753daa08834f0017c70b7f.mockapi.io/doneTasks`, {
      method: 'POST',
      body: JSON.stringify({
        ...task,
        doneDate: Date.now()
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <div className={classes.App}>
      <div className={classes.AppHeader}>
        <h1>
          Список задач
        </h1>
        <input
          value={searchValue}
          type="text"
          placeholder="Поиск.."
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <Navigation tasks={tasks} completedTasks={completedTasks} />

      <Switch>
        <Route path="/" exact>
          <Home 
            isLoaded={isLoaded} 
            addTask={addTask} 
            searchValue={searchValue}
            tasks={tasks}
            deleteTask={deleteTask}
            doneTask={doneTask}
          />
        </Route>
        <Route path="/completed">
          <Comleted completedTasks={completedTasks} setCompletedTasks={setCompletedTasks}/>
        </Route>
        <Route path="/deleted" >
          <Deleted />
        </Route>
      </Switch>

    </div>
  );
}


export default App;
