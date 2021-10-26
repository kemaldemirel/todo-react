import React from 'react';
import Navigation from './components/navigation/Navigation';
import Comleted from './pages/Comleted';

import { Switch, Route } from 'react-router-dom'

import classes from './App.module.scss'
import Home from './pages/Home';


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

  const doneTask = (id) => {
    const [doneTask] = tasks.filter(task => task.id === id)

    fetch(`https://61753daa08834f0017c70b7f.mockapi.io/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        done: !doneTask.done,
        doneDate: Date.now()
      }),
      headers: {
        'Content-type': 'application/json'
      }
    }).then(res => res.json())
      .then(setTasks(tasks.map(task => task.id === id ? ({ ...task, done: !doneTask.done, doneDate: Date.now() }) : task)))
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
      <Navigation tasks={tasks} />

      <Switch>
        <Route path="/todo-react" exact>
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
          <Comleted tasks={tasks} />
        </Route>
      </Switch>

    </div>
  );
}


export default App;
