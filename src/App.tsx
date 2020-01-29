import React, { useState, useContext } from 'react';
import { Header } from './components/Header/Header';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { PageId } from './types';
import { MapPage } from './pages/MapPage/MapPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withAuth, AuthContext } from './contexts/AuthContext';

const App = withAuth(() => {
  const [pageId, setPageId] = useState<PageId>('map');

  const { isLoggedIn } = useContext(AuthContext);

  const PAGES: { [id in PageId]: JSX.Element } = {
    map: <MapPage />,
    profile: <ProfilePage />
  };

  const getCurrentPage = (pageId: PageId) => {
    if (!isLoggedIn) return <LoginPage />;
    return PAGES[pageId];
  };

  return (
    <>
      <CssBaseline />
      {isLoggedIn && <Header onPageChange={pageId => setPageId(pageId)} />}
      <div style={{ paddingTop: isLoggedIn ? '64px' : '0' }}>
        {getCurrentPage(pageId)}
      </div>
    </>
  );
});

export default App;
