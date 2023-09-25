import { useLocation } from "react-router-dom";
import logo from "@assets/logo.png";
import { Btn } from "@common/button";
import { Navigation } from "../navigation";
import "./header.scss";

export const Header = (): JSX.Element => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/signin" || location.pathname === "/signup";

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
          {!isLoginPage && (
            <div className="header-right">
              <div className="block-signin">
                <a
                  className="text-link-bd-btom hover-up"
                  href="/signup"
                >
                  Register
                </a>
                <Btn
                  className="btn btn-default btn-shadow ml-40 hover-up"
                  title=" Sign in"
                  href="/signin"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
