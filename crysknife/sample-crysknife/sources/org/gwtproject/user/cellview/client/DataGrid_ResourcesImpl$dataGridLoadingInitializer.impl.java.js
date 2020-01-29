goog.module('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl.dataGridLoadingInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let DataGrid__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl$impl');

class dataGridLoadingInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!dataGridLoadingInitializer}
  * @public
  */
 static $create__() {
  let $instance = new dataGridLoadingInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_dataGridLoadingInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_dataGridLoadingInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static m_get__() {
  dataGridLoadingInitializer.$clinit();
  return DataGrid__ResourcesImpl.f_dataGridLoading__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  dataGridLoadingInitializer.$clinit = () =>{};
  dataGridLoadingInitializer.$loadModules();
  j_l_Object.$clinit();
  DataGrid__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_.m_dataGridLoadingInitializer___$p_org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof dataGridLoadingInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  DataGrid__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(dataGridLoadingInitializer, 'org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl$dataGridLoadingInitializer');

exports = dataGridLoadingInitializer; 
//# sourceMappingURL=DataGrid_ResourcesImpl$dataGridLoadingInitializer.js.map