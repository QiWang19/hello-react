//install-import-use

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';
import 'normalize.css/normalize.css'

ReactDOM.render(<AppRouter />, document.getElementById('app'));
console.log(React.version);
