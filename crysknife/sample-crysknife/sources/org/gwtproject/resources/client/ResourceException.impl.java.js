goog.module('org.gwtproject.resources.client.ResourceException$impl');

const Exception = goog.require('java.lang.Exception$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let ResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype$impl');

class ResourceException extends Exception {
 /** @protected */
 constructor() {
  super();
  /**@type {ResourcePrototype}*/
  this.f_resource__org_gwtproject_resources_client_ResourceException_;
 }
 //Factory method corresponding to constructor 'ResourceException(ResourcePrototype)'.
 /** @return {!ResourceException} */
 static $create__org_gwtproject_resources_client_ResourcePrototype(/** ResourcePrototype */ resource) {
  ResourceException.$clinit();
  let $instance = new ResourceException();
  $instance.$ctor__org_gwtproject_resources_client_ResourceException__org_gwtproject_resources_client_ResourcePrototype(resource);
  $instance.m_privateInitError__java_lang_Object_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'ResourceException(ResourcePrototype)'.
 
 $ctor__org_gwtproject_resources_client_ResourceException__org_gwtproject_resources_client_ResourcePrototype(/** ResourcePrototype */ resource) {
  this.$ctor__java_lang_Exception__();
  this.f_resource__org_gwtproject_resources_client_ResourceException_ = resource;
 }
 //Factory method corresponding to constructor 'ResourceException(ResourcePrototype, String)'.
 /** @return {!ResourceException} */
 static $create__org_gwtproject_resources_client_ResourcePrototype__java_lang_String(/** ResourcePrototype */ resource, /** ?string */ msg) {
  ResourceException.$clinit();
  let $instance = new ResourceException();
  $instance.$ctor__org_gwtproject_resources_client_ResourceException__org_gwtproject_resources_client_ResourcePrototype__java_lang_String(resource, msg);
  $instance.m_privateInitError__java_lang_Object_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'ResourceException(ResourcePrototype, String)'.
 
 $ctor__org_gwtproject_resources_client_ResourceException__org_gwtproject_resources_client_ResourcePrototype__java_lang_String(/** ResourcePrototype */ resource, /** ?string */ msg) {
  this.$ctor__java_lang_Exception__java_lang_String(msg);
  this.f_resource__org_gwtproject_resources_client_ResourceException_ = resource;
 }
 //Factory method corresponding to constructor 'ResourceException(ResourcePrototype, String, Throwable)'.
 /** @return {!ResourceException} */
 static $create__org_gwtproject_resources_client_ResourcePrototype__java_lang_String__java_lang_Throwable(/** ResourcePrototype */ resource, /** ?string */ msg, /** Throwable */ t) {
  ResourceException.$clinit();
  let $instance = new ResourceException();
  $instance.$ctor__org_gwtproject_resources_client_ResourceException__org_gwtproject_resources_client_ResourcePrototype__java_lang_String__java_lang_Throwable(resource, msg, t);
  $instance.m_privateInitError__java_lang_Object_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'ResourceException(ResourcePrototype, String, Throwable)'.
 
 $ctor__org_gwtproject_resources_client_ResourceException__org_gwtproject_resources_client_ResourcePrototype__java_lang_String__java_lang_Throwable(/** ResourcePrototype */ resource, /** ?string */ msg, /** Throwable */ t) {
  this.$ctor__java_lang_Exception__java_lang_String__java_lang_Throwable(msg, t);
  this.f_resource__org_gwtproject_resources_client_ResourceException_ = resource;
 }
 /** @return {ResourcePrototype} */
 m_getResource__() {
  return this.f_resource__org_gwtproject_resources_client_ResourceException_;
 }
 
 static $clinit() {
  ResourceException.$clinit = () =>{};
  ResourceException.$loadModules();
  Exception.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ResourceException;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(ResourceException, 'org.gwtproject.resources.client.ResourceException');

exports = ResourceException; 
//# sourceMappingURL=ResourceException.js.map