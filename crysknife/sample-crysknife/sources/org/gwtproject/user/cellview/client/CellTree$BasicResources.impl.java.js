goog.module('org.gwtproject.user.cellview.client.CellTree.BasicResources$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Resources = goog.require('org.gwtproject.user.cellview.client.CellTree.Resources$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let BasicStyle = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree.BasicStyle$impl');
let CellTree__BasicResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree_BasicResourcesImpl$impl');

/**
 * @interface
 * @extends {Resources}
 */
class BasicResources {
 /**
  * @abstract
  * @override
  * @return {ImageResource}
  * @public
  */
 m_cellTreeClosedItem__() {}
 /**
  * @abstract
  * @override
  * @return {ImageResource}
  * @public
  */
 m_cellTreeLoading__() {}
 /**
  * @abstract
  * @override
  * @return {ImageResource}
  * @public
  */
 m_cellTreeOpenItem__() {}
 /**
  * @abstract
  * @override
  * @return {BasicStyle}
  * @public
  */
 m_cellTreeStyle__() {}
 /**
  * @return {BasicResources}
  * @public
  */
 static get f_INSTANCE__org_gwtproject_user_cellview_client_CellTree_BasicResources() {
  return (BasicResources.$clinit(), BasicResources.$f_INSTANCE__org_gwtproject_user_cellview_client_CellTree_BasicResources);
 }
 /**
  * @public
  */
 static $clinit() {
  BasicResources.$clinit = () =>{};
  BasicResources.$loadModules();
  BasicResources.$f_INSTANCE__org_gwtproject_user_cellview_client_CellTree_BasicResources = CellTree__BasicResourcesImpl.$create__();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Resources.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_CellTree_BasicResources = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellTree_BasicResources;
 }
 /**
  * @public
  */
 static $loadModules() {
  CellTree__BasicResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTree_BasicResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(BasicResources, 'org.gwtproject.user.cellview.client.CellTree$BasicResources');

BasicResources.$markImplementor(/** @type {Function} */ (BasicResources));

/** @private {BasicResources} */
BasicResources.$f_INSTANCE__org_gwtproject_user_cellview_client_CellTree_BasicResources;

exports = BasicResources; 
//# sourceMappingURL=CellTree$BasicResources.js.map