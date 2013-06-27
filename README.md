# edp-config

Package for edp configuration.

## Usage

```javascript
var edpConfig = require( 'edp-config' );
edp.set( 'user.name', yourname );
edp.get( 'user.name' );
```

## API


### all()

Get all configuration items.

### get( name )

Get configuration item.

- `name` {string}

### set( name, value )

Set configuration item.

- `name` {string}
- `value` {JSON}
