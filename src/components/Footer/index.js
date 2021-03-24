import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

function Footer() {
    
    return (
        <section>
            <div>
                <a className="icon" target="_blank" rel="noreferrer" href="https://github.com/jbeedle19"><GitHubIcon fontSize="large" /></a>
                <a className="icon" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/joshua-beedle/"><LinkedInIcon fontSize="large" /></a>
                <a className="icon" href="mailto:josh.beedle@gmail.com"><EmailIcon fontSize="large" /></a>
            </div>
        </section>
    )
}

export default Footer;