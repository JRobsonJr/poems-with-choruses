import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import { graphql } from 'gatsby';

import './index.css';
import PostListItem from '../components/PostListItem';

const obsessions = [
    {
        dateInsertion: 'October 12, 2019',
        lyricsExcerpt:
            "I'm high enough from all the waiting to ride a wave on your inhaling",
        songwriters: 'Imogen Heap, Guy Sighsworth (Frou Frou)',
        videoUrl: 'https://www.youtube.com/embed/5XONarRhvI4',
    },
    {
        dateInsertion: 'October 28, 2019',
        lyricsExcerpt: "Maniac, some may say that I'm a",
        songwriters: 'Conan Gray, Dan Nigro',
        videoUrl: 'https://www.youtube.com/embed/-E-_IRJU5w0',
    },
    {
        dateInsertion: 'November 19, 2019',
        lyricsExcerpt:
            "Could have been my anything / Now everything's embarrassing",
        songwriters: 'Sky Ferreira, Ariel Rechtshaid, Devonté Hynes',
        videoUrl: 'https://www.youtube.com/embed/_qsGZ6ngUoU',
    },
    {
        dateInsertion: 'December 8, 2019',
        lyricsExcerpt:
            "But you just met somebody new / And now it's gon' be me and you",
        songwriters: 'Robyn, Alexander Kronlund, Klas Åhlund',
        videoUrl: 'https://www.youtube.com/embed/CHn7w3o22PA',
    },
];

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
