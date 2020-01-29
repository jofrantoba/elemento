goog.module('org.gwtproject.dom.builder.shared.HtmlTextAreaBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const TextAreaBuilder = goog.require('org.gwtproject.dom.builder.shared.TextAreaBuilder$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {HtmlElementBuilderBase<TextAreaBuilder>}
 * @implements {TextAreaBuilder}
  */
class HtmlTextAreaBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlTextAreaBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlTextAreaBuilder.$clinit();
  let $instance = new HtmlTextAreaBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlTextAreaBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlTextAreaBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {?string} accessKey
  * @return {TextAreaBuilder}
  * @public
  */
 m_accessKey__java_lang_String(accessKey) {
  return /**@type {TextAreaBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("accessKey", accessKey), TextAreaBuilder));
 }
 /**
  * @override
  * @param {number} cols
  * @return {TextAreaBuilder}
  * @public
  */
 m_cols__int(cols) {
  return /**@type {TextAreaBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("cols", cols), TextAreaBuilder));
 }
 /**
  * @override
  * @param {?string} defaultValue
  * @return {TextAreaBuilder}
  * @public
  */
 m_defaultValue__java_lang_String(defaultValue) {
  return /**@type {TextAreaBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("defaultValue", defaultValue), TextAreaBuilder));
 }
 /**
  * @override
  * @return {TextAreaBuilder}
  * @public
  */
 m_disabled__() {
  return /**@type {TextAreaBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("disabled", "disabled"), TextAreaBuilder));
 }
 /**
  * @override
  * @param {SafeHtml} html
  * @return {TextAreaBuilder}
  * @public
  */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(html) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(TextAreaBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_TextAreaBuilder));
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
  * @param {?string} name
  * @return {TextAreaBuilder}
  * @public
  */
 m_name__java_lang_String(name) {
  return /**@type {TextAreaBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("name", name), TextAreaBuilder));
 }
 /**
  * @override
  * @return {TextAreaBuilder}
  * @public
  */
 m_readOnly__() {
  return /**@type {TextAreaBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("readonly", "readonly"), TextAreaBuilder));
 }
 /**
  * @override
  * @param {number} rows
  * @return {TextAreaBuilder}
  * @public
  */
 m_rows__int(rows) {
  return /**@type {TextAreaBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("rows", rows), TextAreaBuilder));
 }
 /**
  * @override
  * @param {?string} value
  * @return {TextAreaBuilder}
  * @public
  */
 m_value__java_lang_String(value) {
  return /**@type {TextAreaBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("value", value), TextAreaBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlTextAreaBuilder.$clinit = () =>{};
  HtmlTextAreaBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlTextAreaBuilder;
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
$Util.$setClassMetadata(HtmlTextAreaBuilder, 'org.gwtproject.dom.builder.shared.HtmlTextAreaBuilder');

TextAreaBuilder.$markImplementor(HtmlTextAreaBuilder);

exports = HtmlTextAreaBuilder; 
//# sourceMappingURL=HtmlTextAreaBuilder.js.map