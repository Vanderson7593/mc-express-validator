import { EInvoice, EOperation } from '@constants'

export interface IInvoice {
  [EInvoice.Id]: number
  [EInvoice.Amount]: number
  [EInvoice.Datetime]: Date
  [EInvoice.Destiny]?: string
  [EInvoice.Description]?: string
  [EInvoice.Entidade]?: string
  [EInvoice.Reference]?: string
  [EInvoice.IBAN]?: string
  [EInvoice.Operation]: EOperation
}
