goog.module('org.gwtproject.dom.builder.shared.HtmlTableColBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const TableColBuilder = goog.require('org.gwtproject.dom.builder.shared.TableColBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<TableColBuilder>}
 * @implements {TableColBuilder}
  */
class HtmlTableColBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @param {boolean} group
  * @return {!HtmlTableColBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, group) {
  HtmlTableColBuilder.$clinit();
  let $instance = new HtmlTableColBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlTableColBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, group);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @param {boolean} group
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlTableColBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, group) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, !group);
 }
 /**
  * @override
  * @param {?string} align
  * @return {TableColBuilder}
  * @public
  */
 m_align__java_lang_String(align) {
  return /**@type {TableColBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("align", align), TableColBuilder));
 }
 /**
  * @override
  * @param {?string} ch
  * @return {TableColBuilder}
  * @public
  */
 m_ch__java_lang_String(ch) {
  return /**@type {TableColBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("ch", ch), TableColBuilder));
 }
 /**
  * @override
  * @param {?string} chOff
  * @return {TableColBuilder}
  * @public
  */
 m_chOff__java_lang_String(chOff) {
  return /**@type {TableColBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("chOff", chOff), TableColBuilder));
 }
 /**
  * @override
  * @param {number} span
  * @return {TableColBuilder}
  * @public
  */
 m_span__int(span) {
  return /**@type {TableColBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("span", span), TableColBuilder));
 }
 /**
  * @override
  * @param {?string} vAlign
  * @return {TableColBuilder}
  * @public
  */
 m_vAlign__java_lang_String(vAlign) {
  return /**@type {TableColBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("vAlign", vAlign), TableColBuilder));
 }
 /**
  * @override
  * @param {?string} width
  * @return {TableColBuilder}
  * @public
  */
 m_width__java_lang_String(width) {
  return /**@type {TableColBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("width", width), TableColBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlTableColBuilder.$clinit = () =>{};
  HtmlTableColBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlTableColBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlTableColBuilder, 'org.gwtproject.dom.builder.shared.HtmlTableColBuilder');

TableColBuilder.$markImplementor(HtmlTableColBuilder);

exports = HtmlTableColBuilder; 
//# sourceMappingURL=HtmlTableColBuilder.js.map