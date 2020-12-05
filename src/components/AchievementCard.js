import React/*, { useState }*/ from 'react';
import "../pages/About.css";
import { BACK_END_URL } from '../data/url';

function AchievementCard(props) {
    return (
        <div className="single_study text-center px-3">
            <div className="thumb">
                <img src={`${BACK_END_URL}${props.photo}`} alt="" />
            </div>
            <div className="subheading ">
                <h4 className="px-3">
                    {props.title}
                </h4>
                <p className="px-3">
                    {props.desc}
                </p>
            </div>
        </div>
    );
}

export default AchievementCard;