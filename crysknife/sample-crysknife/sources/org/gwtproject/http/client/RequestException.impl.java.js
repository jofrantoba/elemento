goog.module('org.gwtproject.http.client.RequestException$impl');

const Exception = goog.require('java.lang.Exception$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');

class RequestException extends Exception {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * Factory method corresponding to constructor 'RequestException()'.
  * @return {!RequestException}
  * @public
  */
 static $create__() {
  RequestException.$clinit();
  let $instance = new RequestException();
  $instance.$ctor__org_gwtproject_http_client_RequestException__();
  $instance.m_privateInitError__java_lang_Object_$pp_java_lang(new Error($instance));
  return $instance;
 }
 /**
  * Initialization from constructor 'RequestException()'.
  * @public
  */
 $ctor__org_gwtproject_http_client_RequestException__() {
  this.$ctor__java_lang_Exception__();
 }
 /**
  * Factory method corresponding to constructor 'RequestException(String)'.
  * @param {?string} message
  * @return {!RequestException}
  * @public
  */
 static $create__java_lang_String(message) {
  RequestException.$clinit();
  let $instance = new RequestException();
  $instance.$ctor__org_gwtproject_http_client_RequestException__java_lang_String(message);
  $instance.m_privateInitError__java_lang_Object_$pp_java_lang(new Error($instance));
  return $instance;
 }
 /**
  * Initialization from constructor 'RequestException(String)'.
  * @param {?string} message
  * @public
  */
 $ctor__org_gwtproject_http_client_RequestException__java_lang_String(message) {
  this.$ctor__java_lang_Exception__java_lang_String(message);
 }
 /**
  * Factory method corresponding to constructor 'RequestException(Throwable)'.
  * @param {Throwable} cause
  * @return {!RequestException}
  * @public
  */
 static $create__java_lang_Throwable(cause) {
  RequestException.$clinit();
  let $instance = new RequestException();
  $instance.$ctor__org_gwtproject_http_client_RequestException__java_lang_Throwable(cause);
  $instance.m_privateInitError__java_lang_Object_$pp_java_lang(new Error($instance));
  return $instance;
 }
 /**
  * Initialization from constructor 'RequestException(Throwable)'.
  * @param {Throwable} cause
  * @public
  */
 $ctor__org_gwtproject_http_client_RequestException__java_lang_Throwable(cause) {
  this.$ctor__java_lang_Exception__java_lang_Throwable(cause);
 }
 /**
  * Factory method corresponding to constructor 'RequestException(String, Throwable)'.
  * @param {?string} message
  * @param {Throwable} cause
  * @return {!RequestException}
  * @public
  */
 static $create__java_lang_String__java_lang_Throwable(message, cause) {
  RequestException.$clinit();
  let $instance = new RequestException();
  $instance.$ctor__org_gwtproject_http_client_RequestException__java_lang_String__java_lang_Throwable(message, cause);
  $instance.m_privateInitError__java_lang_Object_$pp_java_lang(new Error($instance));
  return $instance;
 }
 /**
  * Initialization from constructor 'RequestException(String, Throwable)'.
  * @param {?string} message
  * @param {Throwable} cause
  * @public
  */
 $ctor__org_gwtproject_http_client_RequestException__java_lang_String__java_lang_Throwable(message, cause) {
  this.$ctor__java_lang_Exception__java_lang_String__java_lang_Throwable(message, cause);
 }
 /**
  * @public
  */
 static $clinit() {
  RequestException.$clinit = () =>{};
  RequestException.$loadModules();
  Exception.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof RequestException;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(RequestException, 'org.gwtproject.http.client.RequestException');

exports = RequestException; 
//# sourceMappingURL=RequestException.js.map