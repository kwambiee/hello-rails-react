// // Entry point for the build script in your package.json
// import "@hotwired/turbo-rails";
// import "./controllers";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/ConfigureStore';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);