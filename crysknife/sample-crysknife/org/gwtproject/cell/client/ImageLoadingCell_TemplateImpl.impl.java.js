goog.module('org.gwtproject.cell.client.ImageLoadingCell_TemplateImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Template = goog.require('org.gwtproject.cell.client.ImageLoadingCell.Template$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let UriUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.UriUtils$impl');

/**
 * @implements {Template}
  */
class ImageLoadingCell__TemplateImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ImageLoadingCell__TemplateImpl} */
 static $create__() {
  ImageLoadingCell__TemplateImpl.$clinit();
  let $instance = new ImageLoadingCell__TemplateImpl();
  $instance.$ctor__org_gwtproject_cell_client_ImageLoadingCell_TemplateImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_cell_client_ImageLoadingCell_TemplateImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {SafeHtml} */
 m_image__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ arg0) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<div style='height:0px;width:0px;overflow:hidden;'>");
  sb.m_append__java_lang_String(arg0.m_asString__());
  sb.m_append__java_lang_String("</div>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 /** @override @return {SafeHtml} */
 m_img__java_lang_String(/** ?string */ arg0) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<img src=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(UriUtils.m_sanitizeUri__java_lang_String(arg0)));
  sb.m_append__java_lang_String("\"/>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 /** @override @return {SafeHtml} */
 m_loading__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ arg0) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<div>");
  sb.m_append__java_lang_String(arg0.m_asString__());
  sb.m_append__java_lang_String("</div>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 
 static $clinit() {
  ImageLoadingCell__TemplateImpl.$clinit = () =>{};
  ImageLoadingCell__TemplateImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ImageLoadingCell__TemplateImpl;
 }
 
 static $loadModules() {
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.module.get('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
  UriUtils = goog.module.get('org.gwtproject.safehtml.shared.UriUtils$impl');
 }
 
}
$Util.$setClassMetadata(ImageLoadingCell__TemplateImpl, 'org.gwtproject.cell.client.ImageLoadingCell_TemplateImpl');

Template.$markImplementor(ImageLoadingCell__TemplateImpl);

exports = ImageLoadingCell__TemplateImpl; 
//# sourceMappingURL=ImageLoadingCell_TemplateImpl.js.map