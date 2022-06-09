const path = require("path");

modules.exports = {
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, "bild"),
    filename: "vundler.tsx",
  },
};
