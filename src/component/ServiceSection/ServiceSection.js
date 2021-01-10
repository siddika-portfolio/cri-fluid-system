import React from 'react';
import pumpImg from '../../images/pumps.png'

const ServiceSection = () => {
    return (
        <section className="service_section">
            <p className="">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
            <img src={pumpImg} alt="service image"/>
            <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
            
        </section>
    );
};

export default ServiceSection;