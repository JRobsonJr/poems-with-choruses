import React from 'react';
import { Link } from 'gatsby';
import {
    Link as IntlLink,
    FormattedMessage,
    useIntl,
} from 'gatsby-plugin-intl';

import './Navbar.css';

const Navbar = () => {
    const intl = useIntl();
    return (
        <nav>
            <ul className="footer-link-list list-inline text-center text-light m-0">
                <li>
                    <IntlLink className="footer-link" to="/">
                        <FormattedMessage id="home" />
                    </IntlLink>
                </li>
                <li>
                    <IntlLink className="footer-link" to="/obsessions">
                        <FormattedMessage id="obsession-history" />
                    </IntlLink>
                </li>
                <li>
                    <Link
                        className="footer-link"
                        to={intl.locale === 'pt' ? '/' : '/pt'}
                    >
                        <FormattedMessage id="locale-switcher" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
