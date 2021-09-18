import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Login Form</h1>
      <div className = "userName">
        <label>
          Username:
        <input type="text" name = "username"></input>
        </label>
      </div>

      <div className = "password">
      <label>
        Password:
        <input type="password" name = "password"></input>
        </label>
      </div>

    </div>
  );
}

export default App;
