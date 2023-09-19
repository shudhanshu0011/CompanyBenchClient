import "./review-section.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle";

export const ReviewSection = () => {
  const slidesPerView = window.innerWidth < 800 ? 1 : 3;
  return (
    <section className='review-container'>
      <div className="review-main-container">
        <div className="review-upper-container">
          <h2>Our Happy Customer</h2>
          <div className="review-header-detail">
            <p>When it comes to choosing the right web hosting provider, we know how easy it is to get overwhelmed with the number.</p>
          </div>
        </div>
        <div className="review-lower-container">
          <Swiper
            spaceBetween={40}
            slidesPerView={slidesPerView}
            loop={true}
          >
            <SwiperSlide>
              <div className="review-card">
                <div className="talk-bubble tri-right btm-left-in">
                  <div className="talktext">
                    <p>I always get top-quality Salesforce.com and FullStack developers from Company Bench instantly. Will highly recommend them.</p>
                  </div>
                </div>
                <h6>Sandra Bomar</h6>
                <span>Businessmen</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-card">
                <div className="talk-bubble tri-right btm-left-in">
                  <div className="talktext">
                    <p>We are able to deliver and win more projects with the immense help that we got by Company Bench resources available within 2 days.</p>
                  </div>
                </div>
                <h6>Ann Doughtie</h6>
                <span>Businessmen</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-card">
                <div className="talk-bubble tri-right btm-left-in">
                  <div className="talktext">
                    <p>Company Bench helped me with turn key project contractors my staff with .Net developers on an immediate basis. I am Looking forward to avail their services again in the future.</p>
                  </div>
                </div>
                <h6>John Barker</h6>
                <span>Businessmen</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-card">
                <div className="talk-bubble tri-right btm-left-in">
                  <div className="talktext">
                    <p>I always get top-quality Salesforce.com and FullStack developers from Company Bench instantly. Will highly recommend them.</p>
                  </div>
                </div>
                <h6>Simon Lobanov</h6>
                <span>Businessmen</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-card">
                <div className="talk-bubble tri-right btm-left-in">
                  <div className="talktext">
                    <p>I always get top-quality Salesforce.com and FullStack developers from Company Bench instantly. Will highly recommend them.</p>
                  </div>
                </div>
                <h6>Sandra Bomar</h6>
                <span>Businessmen</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-card">
                <div className="talk-bubble tri-right btm-left-in">
                  <div className="talktext">
                    <p>We are able to deliver and win more projects with the immense help that we got by Company Bench resources available within 2 days.</p>
                  </div>
                </div>
                <h6>Ann Doughtie</h6>
                <span>Businessmen</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
