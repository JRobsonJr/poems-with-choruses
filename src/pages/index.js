import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import { graphql } from 'gatsby';

import './index.css';
import PostListItem from '../components/PostListItem';
import CurrentObsession from '../components/CurrentObsession';

const IndexPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const posts = edges.map(edge => (
        <PostListItem key={edge.node.id} post={edge.node} />
    ));
    return (
        <Layout>
            <SEO title="Home" />
            <div className="layout">{posts}</div>
            <CurrentObsession />
        </Layout>
    );
};

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                        description
                        imageUrl
                    }
                }
            }
        }
    }
`;

export default IndexPage;
