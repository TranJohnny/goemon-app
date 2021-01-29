import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import StockDetailsPage from './components/StockDetailsPage';
import DashboardPage from './components/DashboardPage';
import * as sessionActions from './store/session';
import SplashPage from './components/SplashPage';

function App() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  // useEffect(() => {
  //   console.log('Hello, ', sessionUser);
  // }, [sessionUser]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <SplashPage />
          </Route>
          <Route exact path="/dashboard">
            <DashboardPage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path={`/stocks/:id(\\d+)`}>
            <StockDetailsPage />
          </Route>
          <Route>
            <>Page Not Found</>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
