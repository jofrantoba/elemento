goog.module('org.gwtproject.user.cellview.client.CellList.Resources$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ClientBundle = goog.require('org.gwtproject.resources.client.ClientBundle$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellList.Style$impl');
let CellList__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellList_ResourcesImpl$impl');

/**
 * @interface
 * @extends {ClientBundle}
 */
class Resources {
 /** @abstract @return {ImageResource} */
 m_cellListSelectedBackground__() {}
 /** @abstract @return {Style} */
 m_cellListStyle__() {}
 /** @return {Resources} */
 static get f_INSTANCE__org_gwtproject_user_cellview_client_CellList_Resources() {
  return (Resources.$clinit(), Resources.$f_INSTANCE__org_gwtproject_user_cellview_client_CellList_Resources);
 }
 
 static $clinit() {
  Resources.$clinit = () =>{};
  Resources.$loadModules();
  Resources.$f_INSTANCE__org_gwtproject_user_cellview_client_CellList_Resources = CellList__ResourcesImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ClientBundle.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_CellList_Resources = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellList_Resources;
 }
 
 static $loadModules() {
  CellList__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellList_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Resources, 'org.gwtproject.user.cellview.client.CellList$Resources');

Resources.$markImplementor(/** @type {Function} */ (Resources));

/**@private {Resources}*/
Resources.$f_INSTANCE__org_gwtproject_user_cellview_client_CellList_Resources;

exports = Resources; 
//# sourceMappingURL=CellList$Resources.js.map