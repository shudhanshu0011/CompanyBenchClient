import logo from "@assets/logo.png";
import { RootState } from "@src/store";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navigation } from "../navigation";
import { UserHeader } from "../user-header";
import "./header.scss";
import { useCallback, useEffect, useState } from "react";
import { useLogout } from "@src/hooks/useLogout";
import { resetUser } from "@src/store/reducer/userDataReducer";
import { queryClient } from "@src/main";

export const Header = (): JSX.Element => {
  const location = useLocation();
  // const navigate = useNavigate();
  const isLoginPage =
    location.pathname === "/signin" || location.pathname === "/signup";
  const user = useSelector((state: RootState) => state.userData.user);
  const isUserLoggedIn =
    !(user === undefined) && user.guid !== "" && Object.keys(user).length > 0;

  const navigate = useNavigate();
  const { mutate: logout } = useLogout();
  const [loggedOut, setLoggedOut] = useState(false);
  const dispatch = useDispatch();
  // const userData = useSelector((state: RootState) => state.userData.user);
  // const isUserLoggedIn =
  //   !(userData === undefined && Object.keys(userData).length > 0) &&
  //   userData.guid !== "";
  const resetStore = useCallback(() => {
    try {
      //const data = await customerApi.getCustomer(); //works but not what I wanted
      dispatch(resetUser());
    } catch (err) {
      console.error(err);
    }
  }, [dispatch]);

  // useEffect(() => {
  //   if (!user?.guid && !isLoginPage) {
  //     dispatch(resetUser());
  //     navigate("/");
  //   }
  // }, [logout, dispatch, loggedOut]);

  useEffect(() => {
    setTimeout(() => {
      if (loggedOut) {
        navigate("/");
      }
    }, 2000);
  }, [loggedOut, navigate]);

  const logoutUser = async () => {
    await logout();
    await queryClient.removeQueries();
    resetStore();
    setLoggedOut(true);
  };

  return (
    <header className="header sticky-bar">
      <div className="container">
        <div className="main-header">
          <div className="header-left">
            <div className="header-logo">
              <a className="d-flex" href="/c/home">
                <img alt="company-bench" src={logo} />
              </a>
            </div>
          </div>
          {!isLoginPage && !isUserLoggedIn && <Navigation />}
          {!isLoginPage && !isUserLoggedIn && (
            <div className="header-right">
              <div className="block-signin">
                <Link className="text-link-bd-btom hover-up" to="/signup">
                  Register
                </Link>
                <Link
                  className="btn btn-default btn-shadow ml-40 hover-up"
                  to="/signin"
                >
                  Sign in
                </Link>
              </div>
            </div>
          )}
          {!isLoginPage && isUserLoggedIn && (
            <UserHeader user={user} handleLogout={logoutUser}></UserHeader>
          )}
        </div>
      </div>
    </header>
  );
};
