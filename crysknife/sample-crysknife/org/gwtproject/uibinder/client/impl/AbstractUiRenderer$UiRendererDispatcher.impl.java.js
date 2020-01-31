goog.module('org.gwtproject.uibinder.client.impl.AbstractUiRenderer.UiRendererDispatcher$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let NullPointerException = goog.forwardDeclare('java.lang.NullPointerException$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let DomEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent$impl');
let AbstractUiRenderer = goog.forwardDeclare('org.gwtproject.uibinder.client.impl.AbstractUiRenderer$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 * @template T
 * @implements {HasHandlers}
  */
class UiRendererDispatcher extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {T}*/
  this.f_eventTarget__org_gwtproject_uibinder_client_impl_AbstractUiRenderer_UiRendererDispatcher_;
  /**@type {number}*/
  this.f_methodIndex__org_gwtproject_uibinder_client_impl_AbstractUiRenderer_UiRendererDispatcher_ = 0;
  /**@type {Object}*/
  this.f_root__org_gwtproject_uibinder_client_impl_AbstractUiRenderer_UiRendererDispatcher_;
  /**@type {HashMap<?string, Integer>}*/
  this.f_table__org_gwtproject_uibinder_client_impl_AbstractUiRenderer_UiRendererDispatcher_;
 }
 
 $ctor__org_gwtproject_uibinder_client_impl_AbstractUiRenderer_UiRendererDispatcher__() {
  this.$ctor__java_lang_Object__();
 }
 
 m_fireEvent__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_dom_client_Element(/** T */ target, /** Object */ event, /** Object */ parentOrRoot) {
  if ($Equality.$same(target, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String("Null event handler received"));
  }
  if ($Equality.$same(event, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String("Null event object received"));
  }
  if ($Equality.$same(parentOrRoot, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String("Null parent received"));
  }
  if (!AbstractUiRenderer.m_isParentOrRenderer__org_gwtproject_dom_client_Element__java_lang_String(parentOrRoot, AbstractUiRenderer.f_RENDERED_ATTRIBUTE__org_gwtproject_uibinder_client_impl_AbstractUiRenderer)) {
   return;
  }
  this.f_eventTarget__org_gwtproject_uibinder_client_impl_AbstractUiRenderer_UiRendererDispatcher_ = target;
  this.f_root__org_gwtproject_uibinder_client_impl_AbstractUiRenderer_UiRendererDispatcher_ = AbstractUiRenderer.m_findRootElementOrNull__org_gwtproject_dom_client_Element__java_lang_String(parentOrRoot, AbstractUiRenderer.f_RENDERED_ATTRIBUTE__org_gwtproject_uibinder_client_impl_AbstractUiRenderer);
  this.f_methodIndex__org_gwtproject_uibinder_client_impl_AbstractUiRenderer_UiRendererDispatcher_ = AbstractUiRenderer.m_computeDispatchEvent__java_util_HashMap__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_NativeEvent(this.f_table__org_gwtproject_uibinder_client_impl_AbstractUiRenderer_UiRendererDispatcher_, this.f_root__org_gwtproject_uibinder_client_impl_AbstractUiRenderer_UiRendererDispatcher_, event);
  DomEvent.m_fireNativeEvent__org_gwtproject_dom_client_NativeEvent__org_gwtproject_event_shared_HasHandlers(event, this);
 }
 /** @return {T} */
 m_getEventTarget__() {
  return this.f_eventTarget__org_gwtproject_uibinder_client_impl_AbstractUiRenderer_UiRendererDispatcher_;
 }
 /** @return {number} */
 m_getMethodIndex__() {
  return this.f_methodIndex__org_gwtproject_uibinder_client_impl_AbstractUiRenderer_UiRendererDispatcher_;
 }
 /** @return {Object} */
 m_getRoot__() {
  return this.f_root__org_gwtproject_uibinder_client_impl_AbstractUiRenderer_UiRendererDispatcher_;
 }
 
 m_initDispatchTable__arrayOf_java_lang_String__arrayOf_java_lang_Integer(/** Array<?string> */ keys, /** Array<Integer> */ values) {
  this.f_table__org_gwtproject_uibinder_client_impl_AbstractUiRenderer_UiRendererDispatcher_ = AbstractUiRenderer.m_buildDispatchMap__arrayOf_java_lang_String__arrayOf_java_lang_Integer(keys, values);
 }
 
 static $clinit() {
  UiRendererDispatcher.$clinit = () =>{};
  UiRendererDispatcher.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UiRendererDispatcher;
 }
 
 static $loadModules() {
  NullPointerException = goog.module.get('java.lang.NullPointerException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DomEvent = goog.module.get('org.gwtproject.event.dom.client.DomEvent$impl');
  AbstractUiRenderer = goog.module.get('org.gwtproject.uibinder.client.impl.AbstractUiRenderer$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(UiRendererDispatcher, 'org.gwtproject.uibinder.client.impl.AbstractUiRenderer$UiRendererDispatcher');

HasHandlers.$markImplementor(UiRendererDispatcher);

exports = UiRendererDispatcher; 
//# sourceMappingURL=AbstractUiRenderer$UiRendererDispatcher.js.map