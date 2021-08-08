import { format } from 'date-fns'

/**
 * Formate date to dd/mm/yyyy.
 * @param date date to be formated
 * @example
 * 2021-28-05
 * @returns
 * 28/05/2021
 */
export const formatDate = (date?: string | number | Date | null) => {
  if (!date) return '-'
  const d = new Date(date)
  return Number.isNaN(d.getTime()) ? '-' : format(d, 'yyyy-MM-dd HH:mm:ss')
}
