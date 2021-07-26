import styled from 'styled-components'
import { Button, Typography } from '@material-ui/core'

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(3)}px;
`

export const Title = styled(Typography).attrs({
  variant: 'h2'
})`
  && {
    font-weight: bold;
    text-align: center;
    position: relative;

    &::after {
      border-bottom: 1px solid #000;
      bottom: -13px;
      content: '';
      position: absolute;
      left: 0;
      width: 150px;
    }
  }
`
export const Description = styled(Typography)`
  && {
    text-align: right;
  }
`

export const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    font-size: ${({ theme }) => theme.typography.h5.fontSize};
    max-width: 480px;
    padding: ${({ theme }) => theme.spacing(2)}px;
    text-transform: none;
  }
`
