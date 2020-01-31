goog.module('org.gwtproject.user.cellview.client.SimplePager.Resources$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ClientBundle = goog.require('org.gwtproject.resources.client.ClientBundle$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager.Style$impl');
let SimplePager__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$impl');

/**
 * @interface
 * @extends {ClientBundle}
 */
class Resources {
 /** @abstract @return {ImageResource} */
 m_simplePagerFastForward__() {}
 /** @abstract @return {ImageResource} */
 m_simplePagerFastForwardDisabled__() {}
 /** @abstract @return {ImageResource} */
 m_simplePagerFirstPage__() {}
 /** @abstract @return {ImageResource} */
 m_simplePagerFirstPageDisabled__() {}
 /** @abstract @return {ImageResource} */
 m_simplePagerLastPage__() {}
 /** @abstract @return {ImageResource} */
 m_simplePagerLastPageDisabled__() {}
 /** @abstract @return {ImageResource} */
 m_simplePagerNextPage__() {}
 /** @abstract @return {ImageResource} */
 m_simplePagerNextPageDisabled__() {}
 /** @abstract @return {ImageResource} */
 m_simplePagerPreviousPage__() {}
 /** @abstract @return {ImageResource} */
 m_simplePagerPreviousPageDisabled__() {}
 /** @abstract @return {Style} */
 m_simplePagerStyle__() {}
 /** @return {Resources} */
 static get f_INSTANCE__org_gwtproject_user_cellview_client_SimplePager_Resources() {
  return (Resources.$clinit(), Resources.$f_INSTANCE__org_gwtproject_user_cellview_client_SimplePager_Resources);
 }
 
 static $clinit() {
  Resources.$clinit = () =>{};
  Resources.$loadModules();
  Resources.$f_INSTANCE__org_gwtproject_user_cellview_client_SimplePager_Resources = SimplePager__ResourcesImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ClientBundle.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_SimplePager_Resources = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_SimplePager_Resources;
 }
 
 static $loadModules() {
  SimplePager__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Resources, 'org.gwtproject.user.cellview.client.SimplePager$Resources');

Resources.$markImplementor(/** @type {Function} */ (Resources));

/**@private {Resources}*/
Resources.$f_INSTANCE__org_gwtproject_user_cellview_client_SimplePager_Resources;

exports = Resources; 
//# sourceMappingURL=SimplePager$Resources.js.map