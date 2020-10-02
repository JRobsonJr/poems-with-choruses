import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import './404.css';

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <div className="not-found-page text-center">
            <h1 className="not-found-text">
                <FormattedMessage id="not-found" />
            </h1>
        </div>
    </Layout>
);

export default NotFoundPage;
