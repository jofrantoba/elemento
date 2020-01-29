goog.module('org.gwtproject.dom.builder.shared.HtmlLIBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const LIBuilder = goog.require('org.gwtproject.dom.builder.shared.LIBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');

/**
 * @extends {HtmlElementBuilderBase<LIBuilder>}
 * @implements {LIBuilder}
  */
class HtmlLIBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlLIBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlLIBuilder.$clinit();
  let $instance = new HtmlLIBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlLIBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlLIBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlLIBuilder.$clinit = () =>{};
  HtmlLIBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlLIBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HtmlLIBuilder, 'org.gwtproject.dom.builder.shared.HtmlLIBuilder');

LIBuilder.$markImplementor(HtmlLIBuilder);

exports = HtmlLIBuilder; 
//# sourceMappingURL=HtmlLIBuilder.js.map