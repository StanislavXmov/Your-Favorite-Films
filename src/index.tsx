import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import "normalize.css";

import { search, favorite } from "./store/reducers";
import App from "./App";
import "./index.css";

const rootReducer = combineReducers({ search, favorite });

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
