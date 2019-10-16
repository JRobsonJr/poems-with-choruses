import React from 'react';

import './Footer.css';

const Footer = () => (
    <footer>
        <ul className="footer-link-list list-inline text-center text-light m-0">
            <li>
                <a
                    className="footer-link"
                    href="https://last.fm/user/jrobsonjr"
                >
                    LAST.FM
                </a>
            </li>
            <li>
                <a className="footer-link" href="https://twitter.com/JRosboJr">
                    TWITTER
                </a>
            </li>
            <li>
                <a className="footer-link" href="https://github.com/jrobsonjr">
                    GITHUB
                </a>
            </li>
        </ul>
    </footer>
);

export default Footer;
