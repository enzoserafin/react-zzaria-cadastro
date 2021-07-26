import React, { lazy, Suspense, useEffect, useCallback } from 'react'
import { Switch, Route, Link, useLocation } from 'react-router-dom'
import { Button, Content, Drawer, DrawerContent } from './styles'
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core'
import { ExitToApp } from '@material-ui/icons'
import * as routes from '../../routes'
import useAuth from '../../hooks/auth'

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

const Main = () => {
  useScrollToTop()
  const { pathname } = useLocation()
  const { logout } = useAuth()

  const getSelectedMenuItem = useCallback((item) => {
    return pathname === item.link ||
      (pathname.includes(item.link) && item.link !== routes.HOME)
  }, [pathname])

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
              selected={getSelectedMenuItem(item)}
              component={Link}
              to={item.link}
            >
              <ListItemText>{item.label}</ListItemText>
            </ListItem>
          ))}
        </List>

        <Divider />

        <Button
          onClick={logout}
          color='secondary'
          startIcon={<ExitToApp />}
        >
          <Typography>
            Sair
          </Typography>
        </Button>

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

function useScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
}

export default Main
