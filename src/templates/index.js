import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PostListItem from '../components/PostListItem';
import CurrentObsession from '../components/CurrentObsession';

import './index.css';

const IndexPage = ({
    data: {
        posts: { edges },
    },
    pageContext: {
        previousPagePath,
        nextPagePath,
    },
}) => {
    const posts = edges
        .filter(edge => !edge.node.frontmatter.path.endsWith('-pt'))
        .map(edge => <PostListItem key={edge.node.id} post={edge.node} />);
    return (
        <Layout>
            <SEO title="Home" />
            <div className="layout">{posts}</div>
            
            <CurrentObsession />
        </Layout>
    );
};

export const pageQuery = graphql`
    query($skip: Int!, $limit: Int!) {
        posts: allMarkdownRemark(
            filter: { frontmatter: { path: { regex: "/.+(?<!pt)$/" } } }
            sort: { fields: [frontmatter___date], order: DESC }
            skip: $skip
            limit: $limit
        ) {
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
