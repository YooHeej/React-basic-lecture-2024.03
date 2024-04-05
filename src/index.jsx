import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './apps/App99_eaxm';
import reportWebVitals from './reportWebVitals';
import BasicTable from './mui/BasicTable';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{marginTop:'40px', marginLeft: '20px'}}></div>
      <BasicTable />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
