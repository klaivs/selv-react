import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import ReduxToastr from 'react-redux-toastr';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store/store';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './utils/css/react-redux-toastr.min.css';

ReactDOM.render((
    <Provider store={store}>
        <div>
            <HashRouter>
                <App />
            </HashRouter>
            <ReduxToastr
                timeOut={4000}
                preventDuplicates
                position="top-center"
                transitionIn="bounceInDown"
                transitionOut="bounceOutUp"
                progressBar/>
        </div>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
