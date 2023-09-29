import { useEffect, useState } from 'react';
import { PageWrapper } from '@components/page-wrapper/page-wrapper';
import { ContactUsForm } from '@src/components/contact-us-form';
import blogsData from '@assets/content/mock/blog-data';
import { Btn } from '@common/button';
import userIcon from "@assets/icons/user-icon.png";
import blogDetailImg from "@assets/icons/blog_Detail.jpg";
import leftArrow from "@assets/icons/icon-arrow-left.30ade3f52972d1898496.svg";
import rightArrow from "@assets/icons/icon-arrow-right.59e1848f9cbc18d7327a.svg"
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
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    setBlogs(blogsData);
  }, []);

  const handleCategory = (category: any) => {
    setSelectedCategory(category);
  };

  const filteredBlogs = selectedCategory === 'All'
    ? blogs : blogs.filter((blog) => blog.category === selectedCategory);

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
            <p className='pl-30'>Don't miss the trending blogs</p>
            <div className='blog-body'>
              <div>
                <div className={`${filteredBlogs.length === 0 ? 'no-blog-contents' : 'blog-content'}`}>
                  {
                    filteredBlogs.length===0 ? 
                    <div className='no-blog-content'>
                      Opps, no blogs available
                    </div> :
                    filteredBlogs.map((temp_blog) => (
                      <div className='blog-card'>
                        <img src={blogDetailImg}></img>
                        <Btn className='btn-apply-now category-btn' title={temp_blog.category} handleOnClick={() => handleCategory(temp_blog.category)}/>
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
                          <div><p className='author-email'>hello@companybench.com</p></div>
                        </div>
                      </div>
                    ))
                  }
                </div>
                <div className='pagination-navigation'>
                  <div><img src={leftArrow}></img></div>
                  <p>1</p>
                  <div><img src={rightArrow}></img></div>
                </div>
              </div>
              <div className='filter-form'>
                <div className='blog-filter'>
                  <div className='blog-filter-header'>
                    <h5>Category</h5>
                  </div>
                  <div className='blog-categories'>
                    <div>
                      <button onClick={() => handleCategory('Company Bench')}><span>Company Bench ({blogs.filter(categoryCount => categoryCount.category==='Company Bench').length})</span></button>
                    </div>
                    <div>
                      <button onClick={() => handleCategory('General')}><span>General ({blogs.filter(categoryCount => categoryCount.category==='General').length})</span></button>
                    </div>
                    <div>
                      <button onClick={() => handleCategory('Hire Contractors')}><span>Hire Contractors ({blogs.filter(categoryCount => categoryCount.category==='Hire Contractors').length})</span></button>
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
