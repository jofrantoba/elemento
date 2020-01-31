goog.module('org.gwtproject.resources.client.impl.ImageResourcePrototype$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ImageResource = goog.require('org.gwtproject.resources.client.ImageResource$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Image_$Overlay = goog.forwardDeclare('elemental2.dom.Image.$Overlay$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ImageResource}
  */
class ImageResourcePrototype extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {boolean}*/
  this.f_animated__org_gwtproject_resources_client_impl_ImageResourcePrototype_ = false;
  /**@type {boolean}*/
  this.f_lossy__org_gwtproject_resources_client_impl_ImageResourcePrototype_ = false;
  /**@type {?string}*/
  this.f_name__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
  /**@type {SafeUri}*/
  this.f_url__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
  /**@type {number}*/
  this.f_left__org_gwtproject_resources_client_impl_ImageResourcePrototype_ = 0;
  /**@type {number}*/
  this.f_top__org_gwtproject_resources_client_impl_ImageResourcePrototype_ = 0;
  /**@type {number}*/
  this.f_width__org_gwtproject_resources_client_impl_ImageResourcePrototype_ = 0;
  /**@type {number}*/
  this.f_height__org_gwtproject_resources_client_impl_ImageResourcePrototype_ = 0;
 }
 /** @return {!ImageResourcePrototype} */
 static $create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean(/** ?string */ name, /** SafeUri */ url, /** number */ left, /** number */ top, /** number */ width, /** number */ height, /** boolean */ animated, /** boolean */ lossy) {
  ImageResourcePrototype.$clinit();
  let $instance = new ImageResourcePrototype();
  $instance.$ctor__org_gwtproject_resources_client_impl_ImageResourcePrototype__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean(name, url, left, top, width, height, animated, lossy);
  return $instance;
 }
 
 $ctor__org_gwtproject_resources_client_impl_ImageResourcePrototype__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean(/** ?string */ name, /** SafeUri */ url, /** number */ left, /** number */ top, /** number */ width, /** number */ height, /** boolean */ animated, /** boolean */ lossy) {
  this.$ctor__java_lang_Object__();
  this.f_name__org_gwtproject_resources_client_impl_ImageResourcePrototype_ = name;
  this.f_left__org_gwtproject_resources_client_impl_ImageResourcePrototype_ = left;
  this.f_top__org_gwtproject_resources_client_impl_ImageResourcePrototype_ = top;
  this.f_height__org_gwtproject_resources_client_impl_ImageResourcePrototype_ = height;
  this.f_width__org_gwtproject_resources_client_impl_ImageResourcePrototype_ = width;
  this.f_url__org_gwtproject_resources_client_impl_ImageResourcePrototype_ = url;
  this.f_animated__org_gwtproject_resources_client_impl_ImageResourcePrototype_ = animated;
  this.f_lossy__org_gwtproject_resources_client_impl_ImageResourcePrototype_ = lossy;
 }
 /** @override @return {number} */
 m_getHeight__() {
  return this.f_height__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
 }
 /** @override @return {number} */
 m_getLeft__() {
  return this.f_left__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
 }
 /** @override @return {Image} */
 m_getImage__() {
  let image = /**@type {Image}*/ ($Casts.$to($Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), Image_$Overlay));
  image.src = this.m_getSafeUri__().m_asString__();
  image.name = this.f_name__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
  image.width = this.f_width__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
  image.height = this.f_height__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
  return image;
 }
 /** @override @return {SafeUri} */
 m_getSafeUri__() {
  return this.f_url__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
 }
 /** @override @return {?string} */
 m_getName__() {
  return this.f_name__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
 }
 /** @override @return {number} */
 m_getTop__() {
  return this.f_top__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
 }
 /** @return {?string} */
 m_getURL__() {
  return this.f_url__org_gwtproject_resources_client_impl_ImageResourcePrototype_.m_asString__();
 }
 /** @override @return {number} */
 m_getWidth__() {
  return this.f_width__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
 }
 /** @override @return {boolean} */
 m_isAnimated__() {
  return this.f_animated__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
 }
 /** @return {boolean} */
 m_isLossy__() {
  return this.f_lossy__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
 }
 
 static $clinit() {
  ImageResourcePrototype.$clinit = () =>{};
  ImageResourcePrototype.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ImageResourcePrototype;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Image_$Overlay = goog.module.get('elemental2.dom.Image.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ImageResourcePrototype, 'org.gwtproject.resources.client.impl.ImageResourcePrototype');

ImageResource.$markImplementor(ImageResourcePrototype);

exports = ImageResourcePrototype; 
//# sourceMappingURL=ImageResourcePrototype.js.map