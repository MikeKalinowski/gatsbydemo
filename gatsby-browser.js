/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onClientEntry = () => {
  // IntersectionObserver polyfill 
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
  }
}