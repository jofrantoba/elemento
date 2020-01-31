goog.module('org.gwtproject.user.client.ui.impl.RichTextAreaImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLIFrameElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLIFrameElement.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let HasInitializeHandlers = goog.forwardDeclare('org.gwtproject.event.logical.shared.HasInitializeHandlers$impl');
let InitializeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.InitializeEvent$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');

class RichTextAreaImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Object}*/
  this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl;
  /**@type {HasInitializeHandlers}*/
  this.f_owner__org_gwtproject_user_client_ui_impl_RichTextAreaImpl;
 }
 /** @return {!RichTextAreaImpl} */
 static $create__() {
  RichTextAreaImpl.$clinit();
  let $instance = new RichTextAreaImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_impl_RichTextAreaImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_impl_RichTextAreaImpl__() {
  this.$ctor__java_lang_Object__();
  this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl = this.m_createElement__();
 }
 /** @return {Object} */
 m_getElement__() {
  return this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl;
 }
 /** @return {?string} */
 m_getHTML__() {
  return $Overlay.m_getPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl, "value");
 }
 /** @return {?string} */
 m_getText__() {
  return $Overlay.m_getPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl, "value");
 }
 
 m_initElement__() {
  this.m_onElementInitialized__();
 }
 /** @return {boolean} */
 m_isEnabled__() {
  return !$Overlay.m_getPropertyBoolean__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl, "disabled");
 }
 
 m_setEnabled__boolean(/** boolean */ enabled) {
  $Overlay.m_setPropertyBoolean__$devirt__org_gwtproject_dom_client_Element__java_lang_String__boolean(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl, "disabled", !enabled);
 }
 
 m_setFocus__boolean(/** boolean */ focused) {
  let iframe = /**@type {HTMLIFrameElement}*/ (Js.m_uncheckedCast__java_lang_Object(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl));
  if (focused) {
   iframe.focus();
  } else {
   iframe.blur();
  }
 }
 
 m_setHTML__java_lang_String(/** ?string */ html) {
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl, "value", html);
 }
 
 m_setOwner__org_gwtproject_event_logical_shared_HasInitializeHandlers(/** HasInitializeHandlers */ owner) {
  this.f_owner__org_gwtproject_user_client_ui_impl_RichTextAreaImpl = owner;
 }
 
 m_setText__java_lang_String(/** ?string */ text) {
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl, "value", text);
 }
 
 m_uninitElement__() {}
 /** @return {Object} */
 m_createElement__() {
  return DOM.m_createTextArea__();
 }
 
 m_hookEvents__() {
  DOM.m_sinkEvents__org_gwtproject_dom_client_Element__int(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl, Event.f_MOUSEEVENTS__org_gwtproject_user_client_Event | Event.f_KEYEVENTS__org_gwtproject_user_client_Event | Event.f_ONCHANGE__org_gwtproject_user_client_Event | Event.f_ONCLICK__org_gwtproject_user_client_Event | Event.f_FOCUSEVENTS__org_gwtproject_user_client_Event);
 }
 
 m_onElementInitialized__() {
  this.m_hookEvents__();
  if (!$Equality.$same(this.f_owner__org_gwtproject_user_client_ui_impl_RichTextAreaImpl, null)) {
   InitializeEvent.m_fire__org_gwtproject_event_logical_shared_HasInitializeHandlers(this.f_owner__org_gwtproject_user_client_ui_impl_RichTextAreaImpl);
  }
 }
 
 static $clinit() {
  RichTextAreaImpl.$clinit = () =>{};
  RichTextAreaImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RichTextAreaImpl;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  InitializeEvent = goog.module.get('org.gwtproject.event.logical.shared.InitializeEvent$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
 }
 
}
$Util.$setClassMetadata(RichTextAreaImpl, 'org.gwtproject.user.client.ui.impl.RichTextAreaImpl');

exports = RichTextAreaImpl; 
//# sourceMappingURL=RichTextAreaImpl.js.map