import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import configureStore from './redux/store/configureStore';

const store = configureStore();

ReactDOM.render((
    <HashRouter>
        <App store={store}/>
    </HashRouter>
), document.getElementById('root'));
registerServiceWorker();
