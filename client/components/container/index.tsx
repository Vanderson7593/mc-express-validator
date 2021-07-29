import { FC } from 'react'
import useStyles from './container.styles'

const Container: FC = ({ children }) => {
  const classes = useStyles()

  return <div className={classes.container}>{children}</div>
}

export default Container
