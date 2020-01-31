goog.module('org.gwtproject.user.client.ui.AnimatedLayout$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let AnimationCallback = goog.forwardDeclare('org.gwtproject.layout.client.Layout.AnimationCallback$impl');

/**
 * @interface
 */
class AnimatedLayout {
 /** @abstract */
 m_animate__int(/** number */ duration) {}
 /** @abstract */
 m_animate__int__org_gwtproject_layout_client_Layout_AnimationCallback(/** number */ duration, /** AnimationCallback */ callback) {}
 /** @abstract */
 m_forceLayout__() {}
 
 static $clinit() {
  AnimatedLayout.$clinit = () =>{};
  AnimatedLayout.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_AnimatedLayout = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_AnimatedLayout;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(AnimatedLayout, 'org.gwtproject.user.client.ui.AnimatedLayout');

AnimatedLayout.$markImplementor(/** @type {Function} */ (AnimatedLayout));

exports = AnimatedLayout; 
//# sourceMappingURL=AnimatedLayout.js.map