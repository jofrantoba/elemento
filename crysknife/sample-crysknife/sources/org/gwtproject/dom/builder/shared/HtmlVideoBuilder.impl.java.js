goog.module('org.gwtproject.dom.builder.shared.HtmlVideoBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlMediaBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlMediaBuilderBase$impl');
const VideoBuilder = goog.require('org.gwtproject.dom.builder.shared.VideoBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlMediaBuilderBase<VideoBuilder>}
 * @implements {VideoBuilder}
  */
class HtmlVideoBuilder extends HtmlMediaBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlVideoBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlVideoBuilder.$clinit();
  let $instance = new HtmlVideoBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlVideoBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlVideoBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlMediaBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {number} height
  * @return {VideoBuilder}
  * @public
  */
 m_height__int(height) {
  return /**@type {VideoBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("height", height), VideoBuilder));
 }
 /**
  * @override
  * @param {?string} url
  * @return {VideoBuilder}
  * @public
  */
 m_poster__java_lang_String(url) {
  return /**@type {VideoBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("url", url), VideoBuilder));
 }
 /**
  * @override
  * @param {number} width
  * @return {VideoBuilder}
  * @public
  */
 m_width__int(width) {
  return /**@type {VideoBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("width", width), VideoBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlVideoBuilder.$clinit = () =>{};
  HtmlVideoBuilder.$loadModules();
  HtmlMediaBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlVideoBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlVideoBuilder, 'org.gwtproject.dom.builder.shared.HtmlVideoBuilder');

VideoBuilder.$markImplementor(HtmlVideoBuilder);

exports = HtmlVideoBuilder; 
//# sourceMappingURL=HtmlVideoBuilder.js.map