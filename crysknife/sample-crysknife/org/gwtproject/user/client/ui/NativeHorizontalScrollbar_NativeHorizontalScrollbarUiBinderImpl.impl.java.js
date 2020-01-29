goog.module('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const UiBinder = goog.require('org.gwtproject.uibinder.client.UiBinder$impl');
const NativeHorizontalScrollbarUiBinder = goog.require('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.NativeHorizontalScrollbarUiBinder$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeHorizontalScrollbar = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar$impl');
let Template = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl.Template$impl');
let Widgets = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl.Widgets$impl');
let NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__TemplateImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_TemplateImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {UiBinder<Object, NativeHorizontalScrollbar>}
 * @implements {NativeHorizontalScrollbarUiBinder}
  */
class NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Template} */
  this.f_template__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl;
 }
 /**
  * @return {!NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl}
  * @public
  */
 static $create__() {
  NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl.$clinit();
  let $instance = new NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl();
 }
 /**
  * @param {NativeHorizontalScrollbar} owner
  * @return {Object}
  * @public
  */
 m_createAndBindUi__org_gwtproject_user_client_ui_NativeHorizontalScrollbar(owner) {
  return Widgets.$create__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl__org_gwtproject_user_client_ui_NativeHorizontalScrollbar(this, owner).m_get_f_div1___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets();
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {Object}
  * @public
  */
 m_createAndBindUi__java_lang_Object(arg0) {
  return this.m_createAndBindUi__org_gwtproject_user_client_ui_NativeHorizontalScrollbar(/**@type {NativeHorizontalScrollbar} */ ($Casts.$to(arg0, NativeHorizontalScrollbar)));
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl() {
  this.f_template__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl = NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__TemplateImpl.$create__();
 }
 /**
  * @public
  */
 static $clinit() {
  NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl.$clinit = () =>{};
  NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  NativeHorizontalScrollbar = goog.module.get('org.gwtproject.user.client.ui.NativeHorizontalScrollbar$impl');
  Widgets = goog.module.get('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl.Widgets$impl');
  NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__TemplateImpl = goog.module.get('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_TemplateImpl$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl, 'org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl');

UiBinder.$markImplementor(NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl);
NativeHorizontalScrollbarUiBinder.$markImplementor(NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl);

exports = NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl; 
//# sourceMappingURL=NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl.js.map