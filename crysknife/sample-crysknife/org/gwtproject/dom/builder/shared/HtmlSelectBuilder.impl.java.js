goog.module('org.gwtproject.dom.builder.shared.HtmlSelectBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const SelectBuilder = goog.require('org.gwtproject.dom.builder.shared.SelectBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<SelectBuilder>}
 * @implements {SelectBuilder}
  */
class HtmlSelectBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlSelectBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlSelectBuilder.$clinit();
  let $instance = new HtmlSelectBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlSelectBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlSelectBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @override
  * @return {SelectBuilder}
  * @public
  */
 m_disabled__() {
  return /**@type {SelectBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("disabled", "disabled"), SelectBuilder));
 }
 /**
  * @override
  * @return {SelectBuilder}
  * @public
  */
 m_multiple__() {
  return /**@type {SelectBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("multiple", "multiple"), SelectBuilder));
 }
 /**
  * @override
  * @param {?string} name
  * @return {SelectBuilder}
  * @public
  */
 m_name__java_lang_String(name) {
  return /**@type {SelectBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("name", name), SelectBuilder));
 }
 /**
  * @override
  * @param {number} index
  * @return {SelectBuilder}
  * @public
  */
 m_selectedIndex__int(index) {
  return /**@type {SelectBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("index", index), SelectBuilder));
 }
 /**
  * @override
  * @param {number} size
  * @return {SelectBuilder}
  * @public
  */
 m_size__int(size) {
  return /**@type {SelectBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("size", size), SelectBuilder));
 }
 /**
  * @override
  * @param {?string} type
  * @return {SelectBuilder}
  * @public
  */
 m_type__java_lang_String(type) {
  return /**@type {SelectBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("type", type), SelectBuilder));
 }
 /**
  * @override
  * @param {?string} value
  * @return {SelectBuilder}
  * @public
  */
 m_value__java_lang_String(value) {
  return /**@type {SelectBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("value", value), SelectBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlSelectBuilder.$clinit = () =>{};
  HtmlSelectBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlSelectBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlSelectBuilder, 'org.gwtproject.dom.builder.shared.HtmlSelectBuilder');

SelectBuilder.$markImplementor(HtmlSelectBuilder);

exports = HtmlSelectBuilder; 
//# sourceMappingURL=HtmlSelectBuilder.js.map