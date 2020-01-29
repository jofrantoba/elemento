goog.module('org.gwtproject.animation.client.AnimationScheduler.AnimationCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AnimationCallback = goog.require('org.gwtproject.animation.client.AnimationScheduler.AnimationCallback$impl');

/**
 * @implements {AnimationCallback}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(number):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(number):void} */
  this.f_$$fn__org_gwtproject_animation_client_AnimationScheduler_AnimationCallback_$LambdaAdaptor;
  this.$ctor__org_gwtproject_animation_client_AnimationScheduler_AnimationCallback_$LambdaAdaptor__org_gwtproject_animation_client_AnimationScheduler_AnimationCallback_$JsFunction(fn);
 }
 /**
  * @param {?function(number):void} fn
  * @public
  */
 $ctor__org_gwtproject_animation_client_AnimationScheduler_AnimationCallback_$LambdaAdaptor__org_gwtproject_animation_client_AnimationScheduler_AnimationCallback_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_animation_client_AnimationScheduler_AnimationCallback_$LambdaAdaptor = fn;
 }
 /**
  * @param {number} arg0
  * @public
  */
 m_execute__double(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_animation_client_AnimationScheduler_AnimationCallback_$LambdaAdaptor;
   $function(arg0);
  }
 }
 /**
  * @public
  */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $LambdaAdaptor;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.animation.client.AnimationScheduler$AnimationCallback$$LambdaAdaptor');

AnimationCallback.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=AnimationScheduler$AnimationCallback$$LambdaAdaptor.js.map