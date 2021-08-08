import * as yup from 'yup'

const validationSchema = yup.object().shape({
  id: yup
    .number()
    .required('O nº da transação é obrigatório!')
    .typeError('O nº da transação deve ser númerico')
    .positive('O nº da transação deve ser positivo')
    .integer('O nº da transação deve ser inteiro')
})

export default validationSchema
