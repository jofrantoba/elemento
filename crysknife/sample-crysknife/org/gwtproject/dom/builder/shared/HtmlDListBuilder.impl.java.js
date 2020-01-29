goog.module('org.gwtproject.dom.builder.shared.HtmlDListBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DListBuilder = goog.require('org.gwtproject.dom.builder.shared.DListBuilder$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');

/**
 * @extends {HtmlElementBuilderBase<DListBuilder>}
 * @implements {DListBuilder}
  */
class HtmlDListBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlDListBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlDListBuilder.$clinit();
  let $instance = new HtmlDListBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlDListBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlDListBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlDListBuilder.$clinit = () =>{};
  HtmlDListBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlDListBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HtmlDListBuilder, 'org.gwtproject.dom.builder.shared.HtmlDListBuilder');

DListBuilder.$markImplementor(HtmlDListBuilder);

exports = HtmlDListBuilder; 
//# sourceMappingURL=HtmlDListBuilder.js.map