import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Content } from './Content';
import { Header } from './Header';
import store from './store/store';

window.addEventListener('load', () => {
    ReactDom.render(
        <Provider store={store}>
            <Header />
            <Content />
        </Provider>,
        document.getElementById("root")
    );
})

