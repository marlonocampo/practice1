import React from 'react'
import {createRoot} from 'react-dom/client'
import {App} from './components/App'
import {NavBar} from "./components/NavBar";

const root = document.getElementById('root') as HTMLElement
const index = createRoot(root)

index.render(
  <React.StrictMode>
    <NavBar/>
    <App/>
  </React.StrictMode>
)
