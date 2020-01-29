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
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * Factory method corresponding to constructor 'UnclippedState(Element)'.
  * @param {Object} element
  * @return {!UnclippedState}
  * @public
  */
 static $create__org_gwtproject_dom_client_Element(element) {
  UnclippedState.$clinit();
  let $instance = new UnclippedState();
  $instance.$ctor__org_gwtproject_user_client_ui_Image_UnclippedState__org_gwtproject_dom_client_Element(element);
  return $instance;
 }
 /**
  * Initialization from constructor 'UnclippedState(Element)'.
  * @param {Object} element
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Image_UnclippedState__org_gwtproject_dom_client_Element(element) {
  this.$ctor__org_gwtproject_user_client_ui_Image_State__();
  Event.m_sinkEvents__org_gwtproject_dom_client_Element__int(element, Event.f_ONCLICK__org_gwtproject_user_client_Event | Event.f_ONDBLCLICK__org_gwtproject_user_client_Event | Event.f_MOUSEEVENTS__org_gwtproject_user_client_Event | Event.f_ONLOAD__org_gwtproject_user_client_Event | Event.f_ONERROR__org_gwtproject_user_client_Event | Event.f_ONMOUSEWHEEL__org_gwtproject_user_client_Event | Event.f_TOUCHEVENTS__org_gwtproject_user_client_Event | Event.f_GESTUREEVENTS__org_gwtproject_user_client_Event);
 }
 /**
  * Factory method corresponding to constructor 'UnclippedState(Image)'.
  * @param {Image} image
  * @return {!UnclippedState}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_Image(image) {
  UnclippedState.$clinit();
  let $instance = new UnclippedState();
  $instance.$ctor__org_gwtproject_user_client_ui_Image_UnclippedState__org_gwtproject_user_client_ui_Image(image);
  return $instance;
 }
 /**
  * Initialization from constructor 'UnclippedState(Image)'.
  * @param {Image} image
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Image_UnclippedState__org_gwtproject_user_client_ui_Image(image) {
  this.$ctor__org_gwtproject_user_client_ui_Image_State__();
  image.m_replaceElement__org_gwtproject_dom_client_Element_$pp_org_gwtproject_user_client_ui($Overlay.m_createImageElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
  Event.m_sinkEvents__org_gwtproject_dom_client_Element__int(image.m_getElement__(), Event.f_ONLOAD__org_gwtproject_user_client_Event);
  image.m_sinkEvents__int(Event.f_ONCLICK__org_gwtproject_user_client_Event | Event.f_ONDBLCLICK__org_gwtproject_user_client_Event | Event.f_MOUSEEVENTS__org_gwtproject_user_client_Event | Event.f_ONLOAD__org_gwtproject_user_client_Event | Event.f_ONERROR__org_gwtproject_user_client_Event | Event.f_ONMOUSEWHEEL__org_gwtproject_user_client_Event | Event.f_TOUCHEVENTS__org_gwtproject_user_client_Event | Event.f_GESTUREEVENTS__org_gwtproject_user_client_Event);
 }
 /**
  * Factory method corresponding to constructor 'UnclippedState(Image, SafeUri)'.
  * @param {Image} image
  * @param {SafeUri} url
  * @return {!UnclippedState}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri(image, url) {
  UnclippedState.$clinit();
  let $instance = new UnclippedState();
  $instance.$ctor__org_gwtproject_user_client_ui_Image_UnclippedState__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri(image, url);
  return $instance;
 }
 /**
  * Initialization from constructor 'UnclippedState(Image, SafeUri)'.
  * @param {Image} image
  * @param {SafeUri} url
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Image_UnclippedState__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri(image, url) {
  this.$ctor__org_gwtproject_user_client_ui_Image_UnclippedState__org_gwtproject_user_client_ui_Image(image);
  this.m_setUrl__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri(image, url);
 }
 /**
  * Factory method corresponding to constructor 'UnclippedState(Image, SafeUri, int, int)'.
  * @param {Image} image
  * @param {SafeUri} url
  * @param {number} width
  * @param {number} height
  * @return {!UnclippedState}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int(image, url, width, height) {
  UnclippedState.$clinit();
  let $instance = new UnclippedState();
  $instance.$ctor__org_gwtproject_user_client_ui_Image_UnclippedState__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int(image, url, width, height);
  return $instance;
 }
 /**
  * Initialization from constructor 'UnclippedState(Image, SafeUri, int, int)'.
  * @param {Image} image
  * @param {SafeUri} url
  * @param {number} width
  * @param {number} height
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Image_UnclippedState__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int(image, url, width, height) {
  this.$ctor__org_gwtproject_user_client_ui_Image_UnclippedState__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri(image, url);
  this.m_getImageElement__org_gwtproject_user_client_ui_Image(image).width = width;
  this.m_getImageElement__org_gwtproject_user_client_ui_Image(image).height = height;
 }
 /**
  * @override
  * @param {Image} image
  * @return {number}
  * @public
  */
 m_getHeight__org_gwtproject_user_client_ui_Image(image) {
  return this.m_getImageElement__org_gwtproject_user_client_ui_Image(image).height;
 }
 /**
  * @override
  * @param {Image} image
  * @return {Object}
  * @public
  */
 m_getImageElement__org_gwtproject_user_client_ui_Image(image) {
  return /**@type {Object} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(image.m_getElement__()), ImageElement_$Overlay));
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getOriginLeft__() {
  return 0;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getOriginTop__() {
  return 0;
 }
 /**
  * @override
  * @param {Image} image
  * @return {SafeUri}
  * @public
  */
 m_getUrl__org_gwtproject_user_client_ui_Image(image) {
  return UriUtils.m_unsafeCastFromUntrustedString__java_lang_String(this.m_getImageElement__org_gwtproject_user_client_ui_Image(image).src);
 }
 /**
  * @override
  * @param {Image} image
  * @return {number}
  * @public
  */
 m_getWidth__org_gwtproject_user_client_ui_Image(image) {
  return this.m_getImageElement__org_gwtproject_user_client_ui_Image(image).width;
 }
 /**
  * @override
  * @param {Image} image
  * @param {SafeUri} url
  * @public
  */
 m_setUrl__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri(image, url) {
  image.m_clearUnhandledEvent___$p_org_gwtproject_user_client_ui_Image();
  this.m_getImageElement__org_gwtproject_user_client_ui_Image(image).src = url.m_asString__();
 }
 /**
  * @override
  * @param {Image} image
  * @param {SafeUri} url
  * @param {number} width
  * @param {number} height
  * @public
  */
 m_setUrl__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int(image, url, width, height) {
  this.m_setUrl__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri(image, url);
  this.m_getImageElement__org_gwtproject_user_client_ui_Image(image).width = width;
  this.m_getImageElement__org_gwtproject_user_client_ui_Image(image).height = height;
 }
 /**
  * @override
  * @param {Image} image
  * @param {SafeUri} url
  * @param {number} left
  * @param {number} top
  * @param {number} width
  * @param {number} height
  * @public
  */
 m_setUrlAndVisibleRect__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(image, url, left, top, width, height) {
  image.m_changeState__org_gwtproject_user_client_ui_Image_State_$p_org_gwtproject_user_client_ui_Image(ClippedState.$create__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(image, url, left, top, width, height));
 }
 /**
  * @override
  * @param {Image} image
  * @param {number} left
  * @param {number} top
  * @param {number} width
  * @param {number} height
  * @public
  */
 m_setVisibleRect__org_gwtproject_user_client_ui_Image__int__int__int__int(image, left, top, width, height) {
  image.m_changeState__org_gwtproject_user_client_ui_Image_State_$p_org_gwtproject_user_client_ui_Image(ClippedState.$create__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(image, this.m_getUrl__org_gwtproject_user_client_ui_Image(image), left, top, width, height));
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getStateName__() {
  return "unclipped";
 }
 /**
  * @public
  */
 static $clinit() {
  UnclippedState.$clinit = () =>{};
  UnclippedState.$loadModules();
  State.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof UnclippedState;
 }
 /**
  * @public
  */
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