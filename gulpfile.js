'use strict'

var gulp = require('gulp')
var rollup = require('rollup')


gulp.task('build', function() {
  return rollup.rollup({entry: 'src.js'})
    .then(function(bundle) {
      return bundle.write({
        format: 'cjs',
        dest: 'bundle.js',
      })
    })
})


