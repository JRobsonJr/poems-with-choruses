import React from 'react';
import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PostListItem from '../components/PostListItem';
import SongObsession from '../components/SongObsession';
import PageNavigation from '../components/PageNavigation';

import obsessions from '../data/obsession-data';

import './home.css';

const IndexPage = ({
    data: {
        posts: { edges },
    },
    pageContext: { previousPagePath, nextPagePath },
}) => {
    const { locale } = useIntl();
    const posts = edges
        .filter(edge =>
            locale === 'pt'
                ? edge.node.frontmatter.lang === 'pt'
                : edge.node.frontmatter.lang !== 'pt'
        )
        .map(edge => <PostListItem key={edge.node.id} post={edge.node} />);
    const currentObsession = obsessions[obsessions.length - 1];
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
            <SongObsession current {...currentObsession} />
        </Layout>
    );
};

export const pageQuery = graphql`
    query($skip: Int!, $limit: Int!) {
        posts: allMarkdownRemark(
            filter: { frontmatter: { display: { ne: false } } }
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
                        lang
                    }
                }
            }
        }
    }
`;

export default IndexPage;
