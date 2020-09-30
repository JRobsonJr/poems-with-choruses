const path = require('path');
const { paginate } = require('gatsby-awesome-pagination');

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
                            lang
                            path
                            description
                            imageUrl
                        }
                    }
                }
            }
            homePagePostsEn: allMarkdownRemark(
                filter: {
                    frontmatter: { lang: { ne: "pt" }, display: { ne: false } }
                }
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
            homePagePostsPt: allMarkdownRemark(
                filter: { frontmatter: { lang: { eq: "pt" } } }
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
        items: result.data.homePagePostsPt.edges,
        component: path.resolve('src/templates/home.js'),
        itemsPerPage: 6,
        itemsPerFirstPage: 6,
        pathPrefix: ({ pageNumber }) =>
            pageNumber === 0 ? '/inicio' : '/pagina',
    });

    paginate({
        createPage,
        items: result.data.homePagePostsEn.edges,
        component: path.resolve('src/templates/home.js'),
        itemsPerPage: 6,
        itemsPerFirstPage: 6,
        pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? '/' : '/page'),
    });

    result.data.posts.edges.forEach(({ node }) => {
        createPage({
            path: `${node.frontmatter.lang === 'pt' ? '/pt' : ''}${
                node.frontmatter.path
            }`,
            component: path.resolve('src/templates/post.js'),
            context: {},
        });
    });
};

exports.onCreatePage = async ({ page, actions: { deletePage } }) => {
    const prefixRemove = ['/pt/pt/', '/en/', '/inicio', '/pagina/'];
    prefixRemove.map(prefix => {
        if (page.path.startsWith(prefix)) {
            deletePage(page);
        }
    });
    const exactPaths = ['/inicio', '/pt', '/en', '/en/'];
    exactPaths.map(path => {
        if (page.path === path) {
            deletePage(page);
        }
    });
};
