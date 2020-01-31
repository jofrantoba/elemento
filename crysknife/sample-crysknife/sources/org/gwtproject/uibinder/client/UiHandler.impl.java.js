goog.module('org.gwtproject.uibinder.client.UiHandler$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class UiHandler {
 /** @abstract @return {Array<?string>} */
 m_value__() {}
 
 static $clinit() {
  UiHandler.$clinit = () =>{};
  UiHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_uibinder_client_UiHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_uibinder_client_UiHandler;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(UiHandler, 'org.gwtproject.uibinder.client.UiHandler');

UiHandler.$markImplementor(/** @type {Function} */ (UiHandler));

exports = UiHandler; 
//# sourceMappingURL=UiHandler.js.map