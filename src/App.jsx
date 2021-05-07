import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { LoginPage } from './components/LoginPage/LoginPage';
import { HomePage } from './components/MainPage/HomePage';
import { AddPage } from './components/MainPage/AddPage';
import { PrivateRoute } from './components/PrivateRoute';
import { initialize } from './redux/initializingApp/thunks';
import { authViaGoogle } from './redux/auth/thunks';
import './App.css';
import { Navbar } from './components/Navbar';

const App = ({ initialize, ...props }) => {
  const history = useHistory();

  useEffect(() => {
    initialize();
  }, [initialize])

  const authHandler = () => {
    props.authViaGoogle().then(() => {
      history.push('/main/home')
    })
  }


  return (
    <>
      {props.initializingApp
        ? 'Loading...'
        : <div className="App">
          <Switch>
            <Route exact path='/'>
              {props.isUserLogin ? <Redirect to='/main/home' /> : <LoginPage
                authHandler={authHandler}
              />}
            </Route>
            <PrivateRoute
              path='/main'
              isUserLogin={props.isUserLogin}
            >
              <Navbar />
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
  authViaGoogle
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
