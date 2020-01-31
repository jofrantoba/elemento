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
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTable}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_RowFormatter;
 }
 /** @return {!RowFormatter} */
 static $create__org_gwtproject_user_client_ui_HTMLTable(/** HTMLTable */ $outer_this) {
  RowFormatter.$clinit();
  let $instance = new RowFormatter();
  $instance.$ctor__org_gwtproject_user_client_ui_HTMLTable_RowFormatter__org_gwtproject_user_client_ui_HTMLTable($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_HTMLTable_RowFormatter__org_gwtproject_user_client_ui_HTMLTable(/** HTMLTable */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_RowFormatter = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 
 m_addStyleName__int__java_lang_String(/** number */ row, /** ?string */ styleName) {
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(this.m_ensureElement__int(row), styleName, true);
 }
 /** @return {Object} */
 m_getElement__int(/** number */ row) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_RowFormatter.m_checkRowBounds__int(row);
  return this.m_getRow__org_gwtproject_dom_client_Element__int(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_RowFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row);
 }
 /** @return {?string} */
 m_getStyleName__int(/** number */ row) {
  return UIObject.m_getStyleName__org_gwtproject_dom_client_Element(this.m_getElement__int(row));
 }
 /** @return {?string} */
 m_getStylePrimaryName__int(/** number */ row) {
  return UIObject.m_getStylePrimaryName__org_gwtproject_dom_client_Element(this.m_getElement__int(row));
 }
 /** @return {boolean} */
 m_isVisible__int(/** number */ row) {
  let e = this.m_getElement__int(row);
  return UIObject.m_isVisible__org_gwtproject_dom_client_Element(e);
 }
 
 m_removeStyleName__int__java_lang_String(/** number */ row, /** ?string */ styleName) {
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(this.m_ensureElement__int(row), styleName, false);
 }
 
 m_setStyleName__int__java_lang_String(/** number */ row, /** ?string */ styleName) {
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String(this.m_ensureElement__int(row), styleName);
 }
 
 m_setStylePrimaryName__int__java_lang_String(/** number */ row, /** ?string */ styleName) {
  UIObject.m_setStylePrimaryName__org_gwtproject_dom_client_Element__java_lang_String(this.m_ensureElement__int(row), styleName);
 }
 
 m_setVerticalAlign__int__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(/** number */ row, /** VerticalAlignmentConstant */ align) {
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.m_ensureElement__int(row).style, "verticalAlign", align.m_getVerticalAlignString__());
 }
 
 m_setVisible__int__boolean(/** number */ row, /** boolean */ visible) {
  let e = this.m_ensureElement__int(row);
  UIObject.m_setVisible__org_gwtproject_dom_client_Element__boolean(e, visible);
 }
 /** @return {Object} */
 m_ensureElement__int(/** number */ row) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_RowFormatter.m_prepareRow__int(row);
  return this.m_getRow__org_gwtproject_dom_client_Element__int(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_RowFormatter.f_bodyElem__org_gwtproject_user_client_ui_HTMLTable_, row);
 }
 /** @return {Object} */
 m_getRow__org_gwtproject_dom_client_Element__int(/** Object */ tbody, /** number */ row) {
  return /**@type {Object}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_RowFormatter.m_getRows__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_HTMLTable(tbody), row), Element_$Overlay));
 }
 
 m_setAttr__int__java_lang_String__java_lang_String(/** number */ row, /** ?string */ attrName, /** ?string */ value) {
  let elem = this.m_ensureElement__int(row);
  elem.setAttribute(attrName, value);
 }
 
 static $clinit() {
  RowFormatter.$clinit = () =>{};
  RowFormatter.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RowFormatter;
 }
 
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