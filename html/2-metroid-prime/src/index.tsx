import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import './main.css';

ReactDOM.render(<App />, document.getElementById('root'));
 
// No use for it now
serviceWorker.unregister();
