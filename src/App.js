import React from 'react';
import From from './components/form/From';
import ListTasks from './components/list/ListTasks';

import classes from './App.module.scss'

function App() {

  const [tasks, setTasks] = React.useState([
    {
      id: 1,
      text: 'Купить хлеб',
      done: false,
      createAt: new Date().toLocaleString('ru')
    },
    {
      id: 2,
      text: 'Купить молоко',
      done: false,
      createAt: new Date().toLocaleString('ru')
    },
    {
      id: 3,
      text: 'Купить Кефир',
      done: false,
      createAt: new Date().toLocaleString('ru')
    }
  ])

  console.log(tasks)

  const [searchValue, setSearchValue] = React.useState('')

  const addTask = (newTask) => {
    setTasks([newTask, ...tasks])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const doneTask = (id) => {

    tasks.map(task => {
      if(task.id === id){
        task.done = task.done ? false : true
      }
      return null
    })

    setTasks([...tasks])
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
        <From onClickTask={addTask} />
        <ListTasks 
          searchValue={searchValue} 
          data={tasks} 
          onClickDelete={deleteTask}
          doneTask={doneTask}
        />
      </div>
    </div>
  );
}

export default App;
