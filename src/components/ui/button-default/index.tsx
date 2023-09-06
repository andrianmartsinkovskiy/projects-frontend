import React, {FC} from 'react'
import c from './style.module.css'

interface IButtonDefault {
  text: string
  submit?: () => void
  fit?: boolean
}

const ButtonDefault = ({text, submit, fit}: IButtonDefault) => {

  return (
    <button
      style={{width: fit ? "fit-content" : "100%"}}
      className={c.button}
      onClick={submit ? submit : () => {}}
    >
      {text}
    </button>
  )
}

export {
  ButtonDefault
}