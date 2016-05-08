# db.log

****

Simple Logger for Logging info or errors with contrasting colors and some emojis.

****

## Installation

```
  npm install db.log
```

****

## Example Usage

```
  var log = require('db.log');

  log.info('WILDLY USEFUL INFORMATION!!');

  log.error('OH NOES!!');
```

****

## Config

Logging can be turned off by setting <br>

`process.env.loggingOff = true`