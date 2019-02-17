var browserSync = require('browser-sync').create();

browserSync.init({
  server: {
    baseDir: './',
    server: './server.js'
  }
});
