goog.module('org.gwtproject.dom.builder.client.DomPreBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const PreBuilder = goog.require('org.gwtproject.dom.builder.shared.PreBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.PreElement.$Overlay$impl');

/**
 * @extends {DomElementBuilderBase<PreBuilder, Object>}
 * @implements {PreBuilder}
  */
class DomPreBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomPreBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomPreBuilder.$clinit();
  let $instance = new DomPreBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomPreBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomPreBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /**
  * @public
  */
 static $clinit() {
  DomPreBuilder.$clinit = () =>{};
  DomPreBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomPreBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DomPreBuilder, 'org.gwtproject.dom.builder.client.DomPreBuilder');

PreBuilder.$markImplementor(DomPreBuilder);

exports = DomPreBuilder; 
//# sourceMappingURL=DomPreBuilder.js.map