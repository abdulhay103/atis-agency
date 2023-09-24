/** @type {import('next').NextConfig} */
const config = require("./config");
const nextConfig = {
    env: {
        BASE_URL: config.BASE_URL,
    },
};

module.exports = nextConfig;
