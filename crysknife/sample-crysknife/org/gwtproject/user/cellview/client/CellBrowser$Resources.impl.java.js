goog.module('org.gwtproject.user.cellview.client.CellBrowser.Resources$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ClientBundle = goog.require('org.gwtproject.resources.client.ClientBundle$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.Style$impl');
let CellBrowser__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl$impl');

/**
 * @interface
 * @extends {ClientBundle}
 */
class Resources {
 /** @abstract @return {ImageResource} */
 m_cellBrowserClosed__() {}
 /** @abstract @return {ImageResource} */
 m_cellBrowserOpen__() {}
 /** @abstract @return {ImageResource} */
 m_cellBrowserOpenBackground__() {}
 /** @abstract @return {ImageResource} */
 m_cellBrowserSelectedBackground__() {}
 /** @abstract @return {Style} */
 m_cellBrowserStyle__() {}
 /** @return {Resources} */
 static get f_INSTANCE__org_gwtproject_user_cellview_client_CellBrowser_Resources() {
  return (Resources.$clinit(), Resources.$f_INSTANCE__org_gwtproject_user_cellview_client_CellBrowser_Resources);
 }
 
 static $clinit() {
  Resources.$clinit = () =>{};
  Resources.$loadModules();
  Resources.$f_INSTANCE__org_gwtproject_user_cellview_client_CellBrowser_Resources = CellBrowser__ResourcesImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ClientBundle.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_CellBrowser_Resources = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellBrowser_Resources;
 }
 
 static $loadModules() {
  CellBrowser__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Resources, 'org.gwtproject.user.cellview.client.CellBrowser$Resources');

Resources.$markImplementor(/** @type {Function} */ (Resources));

/**@private {Resources}*/
Resources.$f_INSTANCE__org_gwtproject_user_cellview_client_CellBrowser_Resources;

exports = Resources; 
//# sourceMappingURL=CellBrowser$Resources.js.map