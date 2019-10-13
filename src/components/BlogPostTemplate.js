import React from 'react';
import { graphql } from 'gatsby';

import Header from './Header';
import Footer from './Footer';

import './BlogPostTemplate.css';

const BlogPostTemplate = ({ data }) => {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    return (
        <>
            <Header />
            <div className="layout">
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
            <Footer />
        </>
    );
};

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                description
            }
        }
    }
`;

export default BlogPostTemplate;
