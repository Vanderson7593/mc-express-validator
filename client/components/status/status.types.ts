import { IInvoice } from '@types'

export interface StatusProperties {
  data: IInvoice | undefined | null
  error: boolean
  success: boolean
}
