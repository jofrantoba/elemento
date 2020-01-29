goog.module('org.gwtproject.dom.builder.client.DomParagraphBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const ParagraphBuilder = goog.require('org.gwtproject.dom.builder.shared.ParagraphBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ParagraphElement.$Overlay$impl');

/**
 * @extends {DomElementBuilderBase<ParagraphBuilder, Object>}
 * @implements {ParagraphBuilder}
  */
class DomParagraphBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomParagraphBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomParagraphBuilder.$clinit();
  let $instance = new DomParagraphBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomParagraphBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomParagraphBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /**
  * @public
  */
 static $clinit() {
  DomParagraphBuilder.$clinit = () =>{};
  DomParagraphBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomParagraphBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DomParagraphBuilder, 'org.gwtproject.dom.builder.client.DomParagraphBuilder');

ParagraphBuilder.$markImplementor(DomParagraphBuilder);

exports = DomParagraphBuilder; 
//# sourceMappingURL=DomParagraphBuilder.js.map