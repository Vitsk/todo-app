import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { FullSizeLoader } from './components/Loaders';
import { LoginPage } from './components/LoginPage/LoginPage';
import HomePage from './components/MainPage/HomePage';
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
        ? <FullSizeLoader />
        : <div className="App">
          <Switch>
            <Route exact path='/'>
              {
                props.isUserLogin
                  ? <Redirect to='/main' />
                  : <LoginPage
                    authHandler={props.authViaGoogle}
                  />
              }
            </Route>

            <PrivateRoute
              path='/main'
              isUserLogin={props.isUserLogin}
            >
              <Navbar signOut={props.signOut} />
              <HomePage />
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
