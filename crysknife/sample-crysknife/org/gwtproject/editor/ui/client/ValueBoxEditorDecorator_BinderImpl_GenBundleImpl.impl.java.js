goog.module('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_GenBundleImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ValueBoxEditorDecorator__BinderImpl__GenBundle = goog.require('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_GenBundle$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_GenBundleImpl.$1$impl');
let styleInitializer = goog.forwardDeclare('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_GenBundleImpl.styleInitializer$impl');
let ValueBoxEditorDecorator__BinderImpl__GenCss__style = goog.forwardDeclare('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_GenCss_style$impl');
let ResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ValueBoxEditorDecorator__BinderImpl__GenBundle}
  */
class ValueBoxEditorDecorator__BinderImpl__GenBundleImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!ValueBoxEditorDecorator__BinderImpl__GenBundleImpl}
  * @public
  */
 static $create__() {
  ValueBoxEditorDecorator__BinderImpl__GenBundleImpl.$clinit();
  let $instance = new ValueBoxEditorDecorator__BinderImpl__GenBundleImpl();
  $instance.$ctor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 m_styleInitializer___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl() {
  ValueBoxEditorDecorator__BinderImpl__GenBundleImpl.$f_style__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl_ = $1.$create__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl(this);
 }
 /**
  * @override
  * @return {ValueBoxEditorDecorator__BinderImpl__GenCss__style}
  * @public
  */
 m_style__() {
  return styleInitializer.m_get__();
 }
 /**
  * @return {Array<ResourcePrototype>}
  * @public
  */
 m_getResources__() {
  return /**@type {!Array<ResourcePrototype>} */ ($Arrays.$init([this.m_style__()], ResourcePrototype));
 }
 /**
  * @param {?string} name
  * @return {ResourcePrototype}
  * @public
  */
 m_getResource__java_lang_String(name) {
  if ($Equality.$same(ValueBoxEditorDecorator__BinderImpl__GenBundleImpl.f_resourceMap__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl_, null)) {
   ValueBoxEditorDecorator__BinderImpl__GenBundleImpl.f_resourceMap__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl_ = /**@type {!HashMap<?string, ResourcePrototype>} */ (HashMap.$create__());
   ValueBoxEditorDecorator__BinderImpl__GenBundleImpl.f_resourceMap__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl_.put("style", this.m_style__());
  }
  return /**@type {ResourcePrototype} */ ($Casts.$to(ValueBoxEditorDecorator__BinderImpl__GenBundleImpl.f_resourceMap__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl_.get(name), ResourcePrototype));
 }
 /**
  * @return {ValueBoxEditorDecorator__BinderImpl__GenBundleImpl}
  * @public
  */
 static get f__instance0__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl_() {
  return (ValueBoxEditorDecorator__BinderImpl__GenBundleImpl.$clinit(), ValueBoxEditorDecorator__BinderImpl__GenBundleImpl.$f__instance0__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl_);
 }
 /**
  * @param {ValueBoxEditorDecorator__BinderImpl__GenBundleImpl} value
  * @public
  */
 static set f__instance0__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl_(value) {
  (ValueBoxEditorDecorator__BinderImpl__GenBundleImpl.$clinit(), ValueBoxEditorDecorator__BinderImpl__GenBundleImpl.$f__instance0__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl_ = value);
 }
 /**
  * @return {ValueBoxEditorDecorator__BinderImpl__GenCss__style}
  * @public
  */
 static get f_style__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl_() {
  return (ValueBoxEditorDecorator__BinderImpl__GenBundleImpl.$clinit(), ValueBoxEditorDecorator__BinderImpl__GenBundleImpl.$f_style__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl_);
 }
 /**
  * @param {ValueBoxEditorDecorator__BinderImpl__GenCss__style} value
  * @public
  */
 static set f_style__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl_(value) {
  (ValueBoxEditorDecorator__BinderImpl__GenBundleImpl.$clinit(), ValueBoxEditorDecorator__BinderImpl__GenBundleImpl.$f_style__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl_ = value);
 }
 /**
  * @public
  */
 static $clinit() {
  ValueBoxEditorDecorator__BinderImpl__GenBundleImpl.$clinit = () =>{};
  ValueBoxEditorDecorator__BinderImpl__GenBundleImpl.$loadModules();
  j_l_Object.$clinit();
  ValueBoxEditorDecorator__BinderImpl__GenBundleImpl.$f__instance0__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl_ = ValueBoxEditorDecorator__BinderImpl__GenBundleImpl.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ValueBoxEditorDecorator__BinderImpl__GenBundleImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_GenBundleImpl.$1$impl');
  styleInitializer = goog.module.get('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_GenBundleImpl.styleInitializer$impl');
  ResourcePrototype = goog.module.get('org.gwtproject.resources.client.ResourcePrototype$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ValueBoxEditorDecorator__BinderImpl__GenBundleImpl, 'org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_GenBundleImpl');

ValueBoxEditorDecorator__BinderImpl__GenBundle.$markImplementor(ValueBoxEditorDecorator__BinderImpl__GenBundleImpl);

/** @private {ValueBoxEditorDecorator__BinderImpl__GenBundleImpl} */
ValueBoxEditorDecorator__BinderImpl__GenBundleImpl.$f__instance0__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl_;
/** @public {HashMap<?string, ResourcePrototype>} */
ValueBoxEditorDecorator__BinderImpl__GenBundleImpl.f_resourceMap__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl_;
/** @private {ValueBoxEditorDecorator__BinderImpl__GenCss__style} */
ValueBoxEditorDecorator__BinderImpl__GenBundleImpl.$f_style__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl_;

exports = ValueBoxEditorDecorator__BinderImpl__GenBundleImpl; 
//# sourceMappingURL=ValueBoxEditorDecorator_BinderImpl_GenBundleImpl.js.map