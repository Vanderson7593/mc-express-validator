import { EInvoice } from '@constants'
import { FieldProps, IInvoice } from '@types'
import { formatDate } from './date'
import { formatMoney } from './money'
import { capitalizeFirstLetter } from './strings'

export const makeFields = (invoice: IInvoice) =>
  [
    { label: 'Data & Hora', value: formatDate(invoice.datetime) },
    { label: 'Operação', value: capitalizeFirstLetter(invoice.operation) },
    { label: 'Entidade', value: invoice.entity },
    { label: 'IBAN', value: invoice.iban },
    { label: 'Destino', value: invoice.destiny },
    { label: 'Referência', value: invoice.reference },
    { label: 'Montante', value: formatMoney(invoice.amount) },
    { label: 'Transação', value: invoice.id },
    { label: 'Descrição', value: invoice.description }
  ] as FieldProps[]
