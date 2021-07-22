import React, { lazy, Suspense, useEffect } from 'react'
import { Switch, Route, Link, useLocation } from 'react-router-dom'
import { Content, Drawer, DrawerContent } from './styles'
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core'
import * as routes from '../../routes'

const Orders = lazy(() => import('../Orders'))
const PizzasSizes = lazy(() => import('../PizzasSizes'))
const PizzasFlavours = lazy(() => import('../PizzasFlavours'))

const menuItens = [
  {
    label: 'Pedidos',
    link: routes.HOME,
    component: Orders,
    exact: true
  }, {
    label: 'Tamanhos de pizzas',
    link: routes.PIZZAS_SIZES,
    component: PizzasSizes,
    exact: false
  }, {
    label: 'Sabores de pizza',
    link: routes.PIZZAS_FLAVOURS,
    component: PizzasFlavours,
    exact: false
  }
]

function useScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
}

const Main = () => {
  useScrollToTop()
  const { pathname } = useLocation()

  return (

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
            <ListItem
              key={item.label}
              button
              selected={pathname === item.link}
              component={Link}
              to={item.link}
            >
              <ListItemText>{item.label}</ListItemText>
            </ListItem>
          ))}
        </List>

      </Drawer>

      <Content>
        <Suspense fallback='Loading...'>
          <Switch>
            {menuItens.map(item => (
              <Route
                key={item.link}
                path={item.link}
                exact={item.exact}
              >
                <item.component />
              </Route>
            ))}
          </Switch>
        </Suspense>
      </Content >
    </>
  )
}

export default Main
