import {ThemeProvider} from 'styled-components';

import Router from './routes';
import {theme} from './styles/theme'
import GlobalStyle from './styles/globalStyles'

function App(){
    return(
        <ThemeProvider theme={theme}> {/* define estilo visual e importa onde quiser (exemplo:Dark) */}
            <GlobalStyle/>
            <Router />
        </ThemeProvider>
    );
}

export default App;