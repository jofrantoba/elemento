goog.module('org.gwtproject.http.client.RequestTimeoutException$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RequestException = goog.require('org.gwtproject.http.client.RequestException$impl');

let Request = goog.forwardDeclare('org.gwtproject.http.client.Request$impl');

class RequestTimeoutException extends RequestException {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {number} */
  this.f_timeoutMillis__org_gwtproject_http_client_RequestTimeoutException_ = 0;
  /** @public {Request} */
  this.f_request__org_gwtproject_http_client_RequestTimeoutException_;
 }
 /**
  * @param {number} timeoutMillis
  * @return {?string}
  * @public
  */
 static m_formatMessage__int(timeoutMillis) {
  return "A request timeout has expired after " + timeoutMillis + " ms";
 }
 /**
  * @param {Request} request
  * @param {number} timeoutMillis
  * @return {!RequestTimeoutException}
  * @public
  */
 static $create__org_gwtproject_http_client_Request__int(request, timeoutMillis) {
  RequestTimeoutException.$clinit();
  let $instance = new RequestTimeoutException();
  $instance.$ctor__org_gwtproject_http_client_RequestTimeoutException__org_gwtproject_http_client_Request__int(request, timeoutMillis);
  $instance.m_privateInitError__java_lang_Object_$pp_java_lang(new Error($instance));
  return $instance;
 }
 /**
  * @param {Request} request
  * @param {number} timeoutMillis
  * @public
  */
 $ctor__org_gwtproject_http_client_RequestTimeoutException__org_gwtproject_http_client_Request__int(request, timeoutMillis) {
  this.$ctor__org_gwtproject_http_client_RequestException__java_lang_String(RequestTimeoutException.m_formatMessage__int(timeoutMillis));
  this.f_request__org_gwtproject_http_client_RequestTimeoutException_ = request;
  this.f_timeoutMillis__org_gwtproject_http_client_RequestTimeoutException_ = timeoutMillis;
 }
 /**
  * @return {Request}
  * @public
  */
 m_getRequest__() {
  return this.f_request__org_gwtproject_http_client_RequestTimeoutException_;
 }
 /**
  * @return {number}
  * @public
  */
 m_getTimeoutMillis__() {
  return this.f_timeoutMillis__org_gwtproject_http_client_RequestTimeoutException_;
 }
 /**
  * @public
  */
 static $clinit() {
  RequestTimeoutException.$clinit = () =>{};
  RequestTimeoutException.$loadModules();
  RequestException.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof RequestTimeoutException;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(RequestTimeoutException, 'org.gwtproject.http.client.RequestTimeoutException');

exports = RequestTimeoutException; 
//# sourceMappingURL=RequestTimeoutException.js.map