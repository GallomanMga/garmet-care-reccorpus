import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
      
    }

    :focus {
        outline: 0;
    }

    body {
        -webkit-font-smoothing: antialgit iased;
    }

    body, input, textarea, button {
      font-family: 'Uniform', sans-serif;;
    }
`