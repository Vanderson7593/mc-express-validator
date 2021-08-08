import { EInvoice, EOperation } from '@constants'
import { IInvoice } from '@types'

export const BILLS = [
  {
    [EInvoice.Amount]: 64500,
    [EInvoice.Datetime]: new Date(),
    [EInvoice.Destiny]: 'Vanderson Telema',
    [EInvoice.IBAN]: 'AO06 0000 0000 0000 0000',
    [EInvoice.Id]: 170538,
    [EInvoice.Operation]: 'Tranferência bancária' as EOperation
  },
  {
    [EInvoice.Amount]: 1000000,
    [EInvoice.Datetime]: new Date(),
    [EInvoice.Destiny]: 'Valério Telema',
    [EInvoice.IBAN]: 'AO06 0004 0401 0078 014',
    [EInvoice.Id]: 170539,
    [EInvoice.Operation]: 'Tranferência bancária' as EOperation
  },
  {
    [EInvoice.Amount]: 15000,
    [EInvoice.Datetime]: new Date(),
    [EInvoice.Entidade]: '115 MOVICEL CARREGAMENTOS',
    [EInvoice.Reference]: '993866228',
    [EInvoice.Id]: 170540,
    [EInvoice.Operation]: 'Pagamento de serviços' as EOperation,
    [EInvoice.Description]: '** **'
  },
  {
    [EInvoice.Amount]: 5000,
    [EInvoice.Datetime]: new Date(),
    [EInvoice.Entidade]: '392 PRIMEIRA APOSTA SU LDA',
    [EInvoice.Reference]: '485 040 000',
    [EInvoice.Id]: 170541,
    [EInvoice.Operation]: 'Pagamento de serviços' as EOperation,
    [EInvoice.Description]: '** **'
  }
] as IInvoice[]
