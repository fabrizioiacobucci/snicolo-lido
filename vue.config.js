const path = require("path");

module.exports = {
    publicPath: "/",
    devServer: {
        port: 8080,
        open: true,
        headers: {
            "Cross-Origin-Opener-Policy": "same-origin",
            "Cross-Origin-Embedder-Policy": "require-corp",
        },
    },
    configureWebpack: {
        resolve: {
            fallback: {
                fs: false,
                path: false,
            },
        },
    },
    transpileDependencies: ["@bimdata/viewer"],
};
