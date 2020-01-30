import React from 'react';

import './CurrentObsession.css';

import obsessions from '../data/obsession-data';

const CurrentObsession = () => {
    const { lyricsExcerpt, songwriters, videoUrl } = obsessions[
        obsessions.length - 1
    ];
    return (
        <div className="current-obssession-container">
            <div className="footer-content">
                <h2 className="text-light text-center">Current obsession</h2>
                <p className="text-light text-center m-0">
                    <i>{lyricsExcerpt}</i>
                </p>
                <p className="text-light text-center">— {songwriters}</p>
                <iframe
                    className="responsive-iframe"
                    src={videoUrl}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
};

export default CurrentObsession;
