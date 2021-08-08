import { IInvoice } from '@types'
import { useState } from 'react'

function useAsyncState() {
  const [data, setData] = useState<null | IInvoice>()
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)

  return {
    error,
    data,
    loading,
    setData,
    setError,
    setLoading,
    success,
    setSuccess
  }
}

export default useAsyncState
