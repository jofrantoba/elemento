goog.module('org.gwtproject.http.client.RequestBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Event_$Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.XMLHttpRequest.$Overlay$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Request = goog.forwardDeclare('org.gwtproject.http.client.Request$impl');
let Method = goog.forwardDeclare('org.gwtproject.http.client.RequestBuilder.Method$impl');
let RequestCallback = goog.forwardDeclare('org.gwtproject.http.client.RequestCallback$impl');
let RequestException = goog.forwardDeclare('org.gwtproject.http.client.RequestException$impl');
let StringValidator = goog.forwardDeclare('org.gwtproject.http.client.StringValidator$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class RequestBuilder extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {RequestCallback} */
  this.f_callback__org_gwtproject_http_client_RequestBuilder_;
  /** @public {Map<?string, ?string>} */
  this.f_headers__org_gwtproject_http_client_RequestBuilder_;
  /** @public {?string} */
  this.f_httpMethod__org_gwtproject_http_client_RequestBuilder_;
  /** @public {boolean} */
  this.f_includeCredentials__org_gwtproject_http_client_RequestBuilder_ = false;
  /** @public {?string} */
  this.f_password__org_gwtproject_http_client_RequestBuilder_;
  /** @public {?string} */
  this.f_requestData__org_gwtproject_http_client_RequestBuilder_;
  /** @public {number} */
  this.f_timeoutMillis__org_gwtproject_http_client_RequestBuilder_ = 0;
  /** @public {?string} */
  this.f_url__org_gwtproject_http_client_RequestBuilder_;
  /** @public {?string} */
  this.f_user__org_gwtproject_http_client_RequestBuilder_;
 }
 /**
  * Factory method corresponding to constructor 'RequestBuilder(Method, String)'.
  * @param {Method} httpMethod
  * @param {?string} url
  * @return {!RequestBuilder}
  * @public
  */
 static $create__org_gwtproject_http_client_RequestBuilder_Method__java_lang_String(httpMethod, url) {
  RequestBuilder.$clinit();
  let $instance = new RequestBuilder();
  $instance.$ctor__org_gwtproject_http_client_RequestBuilder__org_gwtproject_http_client_RequestBuilder_Method__java_lang_String(httpMethod, url);
  return $instance;
 }
 /**
  * Initialization from constructor 'RequestBuilder(Method, String)'.
  * @param {Method} httpMethod
  * @param {?string} url
  * @public
  */
 $ctor__org_gwtproject_http_client_RequestBuilder__org_gwtproject_http_client_RequestBuilder_Method__java_lang_String(httpMethod, url) {
  this.$ctor__org_gwtproject_http_client_RequestBuilder__java_lang_String__java_lang_String($Equality.$same(httpMethod, null) ? null : httpMethod.toString(), url);
 }
 /**
  * Factory method corresponding to constructor 'RequestBuilder(String, String)'.
  * @param {?string} httpMethod
  * @param {?string} url
  * @return {!RequestBuilder}
  * @public
  */
 static $create__java_lang_String__java_lang_String(httpMethod, url) {
  RequestBuilder.$clinit();
  let $instance = new RequestBuilder();
  $instance.$ctor__org_gwtproject_http_client_RequestBuilder__java_lang_String__java_lang_String(httpMethod, url);
  return $instance;
 }
 /**
  * Initialization from constructor 'RequestBuilder(String, String)'.
  * @param {?string} httpMethod
  * @param {?string} url
  * @public
  */
 $ctor__org_gwtproject_http_client_RequestBuilder__java_lang_String__java_lang_String(httpMethod, url) {
  this.$ctor__java_lang_Object__();
  StringValidator.m_throwIfEmptyOrNull__java_lang_String__java_lang_String("httpMethod", httpMethod);
  StringValidator.m_throwIfEmptyOrNull__java_lang_String__java_lang_String("url", url);
  this.f_httpMethod__org_gwtproject_http_client_RequestBuilder_ = httpMethod;
  this.f_url__org_gwtproject_http_client_RequestBuilder_ = url;
 }
 /**
  * @return {RequestCallback}
  * @public
  */
 m_getCallback__() {
  return this.f_callback__org_gwtproject_http_client_RequestBuilder_;
 }
 /**
  * @param {?string} header
  * @return {?string}
  * @public
  */
 m_getHeader__java_lang_String(header) {
  if ($Equality.$same(this.f_headers__org_gwtproject_http_client_RequestBuilder_, null)) {
   return null;
  }
  return /**@type {?string} */ ($Casts.$to(this.f_headers__org_gwtproject_http_client_RequestBuilder_.get(header), j_l_String));
 }
 /**
  * @return {?string}
  * @public
  */
 m_getHTTPMethod__() {
  return this.f_httpMethod__org_gwtproject_http_client_RequestBuilder_;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getPassword__() {
  return this.f_password__org_gwtproject_http_client_RequestBuilder_;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getRequestData__() {
  return this.f_requestData__org_gwtproject_http_client_RequestBuilder_;
 }
 /**
  * @return {number}
  * @public
  */
 m_getTimeoutMillis__() {
  return this.f_timeoutMillis__org_gwtproject_http_client_RequestBuilder_;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getUrl__() {
  return this.f_url__org_gwtproject_http_client_RequestBuilder_;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getUser__() {
  return this.f_user__org_gwtproject_http_client_RequestBuilder_;
 }
 /**
  * @return {Request}
  * @public
  */
 m_send__() {
  StringValidator.m_throwIfNull__java_lang_String__java_lang_Object("callback", this.f_callback__org_gwtproject_http_client_RequestBuilder_);
  return this.m_doSend__java_lang_String__org_gwtproject_http_client_RequestCallback_$p_org_gwtproject_http_client_RequestBuilder(this.f_requestData__org_gwtproject_http_client_RequestBuilder_, this.f_callback__org_gwtproject_http_client_RequestBuilder_);
 }
 /**
  * @param {?string} requestData
  * @param {RequestCallback} callback
  * @return {Request}
  * @public
  */
 m_sendRequest__java_lang_String__org_gwtproject_http_client_RequestCallback(requestData, callback) {
  StringValidator.m_throwIfNull__java_lang_String__java_lang_Object("callback", callback);
  return this.m_doSend__java_lang_String__org_gwtproject_http_client_RequestCallback_$p_org_gwtproject_http_client_RequestBuilder(requestData, callback);
 }
 /**
  * @param {RequestCallback} callback
  * @public
  */
 m_setCallback__org_gwtproject_http_client_RequestCallback(callback) {
  StringValidator.m_throwIfNull__java_lang_String__java_lang_Object("callback", callback);
  this.f_callback__org_gwtproject_http_client_RequestBuilder_ = callback;
 }
 /**
  * @param {?string} header
  * @param {?string} value
  * @public
  */
 m_setHeader__java_lang_String__java_lang_String(header, value) {
  StringValidator.m_throwIfEmptyOrNull__java_lang_String__java_lang_String("header", header);
  StringValidator.m_throwIfEmptyOrNull__java_lang_String__java_lang_String("value", value);
  if ($Equality.$same(this.f_headers__org_gwtproject_http_client_RequestBuilder_, null)) {
   this.f_headers__org_gwtproject_http_client_RequestBuilder_ = /**@type {!HashMap<?string, ?string>} */ (HashMap.$create__());
  }
  this.f_headers__org_gwtproject_http_client_RequestBuilder_.put(header, value);
 }
 /**
  * @param {?string} password
  * @public
  */
 m_setPassword__java_lang_String(password) {
  StringValidator.m_throwIfEmptyOrNull__java_lang_String__java_lang_String("password", password);
  this.f_password__org_gwtproject_http_client_RequestBuilder_ = password;
 }
 /**
  * @param {?string} requestData
  * @public
  */
 m_setRequestData__java_lang_String(requestData) {
  this.f_requestData__org_gwtproject_http_client_RequestBuilder_ = requestData;
 }
 /**
  * @param {number} timeoutMillis
  * @public
  */
 m_setTimeoutMillis__int(timeoutMillis) {
  if (timeoutMillis < 0) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Timeouts cannot be negative"));
  }
  this.f_timeoutMillis__org_gwtproject_http_client_RequestBuilder_ = timeoutMillis;
 }
 /**
  * @param {?string} user
  * @public
  */
 m_setUser__java_lang_String(user) {
  StringValidator.m_throwIfEmptyOrNull__java_lang_String__java_lang_String("user", user);
  this.f_user__org_gwtproject_http_client_RequestBuilder_ = user;
 }
 /**
  * @param {boolean} includeCredentials
  * @public
  */
 m_setIncludeCredentials__boolean(includeCredentials) {
  this.f_includeCredentials__org_gwtproject_http_client_RequestBuilder_ = includeCredentials;
 }
 /**
  * @param {?string} requestData
  * @param {RequestCallback} callback
  * @return {Request}
  * @public
  */
 m_doSend__java_lang_String__org_gwtproject_http_client_RequestCallback_$p_org_gwtproject_http_client_RequestBuilder(requestData, callback) {
  let xmlHttpRequest = new XMLHttpRequest();
  if (!$Equality.$same(this.f_user__org_gwtproject_http_client_RequestBuilder_, null) && !$Equality.$same(this.f_password__org_gwtproject_http_client_RequestBuilder_, null)) {
   xmlHttpRequest.open(this.f_httpMethod__org_gwtproject_http_client_RequestBuilder_, this.f_url__org_gwtproject_http_client_RequestBuilder_, true, this.f_user__org_gwtproject_http_client_RequestBuilder_, this.f_password__org_gwtproject_http_client_RequestBuilder_);
  } else if (!$Equality.$same(this.f_user__org_gwtproject_http_client_RequestBuilder_, null)) {
   xmlHttpRequest.open(this.f_httpMethod__org_gwtproject_http_client_RequestBuilder_, this.f_url__org_gwtproject_http_client_RequestBuilder_, true, this.f_user__org_gwtproject_http_client_RequestBuilder_);
  } else {
   xmlHttpRequest.open(this.f_httpMethod__org_gwtproject_http_client_RequestBuilder_, this.f_url__org_gwtproject_http_client_RequestBuilder_, true);
  }
  this.m_setHeaders__elemental2_dom_XMLHttpRequest_$p_org_gwtproject_http_client_RequestBuilder(xmlHttpRequest);
  if (this.f_includeCredentials__org_gwtproject_http_client_RequestBuilder_) {
   xmlHttpRequest.withCredentials = true;
  }
  let request = Request.$create__elemental2_dom_XMLHttpRequest__int__org_gwtproject_http_client_RequestCallback(xmlHttpRequest, this.f_timeoutMillis__org_gwtproject_http_client_RequestBuilder_, callback);
  xmlHttpRequest.onreadystatechange = (/** Event */ evt) =>{
   if (xmlHttpRequest.readyState == XMLHttpRequest.DONE) {
    request.m_fireOnResponseReceived__org_gwtproject_http_client_RequestCallback_$pp_org_gwtproject_http_client(callback);
   }
   return undefined;
  };
  try {
   $Overlay.m_send__$devirt__elemental2_dom_XMLHttpRequest__java_lang_String(xmlHttpRequest, requestData);
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   {
    let e = /**@type {Throwable} */ (__$exc);
    throw $Exceptions.toJs(RequestException.$create__java_lang_String(e.m_getMessage__()));
   }
  }
  return request;
 }
 /**
  * @param {XMLHttpRequest} xmlHttpRequest
  * @public
  */
 m_setHeaders__elemental2_dom_XMLHttpRequest_$p_org_gwtproject_http_client_RequestBuilder(xmlHttpRequest) {
  if (!$Equality.$same(this.f_headers__org_gwtproject_http_client_RequestBuilder_, null) && this.f_headers__org_gwtproject_http_client_RequestBuilder_.size() > 0) {
   for (let $iterator = this.f_headers__org_gwtproject_http_client_RequestBuilder_.m_entrySet__().m_iterator__(); $iterator.m_hasNext__(); ) {
    let header = /**@type {Entry<?string, ?string>} */ ($Casts.$to($iterator.m_next__(), Entry));
    try {
     xmlHttpRequest.setRequestHeader(/**@type {?string} */ ($Casts.$to(header.m_getKey__(), j_l_String)), /**@type {?string} */ ($Casts.$to(header.m_getValue__(), j_l_String)));
    } catch (__$exc) {
     __$exc = $Exceptions.toJava(__$exc);
     {
      let e = /**@type {Throwable} */ (__$exc);
      throw $Exceptions.toJs(RequestException.$create__java_lang_String(e.m_getMessage__()));
     }
    }
   }
  } else {
   xmlHttpRequest.setRequestHeader("Content-Type", "text/plain; charset=utf-8");
  }
 }
 /**
  * @return {Method}
  * @public
  */
 static get f_DELETE__org_gwtproject_http_client_RequestBuilder() {
  return (RequestBuilder.$clinit(), RequestBuilder.$f_DELETE__org_gwtproject_http_client_RequestBuilder);
 }
 /**
  * @return {Method}
  * @public
  */
 static get f_GET__org_gwtproject_http_client_RequestBuilder() {
  return (RequestBuilder.$clinit(), RequestBuilder.$f_GET__org_gwtproject_http_client_RequestBuilder);
 }
 /**
  * @return {Method}
  * @public
  */
 static get f_HEAD__org_gwtproject_http_client_RequestBuilder() {
  return (RequestBuilder.$clinit(), RequestBuilder.$f_HEAD__org_gwtproject_http_client_RequestBuilder);
 }
 /**
  * @return {Method}
  * @public
  */
 static get f_POST__org_gwtproject_http_client_RequestBuilder() {
  return (RequestBuilder.$clinit(), RequestBuilder.$f_POST__org_gwtproject_http_client_RequestBuilder);
 }
 /**
  * @return {Method}
  * @public
  */
 static get f_PUT__org_gwtproject_http_client_RequestBuilder() {
  return (RequestBuilder.$clinit(), RequestBuilder.$f_PUT__org_gwtproject_http_client_RequestBuilder);
 }
 /**
  * @public
  */
 static $clinit() {
  RequestBuilder.$clinit = () =>{};
  RequestBuilder.$loadModules();
  j_l_Object.$clinit();
  RequestBuilder.$f_DELETE__org_gwtproject_http_client_RequestBuilder = Method.$create__java_lang_String("DELETE");
  RequestBuilder.$f_GET__org_gwtproject_http_client_RequestBuilder = Method.$create__java_lang_String("GET");
  RequestBuilder.$f_HEAD__org_gwtproject_http_client_RequestBuilder = Method.$create__java_lang_String("HEAD");
  RequestBuilder.$f_POST__org_gwtproject_http_client_RequestBuilder = Method.$create__java_lang_String("POST");
  RequestBuilder.$f_PUT__org_gwtproject_http_client_RequestBuilder = Method.$create__java_lang_String("PUT");
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof RequestBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.XMLHttpRequest.$Overlay$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Request = goog.module.get('org.gwtproject.http.client.Request$impl');
  Method = goog.module.get('org.gwtproject.http.client.RequestBuilder.Method$impl');
  RequestException = goog.module.get('org.gwtproject.http.client.RequestException$impl');
  StringValidator = goog.module.get('org.gwtproject.http.client.StringValidator$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(RequestBuilder, 'org.gwtproject.http.client.RequestBuilder');

/** @private {Method} */
RequestBuilder.$f_DELETE__org_gwtproject_http_client_RequestBuilder;
/** @private {Method} */
RequestBuilder.$f_GET__org_gwtproject_http_client_RequestBuilder;
/** @private {Method} */
RequestBuilder.$f_HEAD__org_gwtproject_http_client_RequestBuilder;
/** @private {Method} */
RequestBuilder.$f_POST__org_gwtproject_http_client_RequestBuilder;
/** @private {Method} */
RequestBuilder.$f_PUT__org_gwtproject_http_client_RequestBuilder;

exports = RequestBuilder; 
//# sourceMappingURL=RequestBuilder.js.map