import { InputBase, InputBaseProps } from '@material-ui/core'
import { FC } from 'react'
import useStyles from './input.styles'

const Input: FC<InputBaseProps> = props => {
  const classes = useStyles()

  return <InputBase className={classes.textField} {...props} />
}

export default Input
