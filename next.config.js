/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        serverActions: true,
        // esmExternals: "loose", // <-- add this
        // serverComponentsExternalPackages: ["mongoose"] // <-- and this
    },
    reactStrictMode: false,
    eslint: {
        ignoreDuringBuilds: true,
    }
    // webpack: (config) => {
    //     config.experiments = {
    //       topLevelAwait: true
    //     };
    //     return config;
    // },
}

module.exports = nextConfig
