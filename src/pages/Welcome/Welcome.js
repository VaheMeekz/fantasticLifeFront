// styles
import "./Welcome.scss"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// custom imports
import onboardingOne from "../../images/onboardingOne.png"
import onboardingTwo from "../../images/teenagers_on_bikes.png"
import onboardingThree from "../../images/onboardingThree.png"
import {Link} from "react-router-dom";

const Welcome = () => {
    return (
        <div className="welcome_section">
            <Swiper
                cssMode={true}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                   <div className="slider_container_one">
                       <div className="slider_container_text">
                           <nav>
                               <h4>This Active Life</h4>
                           </nav>

                           <h2>You</h2>
                            <div className="slider_paragraph">
                           <p>Invest In Your Personal Health, Build a</p>
                           <p>Healthy Lifestyle</p>
                            </div>

                       </div>
                       <div className="slider_image_skip">
                           <img src={onboardingOne} alt="onboarding"/>
                            <span><Link to="login">skip</Link></span>
                       </div>
                   </div>

                    <div className="effect-wrap">
                       <div className="effect effect-3">

                       </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider_container_two">
                        <div className="slider_container_text">
                            <nav>
                                <h4>This Active Life</h4>
                            </nav>

                            <h2>Together</h2>
                            <div className="slider_paragraph">
                                <p>Build Strong Ties with Family,</p>
                                <p>Friends & Community</p>
                            </div>

                        </div>
                        <div className="slider_image_skip">
                            <img src={onboardingTwo} alt="onboarding"/>
                            <span><Link to="login">skip</Link></span>
                        </div>

                    </div>

                    <div className="effect-wrap">
                        <div className="effect effect-3">

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="slider_container_three">
                        <div className="slider_container_text">
                            <nav>
                                <h4>This Active Life</h4>
                            </nav>

                            <h2>Together</h2>
                            <div className="slider_paragraph">
                                <p>Build Strong Ties with Family,</p>
                                <p>Friends & Community</p>
                            </div>

                        </div>
                        <div className="slider_image_skip">
                            <img src={onboardingThree} alt="onboarding"/>
                            <span><Link to="/login">skip</Link></span>
                        </div>

                    </div>
                    <div className="effect-wrap">
                        <div className="effect effect-3">

                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Welcome;