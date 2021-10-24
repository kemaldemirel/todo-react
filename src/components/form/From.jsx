import React from 'react'
import classes from './form.module.scss'

const From = ({onClickTask}) => {

  const [value, setValue] = React.useState('')

  const newTask = {
    id: Date.now(),
    text: value.trim(),
    createAt: new Date()
  }

  const handleClick = (e) => {
    e.preventDefault()
    onClickTask(newTask)
    setValue('')
  }

  return (
    <form className={classes.Form}>
      <label className={classes.FormLabel}>
        <input
          value={value}
          type="text"
          className={classes.FormInput}
          placeholder='Введите задачу...'
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleClick} className={classes.FormBtn}>+</button>
      </label>
    </form>
  )
}

export default From
