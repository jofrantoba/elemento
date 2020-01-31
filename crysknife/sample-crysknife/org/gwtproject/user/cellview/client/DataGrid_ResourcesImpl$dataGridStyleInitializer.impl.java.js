goog.module('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl.dataGridStyleInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.DataGrid.Style$impl');
let DataGrid__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl$impl');

class dataGridStyleInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!dataGridStyleInitializer} */
 static $create__() {
  let $instance = new dataGridStyleInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_dataGridStyleInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_dataGridStyleInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {Style} */
 static m_get__() {
  dataGridStyleInitializer.$clinit();
  return DataGrid__ResourcesImpl.f_dataGridStyle__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_;
 }
 
 static $clinit() {
  dataGridStyleInitializer.$clinit = () =>{};
  dataGridStyleInitializer.$loadModules();
  j_l_Object.$clinit();
  DataGrid__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_.m_dataGridStyleInitializer___$p_org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof dataGridStyleInitializer;
 }
 
 static $loadModules() {
  DataGrid__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(dataGridStyleInitializer, 'org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl$dataGridStyleInitializer');

exports = dataGridStyleInitializer; 
//# sourceMappingURL=DataGrid_ResourcesImpl$dataGridStyleInitializer.js.map