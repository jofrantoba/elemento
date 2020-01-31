goog.module('org.gwtproject.user.client.ui.Image.UnclippedState$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const State = goog.require('org.gwtproject.user.client.ui.Image.State$impl');

let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let ImageElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ImageElement.$Overlay$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let UriUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.UriUtils$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let Image = goog.forwardDeclare('org.gwtproject.user.client.ui.Image$impl');
let ClippedState = goog.forwardDeclare('org.gwtproject.user.client.ui.Image.ClippedState$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class UnclippedState extends State {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'UnclippedState(Element)'.
 /** @return {!UnclippedState} */
 static $create__org_gwtproject_dom_client_Element(/** Object */ element) {
  UnclippedState.$clinit();
  let $instance = new UnclippedState();
  $instance.$ctor__org_gwtproject_user_client_ui_Image_UnclippedState__org_gwtproject_dom_client_Element(element);
  return $instance;
 }
 //Initialization from constructor 'UnclippedState(Element)'.
 
 $ctor__org_gwtproject_user_client_ui_Image_UnclippedState__org_gwtproject_dom_client_Element(/** Object */ element) {
  this.$ctor__org_gwtproject_user_client_ui_Image_State__();
  Event.m_sinkEvents__org_gwtproject_dom_client_Element__int(element, Event.f_ONCLICK__org_gwtproject_user_client_Event | Event.f_ONDBLCLICK__org_gwtproject_user_client_Event | Event.f_MOUSEEVENTS__org_gwtproject_user_client_Event | Event.f_ONLOAD__org_gwtproject_user_client_Event | Event.f_ONERROR__org_gwtproject_user_client_Event | Event.f_ONMOUSEWHEEL__org_gwtproject_user_client_Event | Event.f_TOUCHEVENTS__org_gwtproject_user_client_Event | Event.f_GESTUREEVENTS__org_gwtproject_user_client_Event);
 }
 //Factory method corresponding to constructor 'UnclippedState(Image)'.
 /** @return {!UnclippedState} */
 static $create__org_gwtproject_user_client_ui_Image(/** Image */ image) {
  UnclippedState.$clinit();
  let $instance = new UnclippedState();
  $instance.$ctor__org_gwtproject_user_client_ui_Image_UnclippedState__org_gwtproject_user_client_ui_Image(image);
  return $instance;
 }
 //Initialization from constructor 'UnclippedState(Image)'.
 
 $ctor__org_gwtproject_user_client_ui_Image_UnclippedState__org_gwtproject_user_client_ui_Image(/** Image */ image) {
  this.$ctor__org_gwtproject_user_client_ui_Image_State__();
  image.m_replaceElement__org_gwtproject_dom_client_Element_$pp_org_gwtproject_user_client_ui($Overlay.m_createImageElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
  Event.m_sinkEvents__org_gwtproject_dom_client_Element__int(image.m_getElement__(), Event.f_ONLOAD__org_gwtproject_user_client_Event);
  image.m_sinkEvents__int(Event.f_ONCLICK__org_gwtproject_user_client_Event | Event.f_ONDBLCLICK__org_gwtproject_user_client_Event | Event.f_MOUSEEVENTS__org_gwtproject_user_client_Event | Event.f_ONLOAD__org_gwtproject_user_client_Event | Event.f_ONERROR__org_gwtproject_user_client_Event | Event.f_ONMOUSEWHEEL__org_gwtproject_user_client_Event | Event.f_TOUCHEVENTS__org_gwtproject_user_client_Event | Event.f_GESTUREEVENTS__org_gwtproject_user_client_Event);
 }
 //Factory method corresponding to constructor 'UnclippedState(Image, SafeUri)'.
 /** @return {!UnclippedState} */
 static $create__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri(/** Image */ image, /** SafeUri */ url) {
  UnclippedState.$clinit();
  let $instance = new UnclippedState();
  $instance.$ctor__org_gwtproject_user_client_ui_Image_UnclippedState__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri(image, url);
  return $instance;
 }
 //Initialization from constructor 'UnclippedState(Image, SafeUri)'.
 
 $ctor__org_gwtproject_user_client_ui_Image_UnclippedState__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri(/** Image */ image, /** SafeUri */ url) {
  this.$ctor__org_gwtproject_user_client_ui_Image_UnclippedState__org_gwtproject_user_client_ui_Image(image);
  this.m_setUrl__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri(image, url);
 }
 //Factory method corresponding to constructor 'UnclippedState(Image, SafeUri, int, int)'.
 /** @return {!UnclippedState} */
 static $create__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int(/** Image */ image, /** SafeUri */ url, /** number */ width, /** number */ height) {
  UnclippedState.$clinit();
  let $instance = new UnclippedState();
  $instance.$ctor__org_gwtproject_user_client_ui_Image_UnclippedState__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int(image, url, width, height);
  return $instance;
 }
 //Initialization from constructor 'UnclippedState(Image, SafeUri, int, int)'.
 
 $ctor__org_gwtproject_user_client_ui_Image_UnclippedState__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int(/** Image */ image, /** SafeUri */ url, /** number */ width, /** number */ height) {
  this.$ctor__org_gwtproject_user_client_ui_Image_UnclippedState__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri(image, url);
  this.m_getImageElement__org_gwtproject_user_client_ui_Image(image).width = width;
  this.m_getImageElement__org_gwtproject_user_client_ui_Image(image).height = height;
 }
 /** @override @return {number} */
 m_getHeight__org_gwtproject_user_client_ui_Image(/** Image */ image) {
  return this.m_getImageElement__org_gwtproject_user_client_ui_Image(image).height;
 }
 /** @override @return {Object} */
 m_getImageElement__org_gwtproject_user_client_ui_Image(/** Image */ image) {
  return /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(image.m_getElement__()), ImageElement_$Overlay));
 }
 /** @override @return {number} */
 m_getOriginLeft__() {
  return 0;
 }
 /** @override @return {number} */
 m_getOriginTop__() {
  return 0;
 }
 /** @override @return {SafeUri} */
 m_getUrl__org_gwtproject_user_client_ui_Image(/** Image */ image) {
  return UriUtils.m_unsafeCastFromUntrustedString__java_lang_String(this.m_getImageElement__org_gwtproject_user_client_ui_Image(image).src);
 }
 /** @override @return {number} */
 m_getWidth__org_gwtproject_user_client_ui_Image(/** Image */ image) {
  return this.m_getImageElement__org_gwtproject_user_client_ui_Image(image).width;
 }
 /** @override */
 m_setUrl__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri(/** Image */ image, /** SafeUri */ url) {
  image.m_clearUnhandledEvent___$p_org_gwtproject_user_client_ui_Image();
  this.m_getImageElement__org_gwtproject_user_client_ui_Image(image).src = url.m_asString__();
 }
 /** @override */
 m_setUrl__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int(/** Image */ image, /** SafeUri */ url, /** number */ width, /** number */ height) {
  this.m_setUrl__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri(image, url);
  this.m_getImageElement__org_gwtproject_user_client_ui_Image(image).width = width;
  this.m_getImageElement__org_gwtproject_user_client_ui_Image(image).height = height;
 }
 /** @override */
 m_setUrlAndVisibleRect__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(/** Image */ image, /** SafeUri */ url, /** number */ left, /** number */ top, /** number */ width, /** number */ height) {
  image.m_changeState__org_gwtproject_user_client_ui_Image_State_$p_org_gwtproject_user_client_ui_Image(ClippedState.$create__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(image, url, left, top, width, height));
 }
 /** @override */
 m_setVisibleRect__org_gwtproject_user_client_ui_Image__int__int__int__int(/** Image */ image, /** number */ left, /** number */ top, /** number */ width, /** number */ height) {
  image.m_changeState__org_gwtproject_user_client_ui_Image_State_$p_org_gwtproject_user_client_ui_Image(ClippedState.$create__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(image, this.m_getUrl__org_gwtproject_user_client_ui_Image(image), left, top, width, height));
 }
 /** @override @return {?string} */
 m_getStateName__() {
  return "unclipped";
 }
 
 static $clinit() {
  UnclippedState.$clinit = () =>{};
  UnclippedState.$loadModules();
  State.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UnclippedState;
 }
 
 static $loadModules() {
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  ImageElement_$Overlay = goog.module.get('org.gwtproject.dom.client.ImageElement.$Overlay$impl');
  UriUtils = goog.module.get('org.gwtproject.safehtml.shared.UriUtils$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  ClippedState = goog.module.get('org.gwtproject.user.client.ui.Image.ClippedState$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(UnclippedState, 'org.gwtproject.user.client.ui.Image$UnclippedState');

exports = UnclippedState; 
//# sourceMappingURL=Image$UnclippedState.js.map