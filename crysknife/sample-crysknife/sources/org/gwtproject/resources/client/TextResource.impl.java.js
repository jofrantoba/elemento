goog.module('org.gwtproject.resources.client.TextResource$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ResourcePrototype = goog.require('org.gwtproject.resources.client.ResourcePrototype$impl');

/**
 * @interface
 * @extends {ResourcePrototype}
 */
class TextResource {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getText__() {}
 /**
  * @public
  */
 static $clinit() {
  TextResource.$clinit = () =>{};
  TextResource.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_resources_client_TextResource = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_TextResource;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TextResource, 'org.gwtproject.resources.client.TextResource');

TextResource.$markImplementor(/** @type {Function} */ (TextResource));

exports = TextResource; 
//# sourceMappingURL=TextResource.js.map