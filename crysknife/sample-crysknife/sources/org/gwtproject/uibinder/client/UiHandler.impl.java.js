goog.module('org.gwtproject.uibinder.client.UiHandler$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class UiHandler {
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_value__() {}
 /**
  * @public
  */
 static $clinit() {
  UiHandler.$clinit = () =>{};
  UiHandler.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Annotation.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_uibinder_client_UiHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_uibinder_client_UiHandler;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(UiHandler, 'org.gwtproject.uibinder.client.UiHandler');

UiHandler.$markImplementor(/** @type {Function} */ (UiHandler));

exports = UiHandler; 
//# sourceMappingURL=UiHandler.js.map