import { /*createBrowserHistory*/ createHashHistory as createHistory} from 'history'
import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'

//import { createStore, applyMiddleware } from "redux";
import createRootReducer from "../reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createHistory();

const store = createStore(
    createRootReducer(history), // root reducer with router state
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        // ... other middlewares ...
      ),
    ),
  )


export default store;
