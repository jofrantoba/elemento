goog.module('org.gwtproject.i18n.shared.Localizable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class Localizable {
 /**
  * @public
  */
 static $clinit() {
  Localizable.$clinit = () =>{};
  Localizable.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_shared_Localizable = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_shared_Localizable;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Localizable, 'org.gwtproject.i18n.shared.Localizable');

Localizable.$markImplementor(/** @type {Function} */ (Localizable));

exports = Localizable; 
//# sourceMappingURL=Localizable.js.map