/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REACT_URL_API: 'http://localhost:8080/',
    REACT_ENABLE_MOCK: 'false',
  },
};

module.exports = nextConfig;
