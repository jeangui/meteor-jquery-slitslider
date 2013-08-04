Package.describe({
  summary: "Slitslider is a jQuery plugin that makes it easy to support a fullscreen slideshow with a twist."
});

Package.on_use(function(api) {
  api.add_files(['lib/jquery.slitslider.js','lib/jquery.ba-cond.min.js','lib/modernizr.custom.79639.js'], 'client');
});
