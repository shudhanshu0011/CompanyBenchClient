import React from "react";

export const Navigation = (): JSX.Element => {
  return (
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
            <a href="/candidates">Find Candidates</a>
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
  );
};
