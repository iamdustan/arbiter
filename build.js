var jshintOptions = {
    'predef': [ 'define' ]
  , 'boss': true
  , 'bitwise': true
  , 'shadow': true
  , 'trailing': true
  , 'immed': true
  , 'latedef': true
  , 'forin': true
  , 'curly': false
  , 'debug': true
  , 'devel': false
  , 'evil': false
  , 'regexp': false
  , 'undef': true
  , 'sub': true
  , 'white': false
  , 'indent': 2
  , 'whitespace': true
  , 'asi': true
  , 'laxbreak': true
  , 'eqeqeq': true
  , 'eqnull': true
  , 'browser': true
  , 'node': true
  , 'laxcomma': true
}
require('smoosh')
  .config({
      'JAVASCRIPT': {
          'DIST_DIR': './'
        , 'arbiter': [
              './src/copyright.js'
            , './src/arbiter.js'
          ]
      }
    , 'JSHINT_OPTS': jshintOptions
  }).run().build().analyze()
  .config({
      'JAVASCRIPT': {
          'DIST_DIR': './'
        , 'ender': [ './src/ender.js' ]
        , 'tests': [
            /*
              './test/buster.js'
            , './test/common.js'
            , './test/core-test.js'
            , './test/engines-test.js'
            , './test/noconflict.js'
            , './test/setup.js'
            */
          ]
      }
    , 'JSHINT_OPTS': jshintOptions
  }).run()
