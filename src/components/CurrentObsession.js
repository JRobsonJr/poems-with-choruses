import React from 'react';

import './CurrentObsession.css';

const CurrentObsession = () => (
    <div className="current-obssession-container">
        <div className="footer-content">
            <h2 className="text-light text-center">Current obsession</h2>
            <p className="text-light text-center m-0">
                <i>
                    Could have been my anything / Now everything's embarrassing
                </i>
            </p>
            <p className="text-light text-center">
                — Sky Ferreira, Ariel Rechtshaid, Devonté Hynes
            </p>
            <iframe
                className="responsive-iframe"
                src="https://www.youtube.com/embed/_qsGZ6ngUoU"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    </div>
);

export default CurrentObsession;
