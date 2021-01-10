import React from 'react';
import awardImg from '../../images/Award.png';
import peopleImg from '../../images/people.png';

const AwardSection = () => {
    return (
        <section className="award_section">
            <div className="award_left">
                <img className="img fluid" src={awardImg} alt="" />
            </div>
            <div className="award_right">
                <h6> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h6>
                <ul>
                    <li>
                        <p>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</p>
                    </li>
                    <li>
                        <p>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </p>
                    </li>
                </ul>
                <img className="img fluid" src={peopleImg} alt="" />
                <p>Government of India has awarded the <span id="main_tag">"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
        </section>
    );
};

export default AwardSection;