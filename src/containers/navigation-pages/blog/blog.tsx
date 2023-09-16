import blogs from '../../../assets/content/mock/blog-data';
import { PageWrapper } from '@components/page-wrapper/page-wrapper';
import "./blog.scss"
import { Btn } from '@common/button';
import { useForm, SubmitHandler } from "react-hook-form";
import userIcon from "../../../assets/icons/user-icon.png";
import blogDetailImg from "../../../assets/icons/blog_Detail.jpg"


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
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div>
                        {errors.firstName && <span>First Name is required</span>}
                        <input placeholder="First Name" {...register("firstName", { required: true })} className={errors.firstName ? "error-input" : "form-input-field"}></input>
                      </div>
                      <div>
                        {errors.lastName && <span>Last Name is required</span>}
                        <input placeholder="Last Name" {...register("lastName", { required: true })} className={errors.lastName ? "error-input" : "form-input-field"}></input>                        
                      </div>
                      <div>
                        {errors.email && <span>Email is required</span>}
                        <input placeholder="Email" {...register("email", { required: true })} className={errors.email ? "error-input" : "form-input-field"}></input>                        
                      </div>
                      <div>
                        {errors.companyName && <span>Company Name is required</span>}
                        <input placeholder="Company Name" {...register("companyName", { required: true })} className={errors.companyName ? "error-input" : "form-input-field"}></input>                        
                      </div>
                      <div>
                        {errors.contactNumber && <span>Contact Number is required</span>}
                        <input placeholder="Contact Number" {...register("contactNumber", { required: true })} className={errors.contactNumber ? "error-input" : "form-input-field"}></input>                        
                      </div>
                      <div>
                        {errors.description && <span>Description is required</span>}
                        <textarea rows={7} placeholder="Description" {...register("description", { required: false })} className={errors.description ? "error-input" : "form-input-field"}></textarea>
                      </div>
                      <input type="submit" className="query-contact-btn" />
                    </form>
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
