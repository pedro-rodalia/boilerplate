import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/app.js';
import './css/styles.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab);

ReactDOM.render(<App />, document.getElementById('root'));
