import NavbarWrapper from "core/components/NavbarWrapper";
import AppRouter from "core/Routes/AppRouter";
import { Outlet } from "react-router-dom";
const AppContainer = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  // useEffect(() => {}, []);

  const isAuth = !!user?.accessToken || false;
  console.log(isAuth);

  return (
    <>
      <NavbarWrapper isAuth={isAuth} />
      <AppRouter user={user} isAuth={isAuth} />
      <Outlet />
    </>
  );
};

export default AppContainer;
