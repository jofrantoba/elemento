goog.module('org.gwtproject.http.client.Response$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Header = goog.forwardDeclare('org.gwtproject.http.client.Header$impl');

/**
 * @abstract
  */
class Response extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_http_client_Response__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @abstract
  * @param {?string} header
  * @return {?string}
  * @public
  */
 m_getHeader__java_lang_String(header) {}
 /**
  * @abstract
  * @return {Array<Header>}
  * @public
  */
 m_getHeaders__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getHeadersAsString__() {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getStatusCode__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getStatusText__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getText__() {}
 /**
  * @public
  */
 static $clinit() {
  Response.$clinit = () =>{};
  Response.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Response;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(Response, 'org.gwtproject.http.client.Response');

/** @public {number} @const */
Response.f_SC_ACCEPTED__org_gwtproject_http_client_Response = 202;
/** @public {number} @const */
Response.f_SC_BAD_GATEWAY__org_gwtproject_http_client_Response = 502;
/** @public {number} @const */
Response.f_SC_BAD_REQUEST__org_gwtproject_http_client_Response = 400;
/** @public {number} @const */
Response.f_SC_CONFLICT__org_gwtproject_http_client_Response = 409;
/** @public {number} @const */
Response.f_SC_CONTINUE__org_gwtproject_http_client_Response = 100;
/** @public {number} @const */
Response.f_SC_CREATED__org_gwtproject_http_client_Response = 201;
/** @public {number} @const */
Response.f_SC_EXPECTATION_FAILED__org_gwtproject_http_client_Response = 417;
/** @public {number} @const */
Response.f_SC_FORBIDDEN__org_gwtproject_http_client_Response = 403;
/** @public {number} @const */
Response.f_SC_GATEWAY_TIMEOUT__org_gwtproject_http_client_Response = 504;
/** @public {number} @const */
Response.f_SC_GONE__org_gwtproject_http_client_Response = 410;
/** @public {number} @const */
Response.f_SC_HTTP_VERSION_NOT_SUPPORTED__org_gwtproject_http_client_Response = 505;
/** @public {number} @const */
Response.f_SC_INTERNAL_SERVER_ERROR__org_gwtproject_http_client_Response = 500;
/** @public {number} @const */
Response.f_SC_LENGTH_REQUIRED__org_gwtproject_http_client_Response = 411;
/** @public {number} @const */
Response.f_SC_METHOD_NOT_ALLOWED__org_gwtproject_http_client_Response = 405;
/** @public {number} @const */
Response.f_SC_MOVED_PERMANENTLY__org_gwtproject_http_client_Response = 301;
/** @public {number} @const */
Response.f_SC_MOVED_TEMPORARILY__org_gwtproject_http_client_Response = 302;
/** @public {number} @const */
Response.f_SC_MULTIPLE_CHOICES__org_gwtproject_http_client_Response = 300;
/** @public {number} @const */
Response.f_SC_NO_CONTENT__org_gwtproject_http_client_Response = 204;
/** @public {number} @const */
Response.f_SC_NON_AUTHORITATIVE_INFORMATION__org_gwtproject_http_client_Response = 203;
/** @public {number} @const */
Response.f_SC_NOT_ACCEPTABLE__org_gwtproject_http_client_Response = 406;
/** @public {number} @const */
Response.f_SC_NOT_FOUND__org_gwtproject_http_client_Response = 404;
/** @public {number} @const */
Response.f_SC_NOT_IMPLEMENTED__org_gwtproject_http_client_Response = 501;
/** @public {number} @const */
Response.f_SC_NOT_MODIFIED__org_gwtproject_http_client_Response = 304;
/** @public {number} @const */
Response.f_SC_OK__org_gwtproject_http_client_Response = 200;
/** @public {number} @const */
Response.f_SC_PARTIAL_CONTENT__org_gwtproject_http_client_Response = 206;
/** @public {number} @const */
Response.f_SC_PAYMENT_REQUIRED__org_gwtproject_http_client_Response = 402;
/** @public {number} @const */
Response.f_SC_PRECONDITION_FAILED__org_gwtproject_http_client_Response = 412;
/** @public {number} @const */
Response.f_SC_PROXY_AUTHENTICATION_REQUIRED__org_gwtproject_http_client_Response = 407;
/** @public {number} @const */
Response.f_SC_REQUEST_ENTITY_TOO_LARGE__org_gwtproject_http_client_Response = 413;
/** @public {number} @const */
Response.f_SC_REQUESTED_RANGE_NOT_SATISFIABLE__org_gwtproject_http_client_Response = 416;
/** @public {number} @const */
Response.f_SC_RESET_CONTENT__org_gwtproject_http_client_Response = 205;
/** @public {number} @const */
Response.f_SC_SEE_OTHER__org_gwtproject_http_client_Response = 303;
/** @public {number} @const */
Response.f_SC_SERVICE_UNAVAILABLE__org_gwtproject_http_client_Response = 503;
/** @public {number} @const */
Response.f_SC_SWITCHING_PROTOCOLS__org_gwtproject_http_client_Response = 101;
/** @public {number} @const */
Response.f_SC_TEMPORARY_REDIRECT__org_gwtproject_http_client_Response = 307;
/** @public {number} @const */
Response.f_SC_UNAUTHORIZED__org_gwtproject_http_client_Response = 401;
/** @public {number} @const */
Response.f_SC_UNSUPPORTED_MEDIA_TYPE__org_gwtproject_http_client_Response = 415;
/** @public {number} @const */
Response.f_SC_USE_PROXY__org_gwtproject_http_client_Response = 305;

exports = Response; 
//# sourceMappingURL=Response.js.map