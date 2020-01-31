goog.module('org.gwtproject.http.client.ResponseImpl.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Header = goog.require('org.gwtproject.http.client.Header$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ResponseImpl = goog.forwardDeclare('org.gwtproject.http.client.ResponseImpl$impl');

class $1 extends Header {
 /** @protected */
 constructor() {
  super();
  /**@type {ResponseImpl}*/
  this.f_$outer_this__org_gwtproject_http_client_ResponseImpl_1;
  /**@type {?string}*/
  this.$c_name;
  /**@type {?string}*/
  this.$c_value;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_http_client_ResponseImpl__java_lang_String__java_lang_String(/** ResponseImpl */ $outer_this, /** ?string */ $c_name, /** ?string */ $c_value) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_http_client_ResponseImpl_1__org_gwtproject_http_client_ResponseImpl__java_lang_String__java_lang_String($outer_this, $c_name, $c_value);
  return $instance;
 }
 
 $ctor__org_gwtproject_http_client_ResponseImpl_1__org_gwtproject_http_client_ResponseImpl__java_lang_String__java_lang_String(/** ResponseImpl */ $outer_this, /** ?string */ $c_name, /** ?string */ $c_value) {
  this.f_$outer_this__org_gwtproject_http_client_ResponseImpl_1 = $outer_this;
  this.$c_name = $c_name;
  this.$c_value = $c_value;
  this.$ctor__org_gwtproject_http_client_Header__();
 }
 /** @override @return {?string} */
 m_getName__() {
  return this.$c_name;
 }
 /** @override @return {?string} */
 m_getValue__() {
  return this.$c_value;
 }
 /** @override @return {?string} */
 toString() {
  return j_l_String.m_valueOf__java_lang_Object(this.$c_name) + " : " + j_l_String.m_valueOf__java_lang_Object(this.$c_value);
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  Header.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.http.client.ResponseImpl$1');

exports = $1; 
//# sourceMappingURL=ResponseImpl$1.js.map