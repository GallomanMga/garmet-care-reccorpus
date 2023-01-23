import { ThemeProvider } from 'styled-components'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { Button } from "./components/Button"

import imgLogo1 from './assets/beachBt.svg'
import imgLogo2 from './assets/fitnessBt.svg'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'



function App() {

  return (
    
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
   </ThemeProvider>
  )
}

export default App
