import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useIntl } from 'gatsby-plugin-intl';

const SEO = ({ description, meta, title, imageUrl }) => {
    const intl = useIntl();
    const metaDescription =
        description || intl.formatMessage({ id: 'description' });
    const metadata = [
        {
            name: `description`,
            content: metaDescription,
        },
        {
            property: `og:title`,
            content: title,
        },
        {
            property: `og:description`,
            content: metaDescription,
        },
        {
            property: `og:type`,
            content: `website`,
        },
        {
            name: `twitter:card`,
            content: `summary_large_image`,
        },
        {
            name: `twitter:image`,
            content: imageUrl ? imageUrl : 'https://i.imgur.com/CQRecUx.jpg',
        },
        {
            name: `twitter:creator`,
            content: intl.formatMessage({ id: 'author' }),
        },
        {
            name: `twitter:title`,
            content: title,
        },
        {
            name: `twitter:description`,
            content: metaDescription,
        },
    ];

    return (
        <Helmet
            htmlAttributes={{
                lang: intl.locale ? intl.locale : 'en',
            }}
            title={title}
            titleTemplate={`%s | ${intl.formatMessage({ id: 'title' })}`}
            meta={metadata.concat(meta)}
        />
    );
};

SEO.defaultProps = {
    meta: [],
    description: ``,
    imageUrl: 'https://i.imgur.com/CQRecUx.jpg',
};

SEO.propTypes = {
    description: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
};

export default SEO;
