const mix = require('laravel-mix');
require('vuetifyjs-mix-extension');
mix
.browserSync({
    proxy: process.env.APP_URL,
    notify: false
})
.webpackConfig({
    module: {
        rules: [
        {
            test: /\.pug$/,
            loader: 'pug-plain-loader'
        }
        ]
    }
})
.js('resources/js/app.js', 'public/js')
.vuetify('vuetify-loader')
.vue()
.postCss('resources/css/app.css', 'public/css', [
        //
        ])
.version()
