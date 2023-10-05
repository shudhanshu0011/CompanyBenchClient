import logo from "@assets/logo.png";
import userIcon from "@assets/images/user-icon.png"
import "./user-header.scss";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


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
              <DropdownButton
                as={ButtonGroup}
                key={"Info"}
                title={"Client"}
                className="client-btn"
              >
                <Dropdown.Item eventKey="1">Account ID - 17819</Dropdown.Item>
                <Dropdown.Item eventKey="2">Company - 123</Dropdown.Item>
                <Dropdown.Item eventKey="3">Email - tajejo5180@gronasu.com</Dropdown.Item>
                <Dropdown.Item eventKey="4">Logout</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
