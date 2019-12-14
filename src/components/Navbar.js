import React from 'react';
import { Link } from 'gatsby';

import './Navbar.css';

const Navbar = () => (
    <nav>
        <ul className="footer-link-list list-inline text-center text-light m-0">
            <li>
                <Link className="footer-link" to="/">
                    HOME
                </Link>
            </li>
            <li>
                <Link className="footer-link" to="/obsessions">
                    OBSESSION HISTORY
                </Link>
            </li>
        </ul>
    </nav>
);

export default Navbar;
