goog.module('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl.dataGridSortDescendingInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let DataGrid__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl$impl');

class dataGridSortDescendingInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!dataGridSortDescendingInitializer} */
 static $create__() {
  let $instance = new dataGridSortDescendingInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_dataGridSortDescendingInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_dataGridSortDescendingInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ImageResource} */
 static m_get__() {
  dataGridSortDescendingInitializer.$clinit();
  return DataGrid__ResourcesImpl.f_dataGridSortDescending__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_;
 }
 
 static $clinit() {
  dataGridSortDescendingInitializer.$clinit = () =>{};
  dataGridSortDescendingInitializer.$loadModules();
  j_l_Object.$clinit();
  DataGrid__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_.m_dataGridSortDescendingInitializer___$p_org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof dataGridSortDescendingInitializer;
 }
 
 static $loadModules() {
  DataGrid__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(dataGridSortDescendingInitializer, 'org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl$dataGridSortDescendingInitializer');

exports = dataGridSortDescendingInitializer; 
//# sourceMappingURL=DataGrid_ResourcesImpl$dataGridSortDescendingInitializer.js.map