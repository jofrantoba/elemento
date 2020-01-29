goog.module('org.gwtproject.dom.builder.shared.HtmlParagraphBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const ParagraphBuilder = goog.require('org.gwtproject.dom.builder.shared.ParagraphBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');

/**
 * @extends {HtmlElementBuilderBase<ParagraphBuilder>}
 * @implements {ParagraphBuilder}
  */
class HtmlParagraphBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlParagraphBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlParagraphBuilder.$clinit();
  let $instance = new HtmlParagraphBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlParagraphBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlParagraphBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlParagraphBuilder.$clinit = () =>{};
  HtmlParagraphBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlParagraphBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HtmlParagraphBuilder, 'org.gwtproject.dom.builder.shared.HtmlParagraphBuilder');

ParagraphBuilder.$markImplementor(HtmlParagraphBuilder);

exports = HtmlParagraphBuilder; 
//# sourceMappingURL=HtmlParagraphBuilder.js.map