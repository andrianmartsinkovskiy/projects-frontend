import {applyMiddleware, combineReducers, createStore} from "redux";
import {projectReducer} from "./reducers/projects.reducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  projects: projectReducer,
  form: formReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch