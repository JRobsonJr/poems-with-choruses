const path = require('path');
const { paginate } = require('gatsby-awesome-pagination')

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;
    const result = await graphql(`
        {
            posts: allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
            ) {
                edges {
                    node {
                        frontmatter {
                            path
                            description
                            imageUrl
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panicOnBuild('Error while running GraphQL query.');
        return;
    }

    paginate({
        createPage,
        items: result.data.posts.edges,
        component: path.resolve('src/templates/index.js'),
        itemsPerPage: 6,
        itemsPerFirstPage: 6,
        pathPrefix: '/posts',
    });

    createPage({
        path: '/',
        component: path.resolve('src/templates/index.js'),
        context: {
            skip: 1,
            limit: 6,
            nextPagePath: '/posts/2'
        }
    });

    result.data.posts.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: path.resolve('src/components/BlogPostTemplate.js'),
            context: {},
        });
    });
};
