goog.module('org.gwtproject.user.client.ui.HasAlignment$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHorizontalAlignment = goog.require('org.gwtproject.user.client.ui.HasHorizontalAlignment$impl');
const HasVerticalAlignment = goog.require('org.gwtproject.user.client.ui.HasVerticalAlignment$impl');

/**
 * @interface
 * @extends {HasHorizontalAlignment}
 * @extends {HasVerticalAlignment}
 */
class HasAlignment {
 /**
  * @public
  */
 static $clinit() {
  HasAlignment.$clinit = () =>{};
  HasAlignment.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasHorizontalAlignment.$markImplementor(classConstructor);
  HasVerticalAlignment.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_HasAlignment = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasAlignment;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasAlignment, 'org.gwtproject.user.client.ui.HasAlignment');

HasAlignment.$markImplementor(/** @type {Function} */ (HasAlignment));

exports = HasAlignment; 
//# sourceMappingURL=HasAlignment.js.map