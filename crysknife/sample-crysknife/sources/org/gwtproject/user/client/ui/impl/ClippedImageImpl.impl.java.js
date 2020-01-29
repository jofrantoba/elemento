goog.module('org.gwtproject.user.client.ui.impl.ClippedImageImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let SafeStylesBuilder = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStylesBuilder$impl');
let SafeStylesUtils = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStylesUtils$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let UriUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.UriUtils$impl');
let Image = goog.forwardDeclare('org.gwtproject.user.client.ui.Image$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.impl.ClippedImageImpl.$1$impl');
let DraggableTemplate = goog.forwardDeclare('org.gwtproject.user.client.ui.impl.ClippedImageImpl.DraggableTemplate$impl');
let Template = goog.forwardDeclare('org.gwtproject.user.client.ui.impl.ClippedImageImpl.Template$impl');
let ClippedImageImpl__DraggableTemplateImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.impl.ClippedImageImpl_DraggableTemplateImpl$impl');
let ClippedImageImpl__TemplateImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.impl.ClippedImageImpl_TemplateImpl$impl');

class ClippedImageImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!ClippedImageImpl}
  * @public
  */
 static $create__() {
  ClippedImageImpl.$clinit();
  let $instance = new ClippedImageImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_impl_ClippedImageImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_impl_ClippedImageImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @param {Object} img
  * @param {SafeUri} url
  * @param {number} left
  * @param {number} top
  * @param {number} width
  * @param {number} height
  * @public
  */
 m_adjust__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(img, url, left, top, width, height) {
  let style = "url(\"" + j_l_String.m_valueOf__java_lang_Object(url.m_asString__()) + "\") no-repeat " + j_l_String.m_valueOf__java_lang_Object((-left + "px ")) + j_l_String.m_valueOf__java_lang_Object((-top + "px"));
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(img.style, "background", style);
  $Overlay.m_setPropertyPx__$devirt__org_gwtproject_dom_client_Style__java_lang_String__int(img.style, "width", width);
  $Overlay.m_setPropertyPx__$devirt__org_gwtproject_dom_client_Style__java_lang_String__int(img.style, "height", height);
 }
 /**
  * @param {SafeUri} url
  * @param {number} left
  * @param {number} top
  * @param {number} width
  * @param {number} height
  * @return {Object}
  * @public
  */
 m_createStructure__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(url, left, top, width, height) {
  let tmp = Document_$Overlay.m_createSpanElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  Element_$Overlay.m_setInnerSafeHtml__$devirt__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(tmp, this.m_getSafeHtml__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(url, left, top, width, height));
  let elem = Element_$Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(tmp);
  Element_$Overlay.m_setPropertyJSO__$devirt__org_gwtproject_dom_client_Element__java_lang_String__org_gwtproject_core_client_JavaScriptObject(elem, "onload", ClippedImageImpl.m_createOnLoadHandlerFunction__());
  return elem;
 }
 /**
  * @return {Object}
  * @public
  */
 static m_createOnLoadHandlerFunction__() {
  ClippedImageImpl.$clinit();
  return /**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object($1.$create__()));
 }
 /**
  * @param {Image} image
  * @return {Object}
  * @public
  */
 m_getImgElement__org_gwtproject_user_client_ui_Image(image) {
  return image.m_getElement__();
 }
 /**
  * @param {SafeUri} url
  * @param {number} left
  * @param {number} top
  * @param {number} width
  * @param {number} height
  * @return {SafeHtml}
  * @public
  */
 m_getSafeHtml__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(url, left, top, width, height) {
  return this.m_getSafeHtml__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean(url, left, top, width, height, false);
 }
 /**
  * @param {SafeUri} url
  * @param {number} left
  * @param {number} top
  * @param {number} width
  * @param {number} height
  * @param {boolean} isDraggable
  * @return {SafeHtml}
  * @public
  */
 m_getSafeHtml__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean(url, left, top, width, height, isDraggable) {
  let builder = SafeStylesBuilder.$create__();
  builder.m_width__double__org_gwtproject_dom_style_shared_Unit(width, Unit.f_PX__org_gwtproject_dom_style_shared_Unit).m_height__double__org_gwtproject_dom_style_shared_Unit(height, Unit.f_PX__org_gwtproject_dom_style_shared_Unit).m_trustedNameAndValue__java_lang_String__java_lang_String("background", "url(" + j_l_String.m_valueOf__java_lang_Object(url.m_asString__()) + ") " + "no-repeat " + j_l_String.m_valueOf__java_lang_Object((-left + "px ")) + j_l_String.m_valueOf__java_lang_Object((-top + "px")));
  if (!isDraggable) {
   return this.m_getTemplate___$p_org_gwtproject_user_client_ui_impl_ClippedImageImpl().m_image__org_gwtproject_safehtml_shared_SafeUri__org_gwtproject_safecss_shared_SafeStyles(ClippedImageImpl.$f_clearImage__org_gwtproject_user_client_ui_impl_ClippedImageImpl, SafeStylesUtils.m_fromTrustedString__java_lang_String(builder.m_toSafeStyles__().m_asString__()));
  } else {
   return this.m_getDraggableTemplate___$p_org_gwtproject_user_client_ui_impl_ClippedImageImpl().m_image__org_gwtproject_safehtml_shared_SafeUri__org_gwtproject_safecss_shared_SafeStyles(ClippedImageImpl.$f_clearImage__org_gwtproject_user_client_ui_impl_ClippedImageImpl, SafeStylesUtils.m_fromTrustedString__java_lang_String(builder.m_toSafeStyles__().m_asString__()));
  }
 }
 /**
  * @return {DraggableTemplate}
  * @public
  */
 m_getDraggableTemplate___$p_org_gwtproject_user_client_ui_impl_ClippedImageImpl() {
  if ($Equality.$same(ClippedImageImpl.f_draggableTemplate__org_gwtproject_user_client_ui_impl_ClippedImageImpl_, null)) {
   ClippedImageImpl.f_draggableTemplate__org_gwtproject_user_client_ui_impl_ClippedImageImpl_ = ClippedImageImpl__DraggableTemplateImpl.$create__();
  }
  return ClippedImageImpl.f_draggableTemplate__org_gwtproject_user_client_ui_impl_ClippedImageImpl_;
 }
 /**
  * @return {Template}
  * @public
  */
 m_getTemplate___$p_org_gwtproject_user_client_ui_impl_ClippedImageImpl() {
  if ($Equality.$same(ClippedImageImpl.f_template__org_gwtproject_user_client_ui_impl_ClippedImageImpl_, null)) {
   ClippedImageImpl.f_template__org_gwtproject_user_client_ui_impl_ClippedImageImpl_ = ClippedImageImpl__TemplateImpl.$create__();
  }
  return ClippedImageImpl.f_template__org_gwtproject_user_client_ui_impl_ClippedImageImpl_;
 }
 /**
  * @return {SafeUri}
  * @public
  */
 static get f_clearImage__org_gwtproject_user_client_ui_impl_ClippedImageImpl() {
  return (ClippedImageImpl.$clinit(), ClippedImageImpl.$f_clearImage__org_gwtproject_user_client_ui_impl_ClippedImageImpl);
 }
 /**
  * @public
  */
 static $clinit() {
  ClippedImageImpl.$clinit = () =>{};
  ClippedImageImpl.$loadModules();
  j_l_Object.$clinit();
  ClippedImageImpl.$f_clearImage__org_gwtproject_user_client_ui_impl_ClippedImageImpl = UriUtils.m_fromTrustedString__java_lang_String("clear.cache.gif");
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ClippedImageImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  SafeStylesBuilder = goog.module.get('org.gwtproject.safecss.shared.SafeStylesBuilder$impl');
  SafeStylesUtils = goog.module.get('org.gwtproject.safecss.shared.SafeStylesUtils$impl');
  UriUtils = goog.module.get('org.gwtproject.safehtml.shared.UriUtils$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.impl.ClippedImageImpl.$1$impl');
  ClippedImageImpl__DraggableTemplateImpl = goog.module.get('org.gwtproject.user.client.ui.impl.ClippedImageImpl_DraggableTemplateImpl$impl');
  ClippedImageImpl__TemplateImpl = goog.module.get('org.gwtproject.user.client.ui.impl.ClippedImageImpl_TemplateImpl$impl');
 }
 
}
$Util.$setClassMetadata(ClippedImageImpl, 'org.gwtproject.user.client.ui.impl.ClippedImageImpl');

/** @private {SafeUri} */
ClippedImageImpl.$f_clearImage__org_gwtproject_user_client_ui_impl_ClippedImageImpl;
/** @public {Template} */
ClippedImageImpl.f_template__org_gwtproject_user_client_ui_impl_ClippedImageImpl_;
/** @public {DraggableTemplate} */
ClippedImageImpl.f_draggableTemplate__org_gwtproject_user_client_ui_impl_ClippedImageImpl_;

exports = ClippedImageImpl; 
//# sourceMappingURL=ClippedImageImpl.js.map