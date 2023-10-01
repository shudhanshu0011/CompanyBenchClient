import logo from "@assets/logo.png";
import userIcon from "@assets/images/user-icon.png"
import "./user-header.scss";


export const UserHeader = (): JSX.Element => {
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
          <div className="headers-right">
            <img src={userIcon}></img>
            <div>
              <div>
                <strong>User Name</strong>
              </div>
              <a>Client</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
