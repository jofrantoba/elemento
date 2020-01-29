goog.module('org.gwtproject.user.client.ui.HasWordWrap$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class HasWordWrap {
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_getWordWrap__() {}
 /**
  * @abstract
  * @param {boolean} wrap
  * @public
  */
 m_setWordWrap__boolean(wrap) {}
 /**
  * @public
  */
 static $clinit() {
  HasWordWrap.$clinit = () =>{};
  HasWordWrap.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_HasWordWrap = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasWordWrap;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasWordWrap, 'org.gwtproject.user.client.ui.HasWordWrap');

HasWordWrap.$markImplementor(/** @type {Function} */ (HasWordWrap));

exports = HasWordWrap; 
//# sourceMappingURL=HasWordWrap.js.map