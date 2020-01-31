goog.module('org.gwtproject.user.cellview.client.DataGrid.Resources$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ClientBundle = goog.require('org.gwtproject.resources.client.ClientBundle$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.DataGrid.Style$impl');
let DataGrid__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl$impl');

/**
 * @interface
 * @extends {ClientBundle}
 */
class Resources {
 /** @abstract @return {ImageResource} */
 m_dataGridLoading__() {}
 /** @abstract @return {ImageResource} */
 m_dataGridSortAscending__() {}
 /** @abstract @return {ImageResource} */
 m_dataGridSortDescending__() {}
 /** @abstract @return {Style} */
 m_dataGridStyle__() {}
 /** @return {Resources} */
 static get f_INSTANCE__org_gwtproject_user_cellview_client_DataGrid_Resources() {
  return (Resources.$clinit(), Resources.$f_INSTANCE__org_gwtproject_user_cellview_client_DataGrid_Resources);
 }
 
 static $clinit() {
  Resources.$clinit = () =>{};
  Resources.$loadModules();
  Resources.$f_INSTANCE__org_gwtproject_user_cellview_client_DataGrid_Resources = DataGrid__ResourcesImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ClientBundle.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_DataGrid_Resources = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_DataGrid_Resources;
 }
 
 static $loadModules() {
  DataGrid__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Resources, 'org.gwtproject.user.cellview.client.DataGrid$Resources');

Resources.$markImplementor(/** @type {Function} */ (Resources));

/**@private {Resources}*/
Resources.$f_INSTANCE__org_gwtproject_user_cellview_client_DataGrid_Resources;

exports = Resources; 
//# sourceMappingURL=DataGrid$Resources.js.map