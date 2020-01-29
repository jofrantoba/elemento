goog.module('org.gwtproject.resources.client.ExternalTextResource$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ResourcePrototype = goog.require('org.gwtproject.resources.client.ResourcePrototype$impl');

let ResourceCallback = goog.forwardDeclare('org.gwtproject.resources.client.ResourceCallback$impl');
let TextResource = goog.forwardDeclare('org.gwtproject.resources.client.TextResource$impl');

/**
 * @interface
 * @extends {ResourcePrototype}
 */
class ExternalTextResource {
 /**
  * @abstract
  * @param {ResourceCallback<TextResource>} callback
  * @public
  */
 m_getText__org_gwtproject_resources_client_ResourceCallback(callback) {}
 /**
  * @public
  */
 static $clinit() {
  ExternalTextResource.$clinit = () =>{};
  ExternalTextResource.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  ResourcePrototype.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_resources_client_ExternalTextResource = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_ExternalTextResource;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ExternalTextResource, 'org.gwtproject.resources.client.ExternalTextResource');

ExternalTextResource.$markImplementor(/** @type {Function} */ (ExternalTextResource));

exports = ExternalTextResource; 
//# sourceMappingURL=ExternalTextResource.js.map