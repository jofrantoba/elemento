goog.module('org.gwtproject.http.client.RequestBuilder.Method$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class Method extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_name__org_gwtproject_http_client_RequestBuilder_Method_;
 }
 /** @return {!Method} */
 static $create__java_lang_String(/** ?string */ name) {
  Method.$clinit();
  let $instance = new Method();
  $instance.$ctor__org_gwtproject_http_client_RequestBuilder_Method__java_lang_String(name);
  return $instance;
 }
 
 $ctor__org_gwtproject_http_client_RequestBuilder_Method__java_lang_String(/** ?string */ name) {
  this.$ctor__java_lang_Object__();
  this.f_name__org_gwtproject_http_client_RequestBuilder_Method_ = name;
 }
 /** @override @return {?string} */
 toString() {
  return this.f_name__org_gwtproject_http_client_RequestBuilder_Method_;
 }
 
 static $clinit() {
  Method.$clinit = () =>{};
  Method.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Method;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(Method, 'org.gwtproject.http.client.RequestBuilder$Method');

exports = Method; 
//# sourceMappingURL=RequestBuilder$Method.js.map