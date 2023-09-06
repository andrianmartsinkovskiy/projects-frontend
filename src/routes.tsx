import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom";
import {APP_ROUTES} from './const/app-routes'
import {RegisterPage} from "./pages/register";
import {ProjectsPage} from "./pages/projects";
import {ProjectPage} from "./pages/project";
import {LoginPage} from "./pages/login";

const useRoutes = (role: string | null) => {

  if (!role) return <></>

  if (role === 'guest') return (
    <Routes>
      <Route path={APP_ROUTES.login} element={<LoginPage/>} />
      <Route path={APP_ROUTES.register} element={<RegisterPage/>} />

      <Route
        path="*"
        element={<Navigate to={APP_ROUTES.login} />}
      />
    </Routes>
  )

  return (
    <Routes>
      <Route path={APP_ROUTES.projects} element={<ProjectsPage/>} />
      <Route path={`${APP_ROUTES.project}/:id`} element={<ProjectPage/>} />

      <Route
        path="*"
        element={<Navigate to={APP_ROUTES.projects} />}
      />
    </Routes>
  )
}

export {useRoutes}