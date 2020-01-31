goog.module('org.gwtproject.resources.ext.DefaultExtensions$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class DefaultExtensions {
 /** @abstract @return {Array<?string>} */
 m_value__() {}
 
 static $clinit() {
  DefaultExtensions.$clinit = () =>{};
  DefaultExtensions.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_resources_ext_DefaultExtensions = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_ext_DefaultExtensions;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DefaultExtensions, 'org.gwtproject.resources.ext.DefaultExtensions');

DefaultExtensions.$markImplementor(/** @type {Function} */ (DefaultExtensions));

exports = DefaultExtensions; 
//# sourceMappingURL=DefaultExtensions.js.map