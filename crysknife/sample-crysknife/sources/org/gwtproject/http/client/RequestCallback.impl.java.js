goog.module('org.gwtproject.http.client.RequestCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let Request = goog.forwardDeclare('org.gwtproject.http.client.Request$impl');
let Response = goog.forwardDeclare('org.gwtproject.http.client.Response$impl');

/**
 * @interface
 */
class RequestCallback {
 /** @abstract */
 m_onResponseReceived__org_gwtproject_http_client_Request__org_gwtproject_http_client_Response(/** Request */ request, /** Response */ response) {}
 /** @abstract */
 m_onError__org_gwtproject_http_client_Request__java_lang_Throwable(/** Request */ request, /** Throwable */ exception) {}
 
 static $clinit() {
  RequestCallback.$clinit = () =>{};
  RequestCallback.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_http_client_RequestCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_http_client_RequestCallback;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(RequestCallback, 'org.gwtproject.http.client.RequestCallback');

RequestCallback.$markImplementor(/** @type {Function} */ (RequestCallback));

exports = RequestCallback; 
//# sourceMappingURL=RequestCallback.js.map