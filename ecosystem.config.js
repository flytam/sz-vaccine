module.exports = {
    apps: [
        {
            name: 'sz-vaccine',
            script: './dist/index.js',
            watch: './dist',
            error_file: './logs/err.log',
            out_file: './logs/out.log',
        },
    ],
}
