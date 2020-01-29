goog.module('org.gwtproject.regexp.client.NativeSplitResult$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SplitResult = goog.require('org.gwtproject.regexp.shared.SplitResult$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {SplitResult}
  */
class NativeSplitResult extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Array<?string>} */
  this.f_jsArray__org_gwtproject_regexp_client_NativeSplitResult_;
 }
 /**
  * @param {Array<?string>} result
  * @return {!NativeSplitResult}
  * @public
  */
 static $create__elemental2_core_JsArray(result) {
  NativeSplitResult.$clinit();
  let $instance = new NativeSplitResult();
  $instance.$ctor__org_gwtproject_regexp_client_NativeSplitResult__elemental2_core_JsArray(result);
  return $instance;
 }
 /**
  * @param {Array<?string>} result
  * @public
  */
 $ctor__org_gwtproject_regexp_client_NativeSplitResult__elemental2_core_JsArray(result) {
  this.$ctor__java_lang_Object__();
  this.f_jsArray__org_gwtproject_regexp_client_NativeSplitResult_ = result;
 }
 /**
  * @override
  * @param {number} index
  * @return {?string}
  * @public
  */
 m_get__int(index) {
  return /**@type {?string} */ ($Casts.$to($Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_jsArray__org_gwtproject_regexp_client_NativeSplitResult_, index), j_l_String));
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_length__() {
  return this.f_jsArray__org_gwtproject_regexp_client_NativeSplitResult_.length;
 }
 /**
  * @override
  * @param {number} index
  * @param {?string} value
  * @public
  */
 m_set__int__java_lang_String(index, value) {
  $Overlay.m_setAt__$devirt__jsinterop_base_JsArrayLike__int__java_lang_Object(this.f_jsArray__org_gwtproject_regexp_client_NativeSplitResult_, index, value);
 }
 /**
  * @public
  */
 static $clinit() {
  NativeSplitResult.$clinit = () =>{};
  NativeSplitResult.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof NativeSplitResult;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(NativeSplitResult, 'org.gwtproject.regexp.client.NativeSplitResult');

SplitResult.$markImplementor(NativeSplitResult);

exports = NativeSplitResult; 
//# sourceMappingURL=NativeSplitResult.js.map