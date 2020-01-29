goog.module('org.gwtproject.user.client.ui.HasHTML$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasText = goog.require('org.gwtproject.user.client.ui.HasText$impl');

/**
 * @interface
 * @extends {HasText}
 */
class HasHTML {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getHTML__() {}
 /**
  * @abstract
  * @param {?string} html
  * @public
  */
 m_setHTML__java_lang_String(html) {}
 /**
  * @public
  */
 static $clinit() {
  HasHTML.$clinit = () =>{};
  HasHTML.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasText.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_HasHTML = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasHTML;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasHTML, 'org.gwtproject.user.client.ui.HasHTML');

HasHTML.$markImplementor(/** @type {Function} */ (HasHTML));

exports = HasHTML; 
//# sourceMappingURL=HasHTML.js.map