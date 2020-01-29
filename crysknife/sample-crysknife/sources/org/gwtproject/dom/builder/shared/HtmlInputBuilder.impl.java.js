goog.module('org.gwtproject.dom.builder.shared.HtmlInputBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const InputBuilder = goog.require('org.gwtproject.dom.builder.shared.InputBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<InputBuilder>}
 * @implements {InputBuilder}
  */
class HtmlInputBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlInputBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlInputBuilder.$clinit();
  let $instance = new HtmlInputBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlInputBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlInputBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, true);
 }
 /**
  * @override
  * @param {?string} accept
  * @return {InputBuilder}
  * @public
  */
 m_accept__java_lang_String(accept) {
  return /**@type {InputBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("accept", accept), InputBuilder));
 }
 /**
  * @override
  * @param {?string} accessKey
  * @return {InputBuilder}
  * @public
  */
 m_accessKey__java_lang_String(accessKey) {
  return /**@type {InputBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("accessKey", accessKey), InputBuilder));
 }
 /**
  * @override
  * @param {?string} alt
  * @return {InputBuilder}
  * @public
  */
 m_alt__java_lang_String(alt) {
  return /**@type {InputBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("alt", alt), InputBuilder));
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_checked__() {
  return /**@type {InputBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("checked", "checked"), InputBuilder));
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_defaultChecked__() {
  return /**@type {InputBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("defaultChecked", "defaultChecked"), InputBuilder));
 }
 /**
  * @override
  * @param {?string} defaultValue
  * @return {InputBuilder}
  * @public
  */
 m_defaultValue__java_lang_String(defaultValue) {
  return /**@type {InputBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("defaultValue", defaultValue), InputBuilder));
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_disabled__() {
  return /**@type {InputBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("disabled", "disabled"), InputBuilder));
 }
 /**
  * @override
  * @param {number} maxLength
  * @return {InputBuilder}
  * @public
  */
 m_maxLength__int(maxLength) {
  return /**@type {InputBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("maxlength", maxLength), InputBuilder));
 }
 /**
  * @override
  * @param {?string} name
  * @return {InputBuilder}
  * @public
  */
 m_name__java_lang_String(name) {
  return /**@type {InputBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("name", name), InputBuilder));
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_readOnly__() {
  return /**@type {InputBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("readonly", "readonly"), InputBuilder));
 }
 /**
  * @override
  * @param {number} size
  * @return {InputBuilder}
  * @public
  */
 m_size__int(size) {
  return /**@type {InputBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("size", size), InputBuilder));
 }
 /**
  * @override
  * @param {?string} src
  * @return {InputBuilder}
  * @public
  */
 m_src__java_lang_String(src) {
  return /**@type {InputBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("src", src), InputBuilder));
 }
 /**
  * @override
  * @param {?string} value
  * @return {InputBuilder}
  * @public
  */
 m_value__java_lang_String(value) {
  return /**@type {InputBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("value", value), InputBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlInputBuilder.$clinit = () =>{};
  HtmlInputBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlInputBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlInputBuilder, 'org.gwtproject.dom.builder.shared.HtmlInputBuilder');

InputBuilder.$markImplementor(HtmlInputBuilder);

exports = HtmlInputBuilder; 
//# sourceMappingURL=HtmlInputBuilder.js.map