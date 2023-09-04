import React, { useState } from 'react';
import blogs from '../../assets/blog-data';
import { PageWrapper } from '@components/page-wrapper/page-wrapper';
import "./blog.scss"
import { Btn } from '@common/button';
import { useForm, SubmitHandler } from "react-hook-form";

type Blog = {
  id: number;
  category: string;
  blogHeading: string;
  content: string;
  author: string;
  date: string;
};

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  contactNumber: number;
  description: string;
};

export const Blogs: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

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
                      <img src='https://companybench.com/assets/images/blog_Detail.jpg'></img>
                      <Btn className='btn-apply-now category-btn' title={temp_blog.category} />
                      <h5>{temp_blog.blogHeading}</h5>
                      <span>{temp_blog.content}</span>
                      <div>
                        <Btn className='btn-read-more' title='Read More' />
                      </div>
                      <div className='author'>
                        <img src='https://companybench.com/assets/images/user-icon.png'></img>
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div>
                        {errors.firstName && <span style={{fontSize:'10px', paddingLeft:'15px', color:'red'}}>*First Name is required</span>}
                        <input placeholder="First Name" {...register("firstName", { required: true })}></input>
                      </div>
                      <div>
                        {errors.lastName && <span style={{fontSize:'10px', paddingLeft:'15px', color:'red'}}>*Last Name is required</span>}
                        <input placeholder="Last Name" {...register("lastName", { required: true })}></input>
                        
                      </div>
                      <div>
                        {errors.email && <span style={{fontSize:'10px', paddingLeft:'15px', color:'red'}}>*Email is required</span>}
                        <input placeholder="Email" {...register("email", { required: true })}></input>                        
                      </div>
                      <div>
                        {errors.companyName && <span style={{fontSize:'10px', paddingLeft:'15px', color:'red'}}>*Company Name is required</span>}
                        <input placeholder="Company Name" {...register("companyName", { required: true })}></input>                        
                      </div>
                      <div>
                        {errors.contactNumber && <span style={{fontSize:'10px', paddingLeft:'15px', color:'red'}}>*Contact Number is required</span>}
                        <input placeholder="Contact Number" {...register("contactNumber", { required: true })}></input>                        
                      </div>
                      <div>
                        <textarea rows={7} placeholder="Description" {...register("description", { required: true })}></textarea>
                      </div>
                      <input type="submit" className="query-contact-btn" style={{width:'100px', padding:'0px'}}/>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>
    </div>
  );
};
