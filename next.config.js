/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // reveal.js initializes once against the DOM; strict-mode double-invoke breaks it
};

module.exports = nextConfig;
