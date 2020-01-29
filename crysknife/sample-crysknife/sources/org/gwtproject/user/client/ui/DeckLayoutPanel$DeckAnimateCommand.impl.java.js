goog.module('org.gwtproject.user.client.ui.DeckLayoutPanel.DeckAnimateCommand$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LayoutCommand = goog.require('org.gwtproject.user.client.ui.LayoutCommand$impl');

let Layout = goog.forwardDeclare('org.gwtproject.layout.client.Layout$impl');
let AnimationCallback = goog.forwardDeclare('org.gwtproject.layout.client.Layout.AnimationCallback$impl');
let DeckLayoutPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.DeckLayoutPanel$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.DeckLayoutPanel.DeckAnimateCommand.$1$impl');

class DeckAnimateCommand extends LayoutCommand {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DeckLayoutPanel} */
  this.f_$outer_this__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand;
 }
 /**
  * @param {DeckLayoutPanel} $outer_this
  * @param {Layout} layout
  * @return {!DeckAnimateCommand}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_DeckLayoutPanel__org_gwtproject_layout_client_Layout($outer_this, layout) {
  DeckAnimateCommand.$clinit();
  let $instance = new DeckAnimateCommand();
  $instance.$ctor__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand__org_gwtproject_user_client_ui_DeckLayoutPanel__org_gwtproject_layout_client_Layout($outer_this, layout);
  return $instance;
 }
 /**
  * @param {DeckLayoutPanel} $outer_this
  * @param {Layout} layout
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand__org_gwtproject_user_client_ui_DeckLayoutPanel__org_gwtproject_layout_client_Layout($outer_this, layout) {
  this.f_$outer_this__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand = $outer_this;
  this.$ctor__org_gwtproject_user_client_ui_LayoutCommand__org_gwtproject_layout_client_Layout(layout);
 }
 /**
  * @override
  * @param {number} duration
  * @param {AnimationCallback} callback
  * @public
  */
 m_schedule__int__org_gwtproject_layout_client_Layout_AnimationCallback(duration, callback) {
  super.m_schedule__int__org_gwtproject_layout_client_Layout_AnimationCallback(duration, $1.$create__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand__org_gwtproject_layout_client_Layout_AnimationCallback(this, callback));
 }
 /**
  * @override
  * @public
  */
 m_doBeforeLayout__() {
  this.f_$outer_this__org_gwtproject_user_client_ui_DeckLayoutPanel_DeckAnimateCommand.m_doBeforeLayout___$p_org_gwtproject_user_client_ui_DeckLayoutPanel();
 }
 /**
  * @public
  */
 static $clinit() {
  DeckAnimateCommand.$clinit = () =>{};
  DeckAnimateCommand.$loadModules();
  LayoutCommand.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DeckAnimateCommand;
 }
 /**
  * @public
  */
 static $loadModules() {
  $1 = goog.module.get('org.gwtproject.user.client.ui.DeckLayoutPanel.DeckAnimateCommand.$1$impl');
 }
 
}
$Util.$setClassMetadata(DeckAnimateCommand, 'org.gwtproject.user.client.ui.DeckLayoutPanel$DeckAnimateCommand');

exports = DeckAnimateCommand; 
//# sourceMappingURL=DeckLayoutPanel$DeckAnimateCommand.js.map