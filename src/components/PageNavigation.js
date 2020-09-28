import React from 'react';
import { Link, FormattedMessage } from 'gatsby-plugin-intl';

const PageNavigation = ({ previousPagePath, nextPagePath }) => (
    <div className="page-navigation">
        {previousPagePath && (
            <Link to={previousPagePath}>
                <div className="blog-post-list-item-link">
                    <FormattedMessage id="previous" />
                </div>
            </Link>
        )}
        {nextPagePath && (
            <Link to={nextPagePath}>
                <div className="blog-post-list-item-link">
                    <FormattedMessage id="next" />
                </div>
            </Link>
        )}
    </div>
);

export default PageNavigation;
