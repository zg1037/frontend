const CracoLessPlugin = require("craco-less");
const path = require("path");

const resolve = (pathName) => path.resolve(__dirname, pathName);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        cssLoaderOptions: {
          modules: { localIdentName: "[local]_[hash:base64:5]" },
        },
      },
    },
  ],
};
