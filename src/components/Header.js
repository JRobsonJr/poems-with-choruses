import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './Header.css';

const Header = () => (
    <header>
        <div className="header-content">
            <h1 className="text-center m-0">
                <Link className="header-link" to="/">
                    Poems With Choruses
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
