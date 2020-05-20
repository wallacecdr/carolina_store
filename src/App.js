import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider} from "react-redux"

import Header from "./components/Header"
import Routes from "./routes"

import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;