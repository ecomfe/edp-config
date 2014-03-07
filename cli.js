/***************************************************************************
 * 
 * Copyright (c) 2014 Baidu.com, Inc. All Rights Reserved
 * $Id$ 
 * 
 **************************************************************************/
 
 
 
/**
 * ../edp-config/cli.js ~ 2014/03/07 19:54:52
 * @author leeight(liyubei@baidu.com)
 * @version $Revision$ 
 * @description 
 * edp config的默认处理逻辑
 **/

/**
 * 命令行配置项
 *
 * @inner
 * @type {Object}
 */
var cli = {};

/**
 * 命令名称
 *
 * @type {string}
 */
cli.command = 'config';

/**
 * 命令选项信息
 *
 * @type {Array}
 */
cli.options = [ 'list' ];

/**
 * 命令描述信息
 *
 * @type {string}
 */
cli.description = '读取和设置edp用户配置';

/**
 * 模块命令行运行入口
 * 
 * @param {Array} args 命令运行参数
 * @param {Object} opts 命令运行选项
 */
cli.main = function ( args, opts ) {
    console.log( opts );

    var edpConfig = require( './index' );

    // 如果执行 edp config --list
    // 或者执行 edp config
    // 打印出当前的配置项
    if ( opts.list || (!args.length && !Object.keys(opts).length)) {
        console.log( JSON.stringify( edpConfig.all(), null, 4 ) );
        return;
    }

    var name = args[ 0 ];
    var value = args[ 1 ];

    if ( !value ) {
        console.log( edpConfig.get( name ) );
    }
    else {
        edpConfig.set( name, value );
        console.log( '"' + name + '" is setted.');
    }
};

/**
 * 命令行配置项
 * @ignore
 * @type {Object}
 */
module.exports = exports = cli;






















/* vim: set ts=4 sw=4 sts=4 tw=100: */
