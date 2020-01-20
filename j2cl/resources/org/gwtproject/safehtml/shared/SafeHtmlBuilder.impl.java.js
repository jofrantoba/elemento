goog.module('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlHostedModeUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils$impl');
let SafeHtmlString = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlString$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');

class SafeHtmlBuilder extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {StringBuilder} */
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_;
 }
 /**
  * @return {!SafeHtmlBuilder}
  * @public
  */
 static $create__() {
  SafeHtmlBuilder.$clinit();
  let $instance = new SafeHtmlBuilder();
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeHtmlBuilder__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_safehtml_shared_SafeHtmlBuilder__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_safehtml_shared_SafeHtmlBuilder();
 }
 /**
  * @param {boolean} b
  * @return {SafeHtmlBuilder}
  * @public
  */
 m_append__boolean(b) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__boolean(b);
  return this;
 }
 /**
  * @param {number} num
  * @return {SafeHtmlBuilder}
  * @public
  */
 m_append__byte(num) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__int(num);
  return this;
 }
 /**
  * @param {number} c
  * @return {SafeHtmlBuilder}
  * @public
  */
 m_append__char(c) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__char(c));
  return this;
 }
 /**
  * @param {number} num
  * @return {SafeHtmlBuilder}
  * @public
  */
 m_append__double(num) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__double(num);
  return this;
 }
 /**
  * @param {number} num
  * @return {SafeHtmlBuilder}
  * @public
  */
 m_append__float(num) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__float(num);
  return this;
 }
 /**
  * @param {number} num
  * @return {SafeHtmlBuilder}
  * @public
  */
 m_append__int(num) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__int(num);
  return this;
 }
 /**
  * @param {!$Long} num
  * @return {SafeHtmlBuilder}
  * @public
  */
 m_append__long(num) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__long(num);
  return this;
 }
 /**
  * @param {SafeHtml} html
  * @return {SafeHtmlBuilder}
  * @public
  */
 m_append__org_gwtproject_safehtml_shared_SafeHtml(html) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__java_lang_String(html.m_asString__());
  return this;
 }
 /**
  * @param {?string} text
  * @return {SafeHtmlBuilder}
  * @public
  */
 m_appendEscaped__java_lang_String(text) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(text));
  return this;
 }
 /**
  * @param {?string} text
  * @return {SafeHtmlBuilder}
  * @public
  */
 m_appendEscapedLines__java_lang_String(text) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__java_lang_String(j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(text), "\n", "<br>"));
  return this;
 }
 /**
  * @param {?string} html
  * @return {SafeHtmlBuilder}
  * @public
  */
 m_appendHtmlConstant__java_lang_String(html) {
  SafeHtmlHostedModeUtils.m_maybeCheckCompleteHtml__java_lang_String(html);
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__java_lang_String(html);
  return this;
 }
 /**
  * @return {SafeHtml}
  * @public
  */
 m_toSafeHtml__() {
  return SafeHtmlString.$create__java_lang_String(this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.toString());
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_safehtml_shared_SafeHtmlBuilder() {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_ = StringBuilder.$create__();
 }
 /**
  * @public
  */
 static $clinit() {
  SafeHtmlBuilder.$clinit = () =>{};
  SafeHtmlBuilder.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SafeHtmlBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  SafeHtmlHostedModeUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils$impl');
  SafeHtmlString = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlString$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
 }
 
}
$Util.$setClassMetadata(SafeHtmlBuilder, 'org.gwtproject.safehtml.shared.SafeHtmlBuilder');

exports = SafeHtmlBuilder; 
//# sourceMappingURL=SafeHtmlBuilder.js.map