goog.module('org.gwtproject.user.client.ui.NotificationMole_BinderImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const UiBinder = goog.require('org.gwtproject.uibinder.client.UiBinder$impl');
const Binder = goog.require('org.gwtproject.user.client.ui.NotificationMole.Binder$impl');

let HTMLPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.HTMLPanel$impl');
let NotificationMole = goog.forwardDeclare('org.gwtproject.user.client.ui.NotificationMole$impl');
let Template = goog.forwardDeclare('org.gwtproject.user.client.ui.NotificationMole_BinderImpl.Template$impl');
let Widgets = goog.forwardDeclare('org.gwtproject.user.client.ui.NotificationMole_BinderImpl.Widgets$impl');
let NotificationMole__BinderImpl__TemplateImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NotificationMole_BinderImpl_TemplateImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {UiBinder<HTMLPanel, NotificationMole>}
 * @implements {Binder}
  */
class NotificationMole__BinderImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Template}*/
  this.f_template__org_gwtproject_user_client_ui_NotificationMole_BinderImpl;
 }
 /** @return {!NotificationMole__BinderImpl} */
 static $create__() {
  NotificationMole__BinderImpl.$clinit();
  let $instance = new NotificationMole__BinderImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_NotificationMole_BinderImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_NotificationMole_BinderImpl__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl();
 }
 /** @return {HTMLPanel} */
 m_createAndBindUi__org_gwtproject_user_client_ui_NotificationMole(/** NotificationMole */ owner) {
  return Widgets.$create__org_gwtproject_user_client_ui_NotificationMole_BinderImpl__org_gwtproject_user_client_ui_NotificationMole(this, owner).m_get_f_HTMLPanel1___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets();
 }
 //Bridge method.
 /** @override @return {HTMLPanel} */
 m_createAndBindUi__java_lang_Object(/** * */ arg0) {
  return this.m_createAndBindUi__org_gwtproject_user_client_ui_NotificationMole(/**@type {NotificationMole}*/ ($Casts.$to(arg0, NotificationMole)));
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl() {
  this.f_template__org_gwtproject_user_client_ui_NotificationMole_BinderImpl = NotificationMole__BinderImpl__TemplateImpl.$create__();
 }
 
 static $clinit() {
  NotificationMole__BinderImpl.$clinit = () =>{};
  NotificationMole__BinderImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NotificationMole__BinderImpl;
 }
 
 static $loadModules() {
  NotificationMole = goog.module.get('org.gwtproject.user.client.ui.NotificationMole$impl');
  Widgets = goog.module.get('org.gwtproject.user.client.ui.NotificationMole_BinderImpl.Widgets$impl');
  NotificationMole__BinderImpl__TemplateImpl = goog.module.get('org.gwtproject.user.client.ui.NotificationMole_BinderImpl_TemplateImpl$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(NotificationMole__BinderImpl, 'org.gwtproject.user.client.ui.NotificationMole_BinderImpl');

UiBinder.$markImplementor(NotificationMole__BinderImpl);
Binder.$markImplementor(NotificationMole__BinderImpl);

exports = NotificationMole__BinderImpl; 
//# sourceMappingURL=NotificationMole_BinderImpl.js.map