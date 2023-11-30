const compose = require('next-compose-plugins');
const withZodConfig = require('./withZodConfig');

/** @type {import('next').NextConfig} */
const BaseConfig = {};

module.exports = compose([withZodConfig], BaseConfig);
