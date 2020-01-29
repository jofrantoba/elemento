goog.module('org.gwtproject.text.shared.SimpleSafeHtmlRenderer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtmlRenderer = goog.require('org.gwtproject.text.shared.SafeHtmlRenderer$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {SafeHtmlRenderer<?string>}
  */
class SimpleSafeHtmlRenderer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {SimpleSafeHtmlRenderer}
  * @public
  */
 static m_getInstance__() {
  SimpleSafeHtmlRenderer.$clinit();
  if ($Equality.$same(SimpleSafeHtmlRenderer.f_instance__org_gwtproject_text_shared_SimpleSafeHtmlRenderer_, null)) {
   SimpleSafeHtmlRenderer.f_instance__org_gwtproject_text_shared_SimpleSafeHtmlRenderer_ = SimpleSafeHtmlRenderer.$create__();
  }
  return SimpleSafeHtmlRenderer.f_instance__org_gwtproject_text_shared_SimpleSafeHtmlRenderer_;
 }
 /**
  * @return {!SimpleSafeHtmlRenderer}
  * @public
  */
 static $create__() {
  let $instance = new SimpleSafeHtmlRenderer();
  $instance.$ctor__org_gwtproject_text_shared_SimpleSafeHtmlRenderer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_text_shared_SimpleSafeHtmlRenderer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @param {?string} object
  * @return {SafeHtml}
  * @public
  */
 m_render__java_lang_String(object) {
  return $Equality.$same(object, null) ? SafeHtmlUtils.f_EMPTY_SAFE_HTML__org_gwtproject_safehtml_shared_SafeHtmlUtils : SafeHtmlUtils.m_fromString__java_lang_String(object);
 }
 /**
  * @param {?string} object
  * @param {SafeHtmlBuilder} appendable
  * @public
  */
 m_render__java_lang_String__org_gwtproject_safehtml_shared_SafeHtmlBuilder(object, appendable) {
  appendable.m_append__org_gwtproject_safehtml_shared_SafeHtml(SafeHtmlUtils.m_fromString__java_lang_String(object));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {SafeHtml}
  * @public
  */
 m_render__java_lang_Object(arg0) {
  return this.m_render__java_lang_String(/**@type {?string} */ ($Casts.$to(arg0, j_l_String)));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @param {SafeHtmlBuilder} arg1
  * @public
  */
 m_render__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(arg0, arg1) {
  this.m_render__java_lang_String__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/**@type {?string} */ ($Casts.$to(arg0, j_l_String)), arg1);
 }
 /**
  * @public
  */
 static $clinit() {
  SimpleSafeHtmlRenderer.$clinit = () =>{};
  SimpleSafeHtmlRenderer.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SimpleSafeHtmlRenderer;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(SimpleSafeHtmlRenderer, 'org.gwtproject.text.shared.SimpleSafeHtmlRenderer');

SafeHtmlRenderer.$markImplementor(SimpleSafeHtmlRenderer);

/** @public {SimpleSafeHtmlRenderer} */
SimpleSafeHtmlRenderer.f_instance__org_gwtproject_text_shared_SimpleSafeHtmlRenderer_;

exports = SimpleSafeHtmlRenderer; 
//# sourceMappingURL=SimpleSafeHtmlRenderer.js.map