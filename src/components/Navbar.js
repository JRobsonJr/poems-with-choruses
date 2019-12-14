import React from 'react';

import './Navbar.css';

const Navbar = () => (
    <nav>
        <ul className="footer-link-list list-inline text-center text-light m-0">
            <li>
                <a className="footer-link" href="/">
                    HOME
                </a>
            </li>
            <li>
                <a className="footer-link" href="/obsessions">
                    OBSESSION HISTORY
                </a>
            </li>
        </ul>
    </nav>
);

export default Navbar;
