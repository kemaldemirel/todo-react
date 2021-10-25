import React from 'react'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import classes from './form.module.scss'

const schema = yup.object({
  textTask: yup.string()
            .min(5, 'Задача должна быть не менее 5 символов')
            .max(30, 'Задача должна быть не более 30 символов')
})

const From = ({onClickTask}) => {

  const { register, handleSubmit, formState:{ errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const handleClick = (data) => {
    const newTask = {
      text: data.textTask,
      done: false,
      createAt: Date.now()
    }
    onClickTask(newTask)
    reset({
      textTask: ''
    })
  }

  return (
    <form className={classes.Form} onSubmit={handleSubmit(handleClick)}>
      {
        errors.textTask && <span className={classes.FormError}>{errors.textTask?.message}</span>
      }
      <label className={classes.FormLabel}>
        <input
          {...register("textTask")}
          type="text"
          className={classes.FormInput}
          placeholder='Введите задачу...'
        />
        <button className={classes.FormBtn}>+</button>
      </label>
    </form>
  )
}

export default From
