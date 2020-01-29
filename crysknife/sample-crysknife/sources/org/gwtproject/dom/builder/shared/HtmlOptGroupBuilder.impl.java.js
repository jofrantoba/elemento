goog.module('org.gwtproject.dom.builder.shared.HtmlOptGroupBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const OptGroupBuilder = goog.require('org.gwtproject.dom.builder.shared.OptGroupBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<OptGroupBuilder>}
 * @implements {OptGroupBuilder}
  */
class HtmlOptGroupBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlOptGroupBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlOptGroupBuilder.$clinit();
  let $instance = new HtmlOptGroupBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlOptGroupBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlOptGroupBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @override
  * @return {OptGroupBuilder}
  * @public
  */
 m_disabled__() {
  return /**@type {OptGroupBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("disabled", "disabled"), OptGroupBuilder));
 }
 /**
  * @override
  * @param {?string} label
  * @return {OptGroupBuilder}
  * @public
  */
 m_label__java_lang_String(label) {
  return /**@type {OptGroupBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("label", label), OptGroupBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlOptGroupBuilder.$clinit = () =>{};
  HtmlOptGroupBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlOptGroupBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlOptGroupBuilder, 'org.gwtproject.dom.builder.shared.HtmlOptGroupBuilder');

OptGroupBuilder.$markImplementor(HtmlOptGroupBuilder);

exports = HtmlOptGroupBuilder; 
//# sourceMappingURL=HtmlOptGroupBuilder.js.map