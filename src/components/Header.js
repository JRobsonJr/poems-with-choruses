import React from 'react';
import { Link } from 'gatsby-plugin-intl';

import './Header.css';

const Header = ({ siteTitle, siteDescription }) => (
    <header>
        <div className="header-content">
            <h1 className="header-blog-title text-center">
                <Link className="header-link" to="/">
                    {siteTitle}
                </Link>
            </h1>
            <p className="header-blog-description text-center text-light m-0">
                {siteDescription}
            </p>
        </div>
    </header>
);

export default Header;
