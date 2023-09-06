import React from 'react'
import c from './style.module.css'
import { Circles } from 'react-loader-spinner'


const LoaderDefault = () => {

  return (
    <div className={c.wrap}>
      <Circles
        height="80"
        width="80"
        color="gray"
        ariaLabel="loading"
      />
    </div>
  )
}

export {
  LoaderDefault
}