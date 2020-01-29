goog.module('org.gwtproject.dom.builder.shared.HtmlPreBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const PreBuilder = goog.require('org.gwtproject.dom.builder.shared.PreBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');

/**
 * @extends {HtmlElementBuilderBase<PreBuilder>}
 * @implements {PreBuilder}
  */
class HtmlPreBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlPreBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlPreBuilder.$clinit();
  let $instance = new HtmlPreBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlPreBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlPreBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlPreBuilder.$clinit = () =>{};
  HtmlPreBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlPreBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HtmlPreBuilder, 'org.gwtproject.dom.builder.shared.HtmlPreBuilder');

PreBuilder.$markImplementor(HtmlPreBuilder);

exports = HtmlPreBuilder; 
//# sourceMappingURL=HtmlPreBuilder.js.map