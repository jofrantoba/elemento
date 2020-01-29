goog.module('org.gwtproject.dom.builder.client.DomLIBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const LIBuilder = goog.require('org.gwtproject.dom.builder.shared.LIBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.LIElement.$Overlay$impl');

/**
 * @extends {DomElementBuilderBase<LIBuilder, Object>}
 * @implements {LIBuilder}
  */
class DomLIBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomLIBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomLIBuilder.$clinit();
  let $instance = new DomLIBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomLIBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomLIBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /**
  * @public
  */
 static $clinit() {
  DomLIBuilder.$clinit = () =>{};
  DomLIBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomLIBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DomLIBuilder, 'org.gwtproject.dom.builder.client.DomLIBuilder');

LIBuilder.$markImplementor(DomLIBuilder);

exports = DomLIBuilder; 
//# sourceMappingURL=DomLIBuilder.js.map