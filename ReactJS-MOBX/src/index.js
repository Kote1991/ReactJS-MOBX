import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/layout';
import store from './store/todosStore';


ReactDOM.render(<App  store={store}/>, document.getElementById('root'));
