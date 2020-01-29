goog.module('org.gwtproject.dom.builder.shared.HtmlLabelBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const LabelBuilder = goog.require('org.gwtproject.dom.builder.shared.LabelBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<LabelBuilder>}
 * @implements {LabelBuilder}
  */
class HtmlLabelBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlLabelBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlLabelBuilder.$clinit();
  let $instance = new HtmlLabelBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlLabelBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlLabelBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {?string} accessKey
  * @return {LabelBuilder}
  * @public
  */
 m_accessKey__java_lang_String(accessKey) {
  return /**@type {LabelBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("accessKey", accessKey), LabelBuilder));
 }
 /**
  * @override
  * @param {?string} htmlFor
  * @return {LabelBuilder}
  * @public
  */
 m_htmlFor__java_lang_String(htmlFor) {
  return /**@type {LabelBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("for", htmlFor), LabelBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlLabelBuilder.$clinit = () =>{};
  HtmlLabelBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlLabelBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlLabelBuilder, 'org.gwtproject.dom.builder.shared.HtmlLabelBuilder');

LabelBuilder.$markImplementor(HtmlLabelBuilder);

exports = HtmlLabelBuilder; 
//# sourceMappingURL=HtmlLabelBuilder.js.map