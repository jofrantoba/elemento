goog.module('org.gwtproject.cell.client.ImageCell_TemplateImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Template = goog.require('org.gwtproject.cell.client.ImageCell.Template$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let UriUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.UriUtils$impl');

/**
 * @implements {Template}
  */
class ImageCell__TemplateImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ImageCell__TemplateImpl} */
 static $create__() {
  ImageCell__TemplateImpl.$clinit();
  let $instance = new ImageCell__TemplateImpl();
  $instance.$ctor__org_gwtproject_cell_client_ImageCell_TemplateImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_cell_client_ImageCell_TemplateImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {SafeHtml} */
 m_img__java_lang_String(/** ?string */ arg0) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<img src=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(UriUtils.m_sanitizeUri__java_lang_String(arg0)));
  sb.m_append__java_lang_String("\"/>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 
 static $clinit() {
  ImageCell__TemplateImpl.$clinit = () =>{};
  ImageCell__TemplateImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ImageCell__TemplateImpl;
 }
 
 static $loadModules() {
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.module.get('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
  UriUtils = goog.module.get('org.gwtproject.safehtml.shared.UriUtils$impl');
 }
 
}
$Util.$setClassMetadata(ImageCell__TemplateImpl, 'org.gwtproject.cell.client.ImageCell_TemplateImpl');

Template.$markImplementor(ImageCell__TemplateImpl);

exports = ImageCell__TemplateImpl; 
//# sourceMappingURL=ImageCell_TemplateImpl.js.map