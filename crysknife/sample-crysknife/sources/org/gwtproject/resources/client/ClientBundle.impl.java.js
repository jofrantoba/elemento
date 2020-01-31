goog.module('org.gwtproject.resources.client.ClientBundle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class ClientBundle {
 
 static $clinit() {
  ClientBundle.$clinit = () =>{};
  ClientBundle.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_resources_client_ClientBundle = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_ClientBundle;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ClientBundle, 'org.gwtproject.resources.client.ClientBundle');

ClientBundle.$markImplementor(/** @type {Function} */ (ClientBundle));

exports = ClientBundle; 
//# sourceMappingURL=ClientBundle.js.map