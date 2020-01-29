goog.module('org.gwtproject.http.client.ResponseImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Response = goog.require('org.gwtproject.http.client.Response$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.XMLHttpRequest.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Header = goog.forwardDeclare('org.gwtproject.http.client.Header$impl');
let $1 = goog.forwardDeclare('org.gwtproject.http.client.ResponseImpl.$1$impl');
let StringValidator = goog.forwardDeclare('org.gwtproject.http.client.StringValidator$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');

class ResponseImpl extends Response {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {XMLHttpRequest} */
  this.f_xmlHttpRequest__org_gwtproject_http_client_ResponseImpl_;
 }
 /**
  * @param {XMLHttpRequest} xmlHttpRequest
  * @return {!ResponseImpl}
  * @public
  */
 static $create__elemental2_dom_XMLHttpRequest(xmlHttpRequest) {
  ResponseImpl.$clinit();
  let $instance = new ResponseImpl();
  $instance.$ctor__org_gwtproject_http_client_ResponseImpl__elemental2_dom_XMLHttpRequest(xmlHttpRequest);
  return $instance;
 }
 /**
  * @param {XMLHttpRequest} xmlHttpRequest
  * @public
  */
 $ctor__org_gwtproject_http_client_ResponseImpl__elemental2_dom_XMLHttpRequest(xmlHttpRequest) {
  this.$ctor__org_gwtproject_http_client_Response__();
  this.f_xmlHttpRequest__org_gwtproject_http_client_ResponseImpl_ = xmlHttpRequest;
  $Asserts.$assert(this.m_isResponseReady__());
 }
 /**
  * @override
  * @param {?string} header
  * @return {?string}
  * @public
  */
 m_getHeader__java_lang_String(header) {
  StringValidator.m_throwIfEmptyOrNull__java_lang_String__java_lang_String("header", header);
  return this.f_xmlHttpRequest__org_gwtproject_http_client_ResponseImpl_.getResponseHeader(header);
 }
 /**
  * @override
  * @return {Array<Header>}
  * @public
  */
 m_getHeaders__() {
  let allHeaders = this.m_getHeadersAsString__();
  let unparsedHeaders = j_l_String.m_split__java_lang_String__java_lang_String(allHeaders, "\n");
  let parsedHeaders = /**@type {!ArrayList<Header>} */ (ArrayList.$create__());
  for (let $array = unparsedHeaders, $index = 0; $index < $array.length; $index++) {
   let unparsedHeader = $array[$index];
   if ($Equality.$same(unparsedHeader, null) || j_l_String.m_isEmpty__java_lang_String(j_l_String.m_trim__java_lang_String(unparsedHeader))) {
    continue;
   }
   let endOfNameIdx = j_l_String.m_indexOf__java_lang_String__int(unparsedHeader, 58 /* ':' */);
   if (endOfNameIdx < 0) {
    continue;
   }
   let name = j_l_String.m_trim__java_lang_String(j_l_String.m_substring__java_lang_String__int__int(unparsedHeader, 0, endOfNameIdx));
   let value = j_l_String.m_trim__java_lang_String(j_l_String.m_substring__java_lang_String__int(unparsedHeader, endOfNameIdx + 1));
   let header = $1.$create__org_gwtproject_http_client_ResponseImpl__java_lang_String__java_lang_String(this, name, value);
   parsedHeaders.add(header);
  }
  return /**@type {Array<Header>} */ ($Arrays.$castTo(parsedHeaders.m_toArray__arrayOf_java_lang_Object(/**@type {!Array<Header>} */ ($Arrays.$create([parsedHeaders.size()], Header))), Header, 1));
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getHeadersAsString__() {
  let headers = this.f_xmlHttpRequest__org_gwtproject_http_client_ResponseImpl_.getAllResponseHeaders();
  return !$Equality.$same(headers, null) ? headers : "";
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getStatusCode__() {
  return this.f_xmlHttpRequest__org_gwtproject_http_client_ResponseImpl_.status;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getStatusText__() {
  return this.f_xmlHttpRequest__org_gwtproject_http_client_ResponseImpl_.statusText;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getText__() {
  return this.f_xmlHttpRequest__org_gwtproject_http_client_ResponseImpl_.responseText;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isResponseReady__() {
  return this.f_xmlHttpRequest__org_gwtproject_http_client_ResponseImpl_.readyState == XMLHttpRequest.DONE;
 }
 /**
  * @public
  */
 static $clinit() {
  ResponseImpl.$clinit = () =>{};
  ResponseImpl.$loadModules();
  Response.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ResponseImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Header = goog.module.get('org.gwtproject.http.client.Header$impl');
  $1 = goog.module.get('org.gwtproject.http.client.ResponseImpl.$1$impl');
  StringValidator = goog.module.get('org.gwtproject.http.client.StringValidator$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
 }
 
}
$Util.$setClassMetadata(ResponseImpl, 'org.gwtproject.http.client.ResponseImpl');

exports = ResponseImpl; 
//# sourceMappingURL=ResponseImpl.js.map