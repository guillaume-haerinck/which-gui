import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
 
// No use for it now
serviceWorker.unregister();
