import React from 'react'
import './Hero.css'
import Header from "../header/Header";

import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"
import {motion} from "framer-motion";
import NumberCounter from "number-counter";
const Hero = () => {

    const transition = {type: 'tween', duration:3}
    const mobile = window.innerWidth<=768 ? true: false ;
    return (
        <div className="hero" id="home">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header/>
                {/* AD */}

                <div className='the-best-ad'>
                    <motion.div
                    initial={{left: mobile ? '178px' : '238px'}}
                    whileInView={{left:'8px'}}
                    transition={transition}
                    ></motion.div>
                    <span>The best fitness club in the town</span>
                </div>

                {/*Hero Heading*/}
                <div className='hero-text'>
                    <div>
                        <span className="stroke-text">Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>
                        In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>

                {/*figures*/}
                <div className="figures">
                    <div>
                        <span><NumberCounter end={140} start={90} delay='4' preFix="+"></NumberCounter> </span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span><NumberCounter end={999} start={949} delay='7' preFix="+"></NumberCounter> </span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span><NumberCounter end={80} start={30} delay='4' preFix="+"></NumberCounter> </span>
                        <span>fitness programs</span>
                    </div>

                </div>
                {/*hero buttons*/}

                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Read More</button>
                </div>
            </div>

            <div className="right-h">
                <button className='btn'>Join now</button>

                <motion.div
                    initial={{right:'-1rem'}}
                    whileInView={{right:'4rem'}}
                    transition={{type: 'tween', duration:1}}
                    className="heart-rate">
                    <img src={heart} alt=""/>
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/*hero images*/}
                <img src={hero_image} alt="" className="hero_image"/>
                <motion.img
                    initial={{right:'11rem'}}
                    whileInView={{right:'20rem'}}
                    transition={{type: 'tween', duration:2}}
                    src={hero_image_back} alt="" className="hero_image_back"/>

                {/*calories*/}
                <motion.div
                    initial={{right:'37rem'}}
                    whileInView={{right:'28rem'}}
                    transition={{type: 'tween', duration:2}}
                    className="calories">
                    <img src={calories} alt=""/>
                    <div>
                        <span>Calories Burned</span>
                        <span>550 Kcal</span>
                    </div>


                </motion.div>

            </div>

        </div>
    )

}

export default Hero;