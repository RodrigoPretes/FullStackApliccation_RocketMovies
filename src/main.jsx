import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles from './styles/global'

import { ThemeProvider } from 'styled-components';

import Home from './pages/Home/index.jsx'
import SignIn from './pages/SignIn/index.jsx'
import SignUp from './pages/SignUp/index.jsx'
import Profile from './pages/Profile/index.jsx'
import New from './pages/New/index.jsx'



import theme from './styles/theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
      <GlobalStyles />
        <New />
    </ThemeProvider>
  </React.StrictMode>,
)
