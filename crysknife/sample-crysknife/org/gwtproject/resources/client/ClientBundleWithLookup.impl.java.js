goog.module('org.gwtproject.resources.client.ClientBundleWithLookup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ClientBundle = goog.require('org.gwtproject.resources.client.ClientBundle$impl');

let ResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype$impl');

/**
 * @interface
 * @extends {ClientBundle}
 */
class ClientBundleWithLookup {
 /** @abstract @return {ResourcePrototype} */
 m_getResource__java_lang_String(/** ?string */ name) {}
 /** @abstract @return {Array<ResourcePrototype>} */
 m_getResources__() {}
 
 static $clinit() {
  ClientBundleWithLookup.$clinit = () =>{};
  ClientBundleWithLookup.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ClientBundle.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_resources_client_ClientBundleWithLookup = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_ClientBundleWithLookup;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ClientBundleWithLookup, 'org.gwtproject.resources.client.ClientBundleWithLookup');

ClientBundleWithLookup.$markImplementor(/** @type {Function} */ (ClientBundleWithLookup));

exports = ClientBundleWithLookup; 
//# sourceMappingURL=ClientBundleWithLookup.js.map