import { PageWrapper } from '@components/page-wrapper/page-wrapper';
import blogs from '@assets/content/mock/blog-data';
import backgroundImage from "@assets/images/img-single (1).png";
import blogbackgroundimg from "@assets/icons/blog_Detail.jpg";
import "./blog-desc-page.scss";
import { Btn } from '@src/common/button';
import { Link } from 'react-router-dom';

interface BlogDescPageProps {
  url: string;
}

const BlogDescPage = ({ url: pageUrl }: BlogDescPageProps): JSX.Element => {
  const blog = blogs.find((blog) => blog.url===pageUrl)

  return (
    <div>
      <PageWrapper>
        <section>
          <div className='blog-header-img-desc'>
            <img src={backgroundImage}></img>
            <div className='blog-other-details'>
              <h2>
                {blog?.blogHeading}
              </h2>
              <div className='blog-post-details'>
                <div>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" ><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path></svg>
                  <span>{blog?.author}</span>
                </div>
                <div>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"></path><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path></svg>
                  <span>{blog?.date}</span>
                </div>
                <div>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path></svg>
                  <span>hello@companybench.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className='blog-other-content'>
            <div className='blog-back-btn'>
              <Link to='/c/blogs'>
                <Btn
                  className="back-button"
                  title="Back"
                />
              </Link>
            </div>
            <div className='blog-img-content'>
              <img src={blogbackgroundimg}></img>
              <div className='blog-content-detail'>
                <h3>{blog?.blogHeading}</h3>
                <div>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" ><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path></svg>
                  <span>{blog?.author}</span>
                </div>
                <div>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path></svg>
                  <span>hello@companybench.com</span>
                </div>
                <div>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"></path><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path></svg>
                  <span>{blog?.date}</span>
                </div>
                <br/>
                <span className='content-starter'>{blog?.blogHeading}</span>
                <br/>
                <span>{blog?.content}</span>
              </div>
            </div>            
          </div>
        </section>
      </PageWrapper>
    </div>
  );
};

export default BlogDescPage;
