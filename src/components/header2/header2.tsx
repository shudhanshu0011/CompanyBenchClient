import logo from "../../assets/logo.png";
import "./header2.scss";


export const Header2 = (): JSX.Element => {
  return (
    <header className="header sticky-bar">
      <div className="container">
        <div className="main-header">
          <div className="header-left2">
            <div className="header-logo">
              <a className="d-flex" href="index.html">
                <img alt="company-bench" src={logo} />
              </a>
            </div>
          </div>
          <div className="header-right2">
            <img src="https://github.com/shudhanshu0011/simplewebpage/blob/master/public/images/user-icon.png?raw=true"></img>
            <div>
              <div className="client-name">Test Username</div>
              <div className="client-status">Clent</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
