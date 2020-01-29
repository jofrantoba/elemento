goog.module('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl.Widgets$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let DivElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.DivElement.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let ValueBoxEditorDecorator = goog.forwardDeclare('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator$impl');
let ValueBoxEditorDecorator__BinderImpl = goog.forwardDeclare('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl$impl');
let ValueBoxEditorDecorator__BinderImpl__GenBundle = goog.forwardDeclare('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_GenBundle$impl');
let ValueBoxEditorDecorator__BinderImpl__GenBundleImpl = goog.forwardDeclare('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_GenBundleImpl$impl');
let ValueBoxEditorDecorator__BinderImpl__GenCss__style = goog.forwardDeclare('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_GenCss_style$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let LazyDomElement = goog.forwardDeclare('org.gwtproject.uibinder.client.LazyDomElement$impl');
let UiBinderUtil = goog.forwardDeclare('org.gwtproject.uibinder.client.UiBinderUtil$impl');
let HTMLPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.HTMLPanel$impl');
let SimplePanel = goog.forwardDeclare('org.gwtproject.user.client.ui.SimplePanel$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Widgets extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {ValueBoxEditorDecorator__BinderImpl} */
  this.f_$outer_this__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets;
  /** @public {ValueBoxEditorDecorator} */
  this.f_owner__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets_;
  /** @public {ValueBoxEditorDecorator__BinderImpl__GenCss__style} */
  this.f_style__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets_;
  /** @public {?string} */
  this.f_domId0__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets_;
  /** @public {?string} */
  this.f_domId1__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets_;
  /** @public {LazyDomElement} */
  this.f_domId1Element__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets_;
 }
 /**
  * @param {ValueBoxEditorDecorator__BinderImpl} $outer_this
  * @param {ValueBoxEditorDecorator} owner
  * @return {!Widgets}
  * @public
  */
 static $create__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator($outer_this, owner) {
  Widgets.$clinit();
  let $instance = new Widgets();
  $instance.$ctor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator($outer_this, owner);
  return $instance;
 }
 /**
  * @param {ValueBoxEditorDecorator__BinderImpl} $outer_this
  * @param {ValueBoxEditorDecorator} owner
  * @public
  */
 $ctor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator($outer_this, owner) {
  this.f_$outer_this__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets = $outer_this;
  this.$ctor__java_lang_Object__();
  this.f_owner__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets_ = owner;
  this.m_build_style___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets();
  this.m_build_domId0___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets();
  this.m_build_domId1___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets();
  this.m_build_domId1Element___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets();
 }
 /**
  * @return {SafeHtml}
  * @public
  */
 m_template_html1___$pp_org_gwtproject_editor_ui_client() {
  return this.f_$outer_this__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets.f_template__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl.m_html1__java_lang_String__java_lang_String__java_lang_String("" + j_l_String.m_valueOf__java_lang_Object(this.m_get_style___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets().m_errorLabel__()) + "", this.m_get_domId0___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets(), this.m_get_domId1___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets());
 }
 /**
  * @return {ValueBoxEditorDecorator__BinderImpl__GenBundle}
  * @public
  */
 m_get_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets() {
  return this.m_build_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets();
 }
 /**
  * @return {ValueBoxEditorDecorator__BinderImpl__GenBundle}
  * @public
  */
 m_build_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets() {
  let clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay = ValueBoxEditorDecorator__BinderImpl__GenBundleImpl.$create__();
  return clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay;
 }
 /**
  * @return {ValueBoxEditorDecorator__BinderImpl__GenCss__style}
  * @public
  */
 m_get_style___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets() {
  return this.f_style__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets_;
 }
 /**
  * @return {ValueBoxEditorDecorator__BinderImpl__GenCss__style}
  * @public
  */
 m_build_style___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets() {
  this.f_style__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets_ = this.m_get_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets().m_style__();
  this.f_style__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets_.m_ensureInjected__();
  return this.f_style__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets_;
 }
 /**
  * @return {HTMLPanel}
  * @public
  */
 m_get_f_HTMLPanel1___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets() {
  return this.m_build_f_HTMLPanel1___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets();
 }
 /**
  * @return {HTMLPanel}
  * @public
  */
 m_build_f_HTMLPanel1___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets() {
  let f_HTMLPanel1 = HTMLPanel.$create__java_lang_String(this.m_template_html1___$pp_org_gwtproject_editor_ui_client().m_asString__());
  {
   let __attachRecord__ = UiBinderUtil.m_attachToDom__org_gwtproject_dom_client_Element(f_HTMLPanel1.m_getElement__());
   this.m_get_errorLabel___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets();
   this.m_get_domId1Element___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets().m_get__();
   __attachRecord__.m_detach__();
  }
  f_HTMLPanel1.m_addAndReplaceElement__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element(this.m_get_contents___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets(), this.m_get_domId1Element___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets().m_get__());
  return f_HTMLPanel1;
 }
 /**
  * @return {Object}
  * @public
  */
 m_get_errorLabel___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets() {
  return this.m_build_errorLabel___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets();
 }
 /**
  * @return {Object}
  * @public
  */
 m_build_errorLabel___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets() {
  let errorLabel = /**@type {Object} */ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(LazyDomElement.$create__java_lang_String(this.m_get_domId0___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets()).m_get__()), Element_$Overlay));
  this.f_owner__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets_.f_errorLabel__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator = /**@type {Object} */ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(errorLabel), DivElement_$Overlay));
  return errorLabel;
 }
 /**
  * @return {?string}
  * @public
  */
 m_get_domId0___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets() {
  return this.f_domId0__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets_;
 }
 /**
  * @return {?string}
  * @public
  */
 m_build_domId0___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets() {
  this.f_domId0__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets_ = Document_$Overlay.m_createUniqueId__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  return this.f_domId0__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets_;
 }
 /**
  * @return {?string}
  * @public
  */
 m_get_domId1___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets() {
  return this.f_domId1__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets_;
 }
 /**
  * @return {?string}
  * @public
  */
 m_build_domId1___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets() {
  this.f_domId1__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets_ = Document_$Overlay.m_createUniqueId__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  return this.f_domId1__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets_;
 }
 /**
  * @return {SimplePanel}
  * @public
  */
 m_get_contents___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets() {
  return this.m_build_contents___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets();
 }
 /**
  * @return {SimplePanel}
  * @public
  */
 m_build_contents___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets() {
  let contents = SimplePanel.$create__();
  contents.m_setStylePrimaryName__java_lang_String("" + j_l_String.m_valueOf__java_lang_Object(this.m_get_style___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets().m_contents__()) + "");
  this.f_owner__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets_.f_contents__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator = contents;
  return contents;
 }
 /**
  * @return {LazyDomElement}
  * @public
  */
 m_get_domId1Element___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets() {
  return this.f_domId1Element__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets_;
 }
 /**
  * @return {LazyDomElement}
  * @public
  */
 m_build_domId1Element___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets() {
  this.f_domId1Element__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets_ = /**@type {!LazyDomElement<Object>} */ (LazyDomElement.$create__java_lang_String(this.m_get_domId1___$p_org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets()));
  return this.f_domId1Element__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Widgets_;
 }
 /**
  * @public
  */
 static $clinit() {
  Widgets.$clinit = () =>{};
  Widgets.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Widgets;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  DivElement_$Overlay = goog.module.get('org.gwtproject.dom.client.DivElement.$Overlay$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  ValueBoxEditorDecorator__BinderImpl__GenBundleImpl = goog.module.get('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_GenBundleImpl$impl');
  LazyDomElement = goog.module.get('org.gwtproject.uibinder.client.LazyDomElement$impl');
  UiBinderUtil = goog.module.get('org.gwtproject.uibinder.client.UiBinderUtil$impl');
  HTMLPanel = goog.module.get('org.gwtproject.user.client.ui.HTMLPanel$impl');
  SimplePanel = goog.module.get('org.gwtproject.user.client.ui.SimplePanel$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Widgets, 'org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl$Widgets');

exports = Widgets; 
//# sourceMappingURL=ValueBoxEditorDecorator_BinderImpl$Widgets.js.map