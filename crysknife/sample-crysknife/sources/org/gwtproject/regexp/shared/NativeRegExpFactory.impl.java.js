goog.module('org.gwtproject.regexp.shared.NativeRegExpFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RegExpFactory = goog.require('org.gwtproject.regexp.shared.RegExpFactory$impl');

let NativeRegExp = goog.forwardDeclare('org.gwtproject.regexp.client.NativeRegExp$impl');
let RegExp = goog.forwardDeclare('org.gwtproject.regexp.shared.RegExp$impl');

class NativeRegExpFactory extends RegExpFactory {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!NativeRegExpFactory}
  * @public
  */
 static $create__() {
  NativeRegExpFactory.$clinit();
  let $instance = new NativeRegExpFactory();
  $instance.$ctor__org_gwtproject_regexp_shared_NativeRegExpFactory__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_regexp_shared_NativeRegExpFactory__() {
  this.$ctor__org_gwtproject_regexp_shared_RegExpFactory__();
 }
 /**
  * @override
  * @param {?string} pattern
  * @param {?string} flags
  * @return {RegExp}
  * @public
  */
 m_compile__java_lang_String__java_lang_String_$pp_org_gwtproject_regexp_shared(pattern, flags) {
  return NativeRegExp.m_compile__java_lang_String__java_lang_String(pattern, flags);
 }
 /**
  * @override
  * @param {?string} pattern
  * @return {RegExp}
  * @public
  */
 m_compile__java_lang_String_$pp_org_gwtproject_regexp_shared(pattern) {
  return NativeRegExp.m_compile__java_lang_String(pattern);
 }
 /**
  * @override
  * @param {?string} input
  * @return {?string}
  * @public
  */
 m_quote__java_lang_String_$pp_org_gwtproject_regexp_shared(input) {
  return NativeRegExp.m_quote__java_lang_String(input);
 }
 /**
  * @public
  */
 static $clinit() {
  NativeRegExpFactory.$clinit = () =>{};
  NativeRegExpFactory.$loadModules();
  RegExpFactory.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof NativeRegExpFactory;
 }
 /**
  * @public
  */
 static $loadModules() {
  NativeRegExp = goog.module.get('org.gwtproject.regexp.client.NativeRegExp$impl');
 }
 
}
$Util.$setClassMetadata(NativeRegExpFactory, 'org.gwtproject.regexp.shared.NativeRegExpFactory');

exports = NativeRegExpFactory; 
//# sourceMappingURL=NativeRegExpFactory.js.map