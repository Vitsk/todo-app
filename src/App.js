import { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import './App.css';
import { LoginPage } from './components/LoginPage/LoginPage';
import { MainPage } from './components/MainPage/MainPage';
import { PrivateRoute } from './components/PrivateRoute';
import { app, provider } from './firebase';

const App = () => {
  const history = useHistory();
  const [user, setUser] = useState(false);

  useEffect(() => {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(true)
        history.push('/main')
      } else {
        setUser(false)
        history.push('/')
      }
    })
  }, [])

  const authHandler = () => {
    app.auth().signInWithPopup(provider).then(result => {
      setUser(true);
      history.push('/main')
    })
  }
  
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <LoginPage 
            authHandler={authHandler}
          />
        </Route>
        <PrivateRoute 
          path='/main'
          user={user}
        >
          <MainPage />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
