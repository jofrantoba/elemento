goog.module('org.gwtproject.resources.client.CssResource$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssResourceBase = goog.require('org.gwtproject.resources.client.CssResourceBase$impl');

/**
 * @interface
 * @extends {CssResourceBase}
 */
class CssResource {
 /** @abstract @return {boolean} */
 m_ensureInjected__() {}
 /** @abstract @return {?string} */
 m_getText__() {}
 
 static $clinit() {
  CssResource.$clinit = () =>{};
  CssResource.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  CssResourceBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_resources_client_CssResource = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_CssResource;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(CssResource, 'org.gwtproject.resources.client.CssResource');

CssResource.$markImplementor(/** @type {Function} */ (CssResource));

exports = CssResource; 
//# sourceMappingURL=CssResource.js.map