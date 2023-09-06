import React from 'react'
import c from './style.module.css'

interface IEmptyList {
  text: string
}

const EmptyList = ({text}: IEmptyList) => {

  return (
    <div className={c.wrap}>
      {text}
    </div>
  )
}

export {
  EmptyList
}