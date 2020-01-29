goog.module('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Binder = goog.require('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator.Binder$impl');
const UiBinder = goog.require('org.gwtproject.uibinder.client.UiBinder$impl');

let ValueBoxEditorDecorator = goog.forwardDeclare('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator$impl');
let Template = goog.forwardDeclare('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl.Template$impl');
let Widgets = goog.forwardDeclare('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl.Widgets$impl');
let ValueBoxEditorDecorator__BinderImpl__TemplateImpl = goog.forwardDeclare('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_TemplateImpl$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {UiBinder<Widget, ValueBoxEditorDecorator<?>>}
 * @implements {Binder}
  */
class ValueBoxEditorDecorator__BinderImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Template} */
  this.f_template__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl;
 }
 /**
  * @return {!ValueBoxEditorDecorator__BinderImpl}
  * @public
  */
 static $create__() {
  ValueBoxEditorDecorator__BinderImpl.$clinit();
  let $instance = new ValueBoxEditorDecorator__BinderImpl();
  $instance.$ctor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl();
 }
 /**
  * @param {ValueBoxEditorDecorator} owner
  * @return {Widget}
  * @public
  */
 m_createAndBindUi__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator(owner) {
  return Widgets.$create__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator(this, owner).m_get_f_HTMLPanel1___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets();
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {Widget}
  * @public
  */
 m_createAndBindUi__java_lang_Object(arg0) {
  return this.m_createAndBindUi__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator(/**@type {ValueBoxEditorDecorator<*>} */ ($Casts.$to(arg0, ValueBoxEditorDecorator)));
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl() {
  this.f_template__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl = ValueBoxEditorDecorator__BinderImpl__TemplateImpl.$create__();
 }
 /**
  * @public
  */
 static $clinit() {
  ValueBoxEditorDecorator__BinderImpl.$clinit = () =>{};
  ValueBoxEditorDecorator__BinderImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ValueBoxEditorDecorator__BinderImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  ValueBoxEditorDecorator = goog.module.get('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator$impl');
  Widgets = goog.module.get('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl.Widgets$impl');
  ValueBoxEditorDecorator__BinderImpl__TemplateImpl = goog.module.get('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_TemplateImpl$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ValueBoxEditorDecorator__BinderImpl, 'org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl');

UiBinder.$markImplementor(ValueBoxEditorDecorator__BinderImpl);
Binder.$markImplementor(ValueBoxEditorDecorator__BinderImpl);

exports = ValueBoxEditorDecorator__BinderImpl; 
//# sourceMappingURL=ValueBoxEditorDecorator_BinderImpl.js.map