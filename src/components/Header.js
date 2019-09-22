import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './Header.css';

const Header = ({ siteTitle }) => (
    <header>
        <div className="header-content">
            <h1 className="m-0">
                <Link className="header-link" to="/">
                    {siteTitle}
                </Link>
            </h1>
        </div>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
