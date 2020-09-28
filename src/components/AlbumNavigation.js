import React from 'react';
import { Link, FormattedMessage } from 'gatsby-plugin-intl';

import './AlbumNavigation.css';

const AlbumNavigation = ({ album }) => (
    <div className="album-nav text-center">
        <h3 className="album-title">
            <i>{album.title}</i>
        </h3>
        <p className="album-track-title">
            <Link to={album.prologueUrl}>
                <FormattedMessage id="prologue" />
            </Link>
        </p>
        {album.sections.map(section => (
            <AlbumSection section={section} />
        ))}
        <blockquote className="album-playlist-cta">
            <FormattedMessage id="playlist-cta" />:{' '}
            <a href={album.playlist.url}>
                <i>{album.playlist.title}</i>
            </a>
        </blockquote>
    </div>
);

const AlbumSection = ({ section }) => (
    <div className="album-section">
        <p className="album-section-title">
            <i>{section.title}</i>
        </p>
        {section.tracks.map(track => (
            <p className="album-track-title">
                {track.number}. <Link to={track.link}>{track.title}</Link>
            </p>
        ))}
    </div>
);

export default AlbumNavigation;
