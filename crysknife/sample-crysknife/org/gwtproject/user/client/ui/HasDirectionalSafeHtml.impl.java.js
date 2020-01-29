goog.module('org.gwtproject.user.client.ui.HasDirectionalSafeHtml$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasSafeHtml = goog.require('org.gwtproject.safehtml.client.HasSafeHtml$impl');
const HasDirectionalText = goog.require('org.gwtproject.user.client.ui.HasDirectionalText$impl');

let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @interface
 * @extends {HasDirectionalText}
 * @extends {HasSafeHtml}
 */
class HasDirectionalSafeHtml {
 /**
  * @abstract
  * @param {SafeHtml} html
  * @param {Direction} dir
  * @public
  */
 m_setHTML__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(html, dir) {}
 /**
  * @public
  */
 static $clinit() {
  HasDirectionalSafeHtml.$clinit = () =>{};
  HasDirectionalSafeHtml.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasDirectionalText.$markImplementor(classConstructor);
  HasSafeHtml.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_HasDirectionalSafeHtml = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasDirectionalSafeHtml;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasDirectionalSafeHtml, 'org.gwtproject.user.client.ui.HasDirectionalSafeHtml');

HasDirectionalSafeHtml.$markImplementor(/** @type {Function} */ (HasDirectionalSafeHtml));

exports = HasDirectionalSafeHtml; 
//# sourceMappingURL=HasDirectionalSafeHtml.js.map