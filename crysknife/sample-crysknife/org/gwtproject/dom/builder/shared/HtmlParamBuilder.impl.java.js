goog.module('org.gwtproject.dom.builder.shared.HtmlParamBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const ParamBuilder = goog.require('org.gwtproject.dom.builder.shared.ParamBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<ParamBuilder>}
 * @implements {ParamBuilder}
  */
class HtmlParamBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlParamBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlParamBuilder.$clinit();
  let $instance = new HtmlParamBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlParamBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlParamBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, true);
 }
 /**
  * @override
  * @param {?string} name
  * @return {ParamBuilder}
  * @public
  */
 m_name__java_lang_String(name) {
  return /**@type {ParamBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("name", name), ParamBuilder));
 }
 /**
  * @override
  * @param {?string} value
  * @return {ParamBuilder}
  * @public
  */
 m_value__java_lang_String(value) {
  return /**@type {ParamBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("value", value), ParamBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlParamBuilder.$clinit = () =>{};
  HtmlParamBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlParamBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlParamBuilder, 'org.gwtproject.dom.builder.shared.HtmlParamBuilder');

ParamBuilder.$markImplementor(HtmlParamBuilder);

exports = HtmlParamBuilder; 
//# sourceMappingURL=HtmlParamBuilder.js.map