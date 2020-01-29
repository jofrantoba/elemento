goog.module('org.gwtproject.user.client.ui.RenderableStamper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let ElementBuilderBase = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');
let HtmlElementBuilderBase = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');

class RenderableStamper extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_token__org_gwtproject_user_client_ui_RenderableStamper_;
 }
 /**
  * @param {?string} token
  * @return {!RenderableStamper}
  * @public
  */
 static $create__java_lang_String(token) {
  RenderableStamper.$clinit();
  let $instance = new RenderableStamper();
  $instance.$ctor__org_gwtproject_user_client_ui_RenderableStamper__java_lang_String(token);
  return $instance;
 }
 /**
  * @param {?string} token
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_RenderableStamper__java_lang_String(token) {
  this.$ctor__java_lang_Object__();
  this.f_token__org_gwtproject_user_client_ui_RenderableStamper_ = SafeHtmlUtils.m_htmlEscape__java_lang_String(token);
 }
 /**
  * @return {Object}
  * @public
  */
 m_findStampedElement__() {
  return $Overlay.m_get__().getElementById(this.f_token__org_gwtproject_user_client_ui_RenderableStamper_);
 }
 /**
  * @param {SafeHtml} safeHtml
  * @return {SafeHtml}
  * @public
  */
 m_stamp__org_gwtproject_safehtml_shared_SafeHtml(safeHtml) {
  let html = j_l_String.m_trim__java_lang_String(safeHtml.m_asString__());
  if (!j_l_String.m_startsWith__java_lang_String__java_lang_String(html, "<")) {
   return safeHtml;
  }
  let endOfFirstTag = j_l_String.m_indexOf__java_lang_String__int(html, 62 /* '>' */);
  if (j_l_String.m_charAt__java_lang_String__int(html, endOfFirstTag - 1) == 47 /* '/' */) {
   endOfFirstTag--;
  }
  let htmlBuilder = StringBuilder.$create__().m_append__java_lang_String(j_l_String.m_substring__java_lang_String__int__int(html, 0, endOfFirstTag)).m_append__java_lang_String(" id ='").m_append__java_lang_String(this.f_token__org_gwtproject_user_client_ui_RenderableStamper_).m_append__java_lang_String("'").m_append__java_lang_String(j_l_String.m_substring__java_lang_String__int(html, endOfFirstTag));
  return SafeHtmlUtils.m_fromTrustedString__java_lang_String(htmlBuilder.toString());
 }
 /**
  * @template T
  * @param {T} elementBuilder
  * @return {T}
  * @public
  */
 m_stamp__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase(elementBuilder) {
  /**@type {HtmlElementBuilderBase} */ (elementBuilder).m_id__java_lang_String(this.f_token__org_gwtproject_user_client_ui_RenderableStamper_);
  return elementBuilder;
 }
 /**
  * @public
  */
 static $clinit() {
  RenderableStamper.$clinit = () =>{};
  RenderableStamper.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof RenderableStamper;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
 }
 
}
$Util.$setClassMetadata(RenderableStamper, 'org.gwtproject.user.client.ui.RenderableStamper');

exports = RenderableStamper; 
//# sourceMappingURL=RenderableStamper.js.map