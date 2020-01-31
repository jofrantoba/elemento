goog.module('org.gwtproject.layout.client.Layout.AnimationCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Layer = goog.forwardDeclare('org.gwtproject.layout.client.Layout.Layer$impl');

/**
 * @interface
 */
class AnimationCallback {
 /** @abstract */
 m_onAnimationComplete__() {}
 /** @abstract */
 m_onLayout__org_gwtproject_layout_client_Layout_Layer__double(/** Layer */ layer, /** number */ progress) {}
 
 static $clinit() {
  AnimationCallback.$clinit = () =>{};
  AnimationCallback.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_layout_client_Layout_AnimationCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_layout_client_Layout_AnimationCallback;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(AnimationCallback, 'org.gwtproject.layout.client.Layout$AnimationCallback');

AnimationCallback.$markImplementor(/** @type {Function} */ (AnimationCallback));

exports = AnimationCallback; 
//# sourceMappingURL=Layout$AnimationCallback.js.map