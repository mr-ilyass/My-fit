import React from 'react';
import "./Plan.css"
import whiteTick from '../../assets/whiteTick.png'
import {plansData} from "../../data/plansData";

const Plan = () => {
    return (
        <div className="plans-container" id="plans" >
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="programs-header">
                <span className="stroke-text" style={{gap:'2rem'}}>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className="stroke-text">NOW WITH US</span>
            </div>

            <div className="plans">
                {plansData.map(plan =>(
                    <div key={plan.id} className="plan">

                            {plan.icon}
                            <span>{plan.name}</span>
                            <span>$ {plan.price}</span>
                            <div className="features">
                                {plan.features.map((feature,i)=>(
                                    <div className="feature" key={i}>
                                        <img src={whiteTick} alt=""/>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                        </div>
                        <div><span>See more Benefits -></span></div>
                        <button className="btn">Join now</button>
                    </div>
                ))}
            </div>



        </div>
    );
};

export default Plan;
