goog.module('org.gwtproject.user.client.ui.RichTextArea$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasInitializeHandlers = goog.require('org.gwtproject.event.logical.shared.HasInitializeHandlers$impl');
const HasSafeHtml = goog.require('org.gwtproject.safehtml.client.HasSafeHtml$impl');
const FocusWidget = goog.require('org.gwtproject.user.client.ui.FocusWidget$impl');
const HasHTML = goog.require('org.gwtproject.user.client.ui.HasHTML$impl');

let InitializeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.InitializeEvent$impl');
let InitializeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.InitializeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let BasicFormatter = goog.forwardDeclare('org.gwtproject.user.client.ui.RichTextArea.BasicFormatter$impl');
let ExtendedFormatter = goog.forwardDeclare('org.gwtproject.user.client.ui.RichTextArea.ExtendedFormatter$impl');
let Formatter = goog.forwardDeclare('org.gwtproject.user.client.ui.RichTextArea.Formatter$impl');
let RichTextAreaImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.impl.RichTextAreaImpl$impl');
let RichTextAreaImplMozilla = goog.forwardDeclare('org.gwtproject.user.client.ui.impl.RichTextAreaImplMozilla$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {HasHTML}
 * @implements {HasInitializeHandlers}
 * @implements {HasSafeHtml}
  */
class RichTextArea extends FocusWidget {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {RichTextAreaImpl} */
  this.f_impl__org_gwtproject_user_client_ui_RichTextArea_;
 }
 /**
  * @return {!RichTextArea}
  * @public
  */
 static $create__() {
  RichTextArea.$clinit();
  let $instance = new RichTextArea();
  $instance.$ctor__org_gwtproject_user_client_ui_RichTextArea__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_RichTextArea__() {
  this.$ctor__org_gwtproject_user_client_ui_FocusWidget__();
  this.$init___$p_org_gwtproject_user_client_ui_RichTextArea();
  this.m_setElement__org_gwtproject_dom_client_Element(this.f_impl__org_gwtproject_user_client_ui_RichTextArea_.m_getElement__());
  this.m_setStyleName__java_lang_String("gwt-RichTextArea");
  this.f_impl__org_gwtproject_user_client_ui_RichTextArea_.m_setOwner__org_gwtproject_event_logical_shared_HasInitializeHandlers(this);
 }
 /**
  * @override
  * @param {InitializeHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addInitializeHandler__org_gwtproject_event_logical_shared_InitializeHandler(handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, InitializeEvent.m_getType__());
 }
 /**
  * @return {BasicFormatter}
  * @public
  * @deprecated
  */
 m_getBasicFormatter__() {
  return this.m_getFormatter__();
 }
 /**
  * @return {ExtendedFormatter}
  * @public
  * @deprecated
  */
 m_getExtendedFormatter__() {
  return this.m_getFormatter__();
 }
 /**
  * @return {Formatter}
  * @public
  */
 m_getFormatter__() {
  if (Formatter.$isInstance(this.f_impl__org_gwtproject_user_client_ui_RichTextArea_)) {
   return /**@type {Formatter} */ ($Casts.$to(this.f_impl__org_gwtproject_user_client_ui_RichTextArea_, Formatter));
  }
  return null;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getHTML__() {
  return this.f_impl__org_gwtproject_user_client_ui_RichTextArea_.m_getHTML__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getText__() {
  return this.f_impl__org_gwtproject_user_client_ui_RichTextArea_.m_getText__();
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isEnabled__() {
  return this.f_impl__org_gwtproject_user_client_ui_RichTextArea_.m_isEnabled__();
 }
 /**
  * @override
  * @param {boolean} enabled
  * @public
  */
 m_setEnabled__boolean(enabled) {
  this.f_impl__org_gwtproject_user_client_ui_RichTextArea_.m_setEnabled__boolean(enabled);
 }
 /**
  * @override
  * @param {boolean} focused
  * @public
  */
 m_setFocus__boolean(focused) {
  if (this.m_isAttached__()) {
   this.f_impl__org_gwtproject_user_client_ui_RichTextArea_.m_setFocus__boolean(focused);
  }
 }
 /**
  * @override
  * @param {?string} html
  * @public
  */
 m_setHTML__java_lang_String(html) {
  this.f_impl__org_gwtproject_user_client_ui_RichTextArea_.m_setHTML__java_lang_String(html);
 }
 /**
  * @override
  * @param {SafeHtml} html
  * @public
  */
 m_setHTML__org_gwtproject_safehtml_shared_SafeHtml(html) {
  this.m_setHTML__java_lang_String(html.m_asString__());
 }
 /**
  * @override
  * @param {?string} text
  * @public
  */
 m_setText__java_lang_String(text) {
  this.f_impl__org_gwtproject_user_client_ui_RichTextArea_.m_setText__java_lang_String(text);
 }
 /**
  * @override
  * @public
  */
 m_onAttach__() {
  super.m_onAttach__();
  this.f_impl__org_gwtproject_user_client_ui_RichTextArea_.m_initElement__();
 }
 /**
  * @override
  * @public
  */
 m_onDetach__() {
  super.m_onDetach__();
  this.f_impl__org_gwtproject_user_client_ui_RichTextArea_.m_uninitElement__();
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_RichTextArea() {
  this.f_impl__org_gwtproject_user_client_ui_RichTextArea_ = RichTextAreaImplMozilla.$create__();
 }
 /**
  * @public
  */
 static $clinit() {
  RichTextArea.$clinit = () =>{};
  RichTextArea.$loadModules();
  FocusWidget.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof RichTextArea;
 }
 /**
  * @public
  */
 static $loadModules() {
  InitializeEvent = goog.module.get('org.gwtproject.event.logical.shared.InitializeEvent$impl');
  Formatter = goog.module.get('org.gwtproject.user.client.ui.RichTextArea.Formatter$impl');
  RichTextAreaImplMozilla = goog.module.get('org.gwtproject.user.client.ui.impl.RichTextAreaImplMozilla$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(RichTextArea, 'org.gwtproject.user.client.ui.RichTextArea');

HasHTML.$markImplementor(RichTextArea);
HasInitializeHandlers.$markImplementor(RichTextArea);
HasSafeHtml.$markImplementor(RichTextArea);

exports = RichTextArea; 
//# sourceMappingURL=RichTextArea.js.map