import React from "react"
import { Route, Switch } from "react-router-dom"

import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Teste from "./pages/Teste"

export default function Routes () {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/teste" exact component={Teste} /> 
    </Switch>
  )
}