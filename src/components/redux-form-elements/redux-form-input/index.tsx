import React from 'react'
import c from './style.module.css'

const ReduxFormInput = (props: any) => {
  const isHaveError = props.meta.touched && props.meta.error

  return (
    <div>
      <input
        {...props.input}
        className={`${c.input} ${isHaveError ? c.inputError : ""}`}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  )
}

export {
  ReduxFormInput
}