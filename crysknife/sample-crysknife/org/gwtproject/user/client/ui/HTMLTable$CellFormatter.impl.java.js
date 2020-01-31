goog.module('org.gwtproject.user.client.ui.HTMLTable.CellFormatter$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let HTMLTable = goog.forwardDeclare('org.gwtproject.user.client.ui.HTMLTable$impl');
let HorizontalAlignmentConstant = goog.forwardDeclare('org.gwtproject.user.client.ui.HasHorizontalAlignment.HorizontalAlignmentConstant$impl');
let VerticalAlignmentConstant = goog.forwardDeclare('org.gwtproject.user.client.ui.HasVerticalAlignment.VerticalAlignmentConstant$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class CellFormatter extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTable}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter;
 }
 /** @return {!CellFormatter} */
 static $create__org_gwtproject_user_client_ui_HTMLTable(/** HTMLTable */ $outer_this) {
  CellFormatter.$clinit();
  let $instance = new CellFormatter();
  $instance.$ctor__org_gwtproject_user_client_ui_HTMLTable_CellFormatter__org_gwtproject_user_client_ui_HTMLTable($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_HTMLTable_CellFormatter__org_gwtproject_user_client_ui_HTMLTable(/** HTMLTable */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 
 m_addStyleName__int__int__java_lang_String(/** number */ row, /** number */ column, /** ?string */ styleName) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.m_prepareCell__int__int(row, column);
  let td = this.m_getCellElement__org_gwtproject_dom_client_Element__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row, column);
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(td, styleName, true);
 }
 /** @return {Object} */
 m_getElement__int__int(/** number */ row, /** number */ column) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.m_checkCellBounds__int__int(row, column);
  return this.m_getCellElement__org_gwtproject_dom_client_Element__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row, column);
 }
 /** @return {?string} */
 m_getStyleName__int__int(/** number */ row, /** number */ column) {
  return UIObject.m_getStyleName__org_gwtproject_dom_client_Element(this.m_getElement__int__int(row, column));
 }
 /** @return {?string} */
 m_getStylePrimaryName__int__int(/** number */ row, /** number */ column) {
  return UIObject.m_getStylePrimaryName__org_gwtproject_dom_client_Element(this.m_getElement__int__int(row, column));
 }
 /** @return {boolean} */
 m_isVisible__int__int(/** number */ row, /** number */ column) {
  let e = this.m_getElement__int__int(row, column);
  return UIObject.m_isVisible__org_gwtproject_dom_client_Element(e);
 }
 
 m_removeStyleName__int__int__java_lang_String(/** number */ row, /** number */ column, /** ?string */ styleName) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.m_checkCellBounds__int__int(row, column);
  let td = this.m_getCellElement__org_gwtproject_dom_client_Element__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row, column);
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(td, styleName, false);
 }
 
 m_setAlignment__int__int__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(/** number */ row, /** number */ column, /** HorizontalAlignmentConstant */ hAlign, /** VerticalAlignmentConstant */ vAlign) {
  this.m_setHorizontalAlignment__int__int__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(row, column, hAlign);
  this.m_setVerticalAlignment__int__int__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(row, column, vAlign);
 }
 
 m_setHeight__int__int__java_lang_String(/** number */ row, /** number */ column, /** ?string */ height) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.m_prepareCell__int__int(row, column);
  let elem = this.m_getCellElement__org_gwtproject_dom_client_Element__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row, column);
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(elem, "height", height);
 }
 
 m_setHorizontalAlignment__int__int__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(/** number */ row, /** number */ column, /** HorizontalAlignmentConstant */ align) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.m_prepareCell__int__int(row, column);
  let elem = this.m_getCellElement__org_gwtproject_dom_client_Element__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row, column);
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(elem, "align", align.m_getTextAlignString__());
 }
 
 m_setStyleName__int__int__java_lang_String(/** number */ row, /** number */ column, /** ?string */ styleName) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.m_prepareCell__int__int(row, column);
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String(this.m_getCellElement__org_gwtproject_dom_client_Element__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row, column), styleName);
 }
 
 m_setStylePrimaryName__int__int__java_lang_String(/** number */ row, /** number */ column, /** ?string */ styleName) {
  UIObject.m_setStylePrimaryName__org_gwtproject_dom_client_Element__java_lang_String(this.m_getCellElement__org_gwtproject_dom_client_Element__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row, column), styleName);
 }
 
 m_setVerticalAlignment__int__int__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(/** number */ row, /** number */ column, /** VerticalAlignmentConstant */ align) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.m_prepareCell__int__int(row, column);
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.m_getCellElement__org_gwtproject_dom_client_Element__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row, column).style, "verticalAlign", align.m_getVerticalAlignString__());
 }
 
 m_setVisible__int__int__boolean(/** number */ row, /** number */ column, /** boolean */ visible) {
  let e = this.m_ensureElement__int__int(row, column);
  UIObject.m_setVisible__org_gwtproject_dom_client_Element__boolean(e, visible);
 }
 
 m_setWidth__int__int__java_lang_String(/** number */ row, /** number */ column, /** ?string */ width) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.m_prepareCell__int__int(row, column);
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.m_getCellElement__org_gwtproject_dom_client_Element__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row, column), "width", width);
 }
 
 m_setWordWrap__int__int__boolean(/** number */ row, /** number */ column, /** boolean */ wrap) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.m_prepareCell__int__int(row, column);
  let wrapValue = wrap ? "" : "nowrap";
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.m_getElement__int__int(row, column).style, "whiteSpace", wrapValue);
 }
 /** @return {Object} */
 m_ensureElement__int__int(/** number */ row, /** number */ column) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.m_prepareCell__int__int(row, column);
  return this.m_getCellElement__org_gwtproject_dom_client_Element__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row, column);
 }
 /** @return {?string} */
 m_getAttr__int__int__java_lang_String(/** number */ row, /** number */ column, /** ?string */ attr) {
  let elem = this.m_getElement__int__int(row, column);
  return $Overlay.m_getAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, attr);
 }
 
 m_setAttr__int__int__java_lang_String__java_lang_String(/** number */ row, /** number */ column, /** ?string */ attrName, /** ?string */ value) {
  let elem = this.m_ensureElement__int__int(row, column);
  elem.setAttribute(attrName, value);
 }
 /** @return {Object} */
 m_getCellElement__org_gwtproject_dom_client_Element__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(/** Object */ tbody, /** number */ row, /** number */ col) {
  return /**@type {Object}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.m_getCells__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_HTMLTable(/**@type {Object}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.m_getRows__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_HTMLTable(tbody), row), $Overlay))), col), $Overlay));
 }
 /** @return {Object} */
 m_getRawElement__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(/** number */ row, /** number */ column) {
  return this.m_getCellElement__org_gwtproject_dom_client_Element__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row, column);
 }
 
 static $clinit() {
  CellFormatter.$clinit = () =>{};
  CellFormatter.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CellFormatter;
 }
 
 static $loadModules() {
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(CellFormatter, 'org.gwtproject.user.client.ui.HTMLTable$CellFormatter');

exports = CellFormatter; 
//# sourceMappingURL=HTMLTable$CellFormatter.js.map