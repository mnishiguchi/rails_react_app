// This file is used in production to server generated JS assets.

// In development mode, we use the Webpack Dev Server to provide assets.
// This allows for hot reloading of the JS and CSS.
// The correct assets file is picked based on the Rails environment using heplers.
// <%= env_stylesheet_link_tag(static: 'application_static',
//                             hot:    'application_non_webpack',
//                             media:  'all',
//                             'data-turbolinks-track' => "reload") %>
//
// <!-- This is to load the hot assets. Turbolinks disabled. -->
// <%= env_javascript_include_tag(hot: ['http://localhost:3500/vendor-bundle.js',
//                                      'http://localhost:3500/app-bundle.js']) %>
//
// <%= env_javascript_include_tag(static: 'application_static',
//                                hot:    'application_non_webpack',
//                                'data-turbolinks-track' => "reload") %>

// These assets are located in app/assets/webpack directory
// CRITICAL that webpack/vendor-bundle must be BEFORE turbolinks
// since it is exposing jQuery and jQuery-ujs

//= require vendor-bundle
//= require app-bundle

// Non-webpack assets incl turbolinks
//= require application_non_webpack
