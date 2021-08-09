import * as React from 'react'
import { withFormik, Form, FormikProps } from 'formik'
import { FormTextField } from '../Common/FormFields/index'
import * as Yup from 'yup'

export interface ICreateBoardFormValues {
  title: string
}

interface ICreateBoardFormProps {
  initialValues: {
    title: string
  }
  onSubmit: any
  onChange: any
  value: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ChangeBoardTitleFormValidationSchema = (props: ICreateBoardFormProps) =>
  Yup.object().shape({
    title: Yup.string()
      .min(1, 'The size must be between 1 and 50')
      .max(50, 'The size must be between 1 and 50'),
  })

const _CreateBoardForm: React.FC<
  ICreateBoardFormProps & FormikProps<ICreateBoardFormValues>
> = (props) => {
  return (
    <Form>
      <FormTextField
        name={'title'}
        variant={'outlined'}
        value={props.value}
        placeholder={'Your boards title...'}
        onChange={props.onChange}
        style={{ width: 500, cursor: 'pointer' }}
      />
    </Form>
  )
}

export const CreateBoardForm = withFormik<
  ICreateBoardFormProps,
  ICreateBoardFormValues
>({
  mapPropsToValues: (props) => props.initialValues,
  validationSchema: ChangeBoardTitleFormValidationSchema,
  validateOnMount: true,

  handleSubmit: (values, { props, ...FormikHelpers }) => {
    props.onSubmit(values, FormikHelpers)
  },

  displayName: 'ChangeBoardTitleForm',
})(_CreateBoardForm)
