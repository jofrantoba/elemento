goog.module('org.gwtproject.dom.builder.shared.HtmlTableBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const TableBuilder = goog.require('org.gwtproject.dom.builder.shared.TableBuilder$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {HtmlElementBuilderBase<TableBuilder>}
 * @implements {TableBuilder}
  */
class HtmlTableBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlTableBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlTableBuilder.$clinit();
  let $instance = new HtmlTableBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlTableBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlTableBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, false);
 }
 /**
  * @override
  * @param {number} border
  * @return {TableBuilder}
  * @public
  */
 m_border__int(border) {
  return /**@type {TableBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("border", border), TableBuilder));
 }
 /**
  * @override
  * @param {number} cellPadding
  * @return {TableBuilder}
  * @public
  */
 m_cellPadding__int(cellPadding) {
  return /**@type {TableBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("cellPadding", cellPadding), TableBuilder));
 }
 /**
  * @override
  * @param {number} cellSpacing
  * @return {TableBuilder}
  * @public
  */
 m_cellSpacing__int(cellSpacing) {
  return /**@type {TableBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("cellSpacing", cellSpacing), TableBuilder));
 }
 /**
  * @override
  * @param {?string} frame
  * @return {TableBuilder}
  * @public
  */
 m_frame__java_lang_String(frame) {
  return /**@type {TableBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("frame", frame), TableBuilder));
 }
 /**
  * @override
  * @param {SafeHtml} html
  * @return {TableBuilder}
  * @public
  */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(html) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(TableBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_TableBuilder));
 }
 /**
  * @override
  * @param {?string} rules
  * @return {TableBuilder}
  * @public
  */
 m_rules__java_lang_String(rules) {
  return /**@type {TableBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("rules", rules), TableBuilder));
 }
 /**
  * @override
  * @param {?string} text
  * @return {TableBuilder}
  * @public
  */
 m_text__java_lang_String(text) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(TableBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_TableBuilder));
 }
 /**
  * @override
  * @param {?string} width
  * @return {TableBuilder}
  * @public
  */
 m_width__java_lang_String(width) {
  return /**@type {TableBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("width", width), TableBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlTableBuilder.$clinit = () =>{};
  HtmlTableBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlTableBuilder;
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
$Util.$setClassMetadata(HtmlTableBuilder, 'org.gwtproject.dom.builder.shared.HtmlTableBuilder');

TableBuilder.$markImplementor(HtmlTableBuilder);

exports = HtmlTableBuilder; 
//# sourceMappingURL=HtmlTableBuilder.js.map