goog.module('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl.dataGridSortAscendingInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let DataGrid__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl$impl');

class dataGridSortAscendingInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!dataGridSortAscendingInitializer}
  * @public
  */
 static $create__() {
  let $instance = new dataGridSortAscendingInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_dataGridSortAscendingInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_dataGridSortAscendingInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static m_get__() {
  dataGridSortAscendingInitializer.$clinit();
  return DataGrid__ResourcesImpl.f_dataGridSortAscending__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  dataGridSortAscendingInitializer.$clinit = () =>{};
  dataGridSortAscendingInitializer.$loadModules();
  j_l_Object.$clinit();
  DataGrid__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_.m_dataGridSortAscendingInitializer___$p_org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof dataGridSortAscendingInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  DataGrid__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(dataGridSortAscendingInitializer, 'org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl$dataGridSortAscendingInitializer');

exports = dataGridSortAscendingInitializer; 
//# sourceMappingURL=DataGrid_ResourcesImpl$dataGridSortAscendingInitializer.js.map