import React, {useContext, useState} from 'react'
import {AuthContext} from "../../../../context/auth.context";
import {useFormik} from "formik";
import {toast} from "react-toastify";
import {loginUserRequest} from "../../../../actions/user.actions";
import {FormikInput} from "../../../../components/formik/formik-input";
import  c from './style.module.css'
import {ButtonDefault} from "../../../../components/ui/button-default";
import {useNavigate} from "react-router-dom";
import {APP_ROUTES} from "../../../../const/app-routes";
import {loginSchema} from "./login.schema";



const FormLogin = () => {
  const {login} = useContext(AuthContext)
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const form = useFormik({
    initialValues: {
      login: "",
      password: ""
    },
    validationSchema: loginSchema,
    onSubmit: (values) => registerHandler(values)
  })

  const registerHandler = async (values: Record<string, any>) => {
    setIsLoading(true)
    const data: any = await loginUserRequest({login: values.login, password: values.password})

    if (data) {
      login(data.accessToken)
    } else {
      toast("please check your credential")
    }

    setIsLoading(false)
  }

  const goToRegister= () => navigate(APP_ROUTES.register)

  return (
    <div className={c.wrap}>
      <div className={c.container}>
        <h2 className={c.title}>Projects App</h2>

        <form className={c.form}>
          <FormikInput form={form} name="login" placeholder="login" />
          <FormikInput form={form} name="password" type="password" placeholder="passwod" />
        </form>

        <ButtonDefault submit={form.submitForm} text="Login" />

        <p className={c.note}>
          Already have an account?
          <span onClick={goToRegister}> Register</span>
        </p>
      </div>
    </div>
  )
}

export {
  FormLogin
}