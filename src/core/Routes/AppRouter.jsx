import { frontendRoutes } from "core/consts/frontendRoutes";
import { Routes, Route } from "react-router-dom";
import ProtectedAppRoute from "core/Routes/ProtectedAppRoute";
import PortfolioDashboard from "modules/components/PortfolioDashboard/Dashboard";
import HomePageContainer from "modules/containers/HomePageContainer";
import LoginContainer from "core/containers/Authentication/LoginContainer";

const AppRouter = ({ user, isAuth }) => {
  console.log("is Auth----", isAuth, user);
  return (
    <Routes>
      <Route
        exact
        path={frontendRoutes.urlHomePage}
        element={<HomePageContainer />}
      />
      <Route
        exact
        path={frontendRoutes.urlLogin}
        element={<LoginContainer isAuth={isAuth} />}
      />
      <Route element={<ProtectedAppRoute user={user} isAuth={isAuth} />}>
        <Route
          path={frontendRoutes.urlPortfolioDashboard}
          element={<PortfolioDashboard />}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
