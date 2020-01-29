goog.module('org.gwtproject.dom.builder.shared.HtmlLegendBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const LegendBuilder = goog.require('org.gwtproject.dom.builder.shared.LegendBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<LegendBuilder>}
 * @implements {LegendBuilder}
  */
class HtmlLegendBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlLegendBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlLegendBuilder.$clinit();
  let $instance = new HtmlLegendBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlLegendBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlLegendBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {?string} accessKey
  * @return {LegendBuilder}
  * @public
  */
 m_accessKey__java_lang_String(accessKey) {
  return /**@type {LegendBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("accessKey", accessKey), LegendBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlLegendBuilder.$clinit = () =>{};
  HtmlLegendBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlLegendBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlLegendBuilder, 'org.gwtproject.dom.builder.shared.HtmlLegendBuilder');

LegendBuilder.$markImplementor(HtmlLegendBuilder);

exports = HtmlLegendBuilder; 
//# sourceMappingURL=HtmlLegendBuilder.js.map