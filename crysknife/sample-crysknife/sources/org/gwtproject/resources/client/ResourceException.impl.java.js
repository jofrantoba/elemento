goog.module('org.gwtproject.resources.client.ResourceException$impl');

const Exception = goog.require('java.lang.Exception$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let ResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype$impl');

class ResourceException extends Exception {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {ResourcePrototype} */
  this.f_resource__org_gwtproject_resources_client_ResourceException_;
 }
 /**
  * Factory method corresponding to constructor 'ResourceException(ResourcePrototype)'.
  * @param {ResourcePrototype} resource
  * @return {!ResourceException}
  * @public
  */
 static $create__org_gwtproject_resources_client_ResourcePrototype(resource) {
  ResourceException.$clinit();
  let $instance = new ResourceException();
  $instance.$ctor__org_gwtproject_resources_client_ResourceException__org_gwtproject_resources_client_ResourcePrototype(resource);
  $instance.m_privateInitError__java_lang_Object_$pp_java_lang(new Error($instance));
  return $instance;
 }
 /**
  * Initialization from constructor 'ResourceException(ResourcePrototype)'.
  * @param {ResourcePrototype} resource
  * @public
  */
 $ctor__org_gwtproject_resources_client_ResourceException__org_gwtproject_resources_client_ResourcePrototype(resource) {
  this.$ctor__java_lang_Exception__();
  this.f_resource__org_gwtproject_resources_client_ResourceException_ = resource;
 }
 /**
  * Factory method corresponding to constructor 'ResourceException(ResourcePrototype, String)'.
  * @param {ResourcePrototype} resource
  * @param {?string} msg
  * @return {!ResourceException}
  * @public
  */
 static $create__org_gwtproject_resources_client_ResourcePrototype__java_lang_String(resource, msg) {
  ResourceException.$clinit();
  let $instance = new ResourceException();
  $instance.$ctor__org_gwtproject_resources_client_ResourceException__org_gwtproject_resources_client_ResourcePrototype__java_lang_String(resource, msg);
  $instance.m_privateInitError__java_lang_Object_$pp_java_lang(new Error($instance));
  return $instance;
 }
 /**
  * Initialization from constructor 'ResourceException(ResourcePrototype, String)'.
  * @param {ResourcePrototype} resource
  * @param {?string} msg
  * @public
  */
 $ctor__org_gwtproject_resources_client_ResourceException__org_gwtproject_resources_client_ResourcePrototype__java_lang_String(resource, msg) {
  this.$ctor__java_lang_Exception__java_lang_String(msg);
  this.f_resource__org_gwtproject_resources_client_ResourceException_ = resource;
 }
 /**
  * Factory method corresponding to constructor 'ResourceException(ResourcePrototype, String, Throwable)'.
  * @param {ResourcePrototype} resource
  * @param {?string} msg
  * @param {Throwable} t
  * @return {!ResourceException}
  * @public
  */
 static $create__org_gwtproject_resources_client_ResourcePrototype__java_lang_String__java_lang_Throwable(resource, msg, t) {
  ResourceException.$clinit();
  let $instance = new ResourceException();
  $instance.$ctor__org_gwtproject_resources_client_ResourceException__org_gwtproject_resources_client_ResourcePrototype__java_lang_String__java_lang_Throwable(resource, msg, t);
  $instance.m_privateInitError__java_lang_Object_$pp_java_lang(new Error($instance));
  return $instance;
 }
 /**
  * Initialization from constructor 'ResourceException(ResourcePrototype, String, Throwable)'.
  * @param {ResourcePrototype} resource
  * @param {?string} msg
  * @param {Throwable} t
  * @public
  */
 $ctor__org_gwtproject_resources_client_ResourceException__org_gwtproject_resources_client_ResourcePrototype__java_lang_String__java_lang_Throwable(resource, msg, t) {
  this.$ctor__java_lang_Exception__java_lang_String__java_lang_Throwable(msg, t);
  this.f_resource__org_gwtproject_resources_client_ResourceException_ = resource;
 }
 /**
  * @return {ResourcePrototype}
  * @public
  */
 m_getResource__() {
  return this.f_resource__org_gwtproject_resources_client_ResourceException_;
 }
 /**
  * @public
  */
 static $clinit() {
  ResourceException.$clinit = () =>{};
  ResourceException.$loadModules();
  Exception.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ResourceException;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(ResourceException, 'org.gwtproject.resources.client.ResourceException');

exports = ResourceException; 
//# sourceMappingURL=ResourceException.js.map