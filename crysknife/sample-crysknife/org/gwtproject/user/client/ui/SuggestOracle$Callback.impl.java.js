goog.module('org.gwtproject.user.client.ui.SuggestOracle.Callback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Callback.$LambdaAdaptor$impl');
let Request = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Request$impl');
let Response = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Response$impl');

/**
 * @interface
 */
class Callback {
 /** @abstract */
 m_onSuggestionsReady__org_gwtproject_user_client_ui_SuggestOracle_Request__org_gwtproject_user_client_ui_SuggestOracle_Response(/** Request */ request, /** Response */ response) {}
 /** @return {Callback} */
 static $adapt(/** ?function(Request, Response):void */ fn) {
  Callback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Callback.$clinit = () =>{};
  Callback.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_SuggestOracle_Callback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_SuggestOracle_Callback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.SuggestOracle.Callback.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Callback, 'org.gwtproject.user.client.ui.SuggestOracle$Callback');

Callback.$markImplementor(/** @type {Function} */ (Callback));

exports = Callback; 
//# sourceMappingURL=SuggestOracle$Callback.js.map