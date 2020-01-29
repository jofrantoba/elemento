goog.module('org.gwtproject.layout.client.Layout.AnimationCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Layer = goog.forwardDeclare('org.gwtproject.layout.client.Layout.Layer$impl');

/**
 * @interface
 */
class AnimationCallback {
 /**
  * @abstract
  * @public
  */
 m_onAnimationComplete__() {}
 /**
  * @abstract
  * @param {Layer} layer
  * @param {number} progress
  * @public
  */
 m_onLayout__org_gwtproject_layout_client_Layout_Layer__double(layer, progress) {}
 /**
  * @public
  */
 static $clinit() {
  AnimationCallback.$clinit = () =>{};
  AnimationCallback.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_layout_client_Layout_AnimationCallback = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_layout_client_Layout_AnimationCallback;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(AnimationCallback, 'org.gwtproject.layout.client.Layout$AnimationCallback');

AnimationCallback.$markImplementor(/** @type {Function} */ (AnimationCallback));

exports = AnimationCallback; 
//# sourceMappingURL=Layout$AnimationCallback.js.map