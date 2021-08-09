import * as React from 'react'
import { withFormik, Form, FormikProps, FormikHelpers } from 'formik'
import { FormTextField } from '../Common/FormFields/index'
import * as Yup from 'yup'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  inputProps: {
    textAlign: 'center',
    cursor: 'pointer',
  },
})

export interface IChangeBoardTitleValues {
  id: string | number
  title: string
}

interface IChangeBoardTitleFormProps {
  initialValues: IChangeBoardTitleValues
  onSubmit: (
    values: IChangeBoardTitleValues,
    formikHelpers?: FormikHelpers<IChangeBoardTitleValues>
  ) => void
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onClick: () => void
  onBlur?: () => void
}

const ChangeBoardTitleFormValidationSchema = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: IChangeBoardTitleFormProps
) =>
  Yup.object().shape({
    title: Yup.string()
      .min(1, 'The size must be between 1 and 50')
      .max(50, 'The size must be between 1 and 50')
      .required('This field is required'),
  })

const _ChangeBoardTitleForm: React.FC<
  IChangeBoardTitleFormProps & FormikProps<IChangeBoardTitleValues>
> = (props) => {
  const { initialValues } = props

  const handleBlur = (e) => {
    const valueSubmit = {
      id: initialValues.id,
      title: e.target.value,
    }
    if (props.isValid) {
      props.onSubmit(valueSubmit)
    }
  }

  const { onClick, onKeyDown } = props
  const classes = useStyles()
  return (
    <Form>
      <FormTextField
        name={'title'}
        variant={'outlined'}
        placeholder={'Enter title'}
        onClick={onClick}
        label={props.isValid ? 'Title' : ''}
        onBlur={handleBlur}
        onKeyDown={onKeyDown}
        style={{ width: 200, cursor: 'pointer' }}
        styles={{
          style: { textAlign: 'center', fontSize: 30, height: 40 },
          inputProps: { className: classes.inputProps },
        }}
      />
    </Form>
  )
}

export const ChangeBoardTitleForm = withFormik<
  IChangeBoardTitleFormProps,
  IChangeBoardTitleValues
>({
  mapPropsToValues: (props) => props.initialValues,
  validationSchema: ChangeBoardTitleFormValidationSchema,
  validateOnMount: true,

  handleSubmit: (values, { props, ...FormikHelpers }) => {
    props.onSubmit(values, FormikHelpers)
  },

  displayName: 'ChangeBoardTitleForm',
})(_ChangeBoardTitleForm)
