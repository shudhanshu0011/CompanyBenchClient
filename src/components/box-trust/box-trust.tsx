import { Swiper, SwiperSlide } from 'swiper/react';
import "./styles.scss";
import "swiper/css/bundle";

export const BoxTrust = () => {
  return (
    <section className='section-container'>
      <div className='main-container'>
        <div className='box-trust'>
          <div className='left-trust'>
            <h4>Trusted By</h4>
          </div>
          <div className='right-logos'>
            <div className='slider-container'>
              <Swiper
                spaceBetween={50}
                slidesPerView={6}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
              >
                <SwiperSlide>
                  <div>
                    <img src='https://companybench.com/assets/images/urban%20ladder.png'></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src='https://companybench.com/assets/images/junglee%20games.png'></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src='https://companybench.com/assets/images/l%20and%20t.png'></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src='https://companybench.com/assets/images/wns.png'></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src='https://companybench.com/assets/images/HDFC-Bank-logo.png'></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src='https://companybench.com/assets/images/pine%20labs.png'></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src='https://companybench.com/assets/images/urban%20ladder.png'></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src='https://companybench.com/assets/images/junglee%20games.png'></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src='https://companybench.com/assets/images/l%20and%20t.png'></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src='https://companybench.com/assets/images/wns.png'></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src='https://companybench.com/assets/images/HDFC-Bank-logo.png'></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src='https://companybench.com/assets/images/pine%20labs.png'></img>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className='row'>

        </div>
      </div>
    </section>
  );
};
