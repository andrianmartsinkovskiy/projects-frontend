import {axiosAuthorized} from "../../axios";
import {
  addProjectToListAction,
  changeProjectAction, removeProjectFromListListAction,
  setProjectAction,
  setProjectsAction,
  toggleProjectsLoadingAction,
  toggleProjectModalAction, toggleProjectLoadingAction
} from "../actions/projects.actions";
import {toast} from "react-toastify";
import {AppDispatch} from "../index";


export const getProjectsAction = (userId: number) => {
  return async (dispatch: any) => {
    dispatch(toggleProjectsLoadingAction(true))
    try {
      const data = await axiosAuthorized.get("api/project/getByUser/" + userId)

      dispatch(toggleProjectsLoadingAction(false))
      dispatch(setProjectsAction(data.data))
    } catch (e) {
      console.warn(e)
      toast("An error occurred while loading projects")
    }
  }
};


export const addProjectsAction = (name: string) => {
  return async (dispatch: any) => {
    dispatch(toggleProjectLoadingAction(true))
    try {
      const data = await axiosAuthorized.post("api/project/addProject", {
        name
      })

      dispatch(toggleProjectLoadingAction(false))
      dispatch(toggleProjectModalAction(false))
      dispatch(setProjectAction(null))
      dispatch(addProjectToListAction(data.data.project))
    } catch (e) {
      console.warn(e)
      toast("An error occurred while creating project")
      dispatch(toggleProjectLoadingAction(false))
    }
  }
};

export const removeProjectAction = (id: number) => {
  return async (dispatch: any) => {
    dispatch(toggleProjectsLoadingAction(true))
    try {
      const data = await axiosAuthorized.delete("api/project/removeProject/" + id)

      dispatch(removeProjectFromListListAction(data.data.id))
      dispatch(toggleProjectsLoadingAction(false))
    } catch (e) {
      console.warn(e)
      toast("An error occurred while creating project")
      dispatch(toggleProjectsLoadingAction(false))
    }
  }
};

export const editProjectAction = (name: string, projectId: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(toggleProjectLoadingAction(true))

    try {
      const data = await axiosAuthorized.post("api/project/editProject", {
        name, projectId
      })

      dispatch(toggleProjectLoadingAction(false))
      dispatch(toggleProjectModalAction(false))
      dispatch(setProjectAction(null))
      dispatch(changeProjectAction(data.data.project))
    } catch (e) {
      console.warn(e)
      toast("An error occurred while creating project")
      dispatch(toggleProjectLoadingAction(false))
    }
  }
};
