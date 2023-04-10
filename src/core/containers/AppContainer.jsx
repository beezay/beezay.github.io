import NavbarWrapper from 'core/components/NavbarWrapper';
import AppRouter from 'core/Routes/AppRouter';
import { useMemo } from 'react';
import { Outlet } from 'react-router-dom';
const AppContainer = () => {
  const user = JSON.parse(localStorage.getItem('user')) || {};

  // useEffect(() => {}, []);

  const isAuth = useMemo(() => {
    return !!user?.accessToken || false;
  }, [user]);

  return (
    <>
      <NavbarWrapper isAuth={isAuth} />
      <AppRouter user={user} isAuth={isAuth} />
      <Outlet />
    </>
  );
};

export default AppContainer;
