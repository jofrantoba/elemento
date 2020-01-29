goog.module('org.gwtproject.dom.builder.client.DomDListBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const DListBuilder = goog.require('org.gwtproject.dom.builder.shared.DListBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.DListElement.$Overlay$impl');

/**
 * @extends {DomElementBuilderBase<DListBuilder, Object>}
 * @implements {DListBuilder}
  */
class DomDListBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomDListBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomDListBuilder.$clinit();
  let $instance = new DomDListBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomDListBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomDListBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /**
  * @public
  */
 static $clinit() {
  DomDListBuilder.$clinit = () =>{};
  DomDListBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomDListBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DomDListBuilder, 'org.gwtproject.dom.builder.client.DomDListBuilder');

DListBuilder.$markImplementor(DomDListBuilder);

exports = DomDListBuilder; 
//# sourceMappingURL=DomDListBuilder.js.map