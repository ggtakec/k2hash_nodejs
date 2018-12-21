/*
 * K2HASH
 *
 * Copyright 2015 Yahoo! JAPAN corporation.
 *
 * K2HASH is key-valuew store base libraries.
 * K2HASH is made for the purpose of the construction of
 * original KVS system and the offer of the library.
 * The characteristic is this KVS library which Key can
 * layer. And can support multi-processing and multi-thread,
 * and is provided safely as available KVS.
 *
 * For the full copyright and license information, please view
 * the LICENSE file that was distributed with this source code.
 *
 * AUTHOR:   Takeshi Nakatani
 * CREATE:   Tue 6 Nov 2018
 * REVISION:
 */

'use strict';

//
// Common Chai objects for each test modules.
//
var chai		= require('chai');
var k2hash		= require('k2hash');

//
// Exports
//
exports.chai	= chai;
exports.k2hash	= k2hash;
exports.assert	= chai.assert;
exports.expect	= chai.expect;

/*
 * VIM modelines
 *
 * vim:set ts=4 fenc=utf-8:
 */
