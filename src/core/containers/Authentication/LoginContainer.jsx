import { firebaseAuth, googleAuthProvider } from "core/firebase/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { frontendRoutes } from "core/consts/frontendRoutes";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoginPage from "modules/pages/LoginPage";

const LoginContainer = ({ isAuth }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate(frontendRoutes.urlHomePage);
    }
  }, [isAuth]);

  const saveUserInfo = (user) => {
    const userInfo = {
      accessToken: user?.accessToken,
      userId: user?.uid,
      lastLoggedIn: user?.metadata?.lastLoginAt,
      isEmailVerified: user?.emailVerified || false,
      userDisplayName: user?.displayName || "",
      userEmail: user?.email || "",
      userAvatar: user?.photoURL || "",
    };
    localStorage.setItem("user", JSON.stringify(userInfo));
    const redirectOrigin =
      location.state?.from?.pathname || frontendRoutes.urlHomePage;
    navigate(redirectOrigin);
  };

  const handleSignInBtn = (loginCredentials) => {
    const { email, password } = loginCredentials;
    if (!email || !password) {
      toast.error("No Email or Password");
    } else {
      signInWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential) => {
          const { user } = userCredential;
          saveUserInfo(user);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };

  const handleSignInWithGoogle = () => {
    signInWithPopup(firebaseAuth, googleAuthProvider)
      .then((result) => {
        const { user } = result;
        saveUserInfo(user);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  return (
    <>
      <LoginPage
        handleSignInWithGoogle={handleSignInWithGoogle}
        handleSignInBtn={handleSignInBtn}
      />
    </>
  );
};

export default LoginContainer;
