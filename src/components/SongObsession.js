import React from 'react';
import { FormattedDate, FormattedMessage } from 'gatsby-plugin-intl';

import './SongObsession.css';

const SongObsession = ({
    current,
    lyricsExcerpt,
    songwriters,
    videoUrl,
    title,
    dateInsertion,
}) => (
    <div className="song-obsession-container">
        <div className="song-obsession-content">
            <h2 className="text-light text-center">
                {current ? (
                    <FormattedMessage id="current-obsession" />
                ) : (
                    <FormattedDate
                        value={dateInsertion}
                        year="numeric"
                        month="long"
                        day="2-digit"
                    />
                )}
            </h2>
            <p className="text-light text-center m-0">
                <i>{lyricsExcerpt}</i>
            </p>
            <p className="text-light text-center">— {songwriters}</p>
            <iframe
                title={title}
                className="responsive-iframe"
                src={videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    </div>
);

export default SongObsession;
