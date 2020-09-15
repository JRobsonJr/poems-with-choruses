import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import './post.css';

const BlogPostTemplate = ({ data }) => {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    return (
        <Layout>
            <SEO
                title={frontmatter.title}
                description={frontmatter.description}
                imageUrl={frontmatter.imageUrl}
            />
            <div className="layout layout-post">
                <BlogPostImageCover imageUrl={frontmatter.imageUrl} />
                <div className="blog-post-container">
                    <div className="blog-post">
                        <p className="blog-post-date">{frontmatter.date}</p>
                        <h1>{frontmatter.title}</h1>
                        <div
                            className="blog-post-content"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const BlogPostImageCover = ({ imageUrl }) =>
    imageUrl ? (
        <div
            className="blog-post-image-cover"
            style={{ backgroundImage: `url("${imageUrl}")` }}
        />
    ) : null;

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                description
                imageUrl
            }
        }
    }
`;

export default BlogPostTemplate;
