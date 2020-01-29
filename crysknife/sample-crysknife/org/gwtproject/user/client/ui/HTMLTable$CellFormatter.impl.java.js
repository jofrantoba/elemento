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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {HTMLTable} */
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter;
 }
 /**
  * @param {HTMLTable} $outer_this
  * @return {!CellFormatter}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_HTMLTable($outer_this) {
  CellFormatter.$clinit();
  let $instance = new CellFormatter();
  $instance.$ctor__org_gwtproject_user_client_ui_HTMLTable_CellFormatter__org_gwtproject_user_client_ui_HTMLTable($outer_this);
  return $instance;
 }
 /**
  * @param {HTMLTable} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_HTMLTable_CellFormatter__org_gwtproject_user_client_ui_HTMLTable($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @param {number} row
  * @param {number} column
  * @param {?string} styleName
  * @public
  */
 m_addStyleName__int__int__java_lang_String(row, column, styleName) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.m_prepareCell__int__int(row, column);
  let td = this.m_getCellElement__org_gwtproject_dom_client_Element__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row, column);
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(td, styleName, true);
 }
 /**
  * @param {number} row
  * @param {number} column
  * @return {Object}
  * @public
  */
 m_getElement__int__int(row, column) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.m_checkCellBounds__int__int(row, column);
  return this.m_getCellElement__org_gwtproject_dom_client_Element__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row, column);
 }
 /**
  * @param {number} row
  * @param {number} column
  * @return {?string}
  * @public
  */
 m_getStyleName__int__int(row, column) {
  return UIObject.m_getStyleName__org_gwtproject_dom_client_Element(this.m_getElement__int__int(row, column));
 }
 /**
  * @param {number} row
  * @param {number} column
  * @return {?string}
  * @public
  */
 m_getStylePrimaryName__int__int(row, column) {
  return UIObject.m_getStylePrimaryName__org_gwtproject_dom_client_Element(this.m_getElement__int__int(row, column));
 }
 /**
  * @param {number} row
  * @param {number} column
  * @return {boolean}
  * @public
  */
 m_isVisible__int__int(row, column) {
  let e = this.m_getElement__int__int(row, column);
  return UIObject.m_isVisible__org_gwtproject_dom_client_Element(e);
 }
 /**
  * @param {number} row
  * @param {number} column
  * @param {?string} styleName
  * @public
  */
 m_removeStyleName__int__int__java_lang_String(row, column, styleName) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.m_checkCellBounds__int__int(row, column);
  let td = this.m_getCellElement__org_gwtproject_dom_client_Element__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row, column);
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(td, styleName, false);
 }
 /**
  * @param {number} row
  * @param {number} column
  * @param {HorizontalAlignmentConstant} hAlign
  * @param {VerticalAlignmentConstant} vAlign
  * @public
  */
 m_setAlignment__int__int__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(row, column, hAlign, vAlign) {
  this.m_setHorizontalAlignment__int__int__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(row, column, hAlign);
  this.m_setVerticalAlignment__int__int__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(row, column, vAlign);
 }
 /**
  * @param {number} row
  * @param {number} column
  * @param {?string} height
  * @public
  */
 m_setHeight__int__int__java_lang_String(row, column, height) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.m_prepareCell__int__int(row, column);
  let elem = this.m_getCellElement__org_gwtproject_dom_client_Element__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row, column);
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(elem, "height", height);
 }
 /**
  * @param {number} row
  * @param {number} column
  * @param {HorizontalAlignmentConstant} align
  * @public
  */
 m_setHorizontalAlignment__int__int__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(row, column, align) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.m_prepareCell__int__int(row, column);
  let elem = this.m_getCellElement__org_gwtproject_dom_client_Element__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row, column);
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(elem, "align", align.m_getTextAlignString__());
 }
 /**
  * @param {number} row
  * @param {number} column
  * @param {?string} styleName
  * @public
  */
 m_setStyleName__int__int__java_lang_String(row, column, styleName) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.m_prepareCell__int__int(row, column);
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String(this.m_getCellElement__org_gwtproject_dom_client_Element__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row, column), styleName);
 }
 /**
  * @param {number} row
  * @param {number} column
  * @param {?string} styleName
  * @public
  */
 m_setStylePrimaryName__int__int__java_lang_String(row, column, styleName) {
  UIObject.m_setStylePrimaryName__org_gwtproject_dom_client_Element__java_lang_String(this.m_getCellElement__org_gwtproject_dom_client_Element__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row, column), styleName);
 }
 /**
  * @param {number} row
  * @param {number} column
  * @param {VerticalAlignmentConstant} align
  * @public
  */
 m_setVerticalAlignment__int__int__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(row, column, align) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.m_prepareCell__int__int(row, column);
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.m_getCellElement__org_gwtproject_dom_client_Element__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row, column).style, "verticalAlign", align.m_getVerticalAlignString__());
 }
 /**
  * @param {number} row
  * @param {number} column
  * @param {boolean} visible
  * @public
  */
 m_setVisible__int__int__boolean(row, column, visible) {
  let e = this.m_ensureElement__int__int(row, column);
  UIObject.m_setVisible__org_gwtproject_dom_client_Element__boolean(e, visible);
 }
 /**
  * @param {number} row
  * @param {number} column
  * @param {?string} width
  * @public
  */
 m_setWidth__int__int__java_lang_String(row, column, width) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.m_prepareCell__int__int(row, column);
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.m_getCellElement__org_gwtproject_dom_client_Element__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row, column), "width", width);
 }
 /**
  * @param {number} row
  * @param {number} column
  * @param {boolean} wrap
  * @public
  */
 m_setWordWrap__int__int__boolean(row, column, wrap) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.m_prepareCell__int__int(row, column);
  let wrapValue = wrap ? "" : "nowrap";
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.m_getElement__int__int(row, column).style, "whiteSpace", wrapValue);
 }
 /**
  * @param {number} row
  * @param {number} column
  * @return {Object}
  * @public
  */
 m_ensureElement__int__int(row, column) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.m_prepareCell__int__int(row, column);
  return this.m_getCellElement__org_gwtproject_dom_client_Element__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row, column);
 }
 /**
  * @param {number} row
  * @param {number} column
  * @param {?string} attr
  * @return {?string}
  * @public
  */
 m_getAttr__int__int__java_lang_String(row, column, attr) {
  let elem = this.m_getElement__int__int(row, column);
  return $Overlay.m_getAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, attr);
 }
 /**
  * @param {number} row
  * @param {number} column
  * @param {?string} attrName
  * @param {?string} value
  * @public
  */
 m_setAttr__int__int__java_lang_String__java_lang_String(row, column, attrName, value) {
  let elem = this.m_ensureElement__int__int(row, column);
  elem.setAttribute(attrName, value);
 }
 /**
  * @param {Object} tbody
  * @param {number} row
  * @param {number} col
  * @return {Object}
  * @public
  */
 m_getCellElement__org_gwtproject_dom_client_Element__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(tbody, row, col) {
  return /**@type {Object} */ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.m_getCells__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_HTMLTable(/**@type {Object} */ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.m_getRows__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_HTMLTable(tbody), row), $Overlay))), col), $Overlay));
 }
 /**
  * @param {number} row
  * @param {number} column
  * @return {Object}
  * @public
  */
 m_getRawElement__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(row, column) {
  return this.m_getCellElement__org_gwtproject_dom_client_Element__int__int_$p_org_gwtproject_user_client_ui_HTMLTable_CellFormatter(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_CellFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row, column);
 }
 /**
  * @public
  */
 static $clinit() {
  CellFormatter.$clinit = () =>{};
  CellFormatter.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CellFormatter;
 }
 /**
  * @public
  */
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