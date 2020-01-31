goog.module('org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl.cellTableSortDescendingInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let CellTable__BasicResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl$impl');

class cellTableSortDescendingInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!cellTableSortDescendingInitializer} */
 static $create__() {
  let $instance = new cellTableSortDescendingInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_cellTableSortDescendingInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_cellTableSortDescendingInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ImageResource} */
 static m_get__() {
  cellTableSortDescendingInitializer.$clinit();
  return CellTable__BasicResourcesImpl.f_cellTableSortDescending__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_;
 }
 
 static $clinit() {
  cellTableSortDescendingInitializer.$clinit = () =>{};
  cellTableSortDescendingInitializer.$loadModules();
  j_l_Object.$clinit();
  CellTable__BasicResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_.m_cellTableSortDescendingInitializer___$p_org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof cellTableSortDescendingInitializer;
 }
 
 static $loadModules() {
  CellTable__BasicResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellTableSortDescendingInitializer, 'org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl$cellTableSortDescendingInitializer');

exports = cellTableSortDescendingInitializer; 
//# sourceMappingURL=CellTable_BasicResourcesImpl$cellTableSortDescendingInitializer.js.map