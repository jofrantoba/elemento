goog.module('org.gwtproject.dom.builder.shared.HtmlImageBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const ImageBuilder = goog.require('org.gwtproject.dom.builder.shared.ImageBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<ImageBuilder>}
 * @implements {ImageBuilder}
  */
class HtmlImageBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlImageBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlImageBuilder.$clinit();
  let $instance = new HtmlImageBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlImageBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlImageBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, true);
 }
 /**
  * @override
  * @param {?string} alt
  * @return {ImageBuilder}
  * @public
  */
 m_alt__java_lang_String(alt) {
  return /**@type {ImageBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("alt", alt), ImageBuilder));
 }
 /**
  * @override
  * @param {number} height
  * @return {ImageBuilder}
  * @public
  */
 m_height__int(height) {
  return /**@type {ImageBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("height", height), ImageBuilder));
 }
 /**
  * @override
  * @return {ImageBuilder}
  * @public
  */
 m_isMap__() {
  return /**@type {ImageBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("ismap", "ismap"), ImageBuilder));
 }
 /**
  * @override
  * @param {?string} src
  * @return {ImageBuilder}
  * @public
  */
 m_src__java_lang_String(src) {
  return /**@type {ImageBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("src", src), ImageBuilder));
 }
 /**
  * @override
  * @param {number} width
  * @return {ImageBuilder}
  * @public
  */
 m_width__int(width) {
  return /**@type {ImageBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("width", width), ImageBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlImageBuilder.$clinit = () =>{};
  HtmlImageBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlImageBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlImageBuilder, 'org.gwtproject.dom.builder.shared.HtmlImageBuilder');

ImageBuilder.$markImplementor(HtmlImageBuilder);

exports = HtmlImageBuilder; 
//# sourceMappingURL=HtmlImageBuilder.js.map