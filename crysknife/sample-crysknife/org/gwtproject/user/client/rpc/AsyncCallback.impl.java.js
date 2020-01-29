goog.module('org.gwtproject.user.client.rpc.AsyncCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');

/**
 * @interface
 * @template T
 */
class AsyncCallback {
 /**
  * @abstract
  * @param {Throwable} caught
  * @public
  */
 m_onFailure__java_lang_Throwable(caught) {}
 /**
  * @abstract
  * @param {T} result
  * @public
  */
 m_onSuccess__java_lang_Object(result) {}
 /**
  * @public
  */
 static $clinit() {
  AsyncCallback.$clinit = () =>{};
  AsyncCallback.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_rpc_AsyncCallback = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_rpc_AsyncCallback;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(AsyncCallback, 'org.gwtproject.user.client.rpc.AsyncCallback');

AsyncCallback.$markImplementor(/** @type {Function} */ (AsyncCallback));

exports = AsyncCallback; 
//# sourceMappingURL=AsyncCallback.js.map