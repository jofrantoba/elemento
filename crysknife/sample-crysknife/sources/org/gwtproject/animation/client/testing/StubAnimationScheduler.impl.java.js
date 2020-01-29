goog.module('org.gwtproject.animation.client.testing.StubAnimationScheduler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AnimationScheduler = goog.require('org.gwtproject.animation.client.AnimationScheduler$impl');

let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let AnimationCallback = goog.forwardDeclare('org.gwtproject.animation.client.AnimationScheduler.AnimationCallback$impl');
let StubAnimationHandle = goog.forwardDeclare('org.gwtproject.animation.client.testing.StubAnimationScheduler.StubAnimationHandle$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

class StubAnimationScheduler extends AnimationScheduler {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {List<AnimationCallback>} */
  this.f_callbacks__org_gwtproject_animation_client_testing_StubAnimationScheduler_;
 }
 /**
  * @return {!StubAnimationScheduler}
  * @public
  */
 static $create__() {
  StubAnimationScheduler.$clinit();
  let $instance = new StubAnimationScheduler();
  $instance.$ctor__org_gwtproject_animation_client_testing_StubAnimationScheduler__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_animation_client_testing_StubAnimationScheduler__() {
  this.$ctor__org_gwtproject_animation_client_AnimationScheduler__();
  this.$init___$p_org_gwtproject_animation_client_testing_StubAnimationScheduler();
 }
 /**
  * @return {List<AnimationCallback>}
  * @public
  */
 m_getAnimationCallbacks__() {
  return this.f_callbacks__org_gwtproject_animation_client_testing_StubAnimationScheduler_;
 }
 /**
  * @override
  * @param {AnimationCallback} callback
  * @param {Object} element
  * @return {StubAnimationHandle}
  * @public
  */
 m_requestAnimationFrame__org_gwtproject_animation_client_AnimationScheduler_AnimationCallback__org_gwtproject_dom_client_Element(callback, element) {
  this.f_callbacks__org_gwtproject_animation_client_testing_StubAnimationScheduler_.add(callback);
  return StubAnimationHandle.$create__org_gwtproject_animation_client_testing_StubAnimationScheduler__org_gwtproject_animation_client_AnimationScheduler_AnimationCallback(this, callback);
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_animation_client_testing_StubAnimationScheduler() {
  this.f_callbacks__org_gwtproject_animation_client_testing_StubAnimationScheduler_ = /**@type {!ArrayList<AnimationCallback>} */ (ArrayList.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  StubAnimationScheduler.$clinit = () =>{};
  StubAnimationScheduler.$loadModules();
  AnimationScheduler.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof StubAnimationScheduler;
 }
 /**
  * @public
  */
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  StubAnimationHandle = goog.module.get('org.gwtproject.animation.client.testing.StubAnimationScheduler.StubAnimationHandle$impl');
 }
 
}
$Util.$setClassMetadata(StubAnimationScheduler, 'org.gwtproject.animation.client.testing.StubAnimationScheduler');

exports = StubAnimationScheduler; 
//# sourceMappingURL=StubAnimationScheduler.js.map