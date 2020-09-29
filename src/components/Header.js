import React from 'react';
import { Link, FormattedMessage } from 'gatsby-plugin-intl';

import './Header.css';

const Header = ({ siteTitle }) => (
    <header>
        <div className="header-content">
            <h1 className="header-blog-title text-center">
                <Link className="header-link" to="/">
                    {siteTitle}
                </Link>
            </h1>
            <p className="header-blog-description text-center text-light m-0">
                <i><FormattedMessage id="by" /> Robson Junior</i>
            </p>
        </div>
    </header>
);

export default Header;
