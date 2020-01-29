goog.module('org.gwtproject.user.client.ui.FormPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SimplePanel = goog.require('org.gwtproject.user.client.ui.SimplePanel$impl');
const FormPanelImplHost = goog.require('org.gwtproject.user.client.ui.impl.FormPanelImplHost$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let Scheduler = goog.forwardDeclare('org.gwtproject.core.client.Scheduler$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let FormElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FormElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel.$1$impl');
let IFrameTemplate = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel.IFrameTemplate$impl');
let SubmitCompleteEvent = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel.SubmitCompleteEvent$impl');
let SubmitCompleteHandler = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel.SubmitCompleteHandler$impl');
let SubmitEvent = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel.SubmitEvent$impl');
let SubmitHandler = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel.SubmitHandler$impl');
let NamedFrame = goog.forwardDeclare('org.gwtproject.user.client.ui.NamedFrame$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let FormPanelImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.impl.FormPanelImpl$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {FormPanelImplHost}
  */
class FormPanel extends SimplePanel {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_frameName__org_gwtproject_user_client_ui_FormPanel_;
  /** @public {Object} */
  this.f_synthesizedFrame__org_gwtproject_user_client_ui_FormPanel_;
 }
 /**
  * @param {Object} element
  * @return {FormPanel}
  * @public
  */
 static m_wrap__org_gwtproject_dom_client_Element(element) {
  FormPanel.$clinit();
  $Asserts.$assert($Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Document_$Overlay.m_get__().body, element));
  let formPanel = FormPanel.$create__org_gwtproject_dom_client_Element(element);
  formPanel.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(formPanel);
  return formPanel;
 }
 /**
  * @param {Object} element
  * @param {boolean} createIFrame
  * @return {FormPanel}
  * @public
  */
 static m_wrap__org_gwtproject_dom_client_Element__boolean(element, createIFrame) {
  FormPanel.$clinit();
  $Asserts.$assert($Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Document_$Overlay.m_get__().body, element));
  let formPanel = FormPanel.$create__org_gwtproject_dom_client_Element__boolean(element, createIFrame);
  formPanel.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(formPanel);
  return formPanel;
 }
 /**
  * Factory method corresponding to constructor 'FormPanel()'.
  * @return {!FormPanel}
  * @public
  */
 static $create__() {
  FormPanel.$clinit();
  let $instance = new FormPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_FormPanel__();
  return $instance;
 }
 /**
  * Initialization from constructor 'FormPanel()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_FormPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_FormPanel__org_gwtproject_dom_client_Element__boolean(Document_$Overlay.m_createFormElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__()), true);
 }
 /**
  * Factory method corresponding to constructor 'FormPanel(NamedFrame)'.
  * @param {NamedFrame} frameTarget
  * @return {!FormPanel}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_NamedFrame(frameTarget) {
  FormPanel.$clinit();
  let $instance = new FormPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_FormPanel__org_gwtproject_user_client_ui_NamedFrame(frameTarget);
  return $instance;
 }
 /**
  * Initialization from constructor 'FormPanel(NamedFrame)'.
  * @param {NamedFrame} frameTarget
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_FormPanel__org_gwtproject_user_client_ui_NamedFrame(frameTarget) {
  this.$ctor__org_gwtproject_user_client_ui_FormPanel__java_lang_String(frameTarget.m_getName__());
 }
 /**
  * Factory method corresponding to constructor 'FormPanel(String)'.
  * @param {?string} target
  * @return {!FormPanel}
  * @public
  */
 static $create__java_lang_String(target) {
  FormPanel.$clinit();
  let $instance = new FormPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_FormPanel__java_lang_String(target);
  return $instance;
 }
 /**
  * Initialization from constructor 'FormPanel(String)'.
  * @param {?string} target
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_FormPanel__java_lang_String(target) {
  this.$ctor__org_gwtproject_user_client_ui_SimplePanel__org_gwtproject_dom_client_Element(Document_$Overlay.m_createFormElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__()));
  this.m_setTarget__java_lang_String_$p_org_gwtproject_user_client_ui_FormPanel(target);
 }
 /**
  * Factory method corresponding to constructor 'FormPanel(Element)'.
  * @param {Object} element
  * @return {!FormPanel}
  * @public
  */
 static $create__org_gwtproject_dom_client_Element(element) {
  FormPanel.$clinit();
  let $instance = new FormPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_FormPanel__org_gwtproject_dom_client_Element(element);
  return $instance;
 }
 /**
  * Initialization from constructor 'FormPanel(Element)'.
  * @param {Object} element
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_FormPanel__org_gwtproject_dom_client_Element(element) {
  this.$ctor__org_gwtproject_user_client_ui_FormPanel__org_gwtproject_dom_client_Element__boolean(element, false);
 }
 /**
  * Factory method corresponding to constructor 'FormPanel(Element, boolean)'.
  * @param {Object} element
  * @param {boolean} createIFrame
  * @return {!FormPanel}
  * @public
  */
 static $create__org_gwtproject_dom_client_Element__boolean(element, createIFrame) {
  FormPanel.$clinit();
  let $instance = new FormPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_FormPanel__org_gwtproject_dom_client_Element__boolean(element, createIFrame);
  return $instance;
 }
 /**
  * Initialization from constructor 'FormPanel(Element, boolean)'.
  * @param {Object} element
  * @param {boolean} createIFrame
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_FormPanel__org_gwtproject_dom_client_Element__boolean(element, createIFrame) {
  this.$ctor__org_gwtproject_user_client_ui_SimplePanel__org_gwtproject_dom_client_Element(element);
  FormElement_$Overlay.m_as__org_gwtproject_dom_client_Element(element);
  if (createIFrame) {
   $Asserts.$assertWithMessage(($Equality.$same(this.m_getTarget__(), null) || (j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(this.m_getTarget__())) == 0)), "Cannot create target iframe if the form's target is already set.");
   this.f_frameName__org_gwtproject_user_client_ui_FormPanel_ = "FormPanel_" + "_" + (++FormPanel.f_formId__org_gwtproject_user_client_ui_FormPanel_);
   this.m_setTarget__java_lang_String_$p_org_gwtproject_user_client_ui_FormPanel(this.f_frameName__org_gwtproject_user_client_ui_FormPanel_);
   this.m_sinkEvents__int(Event.f_ONLOAD__org_gwtproject_user_client_Event);
  }
 }
 /**
  * @param {SubmitCompleteHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addSubmitCompleteHandler__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteHandler(handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, SubmitCompleteEvent.m_getType__());
 }
 /**
  * @param {SubmitHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addSubmitHandler__org_gwtproject_user_client_ui_FormPanel_SubmitHandler(handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, SubmitEvent.m_getType__());
 }
 /**
  * @return {?string}
  * @public
  */
 m_getAction__() {
  return this.m_getFormElement___$p_org_gwtproject_user_client_ui_FormPanel().action;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getEncoding__() {
  return FormPanel.$f_impl__org_gwtproject_user_client_ui_FormPanel_.m_getEncoding__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /**
  * @return {?string}
  * @public
  */
 m_getMethod__() {
  return this.m_getFormElement___$p_org_gwtproject_user_client_ui_FormPanel().method;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getTarget__() {
  return this.m_getFormElement___$p_org_gwtproject_user_client_ui_FormPanel().target;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_onFormSubmit__() {
  return this.m_onFormSubmitImpl___$p_org_gwtproject_user_client_ui_FormPanel();
 }
 /**
  * @override
  * @public
  */
 m_onFrameLoad__() {
  this.m_onFrameLoadImpl___$p_org_gwtproject_user_client_ui_FormPanel();
 }
 /**
  * @public
  */
 m_reset__() {
  FormPanel.$f_impl__org_gwtproject_user_client_ui_FormPanel_.m_reset__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /**
  * @param {?string} url
  * @public
  */
 m_setAction__java_lang_String(url) {
  this.m_getFormElement___$p_org_gwtproject_user_client_ui_FormPanel().action = url;
 }
 /**
  * @param {SafeUri} url
  * @public
  */
 m_setAction__org_gwtproject_safehtml_shared_SafeUri(url) {
  FormElement_$Overlay.m_setAction__$devirt__org_gwtproject_dom_client_FormElement__org_gwtproject_safehtml_shared_SafeUri(this.m_getFormElement___$p_org_gwtproject_user_client_ui_FormPanel(), url);
 }
 /**
  * @param {?string} encodingType
  * @public
  */
 m_setEncoding__java_lang_String(encodingType) {
  FormPanel.$f_impl__org_gwtproject_user_client_ui_FormPanel_.m_setEncoding__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__(), encodingType);
 }
 /**
  * @param {?string} method
  * @public
  */
 m_setMethod__java_lang_String(method) {
  this.m_getFormElement___$p_org_gwtproject_user_client_ui_FormPanel().method = method;
 }
 /**
  * @public
  */
 m_submit__() {
  if (!this.m_fireSubmitEvent___$p_org_gwtproject_user_client_ui_FormPanel()) {
   return;
  }
  FormPanel.$f_impl__org_gwtproject_user_client_ui_FormPanel_.m_submit__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.m_getElement__(), this.f_synthesizedFrame__org_gwtproject_user_client_ui_FormPanel_);
 }
 /**
  * @override
  * @public
  */
 m_onAttach__() {
  super.m_onAttach__();
  if (!$Equality.$same(this.f_frameName__org_gwtproject_user_client_ui_FormPanel_, null)) {
   this.m_createFrame___$p_org_gwtproject_user_client_ui_FormPanel();
   Document_$Overlay.m_get__().body.appendChild(this.f_synthesizedFrame__org_gwtproject_user_client_ui_FormPanel_);
  }
  FormPanel.$f_impl__org_gwtproject_user_client_ui_FormPanel_.m_hookEvents__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_impl_FormPanelImplHost(this.f_synthesizedFrame__org_gwtproject_user_client_ui_FormPanel_, this.m_getElement__(), this);
 }
 /**
  * @override
  * @public
  */
 m_onDetach__() {
  super.m_onDetach__();
  FormPanel.$f_impl__org_gwtproject_user_client_ui_FormPanel_.m_unhookEvents__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.f_synthesizedFrame__org_gwtproject_user_client_ui_FormPanel_, this.m_getElement__());
  if (!$Equality.$same(this.f_synthesizedFrame__org_gwtproject_user_client_ui_FormPanel_, null)) {
   Document_$Overlay.m_get__().body.removeChild(this.f_synthesizedFrame__org_gwtproject_user_client_ui_FormPanel_);
   this.f_synthesizedFrame__org_gwtproject_user_client_ui_FormPanel_ = null;
  }
 }
 /**
  * @return {Object}
  * @public
  */
 m_getSynthesizedIFrame___$pp_org_gwtproject_user_client_ui() {
  return this.f_synthesizedFrame__org_gwtproject_user_client_ui_FormPanel_;
 }
 /**
  * @public
  */
 m_createFrame___$p_org_gwtproject_user_client_ui_FormPanel() {
  let dummy = Document_$Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  Element_$Overlay.m_setInnerSafeHtml__$devirt__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(dummy, IFrameTemplate.f_INSTANCE__org_gwtproject_user_client_ui_FormPanel_IFrameTemplate.m_get__java_lang_String(this.f_frameName__org_gwtproject_user_client_ui_FormPanel_));
  this.f_synthesizedFrame__org_gwtproject_user_client_ui_FormPanel_ = Element_$Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(dummy);
 }
 /**
  * @return {boolean}
  * @public
  */
 m_fireSubmitEvent___$p_org_gwtproject_user_client_ui_FormPanel() {
  let event = SubmitEvent.$create__();
  this.m_fireEvent__org_gwtproject_event_shared_Event(event);
  return !event.m_isCanceled__();
 }
 /**
  * @return {Object}
  * @public
  */
 m_getFormElement___$p_org_gwtproject_user_client_ui_FormPanel() {
  return /**@type {Object} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(this.m_getElement__()), FormElement_$Overlay));
 }
 /**
  * @return {boolean}
  * @public
  */
 m_onFormSubmitImpl___$p_org_gwtproject_user_client_ui_FormPanel() {
  return this.m_fireSubmitEvent___$p_org_gwtproject_user_client_ui_FormPanel();
 }
 /**
  * @public
  */
 m_onFrameLoadImpl___$p_org_gwtproject_user_client_ui_FormPanel() {
  Scheduler.m_get__().m_scheduleDeferred__org_gwtproject_core_client_Scheduler_ScheduledCommand($1.$create__org_gwtproject_user_client_ui_FormPanel(this));
 }
 /**
  * @param {?string} target
  * @public
  */
 m_setTarget__java_lang_String_$p_org_gwtproject_user_client_ui_FormPanel(target) {
  this.m_getFormElement___$p_org_gwtproject_user_client_ui_FormPanel().target = target;
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {Consumer<?>} arg0
  * @public
  */
 m_forEach__java_util_function_Consumer(arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @return {Spliterator<Widget>}
  * @public
  */
 m_spliterator__() {
  return /**@type {Spliterator<Widget>} */ (Iterable.m_spliterator__$default__java_lang_Iterable(this));
 }
 /**
  * @return {FormPanelImpl}
  * @public
  */
 static get f_impl__org_gwtproject_user_client_ui_FormPanel_() {
  return (FormPanel.$clinit(), FormPanel.$f_impl__org_gwtproject_user_client_ui_FormPanel_);
 }
 /**
  * @param {FormPanelImpl} value
  * @public
  */
 static set f_impl__org_gwtproject_user_client_ui_FormPanel_(value) {
  (FormPanel.$clinit(), FormPanel.$f_impl__org_gwtproject_user_client_ui_FormPanel_ = value);
 }
 /**
  * @public
  */
 static $clinit() {
  FormPanel.$clinit = () =>{};
  FormPanel.$loadModules();
  SimplePanel.$clinit();
  FormPanel.f_formId__org_gwtproject_user_client_ui_FormPanel_ = 0;
  FormPanel.$f_impl__org_gwtproject_user_client_ui_FormPanel_ = FormPanelImpl.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof FormPanel;
 }
 /**
  * @public
  */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  Scheduler = goog.module.get('org.gwtproject.core.client.Scheduler$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  FormElement_$Overlay = goog.module.get('org.gwtproject.dom.client.FormElement.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.FormPanel.$1$impl');
  IFrameTemplate = goog.module.get('org.gwtproject.user.client.ui.FormPanel.IFrameTemplate$impl');
  SubmitCompleteEvent = goog.module.get('org.gwtproject.user.client.ui.FormPanel.SubmitCompleteEvent$impl');
  SubmitEvent = goog.module.get('org.gwtproject.user.client.ui.FormPanel.SubmitEvent$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  FormPanelImpl = goog.module.get('org.gwtproject.user.client.ui.impl.FormPanelImpl$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(FormPanel, 'org.gwtproject.user.client.ui.FormPanel');

FormPanelImplHost.$markImplementor(FormPanel);

/** @public {?string} @const */
FormPanel.f_ENCODING_MULTIPART__org_gwtproject_user_client_ui_FormPanel = "multipart/form-data";
/** @public {?string} @const */
FormPanel.f_ENCODING_URLENCODED__org_gwtproject_user_client_ui_FormPanel = "application/x-www-form-urlencoded";
/** @public {?string} @const */
FormPanel.f_METHOD_GET__org_gwtproject_user_client_ui_FormPanel = "get";
/** @public {?string} @const */
FormPanel.f_METHOD_POST__org_gwtproject_user_client_ui_FormPanel = "post";
/** @public {number} */
FormPanel.f_formId__org_gwtproject_user_client_ui_FormPanel_ = 0;
/** @private {FormPanelImpl} */
FormPanel.$f_impl__org_gwtproject_user_client_ui_FormPanel_;

exports = FormPanel; 
//# sourceMappingURL=FormPanel.js.map