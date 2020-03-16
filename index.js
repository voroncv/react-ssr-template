require("@babel/register")({
  ignore: [/node_modules/],
  presets: ["@babel/preset-env"],
  plugins: ["dynamic-import-node"],
});

require('./server.js');
