import React from 'react';
import headshot from '../../assets/images/headshot.jpg';

function About() {
    return(
        <section className='about-section'>
            <div className='flex-row'>
                <h2 className='section-title primary-border'>
                    About Me
                </h2>
            </div>
            <article className='about-me-info'>
                <div className='headshot'>
                    <img src={headshot} alt='headshot' />
                </div>
                <div className='about-text'>
                    <p>
                        Full-stack web developer with a background in teaching and customer service 
                        looking to create unique user experiences on the web. Earned a certificate in 
                        full-stack web development from the University of Pennsylvania, with skills 
                        in HTML, CSS, JavaScript, MERN stack, MySql, and responsive web design. 
                        <br />
                        <br />
                        Quick learner that is calm under pressure and has excellent time management 
                        skills in order to easily meet deadlines and manage multiple tasks at the same time. 
                        Was quickly elevated to a leadership role at a Four Diamond hotel after only just a few 
                        months of working due to a strong work ethic. Well-organized and flexible team player that 
                        also does well working independently.
                    </p>
                </div>
            </article>
        </section>
    );
}

export default About;