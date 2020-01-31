goog.module('org.gwtproject.user.cellview.client.DataGrid.TableWidget$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Widget = goog.require('org.gwtproject.user.client.ui.Widget$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let TableColElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableColElement.$Overlay$impl');
let TableElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableElement.$Overlay$impl');
let TableSectionElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableSectionElement.$Overlay$impl');
let TableLayout = goog.forwardDeclare('org.gwtproject.dom.style.shared.TableLayout$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TableWidget extends Widget {
 /** @protected */
 constructor() {
  super();
  /**@type {Object}*/
  this.f_colgroup__org_gwtproject_user_cellview_client_DataGrid_TableWidget_;
  /**@type {Object}*/
  this.f_section__org_gwtproject_user_cellview_client_DataGrid_TableWidget_;
  /**@type {Object}*/
  this.f_tableElem__org_gwtproject_user_cellview_client_DataGrid_TableWidget_;
 }
 /** @return {!TableWidget} */
 static $create__() {
  TableWidget.$clinit();
  let $instance = new TableWidget();
  $instance.$ctor__org_gwtproject_user_cellview_client_DataGrid_TableWidget__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_DataGrid_TableWidget__() {
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
  this.f_tableElem__org_gwtproject_user_cellview_client_DataGrid_TableWidget_ = $Overlay.m_createTableElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  this.f_tableElem__org_gwtproject_user_cellview_client_DataGrid_TableWidget_.cellSpacing = 0;
  Style_$Overlay.m_setTableLayout__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_TableLayout(this.f_tableElem__org_gwtproject_user_cellview_client_DataGrid_TableWidget_.style, TableLayout.f_FIXED__org_gwtproject_dom_style_shared_TableLayout);
  Style_$Overlay.m_setWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_tableElem__org_gwtproject_user_cellview_client_DataGrid_TableWidget_.style, 100.0, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit);
  this.m_setElement__org_gwtproject_dom_client_Element(this.f_tableElem__org_gwtproject_user_cellview_client_DataGrid_TableWidget_);
  this.f_colgroup__org_gwtproject_user_cellview_client_DataGrid_TableWidget_ = $Overlay.m_createColGroupElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  this.f_tableElem__org_gwtproject_user_cellview_client_DataGrid_TableWidget_.appendChild(this.f_colgroup__org_gwtproject_user_cellview_client_DataGrid_TableWidget_);
 }
 
 m_addColumnStyleName__int__java_lang_String(/** number */ index, /** ?string */ styleName) {
  Element_$Overlay.m_addClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_ensureTableColElement__int(index), styleName);
 }
 /** @return {Object} */
 m_ensureTableColElement__int(/** number */ index) {
  for (let i = Node_$Overlay.m_getChildCount__$devirt__org_gwtproject_dom_client_Node(this.f_colgroup__org_gwtproject_user_cellview_client_DataGrid_TableWidget_); i <= index; i++) {
   this.f_colgroup__org_gwtproject_user_cellview_client_DataGrid_TableWidget_.appendChild($Overlay.m_createColElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
  }
  return /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Node_$Overlay.m_getChild__$devirt__org_gwtproject_dom_client_Node__int(this.f_colgroup__org_gwtproject_user_cellview_client_DataGrid_TableWidget_, index)), TableColElement_$Overlay));
 }
 
 m_removeColumnStyleName__int__java_lang_String(/** number */ index, /** ?string */ styleName) {
  if (index >= Node_$Overlay.m_getChildCount__$devirt__org_gwtproject_dom_client_Node(this.f_colgroup__org_gwtproject_user_cellview_client_DataGrid_TableWidget_)) {
   return;
  }
  Element_$Overlay.m_removeClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_ensureTableColElement__int(index), styleName);
 }
 
 m_hideUnusedColumns__int_$pp_org_gwtproject_user_cellview_client(/** number */ start) {
  let colCount = Node_$Overlay.m_getChildCount__$devirt__org_gwtproject_dom_client_Node(this.f_colgroup__org_gwtproject_user_cellview_client_DataGrid_TableWidget_);
  for (let i = start; i < colCount; i++) {
   this.m_setColumnWidth__int__java_lang_String_$pp_org_gwtproject_user_cellview_client(i, "0px");
  }
 }
 
 m_setColumnWidth__int__java_lang_String_$pp_org_gwtproject_user_cellview_client(/** number */ column, /** ?string */ width) {
  if ($Equality.$same(width, null)) {
   Style_$Overlay.m_clearWidth__$devirt__org_gwtproject_dom_client_Style(this.m_ensureTableColElement__int(column).style);
  } else {
   Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.m_ensureTableColElement__int(column).style, "width", width);
  }
 }
 
 static $clinit() {
  TableWidget.$clinit = () =>{};
  TableWidget.$loadModules();
  Widget.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TableWidget;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  TableColElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TableColElement.$Overlay$impl');
  TableLayout = goog.module.get('org.gwtproject.dom.style.shared.TableLayout$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(TableWidget, 'org.gwtproject.user.cellview.client.DataGrid$TableWidget');

exports = TableWidget; 
//# sourceMappingURL=DataGrid$TableWidget.js.map