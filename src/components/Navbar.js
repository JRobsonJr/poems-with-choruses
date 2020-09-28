import React from 'react';
import { Link } from 'gatsby-plugin-intl';

import './Navbar.css';

const Navbar = ({ home, obsessionHistory }) => (
    <nav>
        <ul className="footer-link-list list-inline text-center text-light m-0">
            <li>
                <Link className="footer-link" to="/">
                    {home}
                </Link>
            </li>
            <li>
                <Link className="footer-link" to="/obsessions">
                    {obsessionHistory}
                </Link>
            </li>
        </ul>
    </nav>
);

export default Navbar;
