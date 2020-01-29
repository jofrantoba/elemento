goog.module('org.gwtproject.dom.builder.shared.HtmlTableSectionBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const TableSectionBuilder = goog.require('org.gwtproject.dom.builder.shared.TableSectionBuilder$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {HtmlElementBuilderBase<TableSectionBuilder>}
 * @implements {TableSectionBuilder}
  */
class HtmlTableSectionBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlTableSectionBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlTableSectionBuilder.$clinit();
  let $instance = new HtmlTableSectionBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlTableSectionBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlTableSectionBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {?string} align
  * @return {TableSectionBuilder}
  * @public
  */
 m_align__java_lang_String(align) {
  return /**@type {TableSectionBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("align", align), TableSectionBuilder));
 }
 /**
  * @override
  * @param {?string} ch
  * @return {TableSectionBuilder}
  * @public
  */
 m_ch__java_lang_String(ch) {
  return /**@type {TableSectionBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("ch", ch), TableSectionBuilder));
 }
 /**
  * @override
  * @param {?string} chOff
  * @return {TableSectionBuilder}
  * @public
  */
 m_chOff__java_lang_String(chOff) {
  return /**@type {TableSectionBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("chOff", chOff), TableSectionBuilder));
 }
 /**
  * @override
  * @param {SafeHtml} html
  * @return {TableSectionBuilder}
  * @public
  */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(html) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(TableSectionBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_TableSectionBuilder));
 }
 /**
  * @override
  * @param {?string} text
  * @return {TableSectionBuilder}
  * @public
  */
 m_text__java_lang_String(text) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(TableSectionBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_TableSectionBuilder));
 }
 /**
  * @override
  * @param {?string} vAlign
  * @return {TableSectionBuilder}
  * @public
  */
 m_vAlign__java_lang_String(vAlign) {
  return /**@type {TableSectionBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("vAlign", vAlign), TableSectionBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlTableSectionBuilder.$clinit = () =>{};
  HtmlTableSectionBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlTableSectionBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(HtmlTableSectionBuilder, 'org.gwtproject.dom.builder.shared.HtmlTableSectionBuilder');

TableSectionBuilder.$markImplementor(HtmlTableSectionBuilder);

exports = HtmlTableSectionBuilder; 
//# sourceMappingURL=HtmlTableSectionBuilder.js.map