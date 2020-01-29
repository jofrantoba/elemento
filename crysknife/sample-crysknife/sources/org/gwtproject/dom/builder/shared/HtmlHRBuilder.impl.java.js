goog.module('org.gwtproject.dom.builder.shared.HtmlHRBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HRBuilder = goog.require('org.gwtproject.dom.builder.shared.HRBuilder$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');

/**
 * @extends {HtmlElementBuilderBase<HRBuilder>}
 * @implements {HRBuilder}
  */
class HtmlHRBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlHRBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlHRBuilder.$clinit();
  let $instance = new HtmlHRBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlHRBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlHRBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, true);
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlHRBuilder.$clinit = () =>{};
  HtmlHRBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlHRBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HtmlHRBuilder, 'org.gwtproject.dom.builder.shared.HtmlHRBuilder');

HRBuilder.$markImplementor(HtmlHRBuilder);

exports = HtmlHRBuilder; 
//# sourceMappingURL=HtmlHRBuilder.js.map