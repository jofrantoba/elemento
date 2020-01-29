goog.module('org.gwtproject.dom.builder.client.DomLabelBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const LabelBuilder = goog.require('org.gwtproject.dom.builder.shared.LabelBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.LabelElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<LabelBuilder, Object>}
 * @implements {LabelBuilder}
  */
class DomLabelBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomLabelBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomLabelBuilder.$clinit();
  let $instance = new DomLabelBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomLabelBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomLabelBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {?string} accessKey
  * @return {LabelBuilder}
  * @public
  */
 m_accessKey__java_lang_String(accessKey) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).accessKey = accessKey;
  return this;
 }
 /**
  * @override
  * @param {?string} htmlFor
  * @return {LabelBuilder}
  * @public
  */
 m_htmlFor__java_lang_String(htmlFor) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).htmlFor = htmlFor;
  return this;
 }
 /**
  * @public
  */
 static $clinit() {
  DomLabelBuilder.$clinit = () =>{};
  DomLabelBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomLabelBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.LabelElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomLabelBuilder, 'org.gwtproject.dom.builder.client.DomLabelBuilder');

LabelBuilder.$markImplementor(DomLabelBuilder);

exports = DomLabelBuilder; 
//# sourceMappingURL=DomLabelBuilder.js.map