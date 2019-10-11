import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import { useStaticQuery, graphql, Link } from 'gatsby';

import './index.css';

const PostLink = ({ post }) => {
    console.log(post);
    return (
        <div className="blog-post-list-item">
            <h1 className="blog-post-list-item-title">
                <Link
                    className="blog-post-list-item-title"
                    to={post.frontmatter.path}
                >
                    {post.frontmatter.title}
                </Link>
            </h1>
            <p className="blog-post-list-item-date">{post.frontmatter.date}</p>
            {post.frontmatter.description}
        </div>
    );
};

const IndexPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const posts = edges.map(edge => (
        <PostLink key={edge.node.id} post={edge.node} />
    ));
    return (
        <Layout>
            <SEO title="Home" />
            {posts}
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
                    }
                }
            }
        }
    }
`;

export default IndexPage;
