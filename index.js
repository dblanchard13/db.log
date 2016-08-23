module.exports = (function(){

  'use strict'

  require('colors')
  var _ = require('lodash')
  var noLog = process.env.loggingOff

  function noOp(){}
  var consoleLog = noLog ? noOp : console.log.bind(console)

  var logger = {

    info: function() {
      var tag = '[ ✨ LOG ✨ ]'.green
      var args = _.toArray(arguments)
        .map(function(arg) {
          arg = arg || ''
          if(typeof arg === 'object') {
            var string = JSON.stringify(arg, null, 2)
            return tag + '  ' + string.cyan
          }
          else {
            return tag + '  ' + arg.cyan
          }
        })

      consoleLog.apply(console, args)
    },

    sorry: function() {
      var tag = '[ 😬  SORRY 😬  ]'.magenta
      var args = _.toArray(arguments)
        .map(function(arg) {
          arg = arg || ''
          if(typeof arg === 'object') {
            var string = JSON.stringify(arg, null, 2)
            return tag + '  ' + string.green
          }
          else {
            return tag + '  ' + arg.green
          }
        })

      consoleLog.apply(console, args)
    },

    error: function() {
      var args = _.toArray(arguments)
        .map(function(arg) {
          arg = arg || ''
          arg = arg.stack || arg
          var name = arg.name || '[ ❌ ERROR ❌ ]'
          var log = name.yellow + '  ' + arg.red
          return log
        });

      consoleLog.apply(console, args)
    }
  }

  return logger

}())
