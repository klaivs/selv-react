import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import { Provider } from "react-redux";

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Store from './redux/store/store';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render((
    <Provider store={Store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
