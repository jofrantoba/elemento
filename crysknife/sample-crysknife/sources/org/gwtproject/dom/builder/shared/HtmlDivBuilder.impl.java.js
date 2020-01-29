goog.module('org.gwtproject.dom.builder.shared.HtmlDivBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DivBuilder = goog.require('org.gwtproject.dom.builder.shared.DivBuilder$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');

/**
 * @extends {HtmlElementBuilderBase<DivBuilder>}
 * @implements {DivBuilder}
  */
class HtmlDivBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlDivBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlDivBuilder.$clinit();
  let $instance = new HtmlDivBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlDivBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlDivBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlDivBuilder.$clinit = () =>{};
  HtmlDivBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlDivBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HtmlDivBuilder, 'org.gwtproject.dom.builder.shared.HtmlDivBuilder');

DivBuilder.$markImplementor(HtmlDivBuilder);

exports = HtmlDivBuilder; 
//# sourceMappingURL=HtmlDivBuilder.js.map