import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './Header.css';

const Header = () => (
    <header>
        <div className="header-content">
            <h1 className="header-blog-title text-center">
                <Link className="header-link" to="/">
                    Poems With Choruses
                </Link>
            </h1>
            <p className="header-blog-description text-center text-light m-0">
                Documenting life as I try to fit it in the lyrics of a song.
            </p>
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
