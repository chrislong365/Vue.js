'use strict';

var elixir = require('laravel-elixir');
require('laravel-elixir-vue-2');
require('laravel-elixir-scss-lint');

elixir(function(mix) {
  mix.scssLint();
  mix.sass('app.scss', 'public/css', 'src/sass');
  mix.webpack('app.js', 'public/js', 'src/js');
});
