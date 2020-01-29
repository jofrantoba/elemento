goog.module('org.gwtproject.dom.builder.client.DomCanvasBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const CanvasBuilder = goog.require('org.gwtproject.dom.builder.shared.CanvasBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.CanvasElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<CanvasBuilder, Object>}
 * @implements {CanvasBuilder}
  */
class DomCanvasBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomCanvasBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomCanvasBuilder.$clinit();
  let $instance = new DomCanvasBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomCanvasBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomCanvasBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {number} height
  * @return {CanvasBuilder}
  * @public
  */
 m_height__int(height) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).height = height;
  return this;
 }
 /**
  * @override
  * @param {number} width
  * @return {CanvasBuilder}
  * @public
  */
 m_width__int(width) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).width = width;
  return this;
 }
 /**
  * @public
  */
 static $clinit() {
  DomCanvasBuilder.$clinit = () =>{};
  DomCanvasBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomCanvasBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.CanvasElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomCanvasBuilder, 'org.gwtproject.dom.builder.client.DomCanvasBuilder');

CanvasBuilder.$markImplementor(DomCanvasBuilder);

exports = DomCanvasBuilder; 
//# sourceMappingURL=DomCanvasBuilder.js.map