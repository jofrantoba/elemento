goog.module('org.gwtproject.dom.builder.client.DomBaseBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const BaseBuilder = goog.require('org.gwtproject.dom.builder.shared.BaseBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.BaseElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<BaseBuilder, Object>}
 * @implements {BaseBuilder}
  */
class DomBaseBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomBaseBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomBaseBuilder.$clinit();
  let $instance = new DomBaseBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomBaseBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomBaseBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, true);
 }
 /**
  * @override
  * @param {?string} href
  * @return {BaseBuilder}
  * @public
  */
 m_href__java_lang_String(href) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).href = href;
  return this;
 }
 /**
  * @override
  * @param {?string} target
  * @return {BaseBuilder}
  * @public
  */
 m_target__java_lang_String(target) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).target = target;
  return this;
 }
 /**
  * @public
  */
 static $clinit() {
  DomBaseBuilder.$clinit = () =>{};
  DomBaseBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomBaseBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.BaseElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomBaseBuilder, 'org.gwtproject.dom.builder.client.DomBaseBuilder');

BaseBuilder.$markImplementor(DomBaseBuilder);

exports = DomBaseBuilder; 
//# sourceMappingURL=DomBaseBuilder.js.map