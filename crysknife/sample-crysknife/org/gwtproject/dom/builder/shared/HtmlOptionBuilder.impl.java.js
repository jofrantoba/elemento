goog.module('org.gwtproject.dom.builder.shared.HtmlOptionBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const OptionBuilder = goog.require('org.gwtproject.dom.builder.shared.OptionBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<OptionBuilder>}
 * @implements {OptionBuilder}
  */
class HtmlOptionBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlOptionBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlOptionBuilder.$clinit();
  let $instance = new HtmlOptionBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlOptionBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlOptionBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @override
  * @return {OptionBuilder}
  * @public
  */
 m_defaultSelected__() {
  return /**@type {OptionBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("defaultSelected", "defaultSelected"), OptionBuilder));
 }
 /**
  * @override
  * @return {OptionBuilder}
  * @public
  */
 m_disabled__() {
  return /**@type {OptionBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("disabled", "disabled"), OptionBuilder));
 }
 /**
  * @override
  * @param {?string} label
  * @return {OptionBuilder}
  * @public
  */
 m_label__java_lang_String(label) {
  return /**@type {OptionBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("label", label), OptionBuilder));
 }
 /**
  * @override
  * @return {OptionBuilder}
  * @public
  */
 m_selected__() {
  return /**@type {OptionBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("selected", "selected"), OptionBuilder));
 }
 /**
  * @override
  * @param {?string} value
  * @return {OptionBuilder}
  * @public
  */
 m_value__java_lang_String(value) {
  return /**@type {OptionBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("value", value), OptionBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlOptionBuilder.$clinit = () =>{};
  HtmlOptionBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlOptionBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlOptionBuilder, 'org.gwtproject.dom.builder.shared.HtmlOptionBuilder');

OptionBuilder.$markImplementor(HtmlOptionBuilder);

exports = HtmlOptionBuilder; 
//# sourceMappingURL=HtmlOptionBuilder.js.map