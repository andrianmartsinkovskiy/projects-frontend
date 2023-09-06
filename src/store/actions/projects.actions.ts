import {ACTIONS_DATA} from "../../const/action-types";
import {IProject} from "../../types/project.interface";

export const setProjectsAction = (payload: any) => {
  return {
    type: ACTIONS_DATA.SET_PROJECTS,
    payload
  }
}

export const setProjectAction = (payload: IProject | null) => {
  return {
    type: ACTIONS_DATA.SET_PROJECT,
    payload
  }
}

export const changeProjectAction = (payload: IProject) => {
  return {
    type: ACTIONS_DATA.CHANGE_PROJECT,
    payload
  }
}

export const addProjectToListAction = (payload: IProject) => {
  return {
    type: ACTIONS_DATA.ADD_PROJECT,
    payload
  }
}

export const removeProjectFromListListAction = (payload: number) => {
  return {
    type: ACTIONS_DATA.REMOVE_PROJECT,
    payload
  }
}

export const toggleProjectModalAction = (payload: any) => {
  return {
    type: ACTIONS_DATA.TOGGLE_PROJECT_MODAL,
    payload
  }
}

export const toggleProjectsLoadingAction = (payload: any) => {
  return {
    type: ACTIONS_DATA.TOGGLE_PROJECTS_LOADING,
    payload
  }
}

export const toggleProjectLoadingAction = (payload: any) => {
  return {
    type: ACTIONS_DATA.TOGGLE_PROJECT_LOADING,
    payload
  }
}
