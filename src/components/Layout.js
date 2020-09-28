import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'gatsby-plugin-intl';

import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

import './Layout.css';

const Layout = ({ children }) => {
    const intl = useIntl();

    return (
        <>
            <Header
                siteTitle={intl.formatMessage({ id: 'title' })}
                siteDescription={intl.formatMessage({ id: 'description' })}
            />
            <Navbar
                obsessionHistory={intl.formatMessage({
                    id: 'obsession-history',
                })}
                home={intl.formatMessage({ id: 'home' })}
            />
            <main>{children}</main>
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
