const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "assert": require.resolve("assert/"),
      "url": require.resolve("url/"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "os": require.resolve("os-browserify/browser"),
    },
  },
};
