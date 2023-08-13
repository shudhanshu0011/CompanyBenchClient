import logo from "../../assets/logo.png";
import { Btn } from "../../common/button";
import { Navigation } from "../navigation";
import "./header.scss";


export const Header = (): JSX.Element => {
  return (
    <header className="header sticky-bar">
      <div className="container">
        <div className="main-header">
          <div className="header-left">
            <div className="header-logo">
              <a className="d-flex" href="index.html">
                <img alt="company-bench" src={logo} />
              </a>
            </div>
          </div>
          <Navigation />
          <div className="header-right">
            <div className="block-signin">
              <a
                className="text-link-bd-btom hover-up"
                href="page-register.html"
              >
                Register
              </a>
              <Btn
                className="btn btn-default btn-shadow ml-40 hover-up"
                title=" Sign in"
                href="page-signin.html"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
