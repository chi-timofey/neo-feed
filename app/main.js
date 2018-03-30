import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from 'redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from './navigations/Routes';

const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(MainRouter);

if (module.hot) {
  module.hot.accept('./navigations/Routes', () => {
    const newApp = require('./navigations/Routes').default;
    render(newApp);
  });
}

