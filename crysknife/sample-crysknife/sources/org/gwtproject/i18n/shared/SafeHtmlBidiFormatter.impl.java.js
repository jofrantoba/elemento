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
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {boolean} rtlContext
  * @return {SafeHtmlBidiFormatter}
  * @public
  */
 static m_getInstance__boolean(rtlContext) {
  SafeHtmlBidiFormatter.$clinit();
  return SafeHtmlBidiFormatter.m_getInstance__boolean__boolean(rtlContext, false);
 }
 /**
  * @param {boolean} rtlContext
  * @param {boolean} alwaysSpan
  * @return {SafeHtmlBidiFormatter}
  * @public
  */
 static m_getInstance__boolean__boolean(rtlContext, alwaysSpan) {
  SafeHtmlBidiFormatter.$clinit();
  return SafeHtmlBidiFormatter.m_getInstance__org_gwtproject_i18n_client_HasDirection_Direction__boolean(rtlContext ? Direction.f_RTL__org_gwtproject_i18n_client_HasDirection_Direction : Direction.f_LTR__org_gwtproject_i18n_client_HasDirection_Direction, alwaysSpan);
 }
 /**
  * @param {Direction} contextDir
  * @return {SafeHtmlBidiFormatter}
  * @public
  */
 static m_getInstance__org_gwtproject_i18n_client_HasDirection_Direction(contextDir) {
  SafeHtmlBidiFormatter.$clinit();
  return SafeHtmlBidiFormatter.m_getInstance__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, false);
 }
 /**
  * @param {Direction} contextDir
  * @param {boolean} alwaysSpan
  * @return {SafeHtmlBidiFormatter}
  * @public
  */
 static m_getInstance__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan) {
  SafeHtmlBidiFormatter.$clinit();
  return /**@type {SafeHtmlBidiFormatter} */ ($Casts.$to(SafeHtmlBidiFormatter.f_factory__org_gwtproject_i18n_shared_SafeHtmlBidiFormatter_.m_getInstance__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan), SafeHtmlBidiFormatter));
 }
 /**
  * @return {SafeHtmlBidiFormatter}
  * @public
  */
 static m_getInstanceForCurrentLocale__() {
  SafeHtmlBidiFormatter.$clinit();
  return SafeHtmlBidiFormatter.m_getInstanceForCurrentLocale__boolean(false);
 }
 /**
  * @param {boolean} alwaysSpan
  * @return {SafeHtmlBidiFormatter}
  * @public
  */
 static m_getInstanceForCurrentLocale__boolean(alwaysSpan) {
  SafeHtmlBidiFormatter.$clinit();
  return SafeHtmlBidiFormatter.m_getInstance__boolean__boolean(LocaleInfo.m_getCurrentLocale__().m_isRTL__(), alwaysSpan);
 }
 /**
  * @param {Direction} contextDir
  * @param {boolean} alwaysSpan
  * @return {!SafeHtmlBidiFormatter}
  * @public
  */
 static $create__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan) {
  SafeHtmlBidiFormatter.$clinit();
  let $instance = new SafeHtmlBidiFormatter();
  $instance.$ctor__org_gwtproject_i18n_shared_SafeHtmlBidiFormatter__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan);
  return $instance;
 }
 /**
  * @param {Direction} contextDir
  * @param {boolean} alwaysSpan
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_SafeHtmlBidiFormatter__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan) {
  this.$ctor__org_gwtproject_i18n_shared_BidiFormatterBase__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan);
 }
 /**
  * @param {SafeHtml} html
  * @return {SafeHtml}
  * @public
  */
 m_dirAttr__org_gwtproject_safehtml_shared_SafeHtml(html) {
  return this.m_cachedSafeHtml__java_lang_String_$p_org_gwtproject_i18n_shared_SafeHtmlBidiFormatter(this.m_dirAttrBase__java_lang_String__boolean(html.m_asString__(), true));
 }
 /**
  * @param {?string} str
  * @return {SafeHtml}
  * @public
  */
 m_dirAttr__java_lang_String(str) {
  return this.m_cachedSafeHtml__java_lang_String_$p_org_gwtproject_i18n_shared_SafeHtmlBidiFormatter(this.m_dirAttrBase__java_lang_String__boolean(str, false));
 }
 /**
  * @return {SafeHtml}
  * @public
  */
 m_endEdge__() {
  return this.m_cachedSafeHtml__java_lang_String_$p_org_gwtproject_i18n_shared_SafeHtmlBidiFormatter(this.m_endEdgeBase__());
 }
 /**
  * @param {SafeHtml} html
  * @return {Direction}
  * @public
  */
 m_estimateDirection__org_gwtproject_safehtml_shared_SafeHtml(html) {
  return this.m_estimateDirection__java_lang_String__boolean(html.m_asString__(), true);
 }
 /**
  * @param {Direction} dir
  * @return {SafeHtml}
  * @public
  */
 m_knownDirAttr__org_gwtproject_i18n_client_HasDirection_Direction(dir) {
  return this.m_cachedSafeHtml__java_lang_String_$p_org_gwtproject_i18n_shared_SafeHtmlBidiFormatter(this.m_knownDirAttrBase__org_gwtproject_i18n_client_HasDirection_Direction(dir));
 }
 /**
  * @return {SafeHtml}
  * @public
  */
 m_mark__() {
  return this.m_cachedSafeHtml__java_lang_String_$p_org_gwtproject_i18n_shared_SafeHtmlBidiFormatter(this.m_markBase__());
 }
 /**
  * @param {SafeHtml} html
  * @return {SafeHtml}
  * @public
  */
 m_markAfter__org_gwtproject_safehtml_shared_SafeHtml(html) {
  return this.m_cachedSafeHtml__java_lang_String_$p_org_gwtproject_i18n_shared_SafeHtmlBidiFormatter(this.m_markAfterBase__java_lang_String__boolean(html.m_asString__(), true));
 }
 /**
  * @param {?string} str
  * @return {SafeHtml}
  * @public
  */
 m_markAfter__java_lang_String(str) {
  return this.m_cachedSafeHtml__java_lang_String_$p_org_gwtproject_i18n_shared_SafeHtmlBidiFormatter(this.m_markAfterBase__java_lang_String__boolean(str, false));
 }
 /**
  * @param {SafeHtml} html
  * @return {SafeHtml}
  * @public
  */
 m_spanWrap__org_gwtproject_safehtml_shared_SafeHtml(html) {
  return this.m_spanWrap__org_gwtproject_safehtml_shared_SafeHtml__boolean(html, true);
 }
 /**
  * @param {SafeHtml} html
  * @param {boolean} dirReset
  * @return {SafeHtml}
  * @public
  */
 m_spanWrap__org_gwtproject_safehtml_shared_SafeHtml__boolean(html, dirReset) {
  return SafeHtmlUtils.m_fromTrustedString__java_lang_String(this.m_spanWrapBase__java_lang_String__boolean__boolean(html.m_asString__(), true, dirReset));
 }
 /**
  * @param {?string} str
  * @return {SafeHtml}
  * @public
  */
 m_spanWrap__java_lang_String(str) {
  return this.m_spanWrap__java_lang_String__boolean(str, true);
 }
 /**
  * @param {?string} str
  * @param {boolean} dirReset
  * @return {SafeHtml}
  * @public
  */
 m_spanWrap__java_lang_String__boolean(str, dirReset) {
  return SafeHtmlUtils.m_fromTrustedString__java_lang_String(this.m_spanWrapBase__java_lang_String__boolean__boolean(str, false, dirReset));
 }
 /**
  * @param {Direction} dir
  * @param {SafeHtml} html
  * @return {SafeHtml}
  * @public
  */
 m_spanWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__org_gwtproject_safehtml_shared_SafeHtml(dir, html) {
  return this.m_spanWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__org_gwtproject_safehtml_shared_SafeHtml__boolean(dir, html, true);
 }
 /**
  * @param {Direction} dir
  * @param {SafeHtml} html
  * @param {boolean} dirReset
  * @return {SafeHtml}
  * @public
  */
 m_spanWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__org_gwtproject_safehtml_shared_SafeHtml__boolean(dir, html, dirReset) {
  return SafeHtmlUtils.m_fromTrustedString__java_lang_String(this.m_spanWrapWithKnownDirBase__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, html.m_asString__(), true, dirReset));
 }
 /**
  * @param {Direction} dir
  * @param {?string} str
  * @return {SafeHtml}
  * @public
  */
 m_spanWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(dir, str) {
  return this.m_spanWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean(dir, str, true);
 }
 /**
  * @param {Direction} dir
  * @param {?string} str
  * @param {boolean} dirReset
  * @return {SafeHtml}
  * @public
  */
 m_spanWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean(dir, str, dirReset) {
  return SafeHtmlUtils.m_fromTrustedString__java_lang_String(this.m_spanWrapWithKnownDirBase__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, str, false, dirReset));
 }
 /**
  * @return {SafeHtml}
  * @public
  */
 m_startEdge__() {
  return this.m_cachedSafeHtml__java_lang_String_$p_org_gwtproject_i18n_shared_SafeHtmlBidiFormatter(this.m_startEdgeBase__());
 }
 /**
  * @param {SafeHtml} html
  * @return {SafeHtml}
  * @public
  */
 m_unicodeWrap__org_gwtproject_safehtml_shared_SafeHtml(html) {
  return this.m_unicodeWrap__org_gwtproject_safehtml_shared_SafeHtml__boolean(html, true);
 }
 /**
  * @param {SafeHtml} html
  * @param {boolean} dirReset
  * @return {SafeHtml}
  * @public
  */
 m_unicodeWrap__org_gwtproject_safehtml_shared_SafeHtml__boolean(html, dirReset) {
  return SafeHtmlUtils.m_fromTrustedString__java_lang_String(this.m_unicodeWrapBase__java_lang_String__boolean__boolean(html.m_asString__(), true, dirReset));
 }
 /**
  * @param {?string} str
  * @return {SafeHtml}
  * @public
  */
 m_unicodeWrap__java_lang_String(str) {
  return this.m_unicodeWrap__java_lang_String__boolean(str, true);
 }
 /**
  * @param {?string} str
  * @param {boolean} dirReset
  * @return {SafeHtml}
  * @public
  */
 m_unicodeWrap__java_lang_String__boolean(str, dirReset) {
  return SafeHtmlUtils.m_fromString__java_lang_String(this.m_unicodeWrapBase__java_lang_String__boolean__boolean(str, false, dirReset));
 }
 /**
  * @param {Direction} dir
  * @param {SafeHtml} html
  * @return {SafeHtml}
  * @public
  */
 m_unicodeWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__org_gwtproject_safehtml_shared_SafeHtml(dir, html) {
  return this.m_unicodeWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__org_gwtproject_safehtml_shared_SafeHtml__boolean(dir, html, true);
 }
 /**
  * @param {Direction} dir
  * @param {SafeHtml} html
  * @param {boolean} dirReset
  * @return {SafeHtml}
  * @public
  */
 m_unicodeWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__org_gwtproject_safehtml_shared_SafeHtml__boolean(dir, html, dirReset) {
  return SafeHtmlUtils.m_fromTrustedString__java_lang_String(this.m_unicodeWrapWithKnownDirBase__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, html.m_asString__(), true, dirReset));
 }
 /**
  * @param {Direction} dir
  * @param {?string} str
  * @return {SafeHtml}
  * @public
  */
 m_unicodeWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(dir, str) {
  return this.m_unicodeWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean(dir, str, true);
 }
 /**
  * @param {Direction} dir
  * @param {?string} str
  * @param {boolean} dirReset
  * @return {SafeHtml}
  * @public
  */
 m_unicodeWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean(dir, str, dirReset) {
  return SafeHtmlUtils.m_fromString__java_lang_String(this.m_unicodeWrapWithKnownDirBase__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, str, false, dirReset));
 }
 /**
  * @param {?string} str
  * @return {SafeHtml}
  * @public
  */
 m_cachedSafeHtml__java_lang_String_$p_org_gwtproject_i18n_shared_SafeHtmlBidiFormatter(str) {
  if ($Equality.$same(SafeHtmlBidiFormatter.f_cachedSafeHtmlValues__org_gwtproject_i18n_shared_SafeHtmlBidiFormatter_, null)) {
   SafeHtmlBidiFormatter.f_cachedSafeHtmlValues__org_gwtproject_i18n_shared_SafeHtmlBidiFormatter_ = /**@type {!HashMap<?string, SafeHtml>} */ (HashMap.$create__());
  }
  let entry = /**@type {SafeHtml} */ ($Casts.$to(SafeHtmlBidiFormatter.f_cachedSafeHtmlValues__org_gwtproject_i18n_shared_SafeHtmlBidiFormatter_.get(str), SafeHtml));
  if ($Equality.$same(entry, null)) {
   entry = SafeHtmlUtils.m_fromString__java_lang_String(str);
   SafeHtmlBidiFormatter.f_cachedSafeHtmlValues__org_gwtproject_i18n_shared_SafeHtmlBidiFormatter_.put(str, entry);
  }
  return entry;
 }
 /**
  * @public
  */
 static $clinit() {
  SafeHtmlBidiFormatter.$clinit = () =>{};
  SafeHtmlBidiFormatter.$loadModules();
  BidiFormatterBase.$clinit();
  SafeHtmlBidiFormatter.f_factory__org_gwtproject_i18n_shared_SafeHtmlBidiFormatter_ = Factory.$create__();
  SafeHtmlBidiFormatter.f_cachedSafeHtmlValues__org_gwtproject_i18n_shared_SafeHtmlBidiFormatter_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SafeHtmlBidiFormatter;
 }
 /**
  * @public
  */
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

/** @public {Factory} */
SafeHtmlBidiFormatter.f_factory__org_gwtproject_i18n_shared_SafeHtmlBidiFormatter_;
/** @public {HashMap<?string, SafeHtml>} */
SafeHtmlBidiFormatter.f_cachedSafeHtmlValues__org_gwtproject_i18n_shared_SafeHtmlBidiFormatter_;

exports = SafeHtmlBidiFormatter; 
//# sourceMappingURL=SafeHtmlBidiFormatter.js.map