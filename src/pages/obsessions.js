import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PostListItem from '../components/PostListItem';

import obsessions from '../data/obsession-data';

import './index.css';

const ObsessionHistory = () => {
    const obsessionList = obsessions
        .reverse()
        .map(obsession => <ObsessionListItem {...obsession} />);
    return (
        <Layout>
            <SEO title="Obsession History" />
            {obsessionList}
        </Layout>
    );
};

const ObsessionListItem = ({
    dateInsertion,
    lyricsExcerpt,
    songwriters,
    videoUrl,
}) => (
    <div className="current-obssession-container">
        <div className="footer-content">
            <h2 className="text-light text-center">{dateInsertion}</h2>
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

export default ObsessionHistory;
