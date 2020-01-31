goog.module('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.DefaultLoadingState$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LoadingState = goog.require('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.LoadingState$impl');

/**
 * @implements {LoadingState}
  */
class DefaultLoadingState extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultLoadingState} */
 static $create__() {
  DefaultLoadingState.$clinit();
  let $instance = new DefaultLoadingState();
  $instance.$ctor__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_DefaultLoadingState__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_DefaultLoadingState__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  DefaultLoadingState.$clinit = () =>{};
  DefaultLoadingState.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultLoadingState;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DefaultLoadingState, 'org.gwtproject.user.cellview.client.LoadingStateChangeEvent$DefaultLoadingState');

LoadingState.$markImplementor(DefaultLoadingState);

exports = DefaultLoadingState; 
//# sourceMappingURL=LoadingStateChangeEvent$DefaultLoadingState.js.map