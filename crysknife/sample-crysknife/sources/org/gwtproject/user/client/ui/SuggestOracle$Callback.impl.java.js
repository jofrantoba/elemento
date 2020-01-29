goog.module('org.gwtproject.user.client.ui.SuggestOracle.Callback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Callback.$LambdaAdaptor$impl');
let Request = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Request$impl');
let Response = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Response$impl');

/**
 * @interface
 */
class Callback {
 /**
  * @abstract
  * @param {Request} request
  * @param {Response} response
  * @public
  */
 m_onSuggestionsReady__org_gwtproject_user_client_ui_SuggestOracle_Request__org_gwtproject_user_client_ui_SuggestOracle_Response(request, response) {}
 /**
  * @param {?function(Request, Response):void} fn
  * @return {Callback}
  * @public
  */
 static $adapt(fn) {
  Callback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  Callback.$clinit = () =>{};
  Callback.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_SuggestOracle_Callback = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_SuggestOracle_Callback;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.SuggestOracle.Callback.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Callback, 'org.gwtproject.user.client.ui.SuggestOracle$Callback');

Callback.$markImplementor(/** @type {Function} */ (Callback));

exports = Callback; 
//# sourceMappingURL=SuggestOracle$Callback.js.map