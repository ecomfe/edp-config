# edp-config

The code that edp uses to manage user config

## Usage

```javascript
var edpConfig = require( 'edp-config' );
edp.set( 'user.name', yourname );
edp.get( 'user.name' );
```

## API

### get( name )

Get configuration item.

- `name` {string}

### set( name, value )

Set configuration item.

- `name` {string}
- `value` {JSON}
