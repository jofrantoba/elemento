goog.module('org.gwtproject.dom.builder.shared.HtmlTableRowBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const TableRowBuilder = goog.require('org.gwtproject.dom.builder.shared.TableRowBuilder$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {HtmlElementBuilderBase<TableRowBuilder>}
 * @implements {TableRowBuilder}
  */
class HtmlTableRowBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlTableRowBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlTableRowBuilder.$clinit();
  let $instance = new HtmlTableRowBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlTableRowBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlTableRowBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {?string} align
  * @return {TableRowBuilder}
  * @public
  */
 m_align__java_lang_String(align) {
  return /**@type {TableRowBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("align", align), TableRowBuilder));
 }
 /**
  * @override
  * @param {?string} ch
  * @return {TableRowBuilder}
  * @public
  */
 m_ch__java_lang_String(ch) {
  return /**@type {TableRowBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("ch", ch), TableRowBuilder));
 }
 /**
  * @override
  * @param {?string} chOff
  * @return {TableRowBuilder}
  * @public
  */
 m_chOff__java_lang_String(chOff) {
  return /**@type {TableRowBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("chOff", chOff), TableRowBuilder));
 }
 /**
  * @override
  * @param {SafeHtml} html
  * @return {TableRowBuilder}
  * @public
  */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(html) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(TableRowBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_TableRowBuilder));
 }
 /**
  * @override
  * @param {?string} text
  * @return {TableRowBuilder}
  * @public
  */
 m_text__java_lang_String(text) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(TableRowBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_TableRowBuilder));
 }
 /**
  * @override
  * @param {?string} vAlign
  * @return {TableRowBuilder}
  * @public
  */
 m_vAlign__java_lang_String(vAlign) {
  return /**@type {TableRowBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("vAlign", vAlign), TableRowBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlTableRowBuilder.$clinit = () =>{};
  HtmlTableRowBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlTableRowBuilder;
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
$Util.$setClassMetadata(HtmlTableRowBuilder, 'org.gwtproject.dom.builder.shared.HtmlTableRowBuilder');

TableRowBuilder.$markImplementor(HtmlTableRowBuilder);

exports = HtmlTableRowBuilder; 
//# sourceMappingURL=HtmlTableRowBuilder.js.map