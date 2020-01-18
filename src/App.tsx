import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { IPageId } from './types';
import { MapPage } from './pages/MapPage/MapPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';

const App: React.FC = () => {
  const [pageId, setPageId] = useState<IPageId>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setPageId('map');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPageId('login');
  };

  const PAGES: { [id in IPageId]: JSX.Element } = {
    map: <MapPage />,
    login: <LoginPage onLogin={handleLogin} />,
    profile: <ProfilePage />
  };

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        onPageChange={pageId => setPageId(pageId)}
      />
      <div style={{ padding: '15px' }}>{PAGES[pageId]}</div>
    </>
  );
};

export default App;
