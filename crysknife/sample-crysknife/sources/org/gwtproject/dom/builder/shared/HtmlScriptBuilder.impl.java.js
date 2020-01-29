goog.module('org.gwtproject.dom.builder.shared.HtmlScriptBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const ScriptBuilder = goog.require('org.gwtproject.dom.builder.shared.ScriptBuilder$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {HtmlElementBuilderBase<ScriptBuilder>}
 * @implements {ScriptBuilder}
  */
class HtmlScriptBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlScriptBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlScriptBuilder.$clinit();
  let $instance = new HtmlScriptBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlScriptBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlScriptBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {?string} defer
  * @return {ScriptBuilder}
  * @public
  */
 m_defer__java_lang_String(defer) {
  return /**@type {ScriptBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("defer", defer), ScriptBuilder));
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
  return /**@type {ScriptBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("src", src), ScriptBuilder));
 }
 /**
  * @override
  * @param {?string} type
  * @return {ScriptBuilder}
  * @public
  */
 m_type__java_lang_String(type) {
  return /**@type {ScriptBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("type", type), ScriptBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlScriptBuilder.$clinit = () =>{};
  HtmlScriptBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlScriptBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(HtmlScriptBuilder, 'org.gwtproject.dom.builder.shared.HtmlScriptBuilder');

ScriptBuilder.$markImplementor(HtmlScriptBuilder);

exports = HtmlScriptBuilder; 
//# sourceMappingURL=HtmlScriptBuilder.js.map