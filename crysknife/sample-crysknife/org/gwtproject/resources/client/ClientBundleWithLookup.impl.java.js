goog.module('org.gwtproject.resources.client.ClientBundleWithLookup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ClientBundle = goog.require('org.gwtproject.resources.client.ClientBundle$impl');

let ResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype$impl');

/**
 * @interface
 * @extends {ClientBundle}
 */
class ClientBundleWithLookup {
 /**
  * @abstract
  * @param {?string} name
  * @return {ResourcePrototype}
  * @public
  */
 m_getResource__java_lang_String(name) {}
 /**
  * @abstract
  * @return {Array<ResourcePrototype>}
  * @public
  */
 m_getResources__() {}
 /**
  * @public
  */
 static $clinit() {
  ClientBundleWithLookup.$clinit = () =>{};
  ClientBundleWithLookup.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  ClientBundle.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_resources_client_ClientBundleWithLookup = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_ClientBundleWithLookup;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ClientBundleWithLookup, 'org.gwtproject.resources.client.ClientBundleWithLookup');

ClientBundleWithLookup.$markImplementor(/** @type {Function} */ (ClientBundleWithLookup));

exports = ClientBundleWithLookup; 
//# sourceMappingURL=ClientBundleWithLookup.js.map