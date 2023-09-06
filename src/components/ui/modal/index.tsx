import React from 'react'
import c from './style.module.css'
import {Props} from "../../../types/prop.type";
import {CgClose} from "react-icons/cg";

interface IModal {
  maxHeight?: string
  close: () => void
}

const Modal = ({maxHeight, children, close}: IModal & Props) => {

  return (
    <div className={c.wrap}>
      <div className={c.container} style={{maxHeight: maxHeight ? maxHeight : "80vh"}}>
        <CgClose className={c.close} onClick={close} />
        {children}
      </div>
    </div>
  )
}

export {
  Modal
}