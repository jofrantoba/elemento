goog.module('org.gwtproject.user.cellview.client.CellTable.Resources$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ClientBundle = goog.require('org.gwtproject.resources.client.ClientBundle$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable.Style$impl');
let CellTable__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$impl');

/**
 * @interface
 * @extends {ClientBundle}
 */
class Resources {
 /** @abstract @return {ImageResource} */
 m_cellTableFooterBackground__() {}
 /** @abstract @return {ImageResource} */
 m_cellTableHeaderBackground__() {}
 /** @abstract @return {ImageResource} */
 m_cellTableLoading__() {}
 /** @abstract @return {ImageResource} */
 m_cellTableSelectedBackground__() {}
 /** @abstract @return {ImageResource} */
 m_cellTableSortAscending__() {}
 /** @abstract @return {ImageResource} */
 m_cellTableSortDescending__() {}
 /** @abstract @return {Style} */
 m_cellTableStyle__() {}
 /** @return {Resources} */
 static get f_INSTANCE__org_gwtproject_user_cellview_client_CellTable_Resources() {
  return (Resources.$clinit(), Resources.$f_INSTANCE__org_gwtproject_user_cellview_client_CellTable_Resources);
 }
 
 static $clinit() {
  Resources.$clinit = () =>{};
  Resources.$loadModules();
  Resources.$f_INSTANCE__org_gwtproject_user_cellview_client_CellTable_Resources = CellTable__ResourcesImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ClientBundle.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_CellTable_Resources = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellTable_Resources;
 }
 
 static $loadModules() {
  CellTable__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Resources, 'org.gwtproject.user.cellview.client.CellTable$Resources');

Resources.$markImplementor(/** @type {Function} */ (Resources));

/**@private {Resources}*/
Resources.$f_INSTANCE__org_gwtproject_user_cellview_client_CellTable_Resources;

exports = Resources; 
//# sourceMappingURL=CellTable$Resources.js.map