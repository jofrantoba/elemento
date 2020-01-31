goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const UiBinder = goog.require('org.gwtproject.uibinder.client.UiBinder$impl');
const NativeVerticalScrollbarUiBinder = goog.require('org.gwtproject.user.client.ui.NativeVerticalScrollbar.NativeVerticalScrollbarUiBinder$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeVerticalScrollbar = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar$impl');
let Template = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl.Template$impl');
let Widgets = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl.Widgets$impl');
let NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__TemplateImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_TemplateImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {UiBinder<Object, NativeVerticalScrollbar>}
 * @implements {NativeVerticalScrollbarUiBinder}
  */
class NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Template}*/
  this.f_template__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl;
 }
 /** @return {!NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl} */
 static $create__() {
  NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl.$clinit();
  let $instance = new NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl();
 }
 /** @return {Object} */
 m_createAndBindUi__org_gwtproject_user_client_ui_NativeVerticalScrollbar(/** NativeVerticalScrollbar */ owner) {
  return Widgets.$create__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl__org_gwtproject_user_client_ui_NativeVerticalScrollbar(this, owner).m_get_f_div1___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets();
 }
 //Bridge method.
 /** @override @return {Object} */
 m_createAndBindUi__java_lang_Object(/** * */ arg0) {
  return this.m_createAndBindUi__org_gwtproject_user_client_ui_NativeVerticalScrollbar(/**@type {NativeVerticalScrollbar}*/ ($Casts.$to(arg0, NativeVerticalScrollbar)));
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl() {
  this.f_template__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl = NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__TemplateImpl.$create__();
 }
 
 static $clinit() {
  NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl.$clinit = () =>{};
  NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl;
 }
 
 static $loadModules() {
  NativeVerticalScrollbar = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar$impl');
  Widgets = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl.Widgets$impl');
  NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__TemplateImpl = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_TemplateImpl$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl');

UiBinder.$markImplementor(NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl);
NativeVerticalScrollbarUiBinder.$markImplementor(NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl);

exports = NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl; 
//# sourceMappingURL=NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl.js.map