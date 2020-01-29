goog.module('org.gwtproject.user.client.ui.LayoutCommand.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AnimationCallback = goog.require('org.gwtproject.layout.client.Layout.AnimationCallback$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Layer = goog.forwardDeclare('org.gwtproject.layout.client.Layout.Layer$impl');
let LayoutCommand = goog.forwardDeclare('org.gwtproject.user.client.ui.LayoutCommand$impl');
let RequiresResize = goog.forwardDeclare('org.gwtproject.user.client.ui.RequiresResize$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {AnimationCallback}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {LayoutCommand} */
  this.f_$outer_this__org_gwtproject_user_client_ui_LayoutCommand_1;
 }
 /**
  * @param {LayoutCommand} $outer_this
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_LayoutCommand($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_LayoutCommand_1__org_gwtproject_user_client_ui_LayoutCommand($outer_this);
  return $instance;
 }
 /**
  * @param {LayoutCommand} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_LayoutCommand_1__org_gwtproject_user_client_ui_LayoutCommand($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_LayoutCommand_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @public
  */
 m_onAnimationComplete__() {
  if (!$Equality.$same(this.f_$outer_this__org_gwtproject_user_client_ui_LayoutCommand_1.f_callback__org_gwtproject_user_client_ui_LayoutCommand_, null)) {
   this.f_$outer_this__org_gwtproject_user_client_ui_LayoutCommand_1.f_callback__org_gwtproject_user_client_ui_LayoutCommand_.m_onAnimationComplete__();
  }
 }
 /**
  * @override
  * @param {Layer} layer
  * @param {number} progress
  * @public
  */
 m_onLayout__org_gwtproject_layout_client_Layout_Layer__double(layer, progress) {
  let child = /**@type {Widget} */ ($Casts.$to(layer.m_getUserObject__(), Widget));
  if (RequiresResize.$isInstance(child)) {
   /**@type {RequiresResize} */ ($Casts.$to(child, RequiresResize)).m_onResize__();
  }
  if (!$Equality.$same(this.f_$outer_this__org_gwtproject_user_client_ui_LayoutCommand_1.f_callback__org_gwtproject_user_client_ui_LayoutCommand_, null)) {
   this.f_$outer_this__org_gwtproject_user_client_ui_LayoutCommand_1.f_callback__org_gwtproject_user_client_ui_LayoutCommand_.m_onLayout__org_gwtproject_layout_client_Layout_Layer__double(layer, progress);
  }
 }
 /**
  * @public
  */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
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
  RequiresResize = goog.module.get('org.gwtproject.user.client.ui.RequiresResize$impl');
  Widget = goog.module.get('org.gwtproject.user.client.ui.Widget$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.LayoutCommand$1');

AnimationCallback.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=LayoutCommand$1.js.map