goog.module('org.gwtproject.resources.client.CssResource$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssResourceBase = goog.require('org.gwtproject.resources.client.CssResourceBase$impl');

/**
 * @interface
 * @extends {CssResourceBase}
 */
class CssResource {
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_ensureInjected__() {}
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
  CssResource.$clinit = () =>{};
  CssResource.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  CssResourceBase.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_resources_client_CssResource = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_CssResource;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(CssResource, 'org.gwtproject.resources.client.CssResource');

CssResource.$markImplementor(/** @type {Function} */ (CssResource));

exports = CssResource; 
//# sourceMappingURL=CssResource.js.map