goog.module('org.gwtproject.user.client.ui.impl.ClippedImagePrototype$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractImagePrototype = goog.require('org.gwtproject.user.client.ui.AbstractImagePrototype$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let UriUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.UriUtils$impl');
let ImagePrototypeElement = goog.forwardDeclare('org.gwtproject.user.client.ui.AbstractImagePrototype.ImagePrototypeElement$impl');
let Image = goog.forwardDeclare('org.gwtproject.user.client.ui.Image$impl');
let ClippedImageImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.impl.ClippedImageImpl$impl');

class ClippedImagePrototype extends AbstractImagePrototype {
 //JsConstructor 'ClippedImagePrototype(SafeUri, int, int, int, int)'.
 
 constructor(/** SafeUri */ url, /** number */ left, /** number */ top, /** number */ width, /** number */ height) {
  ClippedImagePrototype.$clinit();
  super();
  /**@type {number}*/
  this.f_height__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_ = 0;
  /**@type {number}*/
  this.f_left__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_ = 0;
  /**@type {number}*/
  this.f_top__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_ = 0;
  /**@type {SafeUri}*/
  this.f_url__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_;
  /**@type {number}*/
  this.f_width__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_ = 0;
  /**@type {boolean}*/
  this.f_isDraggable__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_ = false;
  this.$ctor__org_gwtproject_user_client_ui_impl_ClippedImagePrototype__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(url, left, top, width, height);
 }
 //Initialization from constructor 'ClippedImagePrototype(SafeUri, int, int, int, int)'.
 
 $ctor__org_gwtproject_user_client_ui_impl_ClippedImagePrototype__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(/** SafeUri */ url, /** number */ left, /** number */ top, /** number */ width, /** number */ height) {
  this.$init___$p_org_gwtproject_user_client_ui_impl_ClippedImagePrototype();
  this.f_url__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_ = url;
  this.f_left__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_ = left;
  this.f_top__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_ = top;
  this.f_width__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_ = width;
  this.f_height__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_ = height;
 }
 //Factory method corresponding to constructor 'ClippedImagePrototype(String, int, int, int, int)'.
 /** @return {!ClippedImagePrototype} @deprecated */
 static $create__java_lang_String__int__int__int__int(/** ?string */ url, /** number */ left, /** number */ top, /** number */ width, /** number */ height) {
  ClippedImagePrototype.$clinit();
  let $instance = new ClippedImagePrototype(UriUtils.m_unsafeCastFromUntrustedString__java_lang_String(url), left, top, width, height);
  $instance.$ctor__org_gwtproject_user_client_ui_impl_ClippedImagePrototype__java_lang_String__int__int__int__int(url, left, top, width, height);
  return $instance;
 }
 //Initialization from constructor 'ClippedImagePrototype(String, int, int, int, int)'.
 /** @deprecated */
 $ctor__org_gwtproject_user_client_ui_impl_ClippedImagePrototype__java_lang_String__int__int__int__int(/** ?string */ url, /** number */ left, /** number */ top, /** number */ width, /** number */ height) {}
 /** @override */
 m_applyTo__org_gwtproject_user_client_ui_Image(/** Image */ image) {
  image.m_setUrlAndVisibleRect__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(this.f_url__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_, this.f_left__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_, this.f_top__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_, this.f_width__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_, this.f_height__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_);
 }
 /** @override */
 m_applyTo__org_gwtproject_user_client_ui_AbstractImagePrototype_ImagePrototypeElement(/** ImagePrototypeElement */ imageElement) {
  ClippedImagePrototype.f_impl__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_.m_adjust__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(imageElement, this.f_url__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_, this.f_left__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_, this.f_top__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_, this.f_width__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_, this.f_height__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_);
 }
 /** @override @return {ImagePrototypeElement} */
 m_createElement__() {
  return /**@type {ImagePrototypeElement}*/ (Js.m_uncheckedCast__java_lang_Object(ClippedImagePrototype.f_impl__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_.m_createStructure__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(this.f_url__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_, this.f_left__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_, this.f_top__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_, this.f_width__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_, this.f_height__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_)));
 }
 /** @override @return {Image} */
 m_createImage__() {
  return Image.$create__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(this.f_url__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_, this.f_left__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_, this.f_top__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_, this.f_width__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_, this.f_height__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_);
 }
 /** @override @return {SafeHtml} */
 m_getSafeHtml__() {
  return ClippedImagePrototype.f_impl__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_.m_getSafeHtml__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean(this.f_url__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_, this.f_left__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_, this.f_top__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_, this.f_width__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_, this.f_height__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_, this.f_isDraggable__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_);
 }
 
 m_setDraggable__boolean(/** boolean */ isDraggable) {
  this.f_isDraggable__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_ = isDraggable;
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_impl_ClippedImagePrototype() {
  this.f_height__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_ = 0;
  this.f_left__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_ = 0;
  this.f_top__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_ = 0;
  this.f_url__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_ = null;
  this.f_width__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_ = 0;
  this.f_isDraggable__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_ = false;
 }
 
 static $clinit() {
  ClippedImagePrototype.$clinit = () =>{};
  ClippedImagePrototype.$loadModules();
  AbstractImagePrototype.$clinit();
  ClippedImagePrototype.f_impl__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_ = ClippedImageImpl.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ClippedImagePrototype;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  UriUtils = goog.module.get('org.gwtproject.safehtml.shared.UriUtils$impl');
  Image = goog.module.get('org.gwtproject.user.client.ui.Image$impl');
  ClippedImageImpl = goog.module.get('org.gwtproject.user.client.ui.impl.ClippedImageImpl$impl');
 }
 
}
$Util.$setClassMetadata(ClippedImagePrototype, 'org.gwtproject.user.client.ui.impl.ClippedImagePrototype');

/**@type {ClippedImageImpl}*/
ClippedImagePrototype.f_impl__org_gwtproject_user_client_ui_impl_ClippedImagePrototype_;

exports = ClippedImagePrototype; 
//# sourceMappingURL=ClippedImagePrototype.js.map