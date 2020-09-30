import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage, FormattedDate } from 'gatsby-plugin-intl';

import './PostListItem.css';

const PostListItem = ({ post }) => (
    <div className="blog-post-list-item">
        <div className={post.frontmatter.imageUrl ? 'w-100-nl w-25' : ''}>
            <Link to={post.frontmatter.path}>
                <BlogPostImageCover imageUrl={post.frontmatter.imageUrl} />
            </Link>
        </div>
        <div className={post.frontmatter.imageUrl ? 'w-100-nl w-75' : 'w-100'}>
            <div className="blog-post-list-item-header">
                <FormattedDate
                    value={post.frontmatter.date}
                    year="numeric"
                    month="long"
                    day="2-digit"
                />
            </div>
            <div className="layout-container">
                <h1 className="blog-post-list-item-title">
                    <Link
                        className="blog-post-list-item-title"
                        to={post.frontmatter.path}
                    >
                        {post.frontmatter.title}
                    </Link>
                </h1>
                <p className="blog-post-list-item-description">
                    {post.frontmatter.description}
                </p>
                <Link to={post.frontmatter.path}>
                    <div className="blog-post-list-item-link">
                        <FormattedMessage id="read" />
                    </div>
                </Link>
            </div>
        </div>
    </div>
);

const BlogPostImageCover = ({ imageUrl }) =>
    imageUrl ? (
        <div
            className="blog-post-list-item-image"
            style={{ backgroundImage: `url("${imageUrl}")` }}
        />
    ) : null;

export default PostListItem;
