/***************************************************************************
 * 
 * Copyright (c) 2014 Baidu.com, Inc. All Rights Reserved
 * $Id$ 
 * 
 **************************************************************************/
 
 
 
/**
 * edp-config/cli/cat.js ~ 2014/03/07 19:54:52
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
cli.command = 'cat';

/**
 * 命令描述信息
 *
 * @type {string}
 */
cli.description = '输出edp用户配置';

/**
 * 模块命令行运行入口
 * 
 * @param {Array} args 命令运行参数
 * @param {Object} opts 命令运行选项
 */
cli.main = function ( args, opts ) {
    var edpConfig = require( '../index' );
    console.log( JSON.stringify( edpConfig.all(), null, 4 ) );
};

/**
 * 命令行配置项
 * @ignore
 * @type {Object}
 */
exports.cli = cli;






















/* vim: set ts=4 sw=4 sts=4 tw=100: */
