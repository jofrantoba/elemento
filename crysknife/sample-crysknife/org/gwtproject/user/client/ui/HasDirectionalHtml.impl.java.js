goog.module('org.gwtproject.user.client.ui.HasDirectionalHtml$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasDirectionalText = goog.require('org.gwtproject.user.client.ui.HasDirectionalText$impl');
const HasHTML = goog.require('org.gwtproject.user.client.ui.HasHTML$impl');

let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');

/**
 * @interface
 * @extends {HasDirectionalText}
 * @extends {HasHTML}
 */
class HasDirectionalHtml {
 /**
  * @abstract
  * @param {?string} html
  * @param {Direction} dir
  * @public
  */
 m_setHTML__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(html, dir) {}
 /**
  * @public
  */
 static $clinit() {
  HasDirectionalHtml.$clinit = () =>{};
  HasDirectionalHtml.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasDirectionalText.$markImplementor(classConstructor);
  HasHTML.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_HasDirectionalHtml = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasDirectionalHtml;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasDirectionalHtml, 'org.gwtproject.user.client.ui.HasDirectionalHtml');

HasDirectionalHtml.$markImplementor(/** @type {Function} */ (HasDirectionalHtml));

exports = HasDirectionalHtml; 
//# sourceMappingURL=HasDirectionalHtml.js.map