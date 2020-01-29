goog.module('javax.validation.groups.Default$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class Default {
 /**
  * @public
  */
 static $clinit() {
  Default.$clinit = () =>{};
  Default.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__javax_validation_groups_Default = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__javax_validation_groups_Default;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Default, 'javax.validation.groups.Default');

Default.$markImplementor(/** @type {Function} */ (Default));

exports = Default; 
//# sourceMappingURL=Default.js.map