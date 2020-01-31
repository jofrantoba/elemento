goog.module('org.gwtproject.user.client.rpc.AsyncCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');

/**
 * @interface
 * @template T
 */
class AsyncCallback {
 /** @abstract */
 m_onFailure__java_lang_Throwable(/** Throwable */ caught) {}
 /** @abstract */
 m_onSuccess__java_lang_Object(/** T */ result) {}
 
 static $clinit() {
  AsyncCallback.$clinit = () =>{};
  AsyncCallback.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_rpc_AsyncCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_rpc_AsyncCallback;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(AsyncCallback, 'org.gwtproject.user.client.rpc.AsyncCallback');

AsyncCallback.$markImplementor(/** @type {Function} */ (AsyncCallback));

exports = AsyncCallback; 
//# sourceMappingURL=AsyncCallback.js.map