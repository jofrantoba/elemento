goog.module('org.gwtproject.layout.client.Layout.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Animation = goog.require('org.gwtproject.animation.client.Animation$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Layout = goog.forwardDeclare('org.gwtproject.layout.client.Layout$impl');
let AnimationCallback = goog.forwardDeclare('org.gwtproject.layout.client.Layout.AnimationCallback$impl');
let Layer = goog.forwardDeclare('org.gwtproject.layout.client.Layout.Layer$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $1 extends Animation {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Layout} */
  this.f_$outer_this__org_gwtproject_layout_client_Layout_1;
  /** @public {AnimationCallback} */
  this.$c_callback;
 }
 /**
  * @param {Layout} $outer_this
  * @param {AnimationCallback} $c_callback
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_layout_client_Layout__org_gwtproject_layout_client_Layout_AnimationCallback($outer_this, $c_callback) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_layout_client_Layout_1__org_gwtproject_layout_client_Layout__org_gwtproject_layout_client_Layout_AnimationCallback($outer_this, $c_callback);
  return $instance;
 }
 /**
  * @param {Layout} $outer_this
  * @param {AnimationCallback} $c_callback
  * @public
  */
 $ctor__org_gwtproject_layout_client_Layout_1__org_gwtproject_layout_client_Layout__org_gwtproject_layout_client_Layout_AnimationCallback($outer_this, $c_callback) {
  this.f_$outer_this__org_gwtproject_layout_client_Layout_1 = $outer_this;
  this.$c_callback = $c_callback;
  this.$ctor__org_gwtproject_animation_client_Animation__();
 }
 /**
  * @override
  * @public
  */
 m_onCancel__() {
  this.m_onComplete__();
 }
 /**
  * @override
  * @public
  */
 m_onComplete__() {
  this.f_$outer_this__org_gwtproject_layout_client_Layout_1.f_animation__org_gwtproject_layout_client_Layout_ = null;
  this.f_$outer_this__org_gwtproject_layout_client_Layout_1.m_layout__();
  if (!$Equality.$same(this.$c_callback, null)) {
   this.$c_callback.m_onAnimationComplete__();
  }
 }
 /**
  * @override
  * @param {number} progress
  * @public
  */
 m_onUpdate__double(progress) {
  for (let $iterator = this.f_$outer_this__org_gwtproject_layout_client_Layout_1.f_layers__org_gwtproject_layout_client_Layout_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let l = /**@type {Layer} */ ($Casts.$to($iterator.m_next__(), Layer));
   if (l.f_setTargetLeft__org_gwtproject_layout_client_Layout_Layer) {
    l.f_left__org_gwtproject_layout_client_Layout_Layer = l.f_sourceLeft__org_gwtproject_layout_client_Layout_Layer + (l.f_targetLeft__org_gwtproject_layout_client_Layout_Layer - l.f_sourceLeft__org_gwtproject_layout_client_Layout_Layer) * progress;
   }
   if (l.f_setTargetRight__org_gwtproject_layout_client_Layout_Layer) {
    l.f_right__org_gwtproject_layout_client_Layout_Layer = l.f_sourceRight__org_gwtproject_layout_client_Layout_Layer + (l.f_targetRight__org_gwtproject_layout_client_Layout_Layer - l.f_sourceRight__org_gwtproject_layout_client_Layout_Layer) * progress;
   }
   if (l.f_setTargetTop__org_gwtproject_layout_client_Layout_Layer) {
    l.f_top__org_gwtproject_layout_client_Layout_Layer = l.f_sourceTop__org_gwtproject_layout_client_Layout_Layer + (l.f_targetTop__org_gwtproject_layout_client_Layout_Layer - l.f_sourceTop__org_gwtproject_layout_client_Layout_Layer) * progress;
   }
   if (l.f_setTargetBottom__org_gwtproject_layout_client_Layout_Layer) {
    l.f_bottom__org_gwtproject_layout_client_Layout_Layer = l.f_sourceBottom__org_gwtproject_layout_client_Layout_Layer + (l.f_targetBottom__org_gwtproject_layout_client_Layout_Layer - l.f_sourceBottom__org_gwtproject_layout_client_Layout_Layer) * progress;
   }
   if (l.f_setTargetWidth__org_gwtproject_layout_client_Layout_Layer) {
    l.f_width__org_gwtproject_layout_client_Layout_Layer = l.f_sourceWidth__org_gwtproject_layout_client_Layout_Layer + (l.f_targetWidth__org_gwtproject_layout_client_Layout_Layer - l.f_sourceWidth__org_gwtproject_layout_client_Layout_Layer) * progress;
   }
   if (l.f_setTargetHeight__org_gwtproject_layout_client_Layout_Layer) {
    l.f_height__org_gwtproject_layout_client_Layout_Layer = l.f_sourceHeight__org_gwtproject_layout_client_Layout_Layer + (l.f_targetHeight__org_gwtproject_layout_client_Layout_Layer - l.f_sourceHeight__org_gwtproject_layout_client_Layout_Layer) * progress;
   }
   this.f_$outer_this__org_gwtproject_layout_client_Layout_1.f_impl__org_gwtproject_layout_client_Layout_.m_layout__org_gwtproject_layout_client_Layout_Layer(l);
   if (!$Equality.$same(this.$c_callback, null)) {
    this.$c_callback.m_onLayout__org_gwtproject_layout_client_Layout_Layer__double(l, progress);
   }
  }
  this.f_$outer_this__org_gwtproject_layout_client_Layout_1.f_impl__org_gwtproject_layout_client_Layout_.m_finalizeLayout__org_gwtproject_dom_client_Element(this.f_$outer_this__org_gwtproject_layout_client_Layout_1.f_parentElem__org_gwtproject_layout_client_Layout_);
 }
 /**
  * @public
  */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  Animation.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $1;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Layer = goog.module.get('org.gwtproject.layout.client.Layout.Layer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.layout.client.Layout$1');

exports = $1; 
//# sourceMappingURL=Layout$1.js.map