import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import SongObsession from '../components/SongObsession';

import obsessions from '../data/obsession-data';

const ObsessionHistory = () => {
    const intl = useIntl();
    const obsessionList = obsessions.map(obsession => (
        <SongObsession {...obsession} />
    ));

    return (
        <Layout>
            <SEO title={intl.formatMessage({ id: 'obsession-history' })} />
            {obsessionList}
        </Layout>
    );
};

export default ObsessionHistory;
