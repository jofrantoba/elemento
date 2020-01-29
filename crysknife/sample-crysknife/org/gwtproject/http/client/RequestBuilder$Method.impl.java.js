goog.module('org.gwtproject.http.client.RequestBuilder.Method$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class Method extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_name__org_gwtproject_http_client_RequestBuilder_Method_;
 }
 /**
  * @param {?string} name
  * @return {!Method}
  * @public
  */
 static $create__java_lang_String(name) {
  Method.$clinit();
  let $instance = new Method();
  $instance.$ctor__org_gwtproject_http_client_RequestBuilder_Method__java_lang_String(name);
  return $instance;
 }
 /**
  * @param {?string} name
  * @public
  */
 $ctor__org_gwtproject_http_client_RequestBuilder_Method__java_lang_String(name) {
  this.$ctor__java_lang_Object__();
  this.f_name__org_gwtproject_http_client_RequestBuilder_Method_ = name;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 toString() {
  return this.f_name__org_gwtproject_http_client_RequestBuilder_Method_;
 }
 /**
  * @public
  */
 static $clinit() {
  Method.$clinit = () =>{};
  Method.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Method;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(Method, 'org.gwtproject.http.client.RequestBuilder$Method');

exports = Method; 
//# sourceMappingURL=RequestBuilder$Method.js.map