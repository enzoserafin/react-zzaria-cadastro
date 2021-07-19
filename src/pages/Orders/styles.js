import styled from 'styled-components'
import {
  Paper,
  TableContainer as MaterialTableContainer,
  TableHead,
  TableCell,
  Typography
} from '@material-ui/core'

export const TableContainer = styled(MaterialTableContainer).attrs({
  component: Paper
})`
  && {
    margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  }
`

export const TableTitle = styled(Typography).attrs({
  variant: 'h6'
})`
  padding: ${({ theme }) => theme.spacing(3)}px;
`

export const Subtitle = styled(Typography).attrs({
  variant: 'button'
})`
font-weight: bold;
`

export const THead = styled(TableHead)`
  && {
    background: ${({ theme }) => theme.palette.common.black};
  }
`

export const Th = styled(TableCell)`
  && {
    color: ${({ theme }) => theme.palette.common.white};
  }

`
