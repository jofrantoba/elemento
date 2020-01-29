goog.module('org.gwtproject.cell.client.ImageLoadingCell_ResourcesImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Resources = goog.require('org.gwtproject.cell.client.ImageLoadingCell.Resources$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let loadingInitializer = goog.forwardDeclare('org.gwtproject.cell.client.ImageLoadingCell_ResourcesImpl.loadingInitializer$impl');
let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let ResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype$impl');
let ImageResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.impl.ImageResourcePrototype$impl');
let UriUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.UriUtils$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Resources}
  */
class ImageLoadingCell__ResourcesImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!ImageLoadingCell__ResourcesImpl}
  * @public
  */
 static $create__() {
  ImageLoadingCell__ResourcesImpl.$clinit();
  let $instance = new ImageLoadingCell__ResourcesImpl();
  $instance.$ctor__org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 m_loadingInitializer___$p_org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl() {
  ImageLoadingCell__ResourcesImpl.$f_loading__org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl_ = ImageResourcePrototype.$create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean("loading", UriUtils.m_fromTrustedString__java_lang_String(ImageLoadingCell__ResourcesImpl.f_externalImage__org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl_), 0, 0, 16, 16, true, false);
 }
 /**
  * @override
  * @return {ImageResource}
  * @public
  */
 m_loading__() {
  return loadingInitializer.m_get__();
 }
 /**
  * @return {Array<ResourcePrototype>}
  * @public
  */
 m_getResources__() {
  return /**@type {!Array<ResourcePrototype>} */ ($Arrays.$init([this.m_loading__()], ResourcePrototype));
 }
 /**
  * @param {?string} name
  * @return {ResourcePrototype}
  * @public
  */
 m_getResource__java_lang_String(name) {
  if ($Equality.$same(ImageLoadingCell__ResourcesImpl.f_resourceMap__org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl_, null)) {
   ImageLoadingCell__ResourcesImpl.f_resourceMap__org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl_ = /**@type {!HashMap<?string, ResourcePrototype>} */ (HashMap.$create__());
   ImageLoadingCell__ResourcesImpl.f_resourceMap__org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl_.put("loading", this.m_loading__());
  }
  return /**@type {ResourcePrototype} */ ($Casts.$to(ImageLoadingCell__ResourcesImpl.f_resourceMap__org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl_.get(name), ResourcePrototype));
 }
 /**
  * @return {ImageLoadingCell__ResourcesImpl}
  * @public
  */
 static get f__instance0__org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl_() {
  return (ImageLoadingCell__ResourcesImpl.$clinit(), ImageLoadingCell__ResourcesImpl.$f__instance0__org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl_);
 }
 /**
  * @param {ImageLoadingCell__ResourcesImpl} value
  * @public
  */
 static set f__instance0__org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl_(value) {
  (ImageLoadingCell__ResourcesImpl.$clinit(), ImageLoadingCell__ResourcesImpl.$f__instance0__org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl_ = value);
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static get f_loading__org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl_() {
  return (ImageLoadingCell__ResourcesImpl.$clinit(), ImageLoadingCell__ResourcesImpl.$f_loading__org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl_);
 }
 /**
  * @param {ImageResource} value
  * @public
  */
 static set f_loading__org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl_(value) {
  (ImageLoadingCell__ResourcesImpl.$clinit(), ImageLoadingCell__ResourcesImpl.$f_loading__org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl_ = value);
 }
 /**
  * @public
  */
 static $clinit() {
  ImageLoadingCell__ResourcesImpl.$clinit = () =>{};
  ImageLoadingCell__ResourcesImpl.$loadModules();
  j_l_Object.$clinit();
  ImageLoadingCell__ResourcesImpl.$f__instance0__org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl_ = ImageLoadingCell__ResourcesImpl.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ImageLoadingCell__ResourcesImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  loadingInitializer = goog.module.get('org.gwtproject.cell.client.ImageLoadingCell_ResourcesImpl.loadingInitializer$impl');
  ResourcePrototype = goog.module.get('org.gwtproject.resources.client.ResourcePrototype$impl');
  ImageResourcePrototype = goog.module.get('org.gwtproject.resources.client.impl.ImageResourcePrototype$impl');
  UriUtils = goog.module.get('org.gwtproject.safehtml.shared.UriUtils$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ImageLoadingCell__ResourcesImpl, 'org.gwtproject.cell.client.ImageLoadingCell_ResourcesImpl');

Resources.$markImplementor(ImageLoadingCell__ResourcesImpl);

/** @private {ImageLoadingCell__ResourcesImpl} */
ImageLoadingCell__ResourcesImpl.$f__instance0__org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl_;
/** @public {HashMap<?string, ResourcePrototype>} */
ImageLoadingCell__ResourcesImpl.f_resourceMap__org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl_;
/** @public {?string} @const */
ImageLoadingCell__ResourcesImpl.f_externalImage__org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl_ = "data:image/gif;base64,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";
/** @private {ImageResource} */
ImageLoadingCell__ResourcesImpl.$f_loading__org_gwtproject_cell_client_ImageLoadingCell_ResourcesImpl_;

exports = ImageLoadingCell__ResourcesImpl; 
//# sourceMappingURL=ImageLoadingCell_ResourcesImpl.js.map