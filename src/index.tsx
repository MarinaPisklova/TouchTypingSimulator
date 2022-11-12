import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from './components/App/App';

window.addEventListener('load', () => {
    ReactDom.render(
        <App/>,
        document.getElementById("root")
    );
})

