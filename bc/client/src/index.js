import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Drizzle, generateStore } from "@drizzle/store";
import { DrizzleContext } from "@drizzle/react-plugin";

import Greeter from "./artifacts/Greeter.json";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// const options = { contracts: [SimpleStorage] };
// const drizzleStore = generateStore(options);
// const drizzle = new Drizzle(options, drizzleStore);

// ReactDOM.render(
//   <DrizzleContext.Provider drizzle={drizzle}>
//       <App />
//   </DrizzleContext.Provider>,
// document.getElementById("root"));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
