exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith('develop')) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
    });
  }
};

const pages = [
  { id: '123456', title: 'page 123456', slug: '/project/123456' },
  { id: '123457', title: 'new context', slug: '/project/123457' },
  { id: '123458', title: 'page 123458', slug: '/project/123458' },
  { id: '123459', title: 'page 123459', slug: '/project/123459' },
  { id: '123460', title: 'page 123460', slug: '/project/123460' },
];

exports.createPages = async function ({ actions, graphql }) {
  // const { data } = await graphql(`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // data.allMarkdownRemark.edges.forEach(edge => {
  //   const slug = edge.node.fields.slug;
  //   actions.createPage({
  //     path: slug,
  //     component: require.resolve(`./src/templates/blog-post.js`),
  //     context: { slug: slug },
  //   });
  // });
  pages.forEach(page => {
    actions.createPage({
      path: page.slug,
      component: require.resolve(`./src/templates/project.js`),
      context: page,
    });
  });
};
