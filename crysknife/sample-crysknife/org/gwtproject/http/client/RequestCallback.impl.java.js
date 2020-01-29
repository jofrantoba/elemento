goog.module('org.gwtproject.http.client.RequestCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let Request = goog.forwardDeclare('org.gwtproject.http.client.Request$impl');
let Response = goog.forwardDeclare('org.gwtproject.http.client.Response$impl');

/**
 * @interface
 */
class RequestCallback {
 /**
  * @abstract
  * @param {Request} request
  * @param {Response} response
  * @public
  */
 m_onResponseReceived__org_gwtproject_http_client_Request__org_gwtproject_http_client_Response(request, response) {}
 /**
  * @abstract
  * @param {Request} request
  * @param {Throwable} exception
  * @public
  */
 m_onError__org_gwtproject_http_client_Request__java_lang_Throwable(request, exception) {}
 /**
  * @public
  */
 static $clinit() {
  RequestCallback.$clinit = () =>{};
  RequestCallback.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_http_client_RequestCallback = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_http_client_RequestCallback;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(RequestCallback, 'org.gwtproject.http.client.RequestCallback');

RequestCallback.$markImplementor(/** @type {Function} */ (RequestCallback));

exports = RequestCallback; 
//# sourceMappingURL=RequestCallback.js.map