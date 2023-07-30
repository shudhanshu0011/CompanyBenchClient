import React from "react";
import logo from "../../assets/logo.png";
import { Btn } from "../../common/button";
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
          <div className="header-nav">
            <nav className="nav-main-menu">
              <ul className="main-menu">
                <li className="dashboard">
                  <a className="" href="index.html">
                    Apply for Job
                  </a>
                </li>
                <li>
                  <a href="jobs-grid.html">Hire Developer</a>
                </li>
                <li>
                  <a href="companies-grid.html">Find a Job</a>
                </li>
                <li>
                  <a href="candidates-grid.html">Find Candidates</a>
                </li>
                <li>
                  <a href="blog-grid.html">Blog</a>
                </li>
                <li>
                  <a href="blog-grid.html">Contact Us</a>
                </li>
              </ul>
            </nav>
            <div className="burger-icon burger-icon-white">
              <span className="burger-icon-top"></span>
              <span className="burger-icon-mid"></span>
              <span className="burger-icon-bottom"></span>
            </div>
          </div>
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
