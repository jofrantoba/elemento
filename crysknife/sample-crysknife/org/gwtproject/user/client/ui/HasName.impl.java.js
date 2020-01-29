goog.module('org.gwtproject.user.client.ui.HasName$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class HasName {
 /**
  * @abstract
  * @param {?string} name
  * @public
  */
 m_setName__java_lang_String(name) {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getName__() {}
 /**
  * @public
  */
 static $clinit() {
  HasName.$clinit = () =>{};
  HasName.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_HasName = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasName;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasName, 'org.gwtproject.user.client.ui.HasName');

HasName.$markImplementor(/** @type {Function} */ (HasName));

exports = HasName; 
//# sourceMappingURL=HasName.js.map