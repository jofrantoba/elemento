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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Object} */
  this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl;
  /** @public {HasInitializeHandlers} */
  this.f_owner__org_gwtproject_user_client_ui_impl_RichTextAreaImpl;
 }
 /**
  * @return {!RichTextAreaImpl}
  * @public
  */
 static $create__() {
  RichTextAreaImpl.$clinit();
  let $instance = new RichTextAreaImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_impl_RichTextAreaImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_impl_RichTextAreaImpl__() {
  this.$ctor__java_lang_Object__();
  this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl = this.m_createElement__();
 }
 /**
  * @return {Object}
  * @public
  */
 m_getElement__() {
  return this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getHTML__() {
  return $Overlay.m_getPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl, "value");
 }
 /**
  * @return {?string}
  * @public
  */
 m_getText__() {
  return $Overlay.m_getPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl, "value");
 }
 /**
  * @public
  */
 m_initElement__() {
  this.m_onElementInitialized__();
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isEnabled__() {
  return !$Overlay.m_getPropertyBoolean__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl, "disabled");
 }
 /**
  * @param {boolean} enabled
  * @public
  */
 m_setEnabled__boolean(enabled) {
  $Overlay.m_setPropertyBoolean__$devirt__org_gwtproject_dom_client_Element__java_lang_String__boolean(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl, "disabled", !enabled);
 }
 /**
  * @param {boolean} focused
  * @public
  */
 m_setFocus__boolean(focused) {
  let iframe = /**@type {HTMLIFrameElement} */ (Js.m_uncheckedCast__java_lang_Object(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl));
  if (focused) {
   iframe.focus();
  } else {
   iframe.blur();
  }
 }
 /**
  * @param {?string} html
  * @public
  */
 m_setHTML__java_lang_String(html) {
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl, "value", html);
 }
 /**
  * @param {HasInitializeHandlers} owner
  * @public
  */
 m_setOwner__org_gwtproject_event_logical_shared_HasInitializeHandlers(owner) {
  this.f_owner__org_gwtproject_user_client_ui_impl_RichTextAreaImpl = owner;
 }
 /**
  * @param {?string} text
  * @public
  */
 m_setText__java_lang_String(text) {
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl, "value", text);
 }
 /**
  * @public
  */
 m_uninitElement__() {}
 /**
  * @return {Object}
  * @public
  */
 m_createElement__() {
  return DOM.m_createTextArea__();
 }
 /**
  * @public
  */
 m_hookEvents__() {
  DOM.m_sinkEvents__org_gwtproject_dom_client_Element__int(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl, Event.f_MOUSEEVENTS__org_gwtproject_user_client_Event | Event.f_KEYEVENTS__org_gwtproject_user_client_Event | Event.f_ONCHANGE__org_gwtproject_user_client_Event | Event.f_ONCLICK__org_gwtproject_user_client_Event | Event.f_FOCUSEVENTS__org_gwtproject_user_client_Event);
 }
 /**
  * @public
  */
 m_onElementInitialized__() {
  this.m_hookEvents__();
  if (!$Equality.$same(this.f_owner__org_gwtproject_user_client_ui_impl_RichTextAreaImpl, null)) {
   InitializeEvent.m_fire__org_gwtproject_event_logical_shared_HasInitializeHandlers(this.f_owner__org_gwtproject_user_client_ui_impl_RichTextAreaImpl);
  }
 }
 /**
  * @public
  */
 static $clinit() {
  RichTextAreaImpl.$clinit = () =>{};
  RichTextAreaImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof RichTextAreaImpl;
 }
 /**
  * @public
  */
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