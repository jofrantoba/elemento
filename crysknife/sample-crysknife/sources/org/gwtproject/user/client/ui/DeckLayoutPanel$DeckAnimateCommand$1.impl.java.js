goog.module('org.gwtproject.user.client.ui.DeckLayoutPanel.DeckAnimateCommand.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AnimationCallback = goog.require('org.gwtproject.layout.client.Layout.AnimationCallback$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Layer = goog.forwardDeclare('org.gwtproject.layout.client.Layout.Layer$impl');
let DeckAnimateCommand = goog.forwardDeclare('org.gwtproject.user.client.ui.DeckLayoutPanel.DeckAnimateCommand$impl');

/**
 * @implements {AnimationCallback}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DeckAnimateCommand} */
  this.f_$outer_this__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand_1;
  /** @public {AnimationCallback} */
  this.$c_callback;
 }
 /**
  * @param {DeckAnimateCommand} $outer_this
  * @param {AnimationCallback} $c_callback
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand__org_gwtproject_layout_client_Layout_AnimationCallback($outer_this, $c_callback) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand_1__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand__org_gwtproject_layout_client_Layout_AnimationCallback($outer_this, $c_callback);
  return $instance;
 }
 /**
  * @param {DeckAnimateCommand} $outer_this
  * @param {AnimationCallback} $c_callback
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand_1__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand__org_gwtproject_layout_client_Layout_AnimationCallback($outer_this, $c_callback) {
  this.f_$outer_this__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand_1 = $outer_this;
  this.$c_callback = $c_callback;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @public
  */
 m_onAnimationComplete__() {
  this.f_$outer_this__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand_1.f_$outer_this__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand.m_doAfterLayout___$p_org_gwtproject_user_client_ui_DeckLayoutPanel();
  if (!$Equality.$same(this.$c_callback, null)) {
   this.$c_callback.m_onAnimationComplete__();
  }
 }
 /**
  * @override
  * @param {Layer} layer
  * @param {number} progress
  * @public
  */
 m_onLayout__org_gwtproject_layout_client_Layout_Layer__double(layer, progress) {
  if (!$Equality.$same(this.$c_callback, null)) {
   this.$c_callback.m_onLayout__org_gwtproject_layout_client_Layout_Layer__double(layer, progress);
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
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.DeckLayoutPanel$DeckAnimateCommand$1');

AnimationCallback.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=DeckLayoutPanel$DeckAnimateCommand$1.js.map