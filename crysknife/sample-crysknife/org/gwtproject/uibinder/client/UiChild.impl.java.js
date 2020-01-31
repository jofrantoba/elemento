goog.module('org.gwtproject.uibinder.client.UiChild$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class UiChild {
 /** @abstract @return {number} */
 m_limit__() {}
 /** @abstract @return {?string} */
 m_tagname__() {}
 
 static $clinit() {
  UiChild.$clinit = () =>{};
  UiChild.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_uibinder_client_UiChild = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_uibinder_client_UiChild;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(UiChild, 'org.gwtproject.uibinder.client.UiChild');

UiChild.$markImplementor(/** @type {Function} */ (UiChild));

exports = UiChild; 
//# sourceMappingURL=UiChild.js.map