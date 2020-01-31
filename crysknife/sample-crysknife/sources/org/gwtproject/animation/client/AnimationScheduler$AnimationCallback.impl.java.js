goog.module('org.gwtproject.animation.client.AnimationScheduler.AnimationCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.animation.client.AnimationScheduler.AnimationCallback.$LambdaAdaptor$impl');

/**
 * @interface
 */
class AnimationCallback {
 /** @abstract */
 m_execute__double(/** number */ timestamp) {}
 /** @return {AnimationCallback} */
 static $adapt(/** ?function(number):void */ fn) {
  AnimationCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  AnimationCallback.$clinit = () =>{};
  AnimationCallback.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_animation_client_AnimationScheduler_AnimationCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_animation_client_AnimationScheduler_AnimationCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.animation.client.AnimationScheduler.AnimationCallback.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(AnimationCallback, 'org.gwtproject.animation.client.AnimationScheduler$AnimationCallback');

AnimationCallback.$markImplementor(/** @type {Function} */ (AnimationCallback));

exports = AnimationCallback; 
//# sourceMappingURL=AnimationScheduler$AnimationCallback.js.map