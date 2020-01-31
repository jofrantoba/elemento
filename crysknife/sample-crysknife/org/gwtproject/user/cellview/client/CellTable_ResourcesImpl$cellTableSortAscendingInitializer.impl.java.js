goog.module('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl.cellTableSortAscendingInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let CellTable__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$impl');

class cellTableSortAscendingInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!cellTableSortAscendingInitializer} */
 static $create__() {
  let $instance = new cellTableSortAscendingInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_cellTableSortAscendingInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_cellTableSortAscendingInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ImageResource} */
 static m_get__() {
  cellTableSortAscendingInitializer.$clinit();
  return CellTable__ResourcesImpl.f_cellTableSortAscending__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_;
 }
 
 static $clinit() {
  cellTableSortAscendingInitializer.$clinit = () =>{};
  cellTableSortAscendingInitializer.$loadModules();
  j_l_Object.$clinit();
  CellTable__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_.m_cellTableSortAscendingInitializer___$p_org_gwtproject_user_cellview_client_CellTable_ResourcesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof cellTableSortAscendingInitializer;
 }
 
 static $loadModules() {
  CellTable__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellTableSortAscendingInitializer, 'org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$cellTableSortAscendingInitializer');

exports = cellTableSortAscendingInitializer; 
//# sourceMappingURL=CellTable_ResourcesImpl$cellTableSortAscendingInitializer.js.map