goog.module('org.gwtproject.resources.ext.DefaultExtensions$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class DefaultExtensions {
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
  DefaultExtensions.$clinit = () =>{};
  DefaultExtensions.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_resources_ext_DefaultExtensions = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_ext_DefaultExtensions;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DefaultExtensions, 'org.gwtproject.resources.ext.DefaultExtensions');

DefaultExtensions.$markImplementor(/** @type {Function} */ (DefaultExtensions));

exports = DefaultExtensions; 
//# sourceMappingURL=DefaultExtensions.js.map