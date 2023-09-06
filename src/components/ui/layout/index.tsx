import React, {FC} from 'react'
import c from './style.module.css'
import {Navbar} from "../../navbar";
import {Props} from "../../../types/prop.type";


const Layout: FC<Props> = ({children}) => {


  return (
    <>
      <Navbar />
      <div className={c.wrap}>
        {children}
      </div>
    </>
  )
}

export {
  Layout
}