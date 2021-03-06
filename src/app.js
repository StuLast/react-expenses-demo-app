import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { logIn, logOut } from "./actions/auth";
import LoadingPage from "./components/LoadingPage";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

const auth = getAuth();

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(logIn(user.uid));
    store
      .dispatch(startSetExpenses())
      .then(() => {
        renderApp();
      })
      .catch((err) => {});
    if (history.location.pathname === "/") {
      history.push("/dashboard");
    }
  } else {
    store.dispatch(logOut());
    renderApp();
    history.push("/");
  }
});
