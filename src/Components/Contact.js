import React from "react";
import "./styleSheets/Contact.css"
import { FiFacebook,FiGithub,FiLinkedin,FiInstagram,FiFigma } from 'react-icons/fi';
import { MdLocationPin } from 'react-icons/md';
import { TfiGoogle } from 'react-icons/tfi';



class Contact extends React.Component{
    render() {
      return (
        <>
        <div class="background"></div>
        <div id="Contact" className="ContactBody">

                <div class="outer-div">
                <div class="inner-div">
                    <div class="front">
                    <div class="front__bkg-photo"></div>
                    <div class="front__face-photo"></div>
                    <div class="front__text">
                        <h3 class="front__text-header">SRISHTI GAUTAM</h3>
                        <h4 className="front__text-para">UX DESIGNER & RESEARCHER</h4>
                        <p class="front__text-para"><MdLocationPin className="fas"/>{" "}India</p>
                        
                        <span class="front__text-hover">Hover to Find Me</span>
                    </div>
                    </div>
                    <div class="back">
                    <div class="social-media-wrapper">
                        <a href="#" class="social-icon"><FiFigma className="fab"/></a>&nbsp;
                        <a href="#" class="social-icon"><TfiGoogle className="fab"/></a>&nbsp;
                        <a href="#" class="social-icon"><FiInstagram className="fab"/></a>&nbsp;
                        <a href="#" class="social-icon"><FiLinkedin className="fab"/></a>
                    </div>
                    </div>

                </div>
                </div>
                </div>
        </>
      )
    }
}

export default Contact