import './App.css';
import { SignInButton } from './components/SignInButton/SignInButton';

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Welcome to Todo app</h1>
      <SignInButton 
        className="signUpBtn"
      />
    </div>
  );
}

export default App;
