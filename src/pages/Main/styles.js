import styled from 'styled-components'
import { Drawer as MaterialDrawer, Button as MaterialButton } from '@material-ui/core'

export const Drawer = styled(MaterialDrawer).attrs({
  variant: 'permanent'
})`
  && {
    .MuiPaper-root {
      width: ${({ theme }) => theme.extend.drawerWidth}px;
    }
  }
`

export const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(1)}px;
  text-align: center;
`

export const Content = styled.main`
  margin-left: ${({ theme }) => theme.extend.drawerWidth}px;
  padding: ${({ theme }) => theme.spacing(3)}px;
`

export const Button = styled(MaterialButton).attrs({
  variant: 'contained'
})`
  && {
    margin-left: ${({ theme }) => theme.spacing(2)}px;
    margin-right: ${({ theme }) => theme.spacing(2)}px;
    margin-top: ${({ theme }) => theme.spacing(2)}px;
  }
`
