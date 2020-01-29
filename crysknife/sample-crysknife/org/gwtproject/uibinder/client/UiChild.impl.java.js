goog.module('org.gwtproject.uibinder.client.UiChild$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class UiChild {
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_limit__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_tagname__() {}
 /**
  * @public
  */
 static $clinit() {
  UiChild.$clinit = () =>{};
  UiChild.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_uibinder_client_UiChild = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_uibinder_client_UiChild;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(UiChild, 'org.gwtproject.uibinder.client.UiChild');

UiChild.$markImplementor(/** @type {Function} */ (UiChild));

exports = UiChild; 
//# sourceMappingURL=UiChild.js.map