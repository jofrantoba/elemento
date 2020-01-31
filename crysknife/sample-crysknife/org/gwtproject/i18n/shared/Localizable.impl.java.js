goog.module('org.gwtproject.i18n.shared.Localizable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class Localizable {
 
 static $clinit() {
  Localizable.$clinit = () =>{};
  Localizable.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_i18n_shared_Localizable = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_shared_Localizable;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Localizable, 'org.gwtproject.i18n.shared.Localizable');

Localizable.$markImplementor(/** @type {Function} */ (Localizable));

exports = Localizable; 
//# sourceMappingURL=Localizable.js.map