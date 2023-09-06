import React from 'react'
import c from './style.module.css'

interface IFormikInput {
  form: Record<string, any>
  name: string
  type?: string | undefined
  placeholder?: string | undefined
}

const FormikInput = ({form, name, type, placeholder}: IFormikInput) => {
  const error =  form && form.touched[name] && Boolean(form.errors[name]);
  const inputClass = error ? `${c.input} ${c.inputError}` : c.input

  return (
    <input
      value={form.values[name]}
      type={type ? type : "text"}
      placeholder={placeholder ? placeholder : ""}
      className={inputClass}
      onChange={(e) => {
        form.setFieldValue(name, e.target.value)
      }}
    />
  )
}

export {
  FormikInput
}