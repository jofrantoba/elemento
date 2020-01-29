goog.module('org.gwtproject.animation.client.AnimationScheduler.AnimationCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.animation.client.AnimationScheduler.AnimationCallback.$LambdaAdaptor$impl');

/**
 * @interface
 */
class AnimationCallback {
 /**
  * @abstract
  * @param {number} timestamp
  * @public
  */
 m_execute__double(timestamp) {}
 /**
  * @param {?function(number):void} fn
  * @return {AnimationCallback}
  * @public
  */
 static $adapt(fn) {
  AnimationCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
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
  classConstructor.prototype.$implements__org_gwtproject_animation_client_AnimationScheduler_AnimationCallback = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_animation_client_AnimationScheduler_AnimationCallback;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.animation.client.AnimationScheduler.AnimationCallback.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(AnimationCallback, 'org.gwtproject.animation.client.AnimationScheduler$AnimationCallback');

AnimationCallback.$markImplementor(/** @type {Function} */ (AnimationCallback));

exports = AnimationCallback; 
//# sourceMappingURL=AnimationScheduler$AnimationCallback.js.map