goog.module('org.gwtproject.http.client.RequestTimeoutException$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RequestException = goog.require('org.gwtproject.http.client.RequestException$impl');

let Request = goog.forwardDeclare('org.gwtproject.http.client.Request$impl');

class RequestTimeoutException extends RequestException {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_timeoutMillis__org_gwtproject_http_client_RequestTimeoutException_ = 0;
  /**@type {Request}*/
  this.f_request__org_gwtproject_http_client_RequestTimeoutException_;
 }
 /** @return {?string} */
 static m_formatMessage__int(/** number */ timeoutMillis) {
  return "A request timeout has expired after " + timeoutMillis + " ms";
 }
 /** @return {!RequestTimeoutException} */
 static $create__org_gwtproject_http_client_Request__int(/** Request */ request, /** number */ timeoutMillis) {
  RequestTimeoutException.$clinit();
  let $instance = new RequestTimeoutException();
  $instance.$ctor__org_gwtproject_http_client_RequestTimeoutException__org_gwtproject_http_client_Request__int(request, timeoutMillis);
  $instance.m_privateInitError__java_lang_Object_$pp_java_lang(new Error($instance));
  return $instance;
 }
 
 $ctor__org_gwtproject_http_client_RequestTimeoutException__org_gwtproject_http_client_Request__int(/** Request */ request, /** number */ timeoutMillis) {
  this.$ctor__org_gwtproject_http_client_RequestException__java_lang_String(RequestTimeoutException.m_formatMessage__int(timeoutMillis));
  this.f_request__org_gwtproject_http_client_RequestTimeoutException_ = request;
  this.f_timeoutMillis__org_gwtproject_http_client_RequestTimeoutException_ = timeoutMillis;
 }
 /** @return {Request} */
 m_getRequest__() {
  return this.f_request__org_gwtproject_http_client_RequestTimeoutException_;
 }
 /** @return {number} */
 m_getTimeoutMillis__() {
  return this.f_timeoutMillis__org_gwtproject_http_client_RequestTimeoutException_;
 }
 
 static $clinit() {
  RequestTimeoutException.$clinit = () =>{};
  RequestTimeoutException.$loadModules();
  RequestException.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RequestTimeoutException;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(RequestTimeoutException, 'org.gwtproject.http.client.RequestTimeoutException');

exports = RequestTimeoutException; 
//# sourceMappingURL=RequestTimeoutException.js.map