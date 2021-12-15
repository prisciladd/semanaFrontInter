import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <React.StrictMode> {/* boas práticas colocar sempre entre as tags StrictMode */}
        <App />
    </React.StrictMode>,
    document.getElementById('root') /* renderiza App dentro da div root que está em index.html */
);