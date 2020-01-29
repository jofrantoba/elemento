goog.module('org.gwtproject.dom.builder.shared.HtmlStyleBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const StyleBuilder = goog.require('org.gwtproject.dom.builder.shared.StyleBuilder$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {HtmlElementBuilderBase<StyleBuilder>}
 * @implements {StyleBuilder}
  */
class HtmlStyleBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlStyleBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlStyleBuilder.$clinit();
  let $instance = new HtmlStyleBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlStyleBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlStyleBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {?string} cssText
  * @return {StyleBuilder}
  * @public
  */
 m_cssText__java_lang_String(cssText) {
  return /**@type {StyleBuilder} */ ($Casts.$to(super.m_text__java_lang_String(cssText), StyleBuilder));
 }
 /**
  * @override
  * @return {StyleBuilder}
  * @public
  */
 m_disabled__() {
  return /**@type {StyleBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("disabled", "disabled"), StyleBuilder));
 }
 /**
  * @override
  * @param {SafeHtml} html
  * @return {StyleBuilder}
  * @public
  */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(html) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(StyleBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_StyleBuilder));
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
  * @param {?string} media
  * @return {StyleBuilder}
  * @public
  */
 m_media__java_lang_String(media) {
  return /**@type {StyleBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("media", media), StyleBuilder));
 }
 /**
  * @override
  * @param {?string} text
  * @return {StyleBuilder}
  * @public
  */
 m_text__java_lang_String(text) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(StyleBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_StyleBuilder));
 }
 /**
  * @override
  * @param {?string} type
  * @return {StyleBuilder}
  * @public
  */
 m_type__java_lang_String(type) {
  return /**@type {StyleBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("type", type), StyleBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlStyleBuilder.$clinit = () =>{};
  HtmlStyleBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlStyleBuilder;
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
$Util.$setClassMetadata(HtmlStyleBuilder, 'org.gwtproject.dom.builder.shared.HtmlStyleBuilder');

StyleBuilder.$markImplementor(HtmlStyleBuilder);

exports = HtmlStyleBuilder; 
//# sourceMappingURL=HtmlStyleBuilder.js.map