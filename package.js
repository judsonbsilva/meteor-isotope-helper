Package.describe({
  name: 'judsonsilva:isotope',
  version: '0.0.1',
  summary: 'A Isotope reactive blaze helper',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  
  api.versionsFrom(['METEOR@0.9.3', 'METEOR@0.9.4', 'METEOR@1.0']);
  api.use([
    'underscore',
    'tracker',
    'templating',
    'ui',
    'blaze',
    'check',
    'jquery',
    'reactive-var',
    'isotope:isotope@2.1.0_1'
    ],'client');
  
  api.addFiles([
    'meteor_isotope.js',
    'grid_isotope.html',
    'grid_isotope.js'],
    'client'
  );
  
  api.export('MeteorIsotope','client');
});
/*
Package.onTest(function(api) {
  api.use(['tinytest', 'ui', 'templating', 'blaze']);
  api.use('judsonsilva:isotope');
  api.addFiles([
    'tests/test_0.js',
    'tests/test_0.html',
    'tests/test_0.js'
  ],'client');

});
*/