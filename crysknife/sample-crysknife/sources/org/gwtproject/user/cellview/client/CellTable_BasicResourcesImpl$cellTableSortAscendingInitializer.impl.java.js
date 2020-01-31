goog.module('org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl.cellTableSortAscendingInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let CellTable__BasicResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl$impl');

class cellTableSortAscendingInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!cellTableSortAscendingInitializer} */
 static $create__() {
  let $instance = new cellTableSortAscendingInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_cellTableSortAscendingInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_cellTableSortAscendingInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ImageResource} */
 static m_get__() {
  cellTableSortAscendingInitializer.$clinit();
  return CellTable__BasicResourcesImpl.f_cellTableSortAscending__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_;
 }
 
 static $clinit() {
  cellTableSortAscendingInitializer.$clinit = () =>{};
  cellTableSortAscendingInitializer.$loadModules();
  j_l_Object.$clinit();
  CellTable__BasicResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_.m_cellTableSortAscendingInitializer___$p_org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof cellTableSortAscendingInitializer;
 }
 
 static $loadModules() {
  CellTable__BasicResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellTableSortAscendingInitializer, 'org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl$cellTableSortAscendingInitializer');

exports = cellTableSortAscendingInitializer; 
//# sourceMappingURL=CellTable_BasicResourcesImpl$cellTableSortAscendingInitializer.js.map