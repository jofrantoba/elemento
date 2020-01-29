goog.module('org.gwtproject.user.client.ui.HTMLTable.RowFormatter$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let HTMLTable = goog.forwardDeclare('org.gwtproject.user.client.ui.HTMLTable$impl');
let VerticalAlignmentConstant = goog.forwardDeclare('org.gwtproject.user.client.ui.HasVerticalAlignment.VerticalAlignmentConstant$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class RowFormatter extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {HTMLTable} */
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_RowFormatter;
 }
 /**
  * @param {HTMLTable} $outer_this
  * @return {!RowFormatter}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_HTMLTable($outer_this) {
  RowFormatter.$clinit();
  let $instance = new RowFormatter();
  $instance.$ctor__org_gwtproject_user_client_ui_HTMLTable_RowFormatter__org_gwtproject_user_client_ui_HTMLTable($outer_this);
  return $instance;
 }
 /**
  * @param {HTMLTable} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_HTMLTable_RowFormatter__org_gwtproject_user_client_ui_HTMLTable($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_RowFormatter = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @param {number} row
  * @param {?string} styleName
  * @public
  */
 m_addStyleName__int__java_lang_String(row, styleName) {
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(this.m_ensureElement__int(row), styleName, true);
 }
 /**
  * @param {number} row
  * @return {Object}
  * @public
  */
 m_getElement__int(row) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_RowFormatter.m_checkRowBounds__int(row);
  return this.m_getRow__org_gwtproject_dom_client_Element__int(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_RowFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row);
 }
 /**
  * @param {number} row
  * @return {?string}
  * @public
  */
 m_getStyleName__int(row) {
  return UIObject.m_getStyleName__org_gwtproject_dom_client_Element(this.m_getElement__int(row));
 }
 /**
  * @param {number} row
  * @return {?string}
  * @public
  */
 m_getStylePrimaryName__int(row) {
  return UIObject.m_getStylePrimaryName__org_gwtproject_dom_client_Element(this.m_getElement__int(row));
 }
 /**
  * @param {number} row
  * @return {boolean}
  * @public
  */
 m_isVisible__int(row) {
  let e = this.m_getElement__int(row);
  return UIObject.m_isVisible__org_gwtproject_dom_client_Element(e);
 }
 /**
  * @param {number} row
  * @param {?string} styleName
  * @public
  */
 m_removeStyleName__int__java_lang_String(row, styleName) {
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(this.m_ensureElement__int(row), styleName, false);
 }
 /**
  * @param {number} row
  * @param {?string} styleName
  * @public
  */
 m_setStyleName__int__java_lang_String(row, styleName) {
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String(this.m_ensureElement__int(row), styleName);
 }
 /**
  * @param {number} row
  * @param {?string} styleName
  * @public
  */
 m_setStylePrimaryName__int__java_lang_String(row, styleName) {
  UIObject.m_setStylePrimaryName__org_gwtproject_dom_client_Element__java_lang_String(this.m_ensureElement__int(row), styleName);
 }
 /**
  * @param {number} row
  * @param {VerticalAlignmentConstant} align
  * @public
  */
 m_setVerticalAlign__int__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(row, align) {
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.m_ensureElement__int(row).style, "verticalAlign", align.m_getVerticalAlignString__());
 }
 /**
  * @param {number} row
  * @param {boolean} visible
  * @public
  */
 m_setVisible__int__boolean(row, visible) {
  let e = this.m_ensureElement__int(row);
  UIObject.m_setVisible__org_gwtproject_dom_client_Element__boolean(e, visible);
 }
 /**
  * @param {number} row
  * @return {Object}
  * @public
  */
 m_ensureElement__int(row) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_RowFormatter.m_prepareRow__int(row);
  return this.m_getRow__org_gwtproject_dom_client_Element__int(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_RowFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row);
 }
 /**
  * @param {Object} tbody
  * @param {number} row
  * @return {Object}
  * @public
  */
 m_getRow__org_gwtproject_dom_client_Element__int(tbody, row) {
  return /**@type {Object} */ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_RowFormatter.m_getRows__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_HTMLTable(tbody), row), Element_$Overlay));
 }
 /**
  * @param {number} row
  * @param {?string} attrName
  * @param {?string} value
  * @public
  */
 m_setAttr__int__java_lang_String__java_lang_String(row, attrName, value) {
  let elem = this.m_ensureElement__int(row);
  elem.setAttribute(attrName, value);
 }
 /**
  * @public
  */
 static $clinit() {
  RowFormatter.$clinit = () =>{};
  RowFormatter.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof RowFormatter;
 }
 /**
  * @public
  */
 static $loadModules() {
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(RowFormatter, 'org.gwtproject.user.client.ui.HTMLTable$RowFormatter');

exports = RowFormatter; 
//# sourceMappingURL=HTMLTable$RowFormatter.js.map