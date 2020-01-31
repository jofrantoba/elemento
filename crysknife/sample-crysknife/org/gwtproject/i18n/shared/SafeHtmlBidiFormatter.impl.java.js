goog.module('org.gwtproject.i18n.shared.SafeHtmlBidiFormatter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BidiFormatterBase = goog.require('org.gwtproject.i18n.shared.BidiFormatterBase$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let Factory = goog.forwardDeclare('org.gwtproject.i18n.shared.SafeHtmlBidiFormatter.Factory$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class SafeHtmlBidiFormatter extends BidiFormatterBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {SafeHtmlBidiFormatter} */
 static m_getInstance__boolean(/** boolean */ rtlContext) {
  SafeHtmlBidiFormatter.$clinit();
  return SafeHtmlBidiFormatter.m_getInstance__boolean__boolean(rtlContext, false);
 }
 /** @return {SafeHtmlBidiFormatter} */
 static m_getInstance__boolean__boolean(/** boolean */ rtlContext, /** boolean */ alwaysSpan) {
  SafeHtmlBidiFormatter.$clinit();
  return SafeHtmlBidiFormatter.m_getInstance__org_gwtproject_i18n_client_HasDirection_Direction__boolean(rtlContext ? Direction.f_RTL__org_gwtproject_i18n_client_HasDirection_Direction : Direction.f_LTR__org_gwtproject_i18n_client_HasDirection_Direction, alwaysSpan);
 }
 /** @return {SafeHtmlBidiFormatter} */
 static m_getInstance__org_gwtproject_i18n_client_HasDirection_Direction(/** Direction */ contextDir) {
  SafeHtmlBidiFormatter.$clinit();
  return SafeHtmlBidiFormatter.m_getInstance__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, false);
 }
 /** @return {SafeHtmlBidiFormatter} */
 static m_getInstance__org_gwtproject_i18n_client_HasDirection_Direction__boolean(/** Direction */ contextDir, /** boolean */ alwaysSpan) {
  SafeHtmlBidiFormatter.$clinit();
  return /**@type {SafeHtmlBidiFormatter}*/ ($Casts.$to(SafeHtmlBidiFormatter.f_factory__org_gwtproject_i18n_shared_SafeHtmlBidiFormatter_.m_getInstance__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan), SafeHtmlBidiFormatter));
 }
 /** @return {SafeHtmlBidiFormatter} */
 static m_getInstanceForCurrentLocale__() {
  SafeHtmlBidiFormatter.$clinit();
  return SafeHtmlBidiFormatter.m_getInstanceForCurrentLocale__boolean(false);
 }
 /** @return {SafeHtmlBidiFormatter} */
 static m_getInstanceForCurrentLocale__boolean(/** boolean */ alwaysSpan) {
  SafeHtmlBidiFormatter.$clinit();
  return SafeHtmlBidiFormatter.m_getInstance__boolean__boolean(LocaleInfo.m_getCurrentLocale__().m_isRTL__(), alwaysSpan);
 }
 /** @return {!SafeHtmlBidiFormatter} */
 static $create__org_gwtproject_i18n_client_HasDirection_Direction__boolean(/** Direction */ contextDir, /** boolean */ alwaysSpan) {
  SafeHtmlBidiFormatter.$clinit();
  let $instance = new SafeHtmlBidiFormatter();
  $instance.$ctor__org_gwtproject_i18n_shared_SafeHtmlBidiFormatter__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan);
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_SafeHtmlBidiFormatter__org_gwtproject_i18n_client_HasDirection_Direction__boolean(/** Direction */ contextDir, /** boolean */ alwaysSpan) {
  this.$ctor__org_gwtproject_i18n_shared_BidiFormatterBase__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan);
 }
 /** @return {SafeHtml} */
 m_dirAttr__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  return this.m_cachedSafeHtml__java_lang_String_$p_org_gwtproject_i18n_shared_SafeHtmlBidiFormatter(this.m_dirAttrBase__java_lang_String__boolean(html.m_asString__(), true));
 }
 /** @return {SafeHtml} */
 m_dirAttr__java_lang_String(/** ?string */ str) {
  return this.m_cachedSafeHtml__java_lang_String_$p_org_gwtproject_i18n_shared_SafeHtmlBidiFormatter(this.m_dirAttrBase__java_lang_String__boolean(str, false));
 }
 /** @return {SafeHtml} */
 m_endEdge__() {
  return this.m_cachedSafeHtml__java_lang_String_$p_org_gwtproject_i18n_shared_SafeHtmlBidiFormatter(this.m_endEdgeBase__());
 }
 /** @return {Direction} */
 m_estimateDirection__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  return this.m_estimateDirection__java_lang_String__boolean(html.m_asString__(), true);
 }
 /** @return {SafeHtml} */
 m_knownDirAttr__org_gwtproject_i18n_client_HasDirection_Direction(/** Direction */ dir) {
  return this.m_cachedSafeHtml__java_lang_String_$p_org_gwtproject_i18n_shared_SafeHtmlBidiFormatter(this.m_knownDirAttrBase__org_gwtproject_i18n_client_HasDirection_Direction(dir));
 }
 /** @return {SafeHtml} */
 m_mark__() {
  return this.m_cachedSafeHtml__java_lang_String_$p_org_gwtproject_i18n_shared_SafeHtmlBidiFormatter(this.m_markBase__());
 }
 /** @return {SafeHtml} */
 m_markAfter__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  return this.m_cachedSafeHtml__java_lang_String_$p_org_gwtproject_i18n_shared_SafeHtmlBidiFormatter(this.m_markAfterBase__java_lang_String__boolean(html.m_asString__(), true));
 }
 /** @return {SafeHtml} */
 m_markAfter__java_lang_String(/** ?string */ str) {
  return this.m_cachedSafeHtml__java_lang_String_$p_org_gwtproject_i18n_shared_SafeHtmlBidiFormatter(this.m_markAfterBase__java_lang_String__boolean(str, false));
 }
 /** @return {SafeHtml} */
 m_spanWrap__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  return this.m_spanWrap__org_gwtproject_safehtml_shared_SafeHtml__boolean(html, true);
 }
 /** @return {SafeHtml} */
 m_spanWrap__org_gwtproject_safehtml_shared_SafeHtml__boolean(/** SafeHtml */ html, /** boolean */ dirReset) {
  return SafeHtmlUtils.m_fromTrustedString__java_lang_String(this.m_spanWrapBase__java_lang_String__boolean__boolean(html.m_asString__(), true, dirReset));
 }
 /** @return {SafeHtml} */
 m_spanWrap__java_lang_String(/** ?string */ str) {
  return this.m_spanWrap__java_lang_String__boolean(str, true);
 }
 /** @return {SafeHtml} */
 m_spanWrap__java_lang_String__boolean(/** ?string */ str, /** boolean */ dirReset) {
  return SafeHtmlUtils.m_fromTrustedString__java_lang_String(this.m_spanWrapBase__java_lang_String__boolean__boolean(str, false, dirReset));
 }
 /** @return {SafeHtml} */
 m_spanWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__org_gwtproject_safehtml_shared_SafeHtml(/** Direction */ dir, /** SafeHtml */ html) {
  return this.m_spanWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__org_gwtproject_safehtml_shared_SafeHtml__boolean(dir, html, true);
 }
 /** @return {SafeHtml} */
 m_spanWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__org_gwtproject_safehtml_shared_SafeHtml__boolean(/** Direction */ dir, /** SafeHtml */ html, /** boolean */ dirReset) {
  return SafeHtmlUtils.m_fromTrustedString__java_lang_String(this.m_spanWrapWithKnownDirBase__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, html.m_asString__(), true, dirReset));
 }
 /** @return {SafeHtml} */
 m_spanWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(/** Direction */ dir, /** ?string */ str) {
  return this.m_spanWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean(dir, str, true);
 }
 /** @return {SafeHtml} */
 m_spanWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean(/** Direction */ dir, /** ?string */ str, /** boolean */ dirReset) {
  return SafeHtmlUtils.m_fromTrustedString__java_lang_String(this.m_spanWrapWithKnownDirBase__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, str, false, dirReset));
 }
 /** @return {SafeHtml} */
 m_startEdge__() {
  return this.m_cachedSafeHtml__java_lang_String_$p_org_gwtproject_i18n_shared_SafeHtmlBidiFormatter(this.m_startEdgeBase__());
 }
 /** @return {SafeHtml} */
 m_unicodeWrap__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  return this.m_unicodeWrap__org_gwtproject_safehtml_shared_SafeHtml__boolean(html, true);
 }
 /** @return {SafeHtml} */
 m_unicodeWrap__org_gwtproject_safehtml_shared_SafeHtml__boolean(/** SafeHtml */ html, /** boolean */ dirReset) {
  return SafeHtmlUtils.m_fromTrustedString__java_lang_String(this.m_unicodeWrapBase__java_lang_String__boolean__boolean(html.m_asString__(), true, dirReset));
 }
 /** @return {SafeHtml} */
 m_unicodeWrap__java_lang_String(/** ?string */ str) {
  return this.m_unicodeWrap__java_lang_String__boolean(str, true);
 }
 /** @return {SafeHtml} */
 m_unicodeWrap__java_lang_String__boolean(/** ?string */ str, /** boolean */ dirReset) {
  return SafeHtmlUtils.m_fromString__java_lang_String(this.m_unicodeWrapBase__java_lang_String__boolean__boolean(str, false, dirReset));
 }
 /** @return {SafeHtml} */
 m_unicodeWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__org_gwtproject_safehtml_shared_SafeHtml(/** Direction */ dir, /** SafeHtml */ html) {
  return this.m_unicodeWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__org_gwtproject_safehtml_shared_SafeHtml__boolean(dir, html, true);
 }
 /** @return {SafeHtml} */
 m_unicodeWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__org_gwtproject_safehtml_shared_SafeHtml__boolean(/** Direction */ dir, /** SafeHtml */ html, /** boolean */ dirReset) {
  return SafeHtmlUtils.m_fromTrustedString__java_lang_String(this.m_unicodeWrapWithKnownDirBase__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, html.m_asString__(), true, dirReset));
 }
 /** @return {SafeHtml} */
 m_unicodeWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(/** Direction */ dir, /** ?string */ str) {
  return this.m_unicodeWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean(dir, str, true);
 }
 /** @return {SafeHtml} */
 m_unicodeWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean(/** Direction */ dir, /** ?string */ str, /** boolean */ dirReset) {
  return SafeHtmlUtils.m_fromString__java_lang_String(this.m_unicodeWrapWithKnownDirBase__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, str, false, dirReset));
 }
 /** @return {SafeHtml} */
 m_cachedSafeHtml__java_lang_String_$p_org_gwtproject_i18n_shared_SafeHtmlBidiFormatter(/** ?string */ str) {
  if ($Equality.$same(SafeHtmlBidiFormatter.f_cachedSafeHtmlValues__org_gwtproject_i18n_shared_SafeHtmlBidiFormatter_, null)) {
   SafeHtmlBidiFormatter.f_cachedSafeHtmlValues__org_gwtproject_i18n_shared_SafeHtmlBidiFormatter_ = /**@type {!HashMap<?string, SafeHtml>}*/ (HashMap.$create__());
  }
  let entry = /**@type {SafeHtml}*/ ($Casts.$to(SafeHtmlBidiFormatter.f_cachedSafeHtmlValues__org_gwtproject_i18n_shared_SafeHtmlBidiFormatter_.get(str), SafeHtml));
  if ($Equality.$same(entry, null)) {
   entry = SafeHtmlUtils.m_fromString__java_lang_String(str);
   SafeHtmlBidiFormatter.f_cachedSafeHtmlValues__org_gwtproject_i18n_shared_SafeHtmlBidiFormatter_.put(str, entry);
  }
  return entry;
 }
 
 static $clinit() {
  SafeHtmlBidiFormatter.$clinit = () =>{};
  SafeHtmlBidiFormatter.$loadModules();
  BidiFormatterBase.$clinit();
  SafeHtmlBidiFormatter.f_factory__org_gwtproject_i18n_shared_SafeHtmlBidiFormatter_ = Factory.$create__();
  SafeHtmlBidiFormatter.f_cachedSafeHtmlValues__org_gwtproject_i18n_shared_SafeHtmlBidiFormatter_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SafeHtmlBidiFormatter;
 }
 
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Direction = goog.module.get('org.gwtproject.i18n.client.HasDirection.Direction$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  Factory = goog.module.get('org.gwtproject.i18n.shared.SafeHtmlBidiFormatter.Factory$impl');
  SafeHtml = goog.module.get('org.gwtproject.safehtml.shared.SafeHtml$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(SafeHtmlBidiFormatter, 'org.gwtproject.i18n.shared.SafeHtmlBidiFormatter');

/**@type {Factory}*/
SafeHtmlBidiFormatter.f_factory__org_gwtproject_i18n_shared_SafeHtmlBidiFormatter_;
/**@type {HashMap<?string, SafeHtml>}*/
SafeHtmlBidiFormatter.f_cachedSafeHtmlValues__org_gwtproject_i18n_shared_SafeHtmlBidiFormatter_;

exports = SafeHtmlBidiFormatter; 
//# sourceMappingURL=SafeHtmlBidiFormatter.js.map