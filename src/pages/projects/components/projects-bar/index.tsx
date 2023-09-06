import React from 'react'
import c from './style.module.css'
import {ButtonDefault} from "../../../../components/ui/button-default";
import { toggleProjectModalAction} from "../../../../store/actions/projects.actions";
import {useAppDispatch} from "../../../../hooks/app-dispatch.hook";


const ProjectsBar = () => {
  const dispatch = useAppDispatch()
  const openModal = () => {
    dispatch(toggleProjectModalAction(true))
  }

  return (
    <div>
      <div className={c.wrap}>
        <h2 className={c.title}>Projects List</h2>
        <ButtonDefault fit={true} text="Add Project" submit={(openModal)} />
      </div>
    </div>
  )
}

export {
  ProjectsBar
}