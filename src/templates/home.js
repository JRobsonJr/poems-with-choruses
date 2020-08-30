import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PostListItem from '../components/PostListItem';
import CurrentObsession from '../components/CurrentObsession';

import './home.css';

const IndexPage = ({
    data: {
        posts: { edges },
    },
    pageContext: { previousPagePath, nextPagePath },
}) => {
    const posts = edges.map(edge => (
        <PostListItem key={edge.node.id} post={edge.node} />
    ));

    return (
        <Layout>
            <SEO title="Home" />
            <div className="layout">
                {posts}
                <PageNavigation
                    previousPagePath={previousPagePath}
                    nextPagePath={nextPagePath}
                />
            </div>
            <CurrentObsession />
        </Layout>
    );
};

const PageNavigation = ({ previousPagePath, nextPagePath }) => (
    <div className="page-navigation">
        {previousPagePath && (
            <Link to={previousPagePath}>
                <div className="blog-post-list-item-link">Previous</div>
            </Link>
        )}
        {nextPagePath && (
            <Link to={nextPagePath}>
                <div className="blog-post-list-item-link">Next</div>
            </Link>
        )}
    </div>
);

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
