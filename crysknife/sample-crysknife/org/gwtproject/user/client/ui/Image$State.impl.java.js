goog.module('org.gwtproject.user.client.ui.Image.State$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Scheduler = goog.forwardDeclare('org.gwtproject.core.client.Scheduler$impl');
let ScheduledCommand = goog.forwardDeclare('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let ImageElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ImageElement.$Overlay$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let Image = goog.forwardDeclare('org.gwtproject.user.client.ui.Image$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.Image.State.$1$impl');

/**
 * @abstract
  */
class State extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ScheduledCommand}*/
  this.f_syntheticEventCommand__org_gwtproject_user_client_ui_Image_State_;
 }
 
 $ctor__org_gwtproject_user_client_ui_Image_State__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_client_ui_Image_State();
 }
 /** @abstract @return {number} */
 m_getHeight__org_gwtproject_user_client_ui_Image(/** Image */ image) {}
 /** @abstract @return {Object} */
 m_getImageElement__org_gwtproject_user_client_ui_Image(/** Image */ image) {}
 /** @abstract @return {number} */
 m_getOriginLeft__() {}
 /** @abstract @return {number} */
 m_getOriginTop__() {}
 /** @abstract @return {SafeUri} */
 m_getUrl__org_gwtproject_user_client_ui_Image(/** Image */ image) {}
 /** @abstract @return {number} */
 m_getWidth__org_gwtproject_user_client_ui_Image(/** Image */ image) {}
 
 m_onLoad__org_gwtproject_user_client_ui_Image(/** Image */ image) {
  let unhandledEvent = $Overlay.m_getPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getImageElement__org_gwtproject_user_client_ui_Image(image), Image.f_UNHANDLED_EVENT_ATTR__org_gwtproject_user_client_ui_Image_);
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_LOAD__org_gwtproject_dom_client_BrowserEvents, unhandledEvent)) {
   this.m_fireSyntheticLoadEvent__org_gwtproject_user_client_ui_Image(image);
  }
 }
 
 m_onLoadEvent__org_gwtproject_user_client_ui_Image(/** Image */ image) {}
 /** @abstract */
 m_setUrl__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri(/** Image */ image, /** SafeUri */ url) {}
 /** @abstract */
 m_setUrl__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int(/** Image */ image, /** SafeUri */ url, /** number */ width, /** number */ height) {}
 /** @abstract */
 m_setUrlAndVisibleRect__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(/** Image */ image, /** SafeUri */ url, /** number */ left, /** number */ top, /** number */ width, /** number */ height) {}
 /** @abstract */
 m_setVisibleRect__org_gwtproject_user_client_ui_Image__int__int__int__int(/** Image */ image, /** number */ left, /** number */ top, /** number */ width, /** number */ height) {}
 
 m_fireSyntheticLoadEvent__org_gwtproject_user_client_ui_Image(/** Image */ image) {
  this.f_syntheticEventCommand__org_gwtproject_user_client_ui_Image_State_ = $1.$create__org_gwtproject_user_client_ui_Image_State__org_gwtproject_user_client_ui_Image(this, image);
  Scheduler.m_get__().m_scheduleDeferred__org_gwtproject_core_client_Scheduler_ScheduledCommand(this.f_syntheticEventCommand__org_gwtproject_user_client_ui_Image_State_);
 }
 /** @abstract @return {?string} */
 m_getStateName__() {}
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_Image_State() {
  this.f_syntheticEventCommand__org_gwtproject_user_client_ui_Image_State_ = null;
 }
 
 static $clinit() {
  State.$clinit = () =>{};
  State.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof State;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Scheduler = goog.module.get('org.gwtproject.core.client.Scheduler$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Image = goog.module.get('org.gwtproject.user.client.ui.Image$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.Image.State.$1$impl');
 }
 
}
$Util.$setClassMetadata(State, 'org.gwtproject.user.client.ui.Image$State');

exports = State; 
//# sourceMappingURL=Image$State.js.map