goog.module('org.gwtproject.dom.builder.client.DomTableCellBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const TableCellBuilder = goog.require('org.gwtproject.dom.builder.shared.TableCellBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableCellElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<TableCellBuilder, Object>}
 * @implements {TableCellBuilder}
  */
class DomTableCellBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomTableCellBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomTableCellBuilder.$clinit();
  let $instance = new DomTableCellBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomTableCellBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomTableCellBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {?string} align
  * @return {TableCellBuilder}
  * @public
  */
 m_align__java_lang_String(align) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).align = align;
  return this;
 }
 /**
  * @override
  * @param {?string} ch
  * @return {TableCellBuilder}
  * @public
  */
 m_ch__java_lang_String(ch) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).ch = ch;
  return this;
 }
 /**
  * @override
  * @param {?string} chOff
  * @return {TableCellBuilder}
  * @public
  */
 m_chOff__java_lang_String(chOff) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).chOff = chOff;
  return this;
 }
 /**
  * @override
  * @param {number} colSpan
  * @return {TableCellBuilder}
  * @public
  */
 m_colSpan__int(colSpan) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).colSpan = colSpan;
  return this;
 }
 /**
  * @override
  * @param {?string} headers
  * @return {TableCellBuilder}
  * @public
  */
 m_headers__java_lang_String(headers) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).headers = headers;
  return this;
 }
 /**
  * @override
  * @param {number} rowSpan
  * @return {TableCellBuilder}
  * @public
  */
 m_rowSpan__int(rowSpan) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).rowSpan = rowSpan;
  return this;
 }
 /**
  * @override
  * @param {?string} vAlign
  * @return {TableCellBuilder}
  * @public
  */
 m_vAlign__java_lang_String(vAlign) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).VAlign = vAlign;
  return this;
 }
 /**
  * @public
  */
 static $clinit() {
  DomTableCellBuilder.$clinit = () =>{};
  DomTableCellBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomTableCellBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.TableCellElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomTableCellBuilder, 'org.gwtproject.dom.builder.client.DomTableCellBuilder');

TableCellBuilder.$markImplementor(DomTableCellBuilder);

exports = DomTableCellBuilder; 
//# sourceMappingURL=DomTableCellBuilder.js.map