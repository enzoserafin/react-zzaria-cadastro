import styled from 'styled-components'
import {
  Paper,
  Typography
} from '@material-ui/core'

export const Content = styled.main`
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing(3)}px;;
`

export const PaperContainer = styled(Paper)`
  && {
    flex-grow: 1;
    margin-bottom: ${({ theme }) => theme.spacing(5)}px;
    padding: ${({ theme }) => theme.spacing(2)}px;
  }
`

export const Title = styled(Typography).attrs({
  align: 'center',
  gutterBottom: true,
  variant: 'h6'
})`
  && {
    text-align: left;
  }
`