goog.module('org.gwtproject.text.shared.AbstractSafeHtmlRenderer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtmlRenderer = goog.require('org.gwtproject.text.shared.SafeHtmlRenderer$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');

/**
 * @abstract
 * @template T
 * @implements {SafeHtmlRenderer<T>}
  */
class AbstractSafeHtmlRenderer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_text_shared_AbstractSafeHtmlRenderer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {T} object
  * @param {SafeHtmlBuilder} appendable
  * @public
  */
 m_render__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(object, appendable) {
  appendable.m_append__org_gwtproject_safehtml_shared_SafeHtml(this.m_render__java_lang_Object(object));
 }
 /**
  * @param {*} obj
  * @return {SafeHtml}
  * @public
  */
 m_toSafeHtml__java_lang_Object(obj) {
  return $Equality.$same(obj, null) ? AbstractSafeHtmlRenderer.f_EMPTY_STRING__org_gwtproject_text_shared_AbstractSafeHtmlRenderer_ : SafeHtmlUtils.m_fromString__java_lang_String(j_l_String.m_valueOf__java_lang_Object(obj));
 }
 /**
  * @public
  */
 static $clinit() {
  AbstractSafeHtmlRenderer.$clinit = () =>{};
  AbstractSafeHtmlRenderer.$loadModules();
  j_l_Object.$clinit();
  AbstractSafeHtmlRenderer.f_EMPTY_STRING__org_gwtproject_text_shared_AbstractSafeHtmlRenderer_ = SafeHtmlUtils.m_fromSafeConstant__java_lang_String("");
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AbstractSafeHtmlRenderer;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
 }
 
}
$Util.$setClassMetadata(AbstractSafeHtmlRenderer, 'org.gwtproject.text.shared.AbstractSafeHtmlRenderer');

SafeHtmlRenderer.$markImplementor(AbstractSafeHtmlRenderer);

/** @public {SafeHtml} */
AbstractSafeHtmlRenderer.f_EMPTY_STRING__org_gwtproject_text_shared_AbstractSafeHtmlRenderer_;

exports = AbstractSafeHtmlRenderer; 
//# sourceMappingURL=AbstractSafeHtmlRenderer.js.map