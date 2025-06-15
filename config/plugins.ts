module.exports = ({ env }) => ({
  // ..
 'transformer': {
    enabled: true,
    config: {
        responseTransforms: {
            removeAttributesKey: true,
            removeDataKey: true,
        },
    }
  },
  seo: {
    enabled: true,
  },
  // ..
});
