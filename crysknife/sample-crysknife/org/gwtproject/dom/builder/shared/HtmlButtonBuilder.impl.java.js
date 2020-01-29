goog.module('org.gwtproject.dom.builder.shared.HtmlButtonBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ButtonBuilder = goog.require('org.gwtproject.dom.builder.shared.ButtonBuilder$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<ButtonBuilder>}
 * @implements {ButtonBuilder}
  */
class HtmlButtonBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlButtonBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlButtonBuilder.$clinit();
  let $instance = new HtmlButtonBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlButtonBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlButtonBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {?string} accessKey
  * @return {ButtonBuilder}
  * @public
  */
 m_accessKey__java_lang_String(accessKey) {
  return /**@type {ButtonBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("accessKey", accessKey), ButtonBuilder));
 }
 /**
  * @override
  * @return {ButtonBuilder}
  * @public
  */
 m_disabled__() {
  return /**@type {ButtonBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("disabled", "disabled"), ButtonBuilder));
 }
 /**
  * @override
  * @param {?string} name
  * @return {ButtonBuilder}
  * @public
  */
 m_name__java_lang_String(name) {
  return /**@type {ButtonBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("name", name), ButtonBuilder));
 }
 /**
  * @override
  * @param {?string} value
  * @return {ButtonBuilder}
  * @public
  */
 m_value__java_lang_String(value) {
  return /**@type {ButtonBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("value", value), ButtonBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlButtonBuilder.$clinit = () =>{};
  HtmlButtonBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlButtonBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlButtonBuilder, 'org.gwtproject.dom.builder.shared.HtmlButtonBuilder');

ButtonBuilder.$markImplementor(HtmlButtonBuilder);

exports = HtmlButtonBuilder; 
//# sourceMappingURL=HtmlButtonBuilder.js.map