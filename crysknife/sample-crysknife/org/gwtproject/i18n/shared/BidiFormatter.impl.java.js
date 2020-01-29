goog.module('org.gwtproject.i18n.shared.BidiFormatter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BidiFormatterBase = goog.require('org.gwtproject.i18n.shared.BidiFormatterBase$impl');

let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let Factory = goog.forwardDeclare('org.gwtproject.i18n.shared.BidiFormatter.Factory$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class BidiFormatter extends BidiFormatterBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {boolean} rtlContext
  * @return {BidiFormatter}
  * @public
  */
 static m_getInstance__boolean(rtlContext) {
  BidiFormatter.$clinit();
  return BidiFormatter.m_getInstance__boolean__boolean(rtlContext, false);
 }
 /**
  * @param {boolean} rtlContext
  * @param {boolean} alwaysSpan
  * @return {BidiFormatter}
  * @public
  */
 static m_getInstance__boolean__boolean(rtlContext, alwaysSpan) {
  BidiFormatter.$clinit();
  return BidiFormatter.$create__org_gwtproject_i18n_client_HasDirection_Direction__boolean(rtlContext ? Direction.f_RTL__org_gwtproject_i18n_client_HasDirection_Direction : Direction.f_LTR__org_gwtproject_i18n_client_HasDirection_Direction, alwaysSpan);
 }
 /**
  * @param {Direction} contextDir
  * @return {BidiFormatter}
  * @public
  */
 static m_getInstance__org_gwtproject_i18n_client_HasDirection_Direction(contextDir) {
  BidiFormatter.$clinit();
  return BidiFormatter.m_getInstance__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, false);
 }
 /**
  * @param {Direction} contextDir
  * @param {boolean} alwaysSpan
  * @return {BidiFormatter}
  * @public
  */
 static m_getInstance__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan) {
  BidiFormatter.$clinit();
  return /**@type {BidiFormatter} */ ($Casts.$to(BidiFormatter.f_factory__org_gwtproject_i18n_shared_BidiFormatter_.m_getInstance__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan), BidiFormatter));
 }
 /**
  * @return {BidiFormatter}
  * @public
  */
 static m_getInstanceForCurrentLocale__() {
  BidiFormatter.$clinit();
  return BidiFormatter.m_getInstanceForCurrentLocale__boolean(false);
 }
 /**
  * @param {boolean} alwaysSpan
  * @return {BidiFormatter}
  * @public
  */
 static m_getInstanceForCurrentLocale__boolean(alwaysSpan) {
  BidiFormatter.$clinit();
  return BidiFormatter.m_getInstance__boolean__boolean(LocaleInfo.m_getCurrentLocale__().m_isRTL__(), alwaysSpan);
 }
 /**
  * @param {Direction} contextDir
  * @param {boolean} alwaysSpan
  * @return {!BidiFormatter}
  * @public
  */
 static $create__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan) {
  BidiFormatter.$clinit();
  let $instance = new BidiFormatter();
  $instance.$ctor__org_gwtproject_i18n_shared_BidiFormatter__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan);
  return $instance;
 }
 /**
  * @param {Direction} contextDir
  * @param {boolean} alwaysSpan
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_BidiFormatter__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan) {
  this.$ctor__org_gwtproject_i18n_shared_BidiFormatterBase__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan);
 }
 /**
  * @param {?string} str
  * @return {?string}
  * @public
  */
 m_dirAttr__java_lang_String(str) {
  return this.m_dirAttr__java_lang_String__boolean(str, false);
 }
 /**
  * @param {?string} str
  * @param {boolean} isHtml
  * @return {?string}
  * @public
  */
 m_dirAttr__java_lang_String__boolean(str, isHtml) {
  return this.m_dirAttrBase__java_lang_String__boolean(str, isHtml);
 }
 /**
  * @return {?string}
  * @public
  */
 m_endEdge__() {
  return this.m_endEdgeBase__();
 }
 /**
  * @param {Direction} dir
  * @return {?string}
  * @public
  */
 m_knownDirAttr__org_gwtproject_i18n_client_HasDirection_Direction(dir) {
  return this.m_knownDirAttrBase__org_gwtproject_i18n_client_HasDirection_Direction(dir);
 }
 /**
  * @return {?string}
  * @public
  */
 m_mark__() {
  return this.m_markBase__();
 }
 /**
  * @param {?string} str
  * @return {?string}
  * @public
  */
 m_markAfter__java_lang_String(str) {
  return this.m_markAfter__java_lang_String__boolean(str, false);
 }
 /**
  * @param {?string} str
  * @param {boolean} isHtml
  * @return {?string}
  * @public
  */
 m_markAfter__java_lang_String__boolean(str, isHtml) {
  return this.m_markAfterBase__java_lang_String__boolean(str, isHtml);
 }
 /**
  * @param {?string} str
  * @return {?string}
  * @public
  */
 m_spanWrap__java_lang_String(str) {
  return this.m_spanWrap__java_lang_String__boolean__boolean(str, false, true);
 }
 /**
  * @param {?string} str
  * @param {boolean} isHtml
  * @return {?string}
  * @public
  */
 m_spanWrap__java_lang_String__boolean(str, isHtml) {
  return this.m_spanWrap__java_lang_String__boolean__boolean(str, isHtml, true);
 }
 /**
  * @param {?string} str
  * @param {boolean} isHtml
  * @param {boolean} dirReset
  * @return {?string}
  * @public
  */
 m_spanWrap__java_lang_String__boolean__boolean(str, isHtml, dirReset) {
  return this.m_spanWrapBase__java_lang_String__boolean__boolean(str, isHtml, dirReset);
 }
 /**
  * @param {Direction} dir
  * @param {?string} str
  * @return {?string}
  * @public
  */
 m_spanWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(dir, str) {
  return this.m_spanWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, str, false, true);
 }
 /**
  * @param {Direction} dir
  * @param {?string} str
  * @param {boolean} isHtml
  * @return {?string}
  * @public
  */
 m_spanWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean(dir, str, isHtml) {
  return this.m_spanWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, str, isHtml, true);
 }
 /**
  * @param {Direction} dir
  * @param {?string} str
  * @param {boolean} isHtml
  * @param {boolean} dirReset
  * @return {?string}
  * @public
  */
 m_spanWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, str, isHtml, dirReset) {
  return this.m_spanWrapWithKnownDirBase__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, str, isHtml, dirReset);
 }
 /**
  * @return {?string}
  * @public
  */
 m_startEdge__() {
  return this.m_startEdgeBase__();
 }
 /**
  * @param {?string} str
  * @return {?string}
  * @public
  */
 m_unicodeWrap__java_lang_String(str) {
  return this.m_unicodeWrap__java_lang_String__boolean__boolean(str, false, true);
 }
 /**
  * @param {?string} str
  * @param {boolean} isHtml
  * @return {?string}
  * @public
  */
 m_unicodeWrap__java_lang_String__boolean(str, isHtml) {
  return this.m_unicodeWrap__java_lang_String__boolean__boolean(str, isHtml, true);
 }
 /**
  * @param {?string} str
  * @param {boolean} isHtml
  * @param {boolean} dirReset
  * @return {?string}
  * @public
  */
 m_unicodeWrap__java_lang_String__boolean__boolean(str, isHtml, dirReset) {
  return this.m_unicodeWrapBase__java_lang_String__boolean__boolean(str, isHtml, dirReset);
 }
 /**
  * @param {Direction} dir
  * @param {?string} str
  * @return {?string}
  * @public
  */
 m_unicodeWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(dir, str) {
  return this.m_unicodeWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, str, false, true);
 }
 /**
  * @param {Direction} dir
  * @param {?string} str
  * @param {boolean} isHtml
  * @return {?string}
  * @public
  */
 m_unicodeWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean(dir, str, isHtml) {
  return this.m_unicodeWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, str, isHtml, true);
 }
 /**
  * @param {Direction} dir
  * @param {?string} str
  * @param {boolean} isHtml
  * @param {boolean} dirReset
  * @return {?string}
  * @public
  */
 m_unicodeWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, str, isHtml, dirReset) {
  return this.m_unicodeWrapWithKnownDirBase__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, str, isHtml, dirReset);
 }
 /**
  * @public
  */
 static $clinit() {
  BidiFormatter.$clinit = () =>{};
  BidiFormatter.$loadModules();
  BidiFormatterBase.$clinit();
  BidiFormatter.f_factory__org_gwtproject_i18n_shared_BidiFormatter_ = Factory.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof BidiFormatter;
 }
 /**
  * @public
  */
 static $loadModules() {
  Direction = goog.module.get('org.gwtproject.i18n.client.HasDirection.Direction$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  Factory = goog.module.get('org.gwtproject.i18n.shared.BidiFormatter.Factory$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(BidiFormatter, 'org.gwtproject.i18n.shared.BidiFormatter');

/** @public {Factory} */
BidiFormatter.f_factory__org_gwtproject_i18n_shared_BidiFormatter_;

exports = BidiFormatter; 
//# sourceMappingURL=BidiFormatter.js.map