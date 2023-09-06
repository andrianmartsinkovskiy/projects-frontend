import React, {useContext} from 'react'
import c from './style.module.css'
import {Modal} from "../../ui/modal";
import {useAppDispatch} from "../../../hooks/app-dispatch.hook";
import {setProjectAction, setProjectsAction, toggleProjectModalAction} from "../../../store/actions/projects.actions";
import {useAppSelector} from "../../../hooks/app-selector.hook";
import ProjectForm from "../../forms/project-form";
import {
  addProjectsAction,
  editProjectAction
} from "../../../store/async-actions/projects.async.actions";




const ProjectViewModal = () => {
  const dispatch = useAppDispatch()
  const {project} = useAppSelector(state => state.projects)

  const submitHandler = async (val: any) => {
    if (project) {
      dispatch(editProjectAction(val.name, project.id))
    } else {
      dispatch(addProjectsAction(val.name))
    }
  }

  const closeModalHandler = () => {
    dispatch(setProjectAction(null))
    dispatch(toggleProjectModalAction(false))
  }

  const activeState = project ? "Edit" : "Add"

  return (
    <Modal close={closeModalHandler}>
      <div className={c.wrap}>
        <h2 className={c.title}>{activeState} Project</h2>
        <ProjectForm onSubmit={submitHandler} buttonText={activeState} />
      </div>
    </Modal>
  )
}

export {
  ProjectViewModal
}