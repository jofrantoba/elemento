goog.module('org.gwtproject.animation.client.AnimationScheduler.AnimationHandle$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @abstract
  */
class AnimationHandle extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_animation_client_AnimationScheduler_AnimationHandle__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @abstract
  * @public
  */
 m_cancel__() {}
 /**
  * @public
  */
 static $clinit() {
  AnimationHandle.$clinit = () =>{};
  AnimationHandle.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AnimationHandle;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(AnimationHandle, 'org.gwtproject.animation.client.AnimationScheduler$AnimationHandle');

exports = AnimationHandle; 
//# sourceMappingURL=AnimationScheduler$AnimationHandle.js.map