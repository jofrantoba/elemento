goog.module('org.gwtproject.dom.builder.shared.HtmlSpanBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const SpanBuilder = goog.require('org.gwtproject.dom.builder.shared.SpanBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');

/**
 * @extends {HtmlElementBuilderBase<SpanBuilder>}
 * @implements {SpanBuilder}
  */
class HtmlSpanBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlSpanBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlSpanBuilder.$clinit();
  let $instance = new HtmlSpanBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlSpanBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlSpanBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlSpanBuilder.$clinit = () =>{};
  HtmlSpanBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlSpanBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HtmlSpanBuilder, 'org.gwtproject.dom.builder.shared.HtmlSpanBuilder');

SpanBuilder.$markImplementor(HtmlSpanBuilder);

exports = HtmlSpanBuilder; 
//# sourceMappingURL=HtmlSpanBuilder.js.map