import React from 'react';
import { graphql } from 'gatsby';
import { FormattedDate } from 'gatsby-plugin-intl';
import { DiscussionEmbed } from 'disqus-react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import AlbumNavigation from '../components/AlbumNavigation';
import PageNavigation from '../components/PageNavigation';

import concurrentAccess from '../data/concurrent-access';

import './post.css';

const BlogPostTemplate = ({ data }) => {
    const { markdownRemark } = data;
    if (!markdownRemark) return null;
    const { frontmatter, html } = markdownRemark;
    const {
        title,
        description,
        imageUrl,
        date,
        series,
        prev,
        next,
        path,
    } = frontmatter;
    const disqusConfig = {
        shortname: 'poemswithchoruses',
        config: {
            identifier: path.split('/').pop(),
            title: title,
        },
    };
    return (
        <Layout>
            <SEO title={title} description={description} imageUrl={imageUrl} />
            <div className="layout layout-post">
                <div className="blog-post-container">
                    <p className="blog-post-date">
                        <FormattedDate
                            value={date}
                            year="numeric"
                            month="long"
                            day="2-digit"
                        />
                    </p>
                    <h1 className="blog-post-title">{title}</h1>
                    <BlogPostImageCover imageUrl={imageUrl} />
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                    <PageNavigation
                        previousPagePath={prev}
                        nextPagePath={next}
                    />
                    {series === 'Concurrent Access' && (
                        <AlbumNavigation album={concurrentAccess} />
                    )}
                    <DiscussionEmbed {...disqusConfig} />
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
                series
                prev
                next
            }
        }
    }
`;

export default BlogPostTemplate;
