goog.module('org.gwtproject.resources.client.ClientBundle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class ClientBundle {
 /**
  * @public
  */
 static $clinit() {
  ClientBundle.$clinit = () =>{};
  ClientBundle.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_resources_client_ClientBundle = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_ClientBundle;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ClientBundle, 'org.gwtproject.resources.client.ClientBundle');

ClientBundle.$markImplementor(/** @type {Function} */ (ClientBundle));

exports = ClientBundle; 
//# sourceMappingURL=ClientBundle.js.map