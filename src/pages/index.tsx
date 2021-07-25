import { Typography } from '@material-ui/core'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { FC } from 'react'
import { Container } from '../styles/global.styles'

const Home: FC = () => {
  return (
    <Container>
      <Head>
        <title>MY NEXT START APP CONFIG</title>
      </Head>

      <main>
        <Typography>MY NEXT START APP CONFIG</Typography>
      </main>
    </Container>
  )
}

export default Home
