goog.module('org.gwtproject.user.cellview.client.CellTree.Resources$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ClientBundle = goog.require('org.gwtproject.resources.client.ClientBundle$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree.Style$impl');
let CellTree__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree_ResourcesImpl$impl');

/**
 * @interface
 * @extends {ClientBundle}
 */
class Resources {
 /**
  * @abstract
  * @return {ImageResource}
  * @public
  */
 m_cellTreeClosedItem__() {}
 /**
  * @abstract
  * @return {ImageResource}
  * @public
  */
 m_cellTreeLoading__() {}
 /**
  * @abstract
  * @return {ImageResource}
  * @public
  */
 m_cellTreeOpenItem__() {}
 /**
  * @abstract
  * @return {ImageResource}
  * @public
  */
 m_cellTreeSelectedBackground__() {}
 /**
  * @abstract
  * @return {Style}
  * @public
  */
 m_cellTreeStyle__() {}
 /**
  * @return {Resources}
  * @public
  */
 static get f_INSTANCE__org_gwtproject_user_cellview_client_CellTree_Resources() {
  return (Resources.$clinit(), Resources.$f_INSTANCE__org_gwtproject_user_cellview_client_CellTree_Resources);
 }
 /**
  * @public
  */
 static $clinit() {
  Resources.$clinit = () =>{};
  Resources.$loadModules();
  Resources.$f_INSTANCE__org_gwtproject_user_cellview_client_CellTree_Resources = CellTree__ResourcesImpl.$create__();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  ClientBundle.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_CellTree_Resources = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellTree_Resources;
 }
 /**
  * @public
  */
 static $loadModules() {
  CellTree__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTree_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Resources, 'org.gwtproject.user.cellview.client.CellTree$Resources');

Resources.$markImplementor(/** @type {Function} */ (Resources));

/** @private {Resources} */
Resources.$f_INSTANCE__org_gwtproject_user_cellview_client_CellTree_Resources;

exports = Resources; 
//# sourceMappingURL=CellTree$Resources.js.map