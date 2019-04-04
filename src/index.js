import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GridLayout from './GridLayout'
import Tow from './Tow';

import Sortable from './Sortable'


import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Tow />, document.getElementById('root'));
// ReactDOM.render(<GridLayout />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
