goog.module('org.gwtproject.dom.builder.client.DomScriptBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const ScriptBuilder = goog.require('org.gwtproject.dom.builder.shared.ScriptBuilder$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ScriptElement.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {DomElementBuilderBase<ScriptBuilder, Object>}
 * @implements {ScriptBuilder}
  */
class DomScriptBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomScriptBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomScriptBuilder.$clinit();
  let $instance = new DomScriptBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomScriptBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomScriptBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {?string} defer
  * @return {ScriptBuilder}
  * @public
  */
 m_defer__java_lang_String(defer) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).defer = defer;
  return this;
 }
 /**
  * @override
  * @param {SafeHtml} html
  * @return {ScriptBuilder}
  * @public
  */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(html) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(ScriptBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_ScriptBuilder));
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isChildElementSupported__() {
  return false;
 }
 /**
  * @override
  * @param {?string} src
  * @return {ScriptBuilder}
  * @public
  */
 m_src__java_lang_String(src) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).src = src;
  return this;
 }
 /**
  * @override
  * @param {?string} text
  * @return {ScriptBuilder}
  * @public
  */
 m_text__java_lang_String(text) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).text = text;
  this.m_getDelegate___$pp_org_gwtproject_dom_builder_client().m_lockCurrentElement__();
  return this;
 }
 /**
  * @override
  * @param {?string} type
  * @return {ScriptBuilder}
  * @public
  */
 m_type__java_lang_String(type) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).type = type;
  return this;
 }
 /**
  * @public
  */
 static $clinit() {
  DomScriptBuilder.$clinit = () =>{};
  DomScriptBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomScriptBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.ScriptElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(DomScriptBuilder, 'org.gwtproject.dom.builder.client.DomScriptBuilder');

ScriptBuilder.$markImplementor(DomScriptBuilder);

exports = DomScriptBuilder; 
//# sourceMappingURL=DomScriptBuilder.js.map