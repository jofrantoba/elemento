goog.module('org.gwtproject.dom.builder.shared.HtmlBaseBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseBuilder = goog.require('org.gwtproject.dom.builder.shared.BaseBuilder$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<BaseBuilder>}
 * @implements {BaseBuilder}
  */
class HtmlBaseBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlBaseBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlBaseBuilder.$clinit();
  let $instance = new HtmlBaseBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlBaseBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlBaseBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, true);
 }
 /**
  * @override
  * @param {?string} href
  * @return {BaseBuilder}
  * @public
  */
 m_href__java_lang_String(href) {
  return /**@type {BaseBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("href", href), BaseBuilder));
 }
 /**
  * @override
  * @param {?string} target
  * @return {BaseBuilder}
  * @public
  */
 m_target__java_lang_String(target) {
  return /**@type {BaseBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("target", target), BaseBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlBaseBuilder.$clinit = () =>{};
  HtmlBaseBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlBaseBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlBaseBuilder, 'org.gwtproject.dom.builder.shared.HtmlBaseBuilder');

BaseBuilder.$markImplementor(HtmlBaseBuilder);

exports = HtmlBaseBuilder; 
//# sourceMappingURL=HtmlBaseBuilder.js.map