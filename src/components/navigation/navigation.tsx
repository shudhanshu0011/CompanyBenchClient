import { NavLink } from "react-router-dom";

export const Navigation = (): JSX.Element => {
  return (
    <div className="header-nav">
      <nav className="nav-main-menu">
        <ul className="main-menu">
          <li className="dashboard">
            <NavLink to="/apply">Apply for Job</NavLink>
          </li>
          <li>
            <NavLink to="/c/hire-talent">Hire Developer</NavLink>
          </li>
          <li>
            <NavLink to="/jobs">Find a Job</NavLink>
          </li>
          <li>
            <NavLink to="/candidates">Find Candidates</NavLink>
          </li>
          <li>
            <NavLink to="/c/blogs">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/c/contact">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
      <div className="burger-icon burger-icon-white">
        <span className="burger-icon-top"></span>
        <span className="burger-icon-mid"></span>
        <span className="burger-icon-bottom"></span>
      </div>
      <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar sidebar-visible">
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav>
                  <ul className="main-menu">
                    <li className="dashboard apply_for_job">
                      <a href="/apply">Apply For Job </a>
                    </li>
                    <li>
                      <a href="/c/hire-talent" className="dashboard2">
                        <span className="name">Hire Developer</span>
                      </a>
                    </li>
                    <li>
                      <a href="/jobs" className="dashboard2">
                        <span className="name">Find a Job</span>
                      </a>
                    </li>
                    <li>
                      <a href="/candidates" className="dashboard2">
                        <span className="name">Find Candidates</span>
                      </a>
                    </li>
                    <li>
                      <a href="/c/blogs" className="dashboard2">
                        <span className="name">Blogs</span>
                      </a>
                    </li>
                    <li>
                      <a href="/c/contact" className="dashboard2">
                        <span className="name">Contact Us</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="mobile-account">
                <h6 className="mb-10">Your Account</h6>
                <div className="mb-15 mt-15">
                  <a href="/signup">Register</a>
                </div>
                <div className="mb-15 mt-15">
                  <a href="#" className="btn btn-default btn-shadow hover-up">
                    Sign in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
