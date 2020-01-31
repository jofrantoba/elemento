goog.module('org.gwtproject.user.client.ui.DeckLayoutPanel.DeckAnimateCommand$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LayoutCommand = goog.require('org.gwtproject.user.client.ui.LayoutCommand$impl');

let Layout = goog.forwardDeclare('org.gwtproject.layout.client.Layout$impl');
let AnimationCallback = goog.forwardDeclare('org.gwtproject.layout.client.Layout.AnimationCallback$impl');
let DeckLayoutPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.DeckLayoutPanel$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.DeckLayoutPanel.DeckAnimateCommand.$1$impl');

class DeckAnimateCommand extends LayoutCommand {
 /** @protected */
 constructor() {
  super();
  /**@type {DeckLayoutPanel}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand;
 }
 /** @return {!DeckAnimateCommand} */
 static $create__org_gwtproject_user_client_ui_DeckLayoutPanel__org_gwtproject_layout_client_Layout(/** DeckLayoutPanel */ $outer_this, /** Layout */ layout) {
  DeckAnimateCommand.$clinit();
  let $instance = new DeckAnimateCommand();
  $instance.$ctor__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand__org_gwtproject_user_client_ui_DeckLayoutPanel__org_gwtproject_layout_client_Layout($outer_this, layout);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand__org_gwtproject_user_client_ui_DeckLayoutPanel__org_gwtproject_layout_client_Layout(/** DeckLayoutPanel */ $outer_this, /** Layout */ layout) {
  this.f_$outer_this__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand = $outer_this;
  this.$ctor__org_gwtproject_user_client_ui_LayoutCommand__org_gwtproject_layout_client_Layout(layout);
 }
 /** @override */
 m_schedule__int__org_gwtproject_layout_client_Layout_AnimationCallback(/** number */ duration, /** AnimationCallback */ callback) {
  super.m_schedule__int__org_gwtproject_layout_client_Layout_AnimationCallback(duration, $1.$create__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand__org_gwtproject_layout_client_Layout_AnimationCallback(this, callback));
 }
 /** @override */
 m_doBeforeLayout__() {
  this.f_$outer_this__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand.m_doBeforeLayout___$p_org_gwtproject_user_client_ui_DeckLayoutPanel();
 }
 
 static $clinit() {
  DeckAnimateCommand.$clinit = () =>{};
  DeckAnimateCommand.$loadModules();
  LayoutCommand.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DeckAnimateCommand;
 }
 
 static $loadModules() {
  $1 = goog.module.get('org.gwtproject.user.client.ui.DeckLayoutPanel.DeckAnimateCommand.$1$impl');
 }
 
}
$Util.$setClassMetadata(DeckAnimateCommand, 'org.gwtproject.user.client.ui.DeckLayoutPanel$DeckAnimateCommand');

exports = DeckAnimateCommand; 
//# sourceMappingURL=DeckLayoutPanel$DeckAnimateCommand.js.map