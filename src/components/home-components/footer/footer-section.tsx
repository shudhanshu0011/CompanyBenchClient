import "./footer-section.scss";
import logo from "../../../assets/logo.png";

export const FooterSection = () => {
  return (
    <section className='footer-container'>
      <div className="company-address">
        <img alt="company-bench" src={logo} />
        <p>hello@companybench.com<br/>
        402, Summer Court, Magarpatta City,<br/>
        Pune, Maharashtra 411013.</p>
        <div className="footer-social">
          <a><img src="https://companybench.com/assets/cb-new-style/Frontend/imgs/template/icons/facebook.svg"></img></a>
          <a><img src="https://companybench.com/assets/cb-new-style/Frontend/imgs/template/icons/twitter.svg"></img></a>
          <a><img src="https://companybench.com/assets/cb-new-style/Frontend/imgs/template/icons/linkedin.svg"></img></a>
        </div>
      </div>
      <div className="footer-nav-link">
        <div className="footer-company">
          <h6>Company</h6>
          <a href="/c/top-10-It-companies-in-india">Top 10 IT Companies In India</a><br/>
          <a href="/c/software-development-company-in-mumbai">IT Companies In Mumbai</a><br/>
          <a href="/c/it-companies-pune">IT Companies in Pune</a><br/>
          <a href="/c/list-software-companies-in-bangalore">IT Companies In Bangalore</a><br/>
        </div>
        <div className="footer-services">
          <h6>Services</h6>
          <a href="/c/staff-augmentation">Staff Augmentation</a><br/>
          <a href="/c/direct-hire">Direct Hire</a><br/>
          <a href="/c/hire-train-deploy">Hire Train & Deploy</a><br/>
          <a href="/c/master-vendor">Master Vendor</a><br/>
        </div>
        <div className="footer-hiring">
          <h6>Hiring</h6>
          <a href="/remote-developer-jobs">Remote Developer Jobs</a><br/>
          <a href="/c/developers-resume">Developers Resume</a><br/>
          <a href="/c/freelancers">Freelancers</a><br/>
          <a>Interview Q&A</a><br/>
        </div>
        <div className="footer-other-link">
          <h6>Other Link</h6>
          <a href="/c/about">About Us</a><br/>
          <a href="/c/contact">Contact Us</a><br/>
          <a href="/c/blogs">Blog</a><br/>
          <a href="/c/cfaq">Client FAQ</a><br/>
          <a href="/c/vfaq">Vendor FAQ</a><br/>
          <a href="/privacy-policy">Privacy Policy</a><br/>
        </div>
      </div>
    </section>
  );
};
