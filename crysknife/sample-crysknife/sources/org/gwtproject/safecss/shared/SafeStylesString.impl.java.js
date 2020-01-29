goog.module('org.gwtproject.safecss.shared.SafeStylesString$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SafeStyles = goog.require('org.gwtproject.safecss.shared.SafeStyles$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let SafeStylesUtils = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStylesUtils$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {SafeStyles}
  */
class SafeStylesString extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_css__org_gwtproject_safecss_shared_SafeStylesString_;
 }
 /**
  * Factory method corresponding to constructor 'SafeStylesString(String)'.
  * @param {?string} css
  * @return {!SafeStylesString}
  * @public
  */
 static $create__java_lang_String(css) {
  SafeStylesString.$clinit();
  let $instance = new SafeStylesString();
  $instance.$ctor__org_gwtproject_safecss_shared_SafeStylesString__java_lang_String(css);
  return $instance;
 }
 /**
  * Initialization from constructor 'SafeStylesString(String)'.
  * @param {?string} css
  * @public
  */
 $ctor__org_gwtproject_safecss_shared_SafeStylesString__java_lang_String(css) {
  this.$ctor__java_lang_Object__();
  SafeStylesUtils.m_verifySafeStylesConstraints__java_lang_String(css);
  this.f_css__org_gwtproject_safecss_shared_SafeStylesString_ = css;
 }
 /**
  * Factory method corresponding to constructor 'SafeStylesString()'.
  * @return {!SafeStylesString}
  * @public
  */
 static $create__() {
  let $instance = new SafeStylesString();
  $instance.$ctor__org_gwtproject_safecss_shared_SafeStylesString__();
  return $instance;
 }
 /**
  * Initialization from constructor 'SafeStylesString()'.
  * @public
  */
 $ctor__org_gwtproject_safecss_shared_SafeStylesString__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_asString__() {
  return this.f_css__org_gwtproject_safecss_shared_SafeStylesString_;
 }
 /**
  * @override
  * @param {*} obj
  * @return {boolean}
  * @public
  */
 equals(obj) {
  if (!SafeStyles.$isInstance(obj)) {
   return false;
  }
  return j_l_String.m_equals__java_lang_String__java_lang_Object(this.f_css__org_gwtproject_safecss_shared_SafeStylesString_, /**@type {SafeStyles} */ ($Casts.$to(obj, SafeStyles)).m_asString__());
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 hashCode() {
  return j_l_String.m_hashCode__java_lang_String(this.f_css__org_gwtproject_safecss_shared_SafeStylesString_);
 }
 /**
  * @public
  */
 static $clinit() {
  SafeStylesString.$clinit = () =>{};
  SafeStylesString.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SafeStylesString;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  SafeStylesUtils = goog.module.get('org.gwtproject.safecss.shared.SafeStylesUtils$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(SafeStylesString, 'org.gwtproject.safecss.shared.SafeStylesString');

SafeStyles.$markImplementor(SafeStylesString);

exports = SafeStylesString; 
//# sourceMappingURL=SafeStylesString.js.map