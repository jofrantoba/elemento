goog.module('org.gwtproject.dom.builder.shared.HtmlUListBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const UListBuilder = goog.require('org.gwtproject.dom.builder.shared.UListBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');

/**
 * @extends {HtmlElementBuilderBase<UListBuilder>}
 * @implements {UListBuilder}
  */
class HtmlUListBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlUListBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlUListBuilder.$clinit();
  let $instance = new HtmlUListBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlUListBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlUListBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlUListBuilder.$clinit = () =>{};
  HtmlUListBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlUListBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HtmlUListBuilder, 'org.gwtproject.dom.builder.shared.HtmlUListBuilder');

UListBuilder.$markImplementor(HtmlUListBuilder);

exports = HtmlUListBuilder; 
//# sourceMappingURL=HtmlUListBuilder.js.map