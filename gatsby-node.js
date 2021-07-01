const path = require(`path`)
const productsData = require('./data/products.json');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const template = path.resolve(`./src/templates/product.js`)

  productsData.forEach(node => {
      const path = node.seo_url;

      createPage({
        path: `/lampa/${node.seo_url}`,
        component: template,
        // context: node
        context: {
            slug: node.seo_url
        }
      })
  })

  // const result = await graphql(`
  //   query {
  //     allShopifyProduct(sort: { fields: [title] }) {
  //       nodes {
  //         id
  //         handle
  //       }
  //     }
  //   }
  // `)

  // result.data.allShopifyProduct.nodes.forEach(node => {
  //   createPage({
  //     path: `/lampa/${node.handle}`,
  //     component: path.resolve(`./src/templates/product.js`),
  //     context: {
  //       productId: node.id,
  //     },
  //   })
  // })
}
