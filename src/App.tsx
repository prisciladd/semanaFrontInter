import {ThemeProvider} from 'styled-components';

import Router from './routes';
import {theme} from './styles/theme'
import GlobalStyle from './styles/globalStyles'
import { AuthProvider } from './context/AuthContext';

function App(){
    return(
        <ThemeProvider theme={theme}> {/* define estilo visual e importa onde quiser (exemplo:Dark) */}
            <AuthProvider>      {/* define o contexto em volta de toda a aplicação */}
            <GlobalStyle/>
            <Router />
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;