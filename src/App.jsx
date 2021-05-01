import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import { LoginPage } from './components/LoginPage/LoginPage';
import { MainPage } from './components/MainPage/MainPage';
import { PrivateRoute } from './components/PrivateRoute';
import { initialize } from './redux/reducers/initialReducer';
import { auth } from './redux/reducers/loginReducer';

const App = (props) => {
  const history = useHistory();

  useEffect(() => {
    props.initialize();
  }, [])

  const authHandler = () => {
    props.auth().then(() => {
      history.push('/main')
    })
  }


  return (
    <>
      {props.initializingApp ? 'Loading...' :
        <div className="App">
          <Switch>
            <Route exact path='/'>
              {props.isUserLogin ? <Redirect to='/main' /> : <LoginPage
                authHandler={authHandler}
              />}
            </Route>
            <PrivateRoute
              path='/main'
              isUserLogin={props.isUserLogin}
            >
              <MainPage />
            </PrivateRoute>
          </Switch>
        </div>
      }
    </>

  );
}

const mapStateToProps = (state) => {
  return {
    initializingApp: state.initialReducer.initializingApp,
    isUserLogin: state.loginReducer.isUserLogin
  }
}

const mapDispatchToProps = {
  initialize,
  auth
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
