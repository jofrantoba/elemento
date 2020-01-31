goog.module('org.gwtproject.user.client.ui.Image.ClippedState$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const State = goog.require('org.gwtproject.user.client.ui.Image.State$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let ImageElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ImageElement.$Overlay$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let Image = goog.forwardDeclare('org.gwtproject.user.client.ui.Image$impl');
let UnclippedState = goog.forwardDeclare('org.gwtproject.user.client.ui.Image.UnclippedState$impl');
let ClippedImageImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.impl.ClippedImageImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ClippedState extends State {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_height__org_gwtproject_user_client_ui_Image_ClippedState_ = 0;
  /**@type {number}*/
  this.f_left__org_gwtproject_user_client_ui_Image_ClippedState_ = 0;
  /**@type {boolean}*/
  this.f_pendingNativeLoadEvent__org_gwtproject_user_client_ui_Image_ClippedState_ = false;
  /**@type {number}*/
  this.f_top__org_gwtproject_user_client_ui_Image_ClippedState_ = 0;
  /**@type {SafeUri}*/
  this.f_url__org_gwtproject_user_client_ui_Image_ClippedState_;
  /**@type {number}*/
  this.f_width__org_gwtproject_user_client_ui_Image_ClippedState_ = 0;
 }
 /** @return {!ClippedState} */
 static $create__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(/** Image */ image, /** SafeUri */ url, /** number */ left, /** number */ top, /** number */ width, /** number */ height) {
  ClippedState.$clinit();
  let $instance = new ClippedState();
  $instance.$ctor__org_gwtproject_user_client_ui_Image_ClippedState__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(image, url, left, top, width, height);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_Image_ClippedState__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(/** Image */ image, /** SafeUri */ url, /** number */ left, /** number */ top, /** number */ width, /** number */ height) {
  this.$ctor__org_gwtproject_user_client_ui_Image_State__();
  this.$init___$p_org_gwtproject_user_client_ui_Image_ClippedState();
  this.f_left__org_gwtproject_user_client_ui_Image_ClippedState_ = left;
  this.f_top__org_gwtproject_user_client_ui_Image_ClippedState_ = top;
  this.f_width__org_gwtproject_user_client_ui_Image_ClippedState_ = width;
  this.f_height__org_gwtproject_user_client_ui_Image_ClippedState_ = height;
  this.f_url__org_gwtproject_user_client_ui_Image_ClippedState_ = url;
  image.m_replaceElement__org_gwtproject_dom_client_Element_$pp_org_gwtproject_user_client_ui(ClippedState.f_impl__org_gwtproject_user_client_ui_Image_ClippedState_.m_createStructure__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(url, left, top, width, height));
  image.m_sinkEvents__int(Event.f_ONCLICK__org_gwtproject_user_client_Event | Event.f_ONDBLCLICK__org_gwtproject_user_client_Event | Event.f_MOUSEEVENTS__org_gwtproject_user_client_Event | Event.f_ONMOUSEWHEEL__org_gwtproject_user_client_Event | Event.f_ONLOAD__org_gwtproject_user_client_Event | Event.f_TOUCHEVENTS__org_gwtproject_user_client_Event | Event.f_GESTUREEVENTS__org_gwtproject_user_client_Event);
 }
 /** @override @return {number} */
 m_getHeight__org_gwtproject_user_client_ui_Image(/** Image */ image) {
  return this.f_height__org_gwtproject_user_client_ui_Image_ClippedState_;
 }
 /** @override @return {Object} */
 m_getImageElement__org_gwtproject_user_client_ui_Image(/** Image */ image) {
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(ClippedState.f_impl__org_gwtproject_user_client_ui_Image_ClippedState_.m_getImgElement__org_gwtproject_user_client_ui_Image(image)), ImageElement_$Overlay));
 }
 /** @override @return {number} */
 m_getOriginLeft__() {
  return this.f_left__org_gwtproject_user_client_ui_Image_ClippedState_;
 }
 /** @override @return {number} */
 m_getOriginTop__() {
  return this.f_top__org_gwtproject_user_client_ui_Image_ClippedState_;
 }
 /** @override @return {SafeUri} */
 m_getUrl__org_gwtproject_user_client_ui_Image(/** Image */ image) {
  return this.f_url__org_gwtproject_user_client_ui_Image_ClippedState_;
 }
 /** @override @return {number} */
 m_getWidth__org_gwtproject_user_client_ui_Image(/** Image */ image) {
  return this.f_width__org_gwtproject_user_client_ui_Image_ClippedState_;
 }
 /** @override */
 m_onLoadEvent__org_gwtproject_user_client_ui_Image(/** Image */ image) {
  this.f_pendingNativeLoadEvent__org_gwtproject_user_client_ui_Image_ClippedState_ = false;
  super.m_onLoadEvent__org_gwtproject_user_client_ui_Image(image);
 }
 /** @override */
 m_setUrl__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri(/** Image */ image, /** SafeUri */ url) {
  image.m_changeState__org_gwtproject_user_client_ui_Image_State_$p_org_gwtproject_user_client_ui_Image(UnclippedState.$create__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri(image, url));
 }
 /** @override */
 m_setUrl__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int(/** Image */ image, /** SafeUri */ url, /** number */ width, /** number */ height) {
  image.m_changeState__org_gwtproject_user_client_ui_Image_State_$p_org_gwtproject_user_client_ui_Image(UnclippedState.$create__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int(image, url, width, height));
 }
 /** @override */
 m_setUrlAndVisibleRect__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(/** Image */ image, /** SafeUri */ url, /** number */ left, /** number */ top, /** number */ width, /** number */ height) {
  if (!this.f_url__org_gwtproject_user_client_ui_Image_ClippedState_.equals(url) || this.f_left__org_gwtproject_user_client_ui_Image_ClippedState_ != left || this.f_top__org_gwtproject_user_client_ui_Image_ClippedState_ != top || this.f_width__org_gwtproject_user_client_ui_Image_ClippedState_ != width || this.f_height__org_gwtproject_user_client_ui_Image_ClippedState_ != height) {
   this.f_url__org_gwtproject_user_client_ui_Image_ClippedState_ = url;
   this.f_left__org_gwtproject_user_client_ui_Image_ClippedState_ = left;
   this.f_top__org_gwtproject_user_client_ui_Image_ClippedState_ = top;
   this.f_width__org_gwtproject_user_client_ui_Image_ClippedState_ = width;
   this.f_height__org_gwtproject_user_client_ui_Image_ClippedState_ = height;
   ClippedState.f_impl__org_gwtproject_user_client_ui_Image_ClippedState_.m_adjust__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(image.m_getElement__(), url, left, top, width, height);
   if (!this.f_pendingNativeLoadEvent__org_gwtproject_user_client_ui_Image_ClippedState_) {
    this.m_fireSyntheticLoadEvent__org_gwtproject_user_client_ui_Image(image);
   }
  }
 }
 /** @override */
 m_setVisibleRect__org_gwtproject_user_client_ui_Image__int__int__int__int(/** Image */ image, /** number */ left, /** number */ top, /** number */ width, /** number */ height) {
  this.m_setUrlAndVisibleRect__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(image, this.f_url__org_gwtproject_user_client_ui_Image_ClippedState_, left, top, width, height);
 }
 /** @override @return {?string} */
 m_getStateName__() {
  return "clipped";
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_Image_ClippedState() {
  this.f_height__org_gwtproject_user_client_ui_Image_ClippedState_ = 0;
  this.f_left__org_gwtproject_user_client_ui_Image_ClippedState_ = 0;
  this.f_pendingNativeLoadEvent__org_gwtproject_user_client_ui_Image_ClippedState_ = true;
  this.f_top__org_gwtproject_user_client_ui_Image_ClippedState_ = 0;
  this.f_url__org_gwtproject_user_client_ui_Image_ClippedState_ = null;
  this.f_width__org_gwtproject_user_client_ui_Image_ClippedState_ = 0;
 }
 
 static $clinit() {
  ClippedState.$clinit = () =>{};
  ClippedState.$loadModules();
  State.$clinit();
  ClippedState.f_impl__org_gwtproject_user_client_ui_Image_ClippedState_ = ClippedImageImpl.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ClippedState;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  ImageElement_$Overlay = goog.module.get('org.gwtproject.dom.client.ImageElement.$Overlay$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  UnclippedState = goog.module.get('org.gwtproject.user.client.ui.Image.UnclippedState$impl');
  ClippedImageImpl = goog.module.get('org.gwtproject.user.client.ui.impl.ClippedImageImpl$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ClippedState, 'org.gwtproject.user.client.ui.Image$ClippedState');

/**@type {ClippedImageImpl}*/
ClippedState.f_impl__org_gwtproject_user_client_ui_Image_ClippedState_;

exports = ClippedState; 
//# sourceMappingURL=Image$ClippedState.js.map