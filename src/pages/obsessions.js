import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import SongObsession from '../components/SongObsession';

import obsessions from '../data/obsession-data';

const ObsessionHistory = () => {
    const obsessionList = obsessions.map(obsession => (
        <SongObsession {...obsession} />
    ));

    return (
        <Layout>
            <SEO title="Obsession History" />
            {obsessionList}
        </Layout>
    );
};

export default ObsessionHistory;
