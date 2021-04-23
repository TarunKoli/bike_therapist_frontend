const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    // disable: process.env.NODE_ENV === "development",
    disable: false,
    register: true,
    dest: "public",
    sw: "service-worker.js",
  },
});
