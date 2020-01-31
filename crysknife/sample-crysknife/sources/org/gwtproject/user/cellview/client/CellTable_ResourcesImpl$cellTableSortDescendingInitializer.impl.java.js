goog.module('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl.cellTableSortDescendingInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let CellTable__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$impl');

class cellTableSortDescendingInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!cellTableSortDescendingInitializer} */
 static $create__() {
  let $instance = new cellTableSortDescendingInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_cellTableSortDescendingInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_cellTableSortDescendingInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ImageResource} */
 static m_get__() {
  cellTableSortDescendingInitializer.$clinit();
  return CellTable__ResourcesImpl.f_cellTableSortDescending__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_;
 }
 
 static $clinit() {
  cellTableSortDescendingInitializer.$clinit = () =>{};
  cellTableSortDescendingInitializer.$loadModules();
  j_l_Object.$clinit();
  CellTable__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_.m_cellTableSortDescendingInitializer___$p_org_gwtproject_user_cellview_client_CellTable_ResourcesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof cellTableSortDescendingInitializer;
 }
 
 static $loadModules() {
  CellTable__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellTableSortDescendingInitializer, 'org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$cellTableSortDescendingInitializer');

exports = cellTableSortDescendingInitializer; 
//# sourceMappingURL=CellTable_ResourcesImpl$cellTableSortDescendingInitializer.js.map