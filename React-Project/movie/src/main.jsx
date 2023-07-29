import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';

import { Store } from './store/Store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={Store}>
        <App />
    </Provider>
);