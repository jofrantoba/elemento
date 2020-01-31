goog.module('org.gwtproject.user.client.ui.HTMLTable.ColumnFormatter$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let HTMLTable = goog.forwardDeclare('org.gwtproject.user.client.ui.HTMLTable$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ColumnFormatter extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTable}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter;
  /**@type {Object}*/
  this.f_columnGroup__org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter;
 }
 /** @return {!ColumnFormatter} */
 static $create__org_gwtproject_user_client_ui_HTMLTable(/** HTMLTable */ $outer_this) {
  ColumnFormatter.$clinit();
  let $instance = new ColumnFormatter();
  $instance.$ctor__org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter__org_gwtproject_user_client_ui_HTMLTable($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter__org_gwtproject_user_client_ui_HTMLTable(/** HTMLTable */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 
 m_addStyleName__int__java_lang_String(/** number */ col, /** ?string */ styleName) {
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(this.m_ensureColumn__int_$p_org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter(col), styleName, true);
 }
 /** @return {Object} */
 m_getElement__int(/** number */ column) {
  return this.m_ensureColumn__int_$p_org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter(column);
 }
 /** @return {?string} */
 m_getStyleName__int(/** number */ column) {
  return UIObject.m_getStyleName__org_gwtproject_dom_client_Element(this.m_ensureColumn__int_$p_org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter(column));
 }
 /** @return {?string} */
 m_getStylePrimaryName__int(/** number */ column) {
  return UIObject.m_getStylePrimaryName__org_gwtproject_dom_client_Element(this.m_ensureColumn__int_$p_org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter(column));
 }
 
 m_removeStyleName__int__java_lang_String(/** number */ column, /** ?string */ styleName) {
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(this.m_ensureColumn__int_$p_org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter(column), styleName, false);
 }
 
 m_setStyleName__int__java_lang_String(/** number */ column, /** ?string */ styleName) {
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String(this.m_ensureColumn__int_$p_org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter(column), styleName);
 }
 
 m_setStylePrimaryName__int__java_lang_String(/** number */ column, /** ?string */ styleName) {
  UIObject.m_setStylePrimaryName__org_gwtproject_dom_client_Element__java_lang_String(this.m_ensureColumn__int_$p_org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter(column), styleName);
 }
 
 m_setWidth__int__java_lang_String(/** number */ column, /** ?string */ width) {
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.m_ensureColumn__int_$p_org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter(column), "width", width);
 }
 
 m_resizeColumnGroup__int__boolean_$pp_org_gwtproject_user_client_ui(/** number */ columns, /** boolean */ growOnly) {
  columns = Math.max(columns, 1);
  let num = Node_$Overlay.m_getChildCount__$devirt__org_gwtproject_dom_client_Node(this.f_columnGroup__org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter);
  if (num < columns) {
   for (let i = num; i < columns; i++) {
    this.f_columnGroup__org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter.appendChild(Document_$Overlay.m_createColElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__()));
   }
  } else if (!growOnly && num > columns) {
   for (let i_1 = num; i_1 > columns; i_1--) {
    this.f_columnGroup__org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter.removeChild(this.f_columnGroup__org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter.lastChild);
   }
  }
 }
 /** @return {Object} */
 m_ensureColumn__int_$p_org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter(/** number */ col) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter.m_prepareColumn__int(col);
  this.m_prepareColumnGroup___$p_org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter();
  this.m_resizeColumnGroup__int__boolean_$pp_org_gwtproject_user_client_ui(col + 1, true);
  return /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Node_$Overlay.m_getChild__$devirt__org_gwtproject_dom_client_Node__int(this.f_columnGroup__org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter, col)), $Overlay));
 }
 
 m_prepareColumnGroup___$p_org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter() {
  if ($Equality.$same(this.f_columnGroup__org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter, null)) {
   this.f_columnGroup__org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter = DOM.m_createElement__java_lang_String("colgroup");
   DOM.m_insertChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int(this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter.f_tableElem__org_gwtproject_user_client_ui_HTMLTable_, this.f_columnGroup__org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter, 0);
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.f_columnGroup__org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter, DOM.m_createElement__java_lang_String("col"));
  }
 }
 
 static $clinit() {
  ColumnFormatter.$clinit = () =>{};
  ColumnFormatter.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ColumnFormatter;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ColumnFormatter, 'org.gwtproject.user.client.ui.HTMLTable$ColumnFormatter');

exports = ColumnFormatter; 
//# sourceMappingURL=HTMLTable$ColumnFormatter.js.map