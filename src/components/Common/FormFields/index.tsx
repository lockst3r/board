import * as React from 'react'
import { useField, useFormikContext } from 'formik'
import { TextField, TextFieldProps } from '@material-ui/core'

type TFormTextFieldProps = TextFieldProps & {
  name: string
  placeholder?: string
  disabled?: boolean
  styles?: any
}

export const FormTextField = (props: TFormTextFieldProps) => {
  const [field, meta] = useField(props.name)
  const formik = useFormikContext()
  const hasError = Boolean(meta.error)
  const { placeholder, ...otherProps } = props

  const handleChange = (event: any) => {
    formik.setFieldTouched(field.name)

    formik.setFieldValue(field.name, event.target.value)
  }

  if (props.disabled) {
    return (
      <TextField
        value={field.value}
        {...otherProps}
        placeholder={placeholder}
      />
    )
  } else {
    return (
      <TextField
        {...otherProps}
        autoComplete={'off'}
        name={field.name}
        value={field.value}
        error={hasError}
        helperText={hasError ? meta.error : null}
        onChange={handleChange}
        InputProps={props.styles && props.styles}
        placeholder={placeholder}
      />
    )
  }
}
