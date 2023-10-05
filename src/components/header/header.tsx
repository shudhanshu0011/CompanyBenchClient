import logo from "@assets/logo.png";
import { RootState } from "@src/store";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Navigation } from "../navigation";
import { UserHeader } from "../user-header";
import "./header.scss";

export const Header = (): JSX.Element => {
  const location = useLocation();
  const isLoginPage =
    location.pathname === "/signin" || location.pathname === "/signup";
  const user = useSelector((state: RootState) => state.userData.user);
  const isUserLoggedIn = !(user === undefined) && user.guid !== "";

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
          {!isLoginPage && <Navigation />}
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
            <UserHeader user={user}></UserHeader>
          )}
        </div>
      </div>
    </header>
  );
};
