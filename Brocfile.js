/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({});

app.import('vendor/fontello/fontello.css');
app.import('vendor/fontello/font/fontello.ttf', {
  destDir: 'assets/fonts'
});
app.import('vendor/fontello/font/fontello.eot', {
  destDir: 'assets/fonts'
});
app.import('vendor/fontello/font/fontello.svg', {
  destDir: 'assets/fonts'
});
app.import('vendor/fontello/font/fontello.woff', {
  destDir: 'assets/fonts'
});

app.import('bower_components/picnic/releases/plugins.min.css');
app.import('bower_components/picnic/releases/picnic.min.css');

app.import('bower_components/moment/moment.js');
app.import('bower_components/borrowers-dates/index.js', {
  exports: {
    'borrowers-dates': [
      'format'
    ]
  }
});

module.exports = app.toTree();
