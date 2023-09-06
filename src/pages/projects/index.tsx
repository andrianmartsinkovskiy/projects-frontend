import React, {useContext, useEffect, useState} from 'react'
import {AuthContext, IAuthToken} from "../../context/auth.context";
import jwtDecode from "jwt-decode";
import {getProjectsAction, removeProjectAction} from "../../store/async-actions/projects.async.actions";
import {useAppDispatch} from "../../hooks/app-dispatch.hook";
import {useAppSelector} from "../../hooks/app-selector.hook";
import {LoaderDefault} from "../../components/ui/loader-default";
import {Layout} from "../../components/ui/layout";
import {EmptyList} from "../../components/ui/empty-list";
import {ProjectsBar} from "./components/projects-bar";
import {ProjectsList} from "./components/projects-list";
import {Modal} from "../../components/ui/modal";
import {ProjectViewModal} from "../../components/modals/project-view-modal";
import {AppType} from "vite";
import {toggleProjectModalAction} from "../../store/actions/projects.actions";


const ProjectsPage = () => {
  const dispatch = useAppDispatch()
  const {isProjectModalActive, isLoading}  = useAppSelector((projects) => projects.projects)
  const {token} = useContext(AuthContext)

  const getProjects = async () => {
    if (!token) return
    dispatch(getProjectsAction(jwtDecode<IAuthToken>(token).userId))
  }

  useEffect(() => {
    getProjects()
  }, [])


  return (
    <Layout>
      <div>
        <ProjectsBar />
        {isProjectModalActive && <ProjectViewModal />}
        {isLoading ? <LoaderDefault /> : <ProjectsList /> }
      </div>
    </Layout>
  )
}

export {
  ProjectsPage
}