goog.module('org.gwtproject.dom.builder.client.DomOptGroupBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const OptGroupBuilder = goog.require('org.gwtproject.dom.builder.shared.OptGroupBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.OptGroupElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<OptGroupBuilder, Object>}
 * @implements {OptGroupBuilder}
  */
class DomOptGroupBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomOptGroupBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomOptGroupBuilder.$clinit();
  let $instance = new DomOptGroupBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomOptGroupBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomOptGroupBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /**
  * @override
  * @return {OptGroupBuilder}
  * @public
  */
 m_disabled__() {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).disabled = true;
  return this;
 }
 /**
  * @override
  * @param {?string} label
  * @return {OptGroupBuilder}
  * @public
  */
 m_label__java_lang_String(label) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).label = label;
  return this;
 }
 /**
  * @public
  */
 static $clinit() {
  DomOptGroupBuilder.$clinit = () =>{};
  DomOptGroupBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomOptGroupBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.OptGroupElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomOptGroupBuilder, 'org.gwtproject.dom.builder.client.DomOptGroupBuilder');

OptGroupBuilder.$markImplementor(DomOptGroupBuilder);

exports = DomOptGroupBuilder; 
//# sourceMappingURL=DomOptGroupBuilder.js.map