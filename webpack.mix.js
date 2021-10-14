const mix = require('laravel-mix');
mix
    .browserSync({
        proxy: process.env.APP_URL,
        notify: false
    })
    .js('resources/js/app.js', 'public/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
