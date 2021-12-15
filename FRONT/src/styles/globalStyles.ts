import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Roboto', sans-serif;
      padding: 0;
      margin: 0;
    }

    body{
        font-family: 'Roboto', sans-serif;
        background-color: ${({theme}) => theme.colors.background};
    }

    input, button, textarea, select{
      font-family: 'Roboto', sans-serif;
    }
    
    input:focus, textarea:focus, select:focus{
      outline: none;    
      }

    a{
      text-decoration: none;
      color: ${({theme}) => theme.colors.primary};
    }
`

export default GlobalStyle