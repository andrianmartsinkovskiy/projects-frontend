import React from 'react'
import c from './style.module.css'
import {IProject} from "../../../../types/project.interface";
import {useAppSelector} from "../../../../hooks/app-selector.hook";
import {EmptyList} from "../../../../components/ui/empty-list";
import {useAppDispatch} from "../../../../hooks/app-dispatch.hook";
import {setProjectAction, toggleProjectModalAction} from "../../../../store/actions/projects.actions";
import {removeProjectAction} from "../../../../store/async-actions/projects.async.actions";
import {BiEdit} from "react-icons/bi";
import {CgFileRemove} from "react-icons/cg";
import {useNavigate} from "react-router-dom";
import {APP_ROUTES} from "../../../../const/app-routes";



const ProjectsList = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {projects} = useAppSelector(state => state.projects)

  const removeProjectHandler = (id: number) => {
    dispatch(removeProjectAction(id))

  }

  const setActiveProject = (project: IProject) => {
    dispatch(setProjectAction(project))
    dispatch(toggleProjectModalAction(true))
  }

  const goToProjectPage = (id: number) => {
    navigate(APP_ROUTES.project + `/${id}`)
  }

  if (!projects.length) return <EmptyList text="Projects list is Empty" />

  return (
    <div className={c.list}>
      {
        projects.map((project: IProject) => (
          <div key={project.id} className={c.item} onClick={() => goToProjectPage(project.id)}>
            <h3>{project.name}</h3>
            <div className={c.actions}>
              <BiEdit
                className={c.edit}
                onClick={(e) => {
                  setActiveProject(project)
                  e.stopPropagation()
                }}
              />
              <CgFileRemove
                className={c.remove}
                onClick={(e) => {
                  removeProjectHandler(project.id)
                  e.stopPropagation()
                }}
              />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export {
  ProjectsList
}