goog.module('org.gwtproject.dom.builder.client.DomTableBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const TableBuilder = goog.require('org.gwtproject.dom.builder.shared.TableBuilder$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableElement.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {DomElementBuilderBase<TableBuilder, Object>}
 * @implements {TableBuilder}
  */
class DomTableBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomTableBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomTableBuilder.$clinit();
  let $instance = new DomTableBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomTableBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomTableBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, false);
 }
 /**
  * @override
  * @param {number} border
  * @return {TableBuilder}
  * @public
  */
 m_border__int(border) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).border = border;
  return this;
 }
 /**
  * @override
  * @param {number} cellPadding
  * @return {TableBuilder}
  * @public
  */
 m_cellPadding__int(cellPadding) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).cellPadding = cellPadding;
  return this;
 }
 /**
  * @override
  * @param {number} cellSpacing
  * @return {TableBuilder}
  * @public
  */
 m_cellSpacing__int(cellSpacing) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).cellSpacing = cellSpacing;
  return this;
 }
 /**
  * @override
  * @param {?string} frame
  * @return {TableBuilder}
  * @public
  */
 m_frame__java_lang_String(frame) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).frame = frame;
  return this;
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
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).rules = rules;
  return this;
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
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).width = width;
  return this;
 }
 /**
  * @public
  */
 static $clinit() {
  DomTableBuilder.$clinit = () =>{};
  DomTableBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomTableBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.TableElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(DomTableBuilder, 'org.gwtproject.dom.builder.client.DomTableBuilder');

TableBuilder.$markImplementor(DomTableBuilder);

exports = DomTableBuilder; 
//# sourceMappingURL=DomTableBuilder.js.map