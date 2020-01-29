goog.module('org.gwtproject.dom.builder.client.DomSpanBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const SpanBuilder = goog.require('org.gwtproject.dom.builder.shared.SpanBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.SpanElement.$Overlay$impl');

/**
 * @extends {DomElementBuilderBase<SpanBuilder, Object>}
 * @implements {SpanBuilder}
  */
class DomSpanBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomSpanBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomSpanBuilder.$clinit();
  let $instance = new DomSpanBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomSpanBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomSpanBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /**
  * @public
  */
 static $clinit() {
  DomSpanBuilder.$clinit = () =>{};
  DomSpanBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomSpanBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DomSpanBuilder, 'org.gwtproject.dom.builder.client.DomSpanBuilder');

SpanBuilder.$markImplementor(DomSpanBuilder);

exports = DomSpanBuilder; 
//# sourceMappingURL=DomSpanBuilder.js.map