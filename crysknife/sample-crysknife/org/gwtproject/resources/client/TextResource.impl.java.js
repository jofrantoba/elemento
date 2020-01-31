goog.module('org.gwtproject.resources.client.TextResource$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ResourcePrototype = goog.require('org.gwtproject.resources.client.ResourcePrototype$impl');

/**
 * @interface
 * @extends {ResourcePrototype}
 */
class TextResource {
 /** @abstract @return {?string} */
 m_getText__() {}
 
 static $clinit() {
  TextResource.$clinit = () =>{};
  TextResource.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ResourcePrototype.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_resources_client_TextResource = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_TextResource;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TextResource, 'org.gwtproject.resources.client.TextResource');

TextResource.$markImplementor(/** @type {Function} */ (TextResource));

exports = TextResource; 
//# sourceMappingURL=TextResource.js.map