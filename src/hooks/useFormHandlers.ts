import * as React from 'react'
import { FormikProps } from 'formik'
import { useCallback } from 'react'

export const useFormHandlers = <TFormValues>(initialState = false) => {
  const [editMode, setEditMode] = React.useState(initialState)

  const editModeOn = useCallback(() => {
    setEditMode(true)
  }, [])
  const editModeOff = useCallback(() => {
    setEditMode(false)
  }, [])

  const handleKeyDown = (event: React.KeyboardEvent<any>) => {
    if (event.keyCode === 27) {
      event.preventDefault()
      editModeOff()
    }
  }

  const fireSubmit = (form: FormikProps<TFormValues>) => {
    if (!form.isSubmitting) {
      form.submitForm()
    }
  }

  return { editModeOn, editModeOff, handleKeyDown, editMode, fireSubmit }
}
