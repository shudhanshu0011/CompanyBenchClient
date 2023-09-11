import { Swiper, SwiperSlide } from 'swiper/react';
import "./styles.scss";
import "swiper/css/bundle";
import urbanLadderlogo from "../../../assets/icons/urban ladder.png"
import jungleelogo from "../../../assets/icons/junglee games (1).png"
import landtlogo from "../../../assets/icons/l and t.png"
import wnslogo from "../../../assets/icons/wns.png"
import hdfclogo from "../../../assets/icons/HDFC-Bank-logo.png"
import pineLabslogo from "../../../assets/icons/pine labs.png"

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
                loop={true}
              >
                <SwiperSlide>
                  <div>
                    <img src={urbanLadderlogo}></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={jungleelogo}></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={landtlogo}></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={wnslogo}></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={hdfclogo}></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={pineLabslogo}></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={urbanLadderlogo}></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={jungleelogo}></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={landtlogo}></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={wnslogo}></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={hdfclogo}></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={pineLabslogo}></img>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className='row-intro'>
          <div className='youtube-intro'>
            <div className='ytb-frame'>
              <iframe width="651" height="300" src="https://www.youtube.com/embed/pRQQteW5I4I" title="Companybench.com hire Remote Developers within 24 hours #hire #hiring #softwaredeveloper @ 2022" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
          </div>
          <div className='text-intro'>
            <div className='intro-text-heading'>
              <h2>Have dedicated developers as per your demand</h2>
            </div>
            <div className='intro-text-detail'>
              <p>Given the explicit surge in demand of experienced and qualified resource , We at company bench have developed the bridge to fulfill this immediate gap of resource hire across relevant technologies in circulation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
