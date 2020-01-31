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
 /** @protected */
 constructor() {
  super();
  /**@type {DeckAnimateCommand}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand_1;
  /**@type {AnimationCallback}*/
  this.$c_callback;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand__org_gwtproject_layout_client_Layout_AnimationCallback(/** DeckAnimateCommand */ $outer_this, /** AnimationCallback */ $c_callback) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand_1__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand__org_gwtproject_layout_client_Layout_AnimationCallback($outer_this, $c_callback);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand_1__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand__org_gwtproject_layout_client_Layout_AnimationCallback(/** DeckAnimateCommand */ $outer_this, /** AnimationCallback */ $c_callback) {
  this.f_$outer_this__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand_1 = $outer_this;
  this.$c_callback = $c_callback;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onAnimationComplete__() {
  this.f_$outer_this__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand_1.f_$outer_this__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand.m_doAfterLayout___$p_org_gwtproject_user_client_ui_DeckLayoutPanel();
  if (!$Equality.$same(this.$c_callback, null)) {
   this.$c_callback.m_onAnimationComplete__();
  }
 }
 /** @override */
 m_onLayout__org_gwtproject_layout_client_Layout_Layer__double(/** Layer */ layer, /** number */ progress) {
  if (!$Equality.$same(this.$c_callback, null)) {
   this.$c_callback.m_onLayout__org_gwtproject_layout_client_Layout_Layer__double(layer, progress);
  }
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.DeckLayoutPanel$DeckAnimateCommand$1');

AnimationCallback.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=DeckLayoutPanel$DeckAnimateCommand$1.js.map