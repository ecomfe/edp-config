var edpConfig = require( '../index' );
var tap = require('tap');
var test = tap.test;


test( 'API: set and get', function ( t ) {
    edpConfig.set( 'test.name', 'erik' );
    edpConfig.set( 'test.age', 18 );
    t.equal( 
        edpConfig.get( 'test.name' ), 
        'erik', 
        'Configuration item "test.name" should be same as the value setted.'
    );
    t.equal( 
        edpConfig.get( 'test.age' ), 
        18, 
        'Configuration item "test.age" should be same as the value setted.'
    );
    t.type(
        edpConfig.get( 'unknown' ),
        'undefined',
        'Configuration item that not setted should be undefined.'
    );
    t.type(
        edpConfig.all(),
        'object',
        'Method "edpConfig.all" return a object.'
    );
    t.equal( 
        edpConfig.all()[ 'test.name' ], 
        'erik', 
        'The return object of "edpConfig.all" has "test.name" property.'
    );
    t.equal( 
        edpConfig.all()[ 'test.age' ], 
        18, 
        'The return object of "edpConfig.all" has "test.age" property.'
    );
    t.end();
} );
