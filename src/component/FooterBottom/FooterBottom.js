import React from 'react';
import { FaPhone, FaFacebookF, FaGlobe } from 'react-icons/fa';

const FooterBottom = () => {
    return (
        <div className="bottom-footer">
            <div className="container Icons ">
                <div className="part_icon">
                        <a href="#"><FaPhone className="footer_icon" /></a>
                        <p>Toll free 1800 200 1234</p>
                </div>
                <div className=" part_icon">
                    <a href="#" target="_blank"><FaFacebookF className="footer_icon" /></a>
                    <p>w.w.w.facebook.com/cripumps</p>
                </div>
                <div className=" part_icon">
                    <a href="#" target="_blank"><FaGlobe className="icon_globe" /></a>
                    <p>w.w.w.facebook.com/cripumps</p>
                </div>
            </div>
        </div>
    );
};

export default FooterBottom;