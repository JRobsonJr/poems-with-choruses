import React from 'react';
import { Link, FormattedMessage } from 'gatsby-plugin-intl';

import './AlbumNavigation.css';

const AlbumNavigation = ({ album }) => (
    <div className="album-nav text-center">
        <h3 className="album-title">
            <i>
                <FormattedMessage id={album.id} />
            </i>
        </h3>
        <p className="album-track-title">
            <Link to={album.prologueUrl}>
                <FormattedMessage id="prologue" />
            </Link>
        </p>
        {album.sections.map(section => (
            <AlbumSection section={section} />
        ))}
        <div className="album-playlist-cta">
            <FormattedMessage id="playlist-cta" />:{' '}
            <a href={album.playlist.url}>
                <i>{album.playlist.title}</i>
            </a>
        </div>
    </div>
);

const AlbumSection = ({ section }) => (
    <div className="album-section">
        <p className="album-section-title">
            <i>
                <FormattedMessage id={section.id} />
            </i>
        </p>
        {section.tracks.map(track => (
            <p className="album-track-title">
                {console.log(track.number)}
                {track.number}.{' '}
                <Link to={track.link}>
                    <FormattedMessage id={track.id} />
                </Link>
            </p>
        ))}
    </div>
);

export default AlbumNavigation;
