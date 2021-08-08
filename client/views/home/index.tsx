import {
  Typography,
  Grid,
  Box,
  CircularProgress,
  InputBase,
  Divider,
  IconButton,
  useTheme
} from '@material-ui/core'
import Header from './components/header'
import { Status, Field } from '../../components'
import useAsyncState from 'client/hooks/use-async-state'
import { IInvoice } from '@types'
import { makeFields } from 'client/utils/fields'
import { v4 as uuid } from 'uuid'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import validationSchema from 'client/utils/validation-schema'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import HelpIcon from '@material-ui/icons/Help'
import { BILLS } from 'client/mocks/bills'

type TFormValues = { id: number }

const renderIds = (): string => BILLS.map(x => x.id).join(' | ')

const Home: FC = () => {
  const { palette } = useTheme()
  const [toggleHelp, setToggleHelp] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TFormValues>({
    resolver: yupResolver(validationSchema)
  })

  const { data, error, loading, setData, setError, setLoading, setSuccess, success } =
    useAsyncState()

  const validate = async (id: number) => {
    setSuccess(false)
    setData(null)
    setLoading(true)
    setError(false)
    try {
      const res = await fetch(`/validate/${id}`)
      const invoice = await res.json()
      invoice && setData(invoice[0])
      setSuccess(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const onSubmit: SubmitHandler<TFormValues> = ({ id }) => validate(id)

  return (
    <div>
      <Header />
      <Box my={4} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column" justify="center" spacing={4}>
          <Box>
            <Typography>
              <Box component="span" fontWeight="fontWeightMedium">
                Número da transação
              </Box>
            </Typography>
          </Box>
          <Box>
            <InputBase {...register('id')} placeholder={renderIds()} />
          </Box>
          <Box color={palette.error.main}>{errors.id?.message}</Box>
        </Grid>
      </form>
      {loading ? (
        <Grid justify="center" alignItems="center" container>
          <Grid item>
            <Box my={8} />
            <CircularProgress color="primary" />
          </Grid>
        </Grid>
      ) : (
        <>
          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item>
              <Box mt={2} />
              <Status data={data} error={error} success={success} />
            </Grid>
          </Grid>
          {data && (
            <>
              <Divider
                style={{ width: 340, borderStyle: 'dashed', borderWidth: 1, marginTop: 8 }}
              />
              <Box my={3} />
              <Grid container direction="column" spacing={2}>
                {makeFields(data as IInvoice).map(item => {
                  if (!item.value) return null
                  return (
                    <Grid key={uuid()} item>
                      <Field label={item.label} value={item.value} />
                    </Grid>
                  )
                })}
              </Grid>
            </>
          )}
        </>
      )}
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <IconButton onClick={() => setToggleHelp(prevState => !prevState)}>
          <HelpIcon htmlColor={toggleHelp ? palette.primary.main : ''} />
        </IconButton>

        {toggleHelp && (
          <>
            <Typography>Pressione enter para validar</Typography>
            <Typography>Ids para consulta:</Typography>
            <Typography>{renderIds()}</Typography>{' '}
          </>
        )}
      </Box>
    </div>
  )
}

export default Home
