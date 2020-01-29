goog.module('org.gwtproject.dom.builder.client.DomDivBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const DivBuilder = goog.require('org.gwtproject.dom.builder.shared.DivBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.DivElement.$Overlay$impl');

/**
 * @extends {DomElementBuilderBase<DivBuilder, Object>}
 * @implements {DivBuilder}
  */
class DomDivBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomDivBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomDivBuilder.$clinit();
  let $instance = new DomDivBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomDivBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomDivBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /**
  * @public
  */
 static $clinit() {
  DomDivBuilder.$clinit = () =>{};
  DomDivBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomDivBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DomDivBuilder, 'org.gwtproject.dom.builder.client.DomDivBuilder');

DivBuilder.$markImplementor(DomDivBuilder);

exports = DomDivBuilder; 
//# sourceMappingURL=DomDivBuilder.js.map