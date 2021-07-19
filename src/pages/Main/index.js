import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Content, Drawer, DrawerContent } from './styles'
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core'

const menuItens = [
  {
    label: 'Pedidos'
  }, {
    label: 'Tamanhos de pizzas'
  }, {
    label: 'Sabores de pizza'
  }
]

const Main = () => (
  <>
    <Drawer>
      <DrawerContent>
        <Typography variant='h4'>
          React-zzaria
        </Typography>

        <Typography>
          (Sistema de cadastro)
        </Typography>
      </DrawerContent>
      <Divider />

      <List>
        {menuItens.map(item => (
          <ListItem key={item.label} button>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        ))}

      </List>
    </Drawer>

    <Content>
      <Suspense fallback='Loading...'>
        <Switch>
          <Route>
            <h1>main</h1>
          </Route>
        </Switch>
      </Suspense>
    </Content>
  </>
)

export default Main
