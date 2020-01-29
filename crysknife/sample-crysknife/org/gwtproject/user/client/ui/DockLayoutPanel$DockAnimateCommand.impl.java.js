goog.module('org.gwtproject.user.client.ui.DockLayoutPanel.DockAnimateCommand$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LayoutCommand = goog.require('org.gwtproject.user.client.ui.LayoutCommand$impl');

let Layout = goog.forwardDeclare('org.gwtproject.layout.client.Layout$impl');
let DockLayoutPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.DockLayoutPanel$impl');

class DockAnimateCommand extends LayoutCommand {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DockLayoutPanel} */
  this.f_$outer_this__org_gwtproject_user_client_ui_DockLayoutPanel_DockAnimateCommand;
 }
 /**
  * @param {DockLayoutPanel} $outer_this
  * @param {Layout} layout
  * @return {!DockAnimateCommand}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_DockLayoutPanel__org_gwtproject_layout_client_Layout($outer_this, layout) {
  DockAnimateCommand.$clinit();
  let $instance = new DockAnimateCommand();
  $instance.$ctor__org_gwtproject_user_client_ui_DockLayoutPanel_DockAnimateCommand__org_gwtproject_user_client_ui_DockLayoutPanel__org_gwtproject_layout_client_Layout($outer_this, layout);
  return $instance;
 }
 /**
  * @param {DockLayoutPanel} $outer_this
  * @param {Layout} layout
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DockLayoutPanel_DockAnimateCommand__org_gwtproject_user_client_ui_DockLayoutPanel__org_gwtproject_layout_client_Layout($outer_this, layout) {
  this.f_$outer_this__org_gwtproject_user_client_ui_DockLayoutPanel_DockAnimateCommand = $outer_this;
  this.$ctor__org_gwtproject_user_client_ui_LayoutCommand__org_gwtproject_layout_client_Layout(layout);
 }
 /**
  * @override
  * @public
  */
 m_doBeforeLayout__() {
  this.f_$outer_this__org_gwtproject_user_client_ui_DockLayoutPanel_DockAnimateCommand.m_doLayout___$p_org_gwtproject_user_client_ui_DockLayoutPanel();
 }
 /**
  * @public
  */
 static $clinit() {
  DockAnimateCommand.$clinit = () =>{};
  DockAnimateCommand.$loadModules();
  LayoutCommand.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DockAnimateCommand;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DockAnimateCommand, 'org.gwtproject.user.client.ui.DockLayoutPanel$DockAnimateCommand');

exports = DockAnimateCommand; 
//# sourceMappingURL=DockLayoutPanel$DockAnimateCommand.js.map