import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hello';
import Greeting from './mycomponents/Greeting';
import PropsInFunctionalComponent from './mycomponents/PropsInFunctionalComponent';
import PropsInClassComponent from './mycomponents/PropsInClassComponent';

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
          Learn React with Moneruzzaman.
        </a>
        <Hello></Hello>
        <Greeting></Greeting>
        <PropsInFunctionalComponent name="Moneruzzaman"></PropsInFunctionalComponent>
        <PropsInFunctionalComponent name="Umair"></PropsInFunctionalComponent>
        <PropsInFunctionalComponent name="Momin"></PropsInFunctionalComponent>

        <PropsInClassComponent name="moneruzzaman"></PropsInClassComponent>
        <PropsInClassComponent name="umair"></PropsInClassComponent>
        <PropsInClassComponent name="momin"></PropsInClassComponent>

      </header>
    </div>
  );
}

export default App;
