goog.module('org.gwtproject.dom.builder.shared.HtmlFormBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FormBuilder = goog.require('org.gwtproject.dom.builder.shared.FormBuilder$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<FormBuilder>}
 * @implements {FormBuilder}
  */
class HtmlFormBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlFormBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlFormBuilder.$clinit();
  let $instance = new HtmlFormBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlFormBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlFormBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {?string} acceptCharset
  * @return {FormBuilder}
  * @public
  */
 m_acceptCharset__java_lang_String(acceptCharset) {
  return /**@type {FormBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("acceptCharset", acceptCharset), FormBuilder));
 }
 /**
  * @override
  * @param {SafeUri} action
  * @return {FormBuilder}
  * @public
  */
 m_action__org_gwtproject_safehtml_shared_SafeUri(action) {
  return this.m_action__java_lang_String(action.m_asString__());
 }
 /**
  * @override
  * @param {?string} action
  * @return {FormBuilder}
  * @public
  */
 m_action__java_lang_String(action) {
  return /**@type {FormBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("action", action), FormBuilder));
 }
 /**
  * @override
  * @param {?string} enctype
  * @return {FormBuilder}
  * @public
  */
 m_enctype__java_lang_String(enctype) {
  return /**@type {FormBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("enctype", enctype), FormBuilder));
 }
 /**
  * @override
  * @param {?string} method
  * @return {FormBuilder}
  * @public
  */
 m_method__java_lang_String(method) {
  return /**@type {FormBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("method", method), FormBuilder));
 }
 /**
  * @override
  * @param {?string} name
  * @return {FormBuilder}
  * @public
  */
 m_name__java_lang_String(name) {
  return /**@type {FormBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("name", name), FormBuilder));
 }
 /**
  * @override
  * @param {?string} target
  * @return {FormBuilder}
  * @public
  */
 m_target__java_lang_String(target) {
  return /**@type {FormBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("target", target), FormBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlFormBuilder.$clinit = () =>{};
  HtmlFormBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlFormBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlFormBuilder, 'org.gwtproject.dom.builder.shared.HtmlFormBuilder');

FormBuilder.$markImplementor(HtmlFormBuilder);

exports = HtmlFormBuilder; 
//# sourceMappingURL=HtmlFormBuilder.js.map