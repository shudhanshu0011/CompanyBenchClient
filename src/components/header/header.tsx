import React from "react";
import { Navigation } from "../navigation";
import indiaFlag from '../../assets/india.png';
import ukFlag from '../../assets/uk.jpg';
import { TopBar } from "./styled";

export const Header = ():JSX.Element => {
  return (
    <header>
      <div className="nav-bar-fixed nav-pc cust_header">
        <TopBar>
          <div className="container">
            <a href="tel:+91-8371010101">
              <img src={indiaFlag} /> +91-8371010101{" "}
            </a>
            <a href="tel:+1-5612200044">
              <img src={ukFlag} /> +1-5612200044{" "}
            </a>
            <a href="mailto:hello@companybench.com">
              <i className="fa fa-envelope"></i> hello@companybench.com
            </a>
          </div>
        </TopBar>
        <Navigation/>
      </div>
    </header>
  );
};
