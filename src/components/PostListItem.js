import React from 'react';

import { Link } from 'gatsby';

import { BlogPostImageCover } from './BlogPostTemplate';
import './PostListItem.css';

const PostListItem = ({ post }) => (
    <div className="blog-post-list-item">
        <BlogPostImageCover imageUrl={post.frontmatter.imageUrl} />
        <div className="blog-post-list-item-header">
            {post.frontmatter.date}
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
            {post.frontmatter.description}
        </div>
    </div>
);

export default PostListItem;
