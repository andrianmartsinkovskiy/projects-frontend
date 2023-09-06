import React, {useEffect} from 'react'
import {Field, reduxForm} from "redux-form";
import {ReduxFormInput} from "../../redux-form-elements/redux-form-input";
import {requiredField} from "../../../validators/validators";
import {ButtonDefault} from "../../ui/button-default";
import c from './style.module.css'
import { connect } from 'react-redux';
import {RootState} from "../../../store";


let ProjectForm: any = (props: any) => {

  return (
    <form
      onSubmit={props.handleSubmit}
      className={c.form}
    >
      <Field
        placeholder="...project name"
        name="name"
        component={ReduxFormInput}
        validate={[requiredField]}
      />
      <ButtonDefault text={props.buttonText} />
    </form>
  )
}


ProjectForm = reduxForm({
  form: 'project',
  enableReinitialize : true
})(ProjectForm)

ProjectForm = connect(
  (state: RootState) => ({
    initialValues: {
      name: state.projects.project ? state.projects.project.name : "",
    }
  }),
)(ProjectForm);


export default ProjectForm