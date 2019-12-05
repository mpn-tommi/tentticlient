import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './App';

import store, {history} from "./redux/store";

import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'

import * as serviceWorker from './serviceWorker';
import List from './components/List';
import TheTester from './components/TheTester';
import Navigation from './components/Navigation';


ReactDOM.render(
    <Provider store={store}> 
        <ConnectedRouter history={history}>
        <>
        <Navigation/>
        <div className="content">
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/list" component={List}/>
            <Route path="/questions" component={TheTester}/>
            <Route render={() => <div>Not found</div>}/>
        </Switch>
        </div>
        </>
        </ConnectedRouter>

    </Provider>, document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
