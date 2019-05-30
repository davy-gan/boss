import 'babel-polyfill'
import 'es6-promise/auto'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import RouteMap from 'router';
import store from 'store';
import 'config/config';
import './index.less';

ReactDOM.render(
  <Provider store={store}>
    <RouteMap />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
