import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "./user-header.scss";


export const UserHeader = (): JSX.Element => {
  return (
    <Navbar sticky="top" className="bg-body-tertiary justify-content-between" expand="lg">
      <Navbar.Brand style={{padding: '20px'}}><img src={logo} style={{maxHeight: '22px'}}></img></Navbar.Brand>
      <Nav.Link style={{display: 'flex', alignItems: 'center', paddingRight: "51px"}}>
        <img src="https://github.com/shudhanshu0011/simplewebpage/blob/master/public/images/user-icon.png?raw=true" style={{maxHeight: '35px'}}></img>
        <span style={{fontSize:'14px', paddingLeft:' 5px', fontWeight:'1000'}}>Test User</span>
      </Nav.Link>
    </Navbar>
  );
};
