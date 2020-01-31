goog.module('org.gwtproject.i18n.shared.BidiFormatter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BidiFormatterBase = goog.require('org.gwtproject.i18n.shared.BidiFormatterBase$impl');

let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let Factory = goog.forwardDeclare('org.gwtproject.i18n.shared.BidiFormatter.Factory$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class BidiFormatter extends BidiFormatterBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {BidiFormatter} */
 static m_getInstance__boolean(/** boolean */ rtlContext) {
  BidiFormatter.$clinit();
  return BidiFormatter.m_getInstance__boolean__boolean(rtlContext, false);
 }
 /** @return {BidiFormatter} */
 static m_getInstance__boolean__boolean(/** boolean */ rtlContext, /** boolean */ alwaysSpan) {
  BidiFormatter.$clinit();
  return BidiFormatter.$create__org_gwtproject_i18n_client_HasDirection_Direction__boolean(rtlContext ? Direction.f_RTL__org_gwtproject_i18n_client_HasDirection_Direction : Direction.f_LTR__org_gwtproject_i18n_client_HasDirection_Direction, alwaysSpan);
 }
 /** @return {BidiFormatter} */
 static m_getInstance__org_gwtproject_i18n_client_HasDirection_Direction(/** Direction */ contextDir) {
  BidiFormatter.$clinit();
  return BidiFormatter.m_getInstance__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, false);
 }
 /** @return {BidiFormatter} */
 static m_getInstance__org_gwtproject_i18n_client_HasDirection_Direction__boolean(/** Direction */ contextDir, /** boolean */ alwaysSpan) {
  BidiFormatter.$clinit();
  return /**@type {BidiFormatter}*/ ($Casts.$to(BidiFormatter.f_factory__org_gwtproject_i18n_shared_BidiFormatter_.m_getInstance__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan), BidiFormatter));
 }
 /** @return {BidiFormatter} */
 static m_getInstanceForCurrentLocale__() {
  BidiFormatter.$clinit();
  return BidiFormatter.m_getInstanceForCurrentLocale__boolean(false);
 }
 /** @return {BidiFormatter} */
 static m_getInstanceForCurrentLocale__boolean(/** boolean */ alwaysSpan) {
  BidiFormatter.$clinit();
  return BidiFormatter.m_getInstance__boolean__boolean(LocaleInfo.m_getCurrentLocale__().m_isRTL__(), alwaysSpan);
 }
 /** @return {!BidiFormatter} */
 static $create__org_gwtproject_i18n_client_HasDirection_Direction__boolean(/** Direction */ contextDir, /** boolean */ alwaysSpan) {
  BidiFormatter.$clinit();
  let $instance = new BidiFormatter();
  $instance.$ctor__org_gwtproject_i18n_shared_BidiFormatter__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan);
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_BidiFormatter__org_gwtproject_i18n_client_HasDirection_Direction__boolean(/** Direction */ contextDir, /** boolean */ alwaysSpan) {
  this.$ctor__org_gwtproject_i18n_shared_BidiFormatterBase__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan);
 }
 /** @return {?string} */
 m_dirAttr__java_lang_String(/** ?string */ str) {
  return this.m_dirAttr__java_lang_String__boolean(str, false);
 }
 /** @return {?string} */
 m_dirAttr__java_lang_String__boolean(/** ?string */ str, /** boolean */ isHtml) {
  return this.m_dirAttrBase__java_lang_String__boolean(str, isHtml);
 }
 /** @return {?string} */
 m_endEdge__() {
  return this.m_endEdgeBase__();
 }
 /** @return {?string} */
 m_knownDirAttr__org_gwtproject_i18n_client_HasDirection_Direction(/** Direction */ dir) {
  return this.m_knownDirAttrBase__org_gwtproject_i18n_client_HasDirection_Direction(dir);
 }
 /** @return {?string} */
 m_mark__() {
  return this.m_markBase__();
 }
 /** @return {?string} */
 m_markAfter__java_lang_String(/** ?string */ str) {
  return this.m_markAfter__java_lang_String__boolean(str, false);
 }
 /** @return {?string} */
 m_markAfter__java_lang_String__boolean(/** ?string */ str, /** boolean */ isHtml) {
  return this.m_markAfterBase__java_lang_String__boolean(str, isHtml);
 }
 /** @return {?string} */
 m_spanWrap__java_lang_String(/** ?string */ str) {
  return this.m_spanWrap__java_lang_String__boolean__boolean(str, false, true);
 }
 /** @return {?string} */
 m_spanWrap__java_lang_String__boolean(/** ?string */ str, /** boolean */ isHtml) {
  return this.m_spanWrap__java_lang_String__boolean__boolean(str, isHtml, true);
 }
 /** @return {?string} */
 m_spanWrap__java_lang_String__boolean__boolean(/** ?string */ str, /** boolean */ isHtml, /** boolean */ dirReset) {
  return this.m_spanWrapBase__java_lang_String__boolean__boolean(str, isHtml, dirReset);
 }
 /** @return {?string} */
 m_spanWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(/** Direction */ dir, /** ?string */ str) {
  return this.m_spanWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, str, false, true);
 }
 /** @return {?string} */
 m_spanWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean(/** Direction */ dir, /** ?string */ str, /** boolean */ isHtml) {
  return this.m_spanWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, str, isHtml, true);
 }
 /** @return {?string} */
 m_spanWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(/** Direction */ dir, /** ?string */ str, /** boolean */ isHtml, /** boolean */ dirReset) {
  return this.m_spanWrapWithKnownDirBase__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, str, isHtml, dirReset);
 }
 /** @return {?string} */
 m_startEdge__() {
  return this.m_startEdgeBase__();
 }
 /** @return {?string} */
 m_unicodeWrap__java_lang_String(/** ?string */ str) {
  return this.m_unicodeWrap__java_lang_String__boolean__boolean(str, false, true);
 }
 /** @return {?string} */
 m_unicodeWrap__java_lang_String__boolean(/** ?string */ str, /** boolean */ isHtml) {
  return this.m_unicodeWrap__java_lang_String__boolean__boolean(str, isHtml, true);
 }
 /** @return {?string} */
 m_unicodeWrap__java_lang_String__boolean__boolean(/** ?string */ str, /** boolean */ isHtml, /** boolean */ dirReset) {
  return this.m_unicodeWrapBase__java_lang_String__boolean__boolean(str, isHtml, dirReset);
 }
 /** @return {?string} */
 m_unicodeWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(/** Direction */ dir, /** ?string */ str) {
  return this.m_unicodeWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, str, false, true);
 }
 /** @return {?string} */
 m_unicodeWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean(/** Direction */ dir, /** ?string */ str, /** boolean */ isHtml) {
  return this.m_unicodeWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, str, isHtml, true);
 }
 /** @return {?string} */
 m_unicodeWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(/** Direction */ dir, /** ?string */ str, /** boolean */ isHtml, /** boolean */ dirReset) {
  return this.m_unicodeWrapWithKnownDirBase__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, str, isHtml, dirReset);
 }
 
 static $clinit() {
  BidiFormatter.$clinit = () =>{};
  BidiFormatter.$loadModules();
  BidiFormatterBase.$clinit();
  BidiFormatter.f_factory__org_gwtproject_i18n_shared_BidiFormatter_ = Factory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BidiFormatter;
 }
 
 static $loadModules() {
  Direction = goog.module.get('org.gwtproject.i18n.client.HasDirection.Direction$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  Factory = goog.module.get('org.gwtproject.i18n.shared.BidiFormatter.Factory$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(BidiFormatter, 'org.gwtproject.i18n.shared.BidiFormatter');

/**@type {Factory}*/
BidiFormatter.f_factory__org_gwtproject_i18n_shared_BidiFormatter_;

exports = BidiFormatter; 
//# sourceMappingURL=BidiFormatter.js.map