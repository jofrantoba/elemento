goog.module('org.gwtproject.user.client.ui.AnimatedLayout$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let AnimationCallback = goog.forwardDeclare('org.gwtproject.layout.client.Layout.AnimationCallback$impl');

/**
 * @interface
 */
class AnimatedLayout {
 /**
  * @abstract
  * @param {number} duration
  * @public
  */
 m_animate__int(duration) {}
 /**
  * @abstract
  * @param {number} duration
  * @param {AnimationCallback} callback
  * @public
  */
 m_animate__int__org_gwtproject_layout_client_Layout_AnimationCallback(duration, callback) {}
 /**
  * @abstract
  * @public
  */
 m_forceLayout__() {}
 /**
  * @public
  */
 static $clinit() {
  AnimatedLayout.$clinit = () =>{};
  AnimatedLayout.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_AnimatedLayout = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_AnimatedLayout;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(AnimatedLayout, 'org.gwtproject.user.client.ui.AnimatedLayout');

AnimatedLayout.$markImplementor(/** @type {Function} */ (AnimatedLayout));

exports = AnimatedLayout; 
//# sourceMappingURL=AnimatedLayout.js.map