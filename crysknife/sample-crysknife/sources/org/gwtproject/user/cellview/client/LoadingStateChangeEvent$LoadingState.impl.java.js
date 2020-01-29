goog.module('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.LoadingState$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let DefaultLoadingState = goog.forwardDeclare('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.DefaultLoadingState$impl');

/**
 * @interface
 */
class LoadingState {
 /**
  * @return {LoadingState}
  * @public
  */
 static get f_LOADING__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState() {
  return (LoadingState.$clinit(), LoadingState.$f_LOADING__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState);
 }
 /**
  * @return {LoadingState}
  * @public
  */
 static get f_PARTIALLY_LOADED__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState() {
  return (LoadingState.$clinit(), LoadingState.$f_PARTIALLY_LOADED__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState);
 }
 /**
  * @return {LoadingState}
  * @public
  */
 static get f_LOADED__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState() {
  return (LoadingState.$clinit(), LoadingState.$f_LOADED__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState);
 }
 /**
  * @public
  */
 static $clinit() {
  LoadingState.$clinit = () =>{};
  LoadingState.$loadModules();
  LoadingState.$f_LOADING__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState = DefaultLoadingState.$create__();
  LoadingState.$f_PARTIALLY_LOADED__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState = DefaultLoadingState.$create__();
  LoadingState.$f_LOADED__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState = DefaultLoadingState.$create__();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState;
 }
 /**
  * @public
  */
 static $loadModules() {
  DefaultLoadingState = goog.module.get('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.DefaultLoadingState$impl');
 }
 
}
$Util.$setClassMetadataForInterface(LoadingState, 'org.gwtproject.user.cellview.client.LoadingStateChangeEvent$LoadingState');

LoadingState.$markImplementor(/** @type {Function} */ (LoadingState));

/** @private {LoadingState} */
LoadingState.$f_LOADING__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState;
/** @private {LoadingState} */
LoadingState.$f_PARTIALLY_LOADED__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState;
/** @private {LoadingState} */
LoadingState.$f_LOADED__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState;

exports = LoadingState; 
//# sourceMappingURL=LoadingStateChangeEvent$LoadingState.js.map