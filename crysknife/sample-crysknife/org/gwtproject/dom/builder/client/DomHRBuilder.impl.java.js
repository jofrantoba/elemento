goog.module('org.gwtproject.dom.builder.client.DomHRBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const HRBuilder = goog.require('org.gwtproject.dom.builder.shared.HRBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.HRElement.$Overlay$impl');

/**
 * @extends {DomElementBuilderBase<HRBuilder, Object>}
 * @implements {HRBuilder}
  */
class DomHRBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomHRBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomHRBuilder.$clinit();
  let $instance = new DomHRBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomHRBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomHRBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, true);
 }
 /**
  * @public
  */
 static $clinit() {
  DomHRBuilder.$clinit = () =>{};
  DomHRBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomHRBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DomHRBuilder, 'org.gwtproject.dom.builder.client.DomHRBuilder');

HRBuilder.$markImplementor(DomHRBuilder);

exports = DomHRBuilder; 
//# sourceMappingURL=DomHRBuilder.js.map