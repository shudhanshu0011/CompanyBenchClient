import { styled } from "styled-components";
import { theme } from "../../styles/styles.constant";
import { Nav, Navbar } from "react-bootstrap";

export const NavBrand = styled(Navbar.Brand)`
  padding: 20px 0;
  p {
    font-size: 13px;
    text-align: center;
    color: ${theme.colors.textBlue};
    margin-bottom:0;
  }
`;

export const NavLink = styled(Nav.Link)`
 
  border-radius: 24px;
  width: auto;
  max-width: 100%;
  color: ${theme.colors.black};
  &:hover {
    color: ${theme.colors.bgBlue};
  }
  &.active{
    border: 2px solid ${theme.colors.bgBlue};
  }
`;

export const NavLinkWrapper = styled(Nav)``;

export const NavBar = styled(Navbar)`
  .navbar-nav {
    .nav-link {
        padding: 6px 16px;
        margin: 0 4px;
    }
  }
`;
