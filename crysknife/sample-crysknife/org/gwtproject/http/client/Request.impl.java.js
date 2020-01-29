goog.module('org.gwtproject.http.client.Request$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let XMLHttpRequest_$Overlay = goog.forwardDeclare('elemental2.dom.XMLHttpRequest.$Overlay$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let NullPointerException = goog.forwardDeclare('java.lang.NullPointerException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let RequestCallback = goog.forwardDeclare('org.gwtproject.http.client.RequestCallback$impl');
let RequestTimeoutException = goog.forwardDeclare('org.gwtproject.http.client.RequestTimeoutException$impl');
let Response = goog.forwardDeclare('org.gwtproject.http.client.Response$impl');
let ResponseImpl = goog.forwardDeclare('org.gwtproject.http.client.ResponseImpl$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class Request extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {number} */
  this.f_timeoutMillis__org_gwtproject_http_client_Request_ = 0;
  /** @public {number} */
  this.f_timerId__org_gwtproject_http_client_Request_ = 0.0;
  /** @public {XMLHttpRequest} */
  this.f_xmlHttpRequest__org_gwtproject_http_client_Request_;
 }
 /**
  * @param {XMLHttpRequest} xmlHttpRequest
  * @return {Response}
  * @public
  */
 static m_createResponse__elemental2_dom_XMLHttpRequest(xmlHttpRequest) {
  return ResponseImpl.$create__elemental2_dom_XMLHttpRequest(xmlHttpRequest);
 }
 /**
  * @param {XMLHttpRequest} xmlHttpRequest
  * @param {number} timeoutMillis
  * @param {RequestCallback} callback
  * @return {!Request}
  * @public
  */
 static $create__elemental2_dom_XMLHttpRequest__int__org_gwtproject_http_client_RequestCallback(xmlHttpRequest, timeoutMillis, callback) {
  Request.$clinit();
  let $instance = new Request();
  $instance.$ctor__org_gwtproject_http_client_Request__elemental2_dom_XMLHttpRequest__int__org_gwtproject_http_client_RequestCallback(xmlHttpRequest, timeoutMillis, callback);
  return $instance;
 }
 /**
  * @param {XMLHttpRequest} xmlHttpRequest
  * @param {number} timeoutMillis
  * @param {RequestCallback} callback
  * @public
  */
 $ctor__org_gwtproject_http_client_Request__elemental2_dom_XMLHttpRequest__int__org_gwtproject_http_client_RequestCallback(xmlHttpRequest, timeoutMillis, callback) {
  this.$ctor__java_lang_Object__();
  if ($Equality.$same(xmlHttpRequest, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__());
  }
  if ($Equality.$same(callback, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__());
  }
  if (timeoutMillis < 0) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__());
  }
  this.f_timeoutMillis__org_gwtproject_http_client_Request_ = timeoutMillis;
  this.f_xmlHttpRequest__org_gwtproject_http_client_Request_ = xmlHttpRequest;
  if (timeoutMillis > 0) {
   this.f_timerId__org_gwtproject_http_client_Request_ = $Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object((.../** ...* */ args) =>{
    this.m_fireOnTimeout__org_gwtproject_http_client_RequestCallback_$p_org_gwtproject_http_client_Request(callback);
   }, timeoutMillis, []);
  } else {
   this.f_timerId__org_gwtproject_http_client_Request_ = 0.0;
  }
 }
 /**
  * @public
  */
 m_cancel__() {
  if ($Equality.$same(this.f_xmlHttpRequest__org_gwtproject_http_client_Request_, null)) {
   return;
  }
  this.m_cancelTimer___$p_org_gwtproject_http_client_Request();
  let xhr = this.f_xmlHttpRequest__org_gwtproject_http_client_Request_;
  this.f_xmlHttpRequest__org_gwtproject_http_client_Request_ = null;
  xhr.abort();
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isPending__() {
  if ($Equality.$same(this.f_xmlHttpRequest__org_gwtproject_http_client_Request_, null)) {
   return false;
  }
  let readyState = this.f_xmlHttpRequest__org_gwtproject_http_client_Request_.readyState;
  return readyState == XMLHttpRequest.OPENED || readyState == XMLHttpRequest.HEADERS_RECEIVED || readyState == XMLHttpRequest.LOADING;
 }
 /**
  * @param {RequestCallback} callback
  * @public
  */
 m_fireOnResponseReceived__org_gwtproject_http_client_RequestCallback_$pp_org_gwtproject_http_client(callback) {
  if ($Equality.$same(this.f_xmlHttpRequest__org_gwtproject_http_client_Request_, null)) {
   return;
  }
  this.m_cancelTimer___$p_org_gwtproject_http_client_Request();
  let xhr = this.f_xmlHttpRequest__org_gwtproject_http_client_Request_;
  this.f_xmlHttpRequest__org_gwtproject_http_client_Request_ = null;
  let response = Request.m_createResponse__elemental2_dom_XMLHttpRequest(xhr);
  callback.m_onResponseReceived__org_gwtproject_http_client_Request__org_gwtproject_http_client_Response(this, response);
 }
 /**
  * @public
  */
 m_cancelTimer___$p_org_gwtproject_http_client_Request() {
  if (this.f_timeoutMillis__org_gwtproject_http_client_Request_ > 0) {
   window.clearTimeout(this.f_timerId__org_gwtproject_http_client_Request_);
  }
 }
 /**
  * @param {RequestCallback} callback
  * @public
  */
 m_fireOnTimeout__org_gwtproject_http_client_RequestCallback_$p_org_gwtproject_http_client_Request(callback) {
  if ($Equality.$same(this.f_xmlHttpRequest__org_gwtproject_http_client_Request_, null)) {
   return;
  }
  this.m_cancel__();
  callback.m_onError__org_gwtproject_http_client_Request__java_lang_Throwable(this, RequestTimeoutException.$create__org_gwtproject_http_client_Request__int(this, this.f_timeoutMillis__org_gwtproject_http_client_Request_));
 }
 /**
  * @public
  */
 static $clinit() {
  Request.$clinit = () =>{};
  Request.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Request;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  NullPointerException = goog.module.get('java.lang.NullPointerException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  RequestTimeoutException = goog.module.get('org.gwtproject.http.client.RequestTimeoutException$impl');
  ResponseImpl = goog.module.get('org.gwtproject.http.client.ResponseImpl$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(Request, 'org.gwtproject.http.client.Request');

exports = Request; 
//# sourceMappingURL=Request.js.map