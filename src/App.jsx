import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { LoginPage } from './components/LoginPage/LoginPage';
import { AddPage } from './components/MainPage/AddPage';
import { HomePage } from './components/MainPage/HomePage';
import { Navbar } from './components/Navbar';
import { PrivateRoute } from './components/PrivateRoute';
import { authViaGoogle, signOut } from './redux/auth/thunks';
import { initialize } from './redux/initializingApp/thunks';

const App = ({ initialize, ...props }) => {
  useEffect(() => {
    initialize();
  }, [initialize])


  return (
    <>
      {props.initializingApp
        ? 'Loading...'
        : <div className="App">
          <Switch>
            <Route exact path='/'>
              {props.isUserLogin ? <Redirect to='/main/home' /> : <LoginPage
                authHandler={props.authViaGoogle}
              />}
            </Route>
            <PrivateRoute
              path='/main'
              isUserLogin={props.isUserLogin}
            >
              <Navbar 
                signOut={props.signOut}
              />
              <Route path="/main/home">
                <HomePage />
              </Route>
              <Route path="/main/add">
                <AddPage />
              </Route>
            </PrivateRoute>
          </Switch>
        </div>
      }
    </>

  );
}

const mapStateToProps = (state) => {
  return {
    initializingApp: state.initializingApp.initializingApp,
    isUserLogin: state.auth.isUserLogin
  }
}

const mapDispatchToProps = {
  initialize,
  authViaGoogle,
  signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
