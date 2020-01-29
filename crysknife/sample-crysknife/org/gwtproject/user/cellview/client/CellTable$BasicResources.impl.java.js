goog.module('org.gwtproject.user.cellview.client.CellTable.BasicResources$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Resources = goog.require('org.gwtproject.user.cellview.client.CellTable.Resources$impl');

let BasicStyle = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable.BasicStyle$impl');
let CellTable__BasicResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl$impl');

/**
 * @interface
 * @extends {Resources}
 */
class BasicResources {
 /**
  * @abstract
  * @override
  * @return {BasicStyle}
  * @public
  */
 m_cellTableStyle__() {}
 /**
  * @return {BasicResources}
  * @public
  */
 static get f_INSTANCE__org_gwtproject_user_cellview_client_CellTable_BasicResources() {
  return (BasicResources.$clinit(), BasicResources.$f_INSTANCE__org_gwtproject_user_cellview_client_CellTable_BasicResources);
 }
 /**
  * @public
  */
 static $clinit() {
  BasicResources.$clinit = () =>{};
  BasicResources.$loadModules();
  BasicResources.$f_INSTANCE__org_gwtproject_user_cellview_client_CellTable_BasicResources = CellTable__BasicResourcesImpl.$create__();
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
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_CellTable_BasicResources = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellTable_BasicResources;
 }
 /**
  * @public
  */
 static $loadModules() {
  CellTable__BasicResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(BasicResources, 'org.gwtproject.user.cellview.client.CellTable$BasicResources');

BasicResources.$markImplementor(/** @type {Function} */ (BasicResources));

/** @private {BasicResources} */
BasicResources.$f_INSTANCE__org_gwtproject_user_cellview_client_CellTable_BasicResources;

exports = BasicResources; 
//# sourceMappingURL=CellTable$BasicResources.js.map