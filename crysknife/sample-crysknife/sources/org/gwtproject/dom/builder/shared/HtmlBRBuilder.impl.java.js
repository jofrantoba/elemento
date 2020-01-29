goog.module('org.gwtproject.dom.builder.shared.HtmlBRBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BRBuilder = goog.require('org.gwtproject.dom.builder.shared.BRBuilder$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');

/**
 * @extends {HtmlElementBuilderBase<BRBuilder>}
 * @implements {BRBuilder}
  */
class HtmlBRBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlBRBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlBRBuilder.$clinit();
  let $instance = new HtmlBRBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlBRBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlBRBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, true);
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlBRBuilder.$clinit = () =>{};
  HtmlBRBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlBRBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HtmlBRBuilder, 'org.gwtproject.dom.builder.shared.HtmlBRBuilder');

BRBuilder.$markImplementor(HtmlBRBuilder);

exports = HtmlBRBuilder; 
//# sourceMappingURL=HtmlBRBuilder.js.map