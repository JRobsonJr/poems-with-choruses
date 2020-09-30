import React from 'react';
import { graphql } from 'gatsby';
import { FormattedDate } from 'gatsby-plugin-intl';
import { DiscussionEmbed } from 'disqus-react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import './post.css';

const BlogPostTemplate = ({ data }) => {
    const { markdownRemark } = data;
    if (!markdownRemark) return null;
    const { frontmatter, html } = markdownRemark;
    const disqusConfig = {
        shortname: 'poemswithchoruses',
        config: { identifier: frontmatter.path, title: frontmatter.title },
    };
    return (
        <Layout>
            <SEO
                title={frontmatter.title}
                description={frontmatter.description}
                imageUrl={frontmatter.imageUrl}
            />
            <div className="layout layout-post">
                <div className="blog-post-container">
                    <div className="blog-post">
                        <p className="blog-post-date">
                            <FormattedDate
                                value={frontmatter.date}
                                year="numeric"
                                month="long"
                                day="2-digit"
                            />
                        </p>
                        <h1 className="blog-post-title">{frontmatter.title}</h1>
                        <BlogPostImageCover imageUrl={frontmatter.imageUrl} />
                        <div
                            className="blog-post-content"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                        <DiscussionEmbed {...disqusConfig} />
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
                lang
            }
        }
    }
`;

export default BlogPostTemplate;
