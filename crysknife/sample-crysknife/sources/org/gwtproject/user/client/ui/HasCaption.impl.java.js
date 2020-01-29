goog.module('org.gwtproject.user.client.ui.HasCaption$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class HasCaption {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getCaption__() {}
 /**
  * @abstract
  * @param {?string} caption
  * @public
  */
 m_setCaption__java_lang_String(caption) {}
 /**
  * @public
  */
 static $clinit() {
  HasCaption.$clinit = () =>{};
  HasCaption.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_HasCaption = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasCaption;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasCaption, 'org.gwtproject.user.client.ui.HasCaption');

HasCaption.$markImplementor(/** @type {Function} */ (HasCaption));

exports = HasCaption; 
//# sourceMappingURL=HasCaption.js.map