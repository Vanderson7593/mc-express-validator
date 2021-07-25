import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html,
  body {
    font-family: Montserrat, Open Sans, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
  }
  input {
    border: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  disply: flex;
  justify-content: center;
  align-items: center;
  flex-direcction: column;
`
