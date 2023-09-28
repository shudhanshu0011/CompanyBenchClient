import { useEffect, useState } from 'react';
import { PageWrapper } from '@components/page-wrapper/page-wrapper';
import { ContactUsForm } from '@src/components/contact-us-form';
import blogsData from '@assets/content/mock/blog-data';
import { Btn } from '@common/button';
import userIcon from "@assets/icons/user-icon.png";
import blogDetailImg from "@assets/icons/blog_Detail.jpg";
import "./blog.scss";

interface Blog {
  category: string;
  blogHeading: string;
  content: string;
  url: string;
  author: string;
  date: string;
};

export const Blogs: React.FC = (): JSX.Element => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    setBlogs(blogsData);
  }, []);

  return (
    <div>
      <PageWrapper>
        <section>
          <div className='blog-header'>
            <h2>Blog</h2>
            <p>Get the latest blogs, updates and tips</p>
          </div>
          <div className='blog-container'>
            <h2>Latest Posts</h2>
            <p>Don't miss the trending blogs</p>
            <div className='blog-body'>
              <div className='blog-content'>
                {
                  blogs.map((temp_blog) => (
                    <div className='blog-card'>
                      <img src={blogDetailImg}></img>
                      <Btn className='btn-apply-now category-btn' title={temp_blog.category} />
                      <h5>{temp_blog.blogHeading}</h5>
                      <span>{temp_blog.content.slice(0,600)}</span>
                      <div>
                        <a href={temp_blog.url}>
                          <Btn className='btn-read-more' title='Read More' />
                        </a>
                      </div>
                      <div className='author'>
                        <img src={userIcon}></img>
                        <div>
                          <p>{temp_blog.author}</p>
                          <p>{temp_blog.date}</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className='filter-form'>
                <div className='blog-filter'>
                  <div className='blog-filter-header'>
                    <h5>Category</h5>
                  </div>
                  <div className='blog-categories'>
                    <div>
                      <button><span>Company Bench</span></button>
                    </div>
                    <div>
                      <button><span>General</span></button>
                    </div>
                    <div>
                      <button><span>Hire Contractors</span></button>
                    </div>
                  </div>
                </div>
                <div className='enquiry-form'>
                  <div className='send-enquiry-header'>
                    <h5>Send Us Inquiry</h5>
                  </div>
                  <ContactUsForm/>
                </div>
                <div className='we-hiring-banner'>
                  <span className='we-hiring-banner-1' >WE ARE</span><br/>
                  <span className='we-hiring-banner-2' >HIRING</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>
    </div>
  );
};
