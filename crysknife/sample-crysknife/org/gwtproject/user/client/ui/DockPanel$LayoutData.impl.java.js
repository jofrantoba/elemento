goog.module('org.gwtproject.user.client.ui.DockPanel.LayoutData$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let DockLayoutConstant = goog.forwardDeclare('org.gwtproject.user.client.ui.DockPanel.DockLayoutConstant$impl');
let HasHorizontalAlignment = goog.forwardDeclare('org.gwtproject.user.client.ui.HasHorizontalAlignment$impl');
let HasVerticalAlignment = goog.forwardDeclare('org.gwtproject.user.client.ui.HasVerticalAlignment$impl');

class LayoutData extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DockLayoutConstant} */
  this.f_direction__org_gwtproject_user_client_ui_DockPanel_LayoutData;
  /** @public {?string} */
  this.f_hAlign__org_gwtproject_user_client_ui_DockPanel_LayoutData;
  /** @public {?string} */
  this.f_height__org_gwtproject_user_client_ui_DockPanel_LayoutData;
  /** @public {Object} */
  this.f_td__org_gwtproject_user_client_ui_DockPanel_LayoutData;
  /** @public {?string} */
  this.f_vAlign__org_gwtproject_user_client_ui_DockPanel_LayoutData;
  /** @public {?string} */
  this.f_width__org_gwtproject_user_client_ui_DockPanel_LayoutData;
 }
 /**
  * @param {DockLayoutConstant} dir
  * @return {!LayoutData}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_DockPanel_DockLayoutConstant(dir) {
  LayoutData.$clinit();
  let $instance = new LayoutData();
  $instance.$ctor__org_gwtproject_user_client_ui_DockPanel_LayoutData__org_gwtproject_user_client_ui_DockPanel_DockLayoutConstant(dir);
  return $instance;
 }
 /**
  * @param {DockLayoutConstant} dir
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DockPanel_LayoutData__org_gwtproject_user_client_ui_DockPanel_DockLayoutConstant(dir) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_client_ui_DockPanel_LayoutData();
  this.f_direction__org_gwtproject_user_client_ui_DockPanel_LayoutData = dir;
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_DockPanel_LayoutData() {
  this.f_hAlign__org_gwtproject_user_client_ui_DockPanel_LayoutData = HasHorizontalAlignment.f_ALIGN_DEFAULT__org_gwtproject_user_client_ui_HasHorizontalAlignment.m_getTextAlignString__();
  this.f_height__org_gwtproject_user_client_ui_DockPanel_LayoutData = "";
  this.f_vAlign__org_gwtproject_user_client_ui_DockPanel_LayoutData = HasVerticalAlignment.f_ALIGN_TOP__org_gwtproject_user_client_ui_HasVerticalAlignment.m_getVerticalAlignString__();
  this.f_width__org_gwtproject_user_client_ui_DockPanel_LayoutData = "";
 }
 /**
  * @public
  */
 static $clinit() {
  LayoutData.$clinit = () =>{};
  LayoutData.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof LayoutData;
 }
 /**
  * @public
  */
 static $loadModules() {
  HasHorizontalAlignment = goog.module.get('org.gwtproject.user.client.ui.HasHorizontalAlignment$impl');
  HasVerticalAlignment = goog.module.get('org.gwtproject.user.client.ui.HasVerticalAlignment$impl');
 }
 
}
$Util.$setClassMetadata(LayoutData, 'org.gwtproject.user.client.ui.DockPanel$LayoutData');

exports = LayoutData; 
//# sourceMappingURL=DockPanel$LayoutData.js.map