goog.module('javax.validation.groups.Default$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class Default {
 
 static $clinit() {
  Default.$clinit = () =>{};
  Default.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__javax_validation_groups_Default = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__javax_validation_groups_Default;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Default, 'javax.validation.groups.Default');

Default.$markImplementor(/** @type {Function} */ (Default));

exports = Default; 
//# sourceMappingURL=Default.js.map