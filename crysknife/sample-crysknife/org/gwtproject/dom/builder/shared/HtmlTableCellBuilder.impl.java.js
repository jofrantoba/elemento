goog.module('org.gwtproject.dom.builder.shared.HtmlTableCellBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const TableCellBuilder = goog.require('org.gwtproject.dom.builder.shared.TableCellBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<TableCellBuilder>}
 * @implements {TableCellBuilder}
  */
class HtmlTableCellBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlTableCellBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlTableCellBuilder.$clinit();
  let $instance = new HtmlTableCellBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlTableCellBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlTableCellBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {?string} align
  * @return {TableCellBuilder}
  * @public
  */
 m_align__java_lang_String(align) {
  return /**@type {TableCellBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("align", align), TableCellBuilder));
 }
 /**
  * @override
  * @param {?string} ch
  * @return {TableCellBuilder}
  * @public
  */
 m_ch__java_lang_String(ch) {
  return /**@type {TableCellBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("ch", ch), TableCellBuilder));
 }
 /**
  * @override
  * @param {?string} chOff
  * @return {TableCellBuilder}
  * @public
  */
 m_chOff__java_lang_String(chOff) {
  return /**@type {TableCellBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("chOff", chOff), TableCellBuilder));
 }
 /**
  * @override
  * @param {number} colSpan
  * @return {TableCellBuilder}
  * @public
  */
 m_colSpan__int(colSpan) {
  return /**@type {TableCellBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("colSpan", colSpan), TableCellBuilder));
 }
 /**
  * @override
  * @param {?string} headers
  * @return {TableCellBuilder}
  * @public
  */
 m_headers__java_lang_String(headers) {
  return /**@type {TableCellBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("headers", headers), TableCellBuilder));
 }
 /**
  * @override
  * @param {number} rowSpan
  * @return {TableCellBuilder}
  * @public
  */
 m_rowSpan__int(rowSpan) {
  return /**@type {TableCellBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("rowSpan", rowSpan), TableCellBuilder));
 }
 /**
  * @override
  * @param {?string} vAlign
  * @return {TableCellBuilder}
  * @public
  */
 m_vAlign__java_lang_String(vAlign) {
  return /**@type {TableCellBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("vAlign", vAlign), TableCellBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlTableCellBuilder.$clinit = () =>{};
  HtmlTableCellBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlTableCellBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlTableCellBuilder, 'org.gwtproject.dom.builder.shared.HtmlTableCellBuilder');

TableCellBuilder.$markImplementor(HtmlTableCellBuilder);

exports = HtmlTableCellBuilder; 
//# sourceMappingURL=HtmlTableCellBuilder.js.map