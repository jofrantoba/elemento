goog.module('org.gwtproject.dom.builder.shared.HtmlCanvasBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CanvasBuilder = goog.require('org.gwtproject.dom.builder.shared.CanvasBuilder$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<CanvasBuilder>}
 * @implements {CanvasBuilder}
  */
class HtmlCanvasBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlCanvasBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlCanvasBuilder.$clinit();
  let $instance = new HtmlCanvasBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlCanvasBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlCanvasBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {number} height
  * @return {CanvasBuilder}
  * @public
  */
 m_height__int(height) {
  return /**@type {CanvasBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("height", height), CanvasBuilder));
 }
 /**
  * @override
  * @param {number} width
  * @return {CanvasBuilder}
  * @public
  */
 m_width__int(width) {
  return /**@type {CanvasBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("width", width), CanvasBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlCanvasBuilder.$clinit = () =>{};
  HtmlCanvasBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlCanvasBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlCanvasBuilder, 'org.gwtproject.dom.builder.shared.HtmlCanvasBuilder');

CanvasBuilder.$markImplementor(HtmlCanvasBuilder);

exports = HtmlCanvasBuilder; 
//# sourceMappingURL=HtmlCanvasBuilder.js.map