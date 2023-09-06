import {ACTIONS_DATA} from "../../const/action-types";
import {IProject} from "../../types/project.interface";

interface IProjectStore {
  projects: IProject[]
  project: IProject | null,
  isLoading: boolean,
  isProjectModalActive: boolean,
  isProjectLoading: boolean
}

const defaultState: IProjectStore = {
  projects: [],
  project: null,
  isLoading: true,
  isProjectModalActive: false,
  isProjectLoading: true
}

export const projectReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case ACTIONS_DATA.SET_PROJECTS:
      return {...state, projects: action.payload};
    case ACTIONS_DATA.SET_PROJECT:
      return {...state, project: action.payload};
    case ACTIONS_DATA.CHANGE_PROJECT:
      return {...state, projects: state.projects.map(item => {
          if (item.id === action.payload.id) {
            item.name = action.payload.name
          }
          return item
        })};
    case ACTIONS_DATA.ADD_PROJECT:
      return {...state, projects: [action.payload, ...state.projects]}
    case ACTIONS_DATA.REMOVE_PROJECT:
      return {...state, projects: state.projects.filter(item => item.id !== action.payload)}
    case ACTIONS_DATA.TOGGLE_PROJECTS_LOADING:
      return {...state, isLoading: action.payload};
    case ACTIONS_DATA.TOGGLE_PROJECT_LOADING:
      return {...state, isProjectLoading: action.payload};
    case ACTIONS_DATA.TOGGLE_PROJECT_MODAL:
      return {...state, isProjectModalActive: action.payload};
    default:
      return state
  }
}