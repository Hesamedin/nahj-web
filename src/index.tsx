import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configStore, { history } from './store/configStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { firebase } from './firebase';
import { loginAction, logoutAction } from './actions/auth';
import { logger } from './utility/Logger';
import './../node_modules/bulma/css/bulma.css';
import './styles/mystyles.css';

const target = document.getElementById('root');

const store = configStore();
const jsx = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App/>
            </div>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(jsx, target);
registerServiceWorker();

firebase.auth().onAuthStateChanged((user) => {
    logger(`Auth state changed to: ${!!user}`);
    if (user) {
        logger(`Google uid: ${user.uid}`);
        store.dispatch(loginAction(user.uid));
    } else {
        store.dispatch(logoutAction());
    }
});
