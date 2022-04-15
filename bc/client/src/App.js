import logo from './logo.svg';
import './App.css';

import { Drizzle, generateStore } from "@drizzle/store";
import { DrizzleContext } from "@drizzle/react-plugin";
import Greeter from "./artifacts/Greeter.json";

const options = { contracts: [Greeter] };
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

<DrizzleContext.Provider drizzle={drizzle}>
  <App />
</DrizzleContext.Provider>

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
