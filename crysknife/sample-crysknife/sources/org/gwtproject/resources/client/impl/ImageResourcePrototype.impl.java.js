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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {boolean} */
  this.f_animated__org_gwtproject_resources_client_impl_ImageResourcePrototype_ = false;
  /** @public {boolean} */
  this.f_lossy__org_gwtproject_resources_client_impl_ImageResourcePrototype_ = false;
  /** @public {?string} */
  this.f_name__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
  /** @public {SafeUri} */
  this.f_url__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
  /** @public {number} */
  this.f_left__org_gwtproject_resources_client_impl_ImageResourcePrototype_ = 0;
  /** @public {number} */
  this.f_top__org_gwtproject_resources_client_impl_ImageResourcePrototype_ = 0;
  /** @public {number} */
  this.f_width__org_gwtproject_resources_client_impl_ImageResourcePrototype_ = 0;
  /** @public {number} */
  this.f_height__org_gwtproject_resources_client_impl_ImageResourcePrototype_ = 0;
 }
 /**
  * @param {?string} name
  * @param {SafeUri} url
  * @param {number} left
  * @param {number} top
  * @param {number} width
  * @param {number} height
  * @param {boolean} animated
  * @param {boolean} lossy
  * @return {!ImageResourcePrototype}
  * @public
  */
 static $create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean(name, url, left, top, width, height, animated, lossy) {
  ImageResourcePrototype.$clinit();
  let $instance = new ImageResourcePrototype();
  $instance.$ctor__org_gwtproject_resources_client_impl_ImageResourcePrototype__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean(name, url, left, top, width, height, animated, lossy);
  return $instance;
 }
 /**
  * @param {?string} name
  * @param {SafeUri} url
  * @param {number} left
  * @param {number} top
  * @param {number} width
  * @param {number} height
  * @param {boolean} animated
  * @param {boolean} lossy
  * @public
  */
 $ctor__org_gwtproject_resources_client_impl_ImageResourcePrototype__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean(name, url, left, top, width, height, animated, lossy) {
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
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getHeight__() {
  return this.f_height__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getLeft__() {
  return this.f_left__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
 }
 /**
  * @override
  * @return {Image}
  * @public
  */
 m_getImage__() {
  let image = /**@type {Image} */ ($Casts.$to($Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), Image_$Overlay));
  image.src = this.m_getSafeUri__().m_asString__();
  image.name = this.f_name__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
  image.width = this.f_width__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
  image.height = this.f_height__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
  return image;
 }
 /**
  * @override
  * @return {SafeUri}
  * @public
  */
 m_getSafeUri__() {
  return this.f_url__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getName__() {
  return this.f_name__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getTop__() {
  return this.f_top__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getURL__() {
  return this.f_url__org_gwtproject_resources_client_impl_ImageResourcePrototype_.m_asString__();
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getWidth__() {
  return this.f_width__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isAnimated__() {
  return this.f_animated__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isLossy__() {
  return this.f_lossy__org_gwtproject_resources_client_impl_ImageResourcePrototype_;
 }
 /**
  * @public
  */
 static $clinit() {
  ImageResourcePrototype.$clinit = () =>{};
  ImageResourcePrototype.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ImageResourcePrototype;
 }
 /**
  * @public
  */
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