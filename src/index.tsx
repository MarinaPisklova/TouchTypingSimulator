import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Header } from './Header';
import store from './store/store';
import { TextFormContainer } from './TextFormContainer';

window.addEventListener('load', () => {
    ReactDom.render(
        <Provider store={store}>
            <Header />
            <TextFormContainer />
        </Provider>
        ,
        document.getElementById("root")
    );
})

