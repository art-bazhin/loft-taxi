import React, { useContext } from 'react';
import { Header } from './components/Header/Header';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { MapPage } from './pages/MapPage/MapPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withAuth, AuthContext } from './contexts/AuthContext';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = withAuth(() => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <CssBaseline />
      {isLoggedIn && <Header />}
      <div style={{ paddingTop: isLoggedIn ? '64px' : '0' }}>
        <Switch>
          <Route
            path="/login"
            render={() => (isLoggedIn ? <Redirect to="/" /> : <LoginPage />)}
            exact
          />
          <Route
            path="*"
            render={() =>
              isLoggedIn ? (
                <Switch>
                  <Route path="/map" component={MapPage} />
                  <Route path="/profile" component={ProfilePage} />
                  <Redirect to="/map" />
                </Switch>
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
      </div>
    </>
  );
});

export default App;
