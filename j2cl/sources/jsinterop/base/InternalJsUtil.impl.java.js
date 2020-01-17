goog.module('jsinterop.base.InternalJsUtil$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class');
let j_l_Class = goog.forwardDeclare('java.lang.Class$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let JsConstructorFn_$Overlay = goog.forwardDeclare('jsinterop.base.JsConstructorFn.$Overlay$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

class InternalJsUtil extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @template T
  * @return {Object<string, T>}
  * @public
  */
 // native static emptyObjectLiteral() 
 /**
  * @param {*} obj
  * @param {?string} key
  * @return {*}
  * @public
  */
 // native static getIndexed(obj, key) 
 /**
  * @param {*} obj
  * @param {?string} key
  * @return {boolean}
  * @public
  */
 // native static hasIndexed(obj, key) 
 /**
  * @param {*} obj
  * @param {?string} key
  * @return {*}
  * @public
  */
 // native static deleteIndexed(obj, key) 
 /**
  * @param {*} obj
  * @param {?string} key
  * @param {*} value
  * @public
  */
 // native static setIndexed(obj, key, value) 
 /**
  * @param {*} obj
  * @param {number} key
  * @return {*}
  * @public
  */
 // native static getIndexed(obj, key) 
 /**
  * @param {*} obj
  * @param {number} key
  * @return {boolean}
  * @public
  */
 // native static hasIndexed(obj, key) 
 /**
  * @param {*} obj
  * @param {number} key
  * @public
  */
 // native static deleteIndexed(obj, key) 
 /**
  * @param {*} obj
  * @param {number} key
  * @param {*} value
  * @public
  */
 // native static setIndexed(obj, key, value) 
 /**
  * @param {*} obj
  * @param {?function(?string):void} cb
  * @public
  */
 // native static forEach(obj, cb) 
 /**
  * @param {*} obj
  * @return {boolean}
  * @public
  */
 // native static castToAny(obj) 
 /**
  * @param {*} obj
  * @return {number}
  * @public
  */
 // native static castToAny(obj) 
 /**
  * @param {*} obj
  * @return {number}
  * @public
  */
 // native static castToAny(obj) 
 /**
  * @param {*} obj
  * @return {number}
  * @public
  */
 // native static castToAny(obj) 
 /**
  * @param {*} obj
  * @return {number}
  * @public
  */
 // native static castToAny(obj) 
 /**
  * @param {*} obj
  * @return {number}
  * @public
  */
 // native static castToAny(obj) 
 /**
  * @param {*} obj
  * @return {!$Long}
  * @public
  */
 // native static castToAny(obj) 
 /**
  * @param {*} obj
  * @return {boolean}
  * @public
  */
 // native static isLong(obj) 
 /**
  * @param {*} obj
  * @return {boolean}
  * @public
  */
 // native static isInt(obj) 
 /**
  * @param {*} obj
  * @return {boolean}
  * @public
  */
 // native static hasLength(obj) 
 /**
  * @param {IArrayLike<?>} obj
  * @return {number}
  * @public
  */
 // native static getLength(obj) 
 /**
  * @param {IArrayLike<?>} obj
  * @param {number} length
  * @public
  */
 // native static setLength(obj, length) 
 /**
  * @template T
  * @param {j_l_Class<T>} clazz
  * @return {?function(...*):void}
  * @public
  */
 // native static toCtor(clazz) 
 /**
  * @return {!InternalJsUtil}
  * @public
  */
 static $create__() {
  let $instance = new InternalJsUtil();
  $instance.$ctor__jsinterop_base_InternalJsUtil__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__jsinterop_base_InternalJsUtil__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  InternalJsUtil.$clinit = () =>{};
  InternalJsUtil.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof InternalJsUtil;
 }
 /**
  * @public
  */
 static $loadModules() {
  Class = goog.module.get('java.lang.Class');
 }
 
}
$Util.$setClassMetadata(InternalJsUtil, 'jsinterop.base.InternalJsUtil');

/* NATIVE.JS EPILOG */

const jsinterop_base_InternalJsUtil = InternalJsUtil;

/*
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 *
 */

/**
 * @return {Object}
 * @public
 */
InternalJsUtil.emptyObjectLiteral = function() {
  return {};
};

/**
 * @template T
 * @param {*} obj
 * @param {string|number} key
 * @return {T}
 * @public
 */
InternalJsUtil.getIndexed = function(obj, key) {
  return obj[key];
};

/**
 * @param {*} obj
 * @param {string|number} key
 * @return {boolean}
 * @public
 */
InternalJsUtil.hasIndexed = function(obj, key) {
  return key in obj;
};

/**
 * @param {*} obj
 * @param {string|number} key
 * @return {void}
 * @public
 */
InternalJsUtil.deleteIndexed = function(obj, key) {
  delete obj[key];
};

/**
 * @param {*} obj
 * @param {string|number} key
 * @param {*} value
 * @return {void}
 * @public
 */
InternalJsUtil.setIndexed = function(obj, key, value) {
  obj[key] = value;
};


/**
 * @param {*} obj
 * @param {function(?string):void} cb
 * @return {void}
 * @public
 */
InternalJsUtil.forEach = function(obj, cb) {
  for (let key in obj) {
    cb(key);
  }
};

/**
 * @template T
 * @param {*} obj
 * @return {T}
 * @public
 */
InternalJsUtil.castToAny = function(obj) {
  return obj;
};

const $Long_ = goog.require('nativebootstrap.Long');

/**
 * @param {*} obj
 * @return {boolean}
 * @public
 */
InternalJsUtil.isLong = function(obj) {
  return obj instanceof $Long_;
};

/**
 * @param {*} obj
 * @return {boolean}
 * @public
 */
InternalJsUtil.isInt = function(obj) {
  return ( /** @type {?} */ (obj) | 0) === obj;
};

/**
 * @param {*} obj
 * @return {boolean}
 * @public
 */
InternalJsUtil.hasLength = function(obj) {
  return typeof obj == 'object' && typeof obj.length == 'number';
};

/**
 * @param {IArrayLike} obj
 * @return {number}
 * @public
 */
InternalJsUtil.getLength = function(obj) {
  return obj.length;
};

/**
 * @param {IArrayLike} obj
 * @param {number} length
 * @public
 */
InternalJsUtil.setLength = function(obj, length) {
  obj.length = length;
};

const javaLangClass = goog.forwardDeclare('java.lang.Class');

/**
 * @param {javaLangClass<T>} clazz
 * @return {function(new:T)}
 * @template T
 * @public
 */
InternalJsUtil.toCtor = function(clazz) {
  return /** @type {?} */ (clazz.f_ctor__java_lang_Class_);
};


exports = InternalJsUtil; 
//# sourceMappingURL=InternalJsUtil.js.map