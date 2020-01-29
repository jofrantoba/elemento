goog.module('org.gwtproject.i18n.shared.BidiFormatterBase$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let Format = goog.forwardDeclare('org.gwtproject.i18n.shared.BidiFormatterBase.Format$impl');
let BidiUtils = goog.forwardDeclare('org.gwtproject.i18n.shared.BidiUtils$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');

/**
 * @abstract
  */
class BidiFormatterBase extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {boolean} */
  this.f_alwaysSpan__org_gwtproject_i18n_shared_BidiFormatterBase_ = false;
  /** @public {Direction} */
  this.f_contextDir__org_gwtproject_i18n_shared_BidiFormatterBase_;
 }
 /**
  * @param {Direction} contextDir
  * @param {boolean} alwaysSpan
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_BidiFormatterBase__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan) {
  this.$ctor__java_lang_Object__();
  this.f_contextDir__org_gwtproject_i18n_shared_BidiFormatterBase_ = contextDir;
  this.f_alwaysSpan__org_gwtproject_i18n_shared_BidiFormatterBase_ = alwaysSpan;
 }
 /**
  * @param {?string} str
  * @return {Direction}
  * @public
  */
 m_estimateDirection__java_lang_String(str) {
  return BidiUtils.m_get__().m_estimateDirection__java_lang_String(str);
 }
 /**
  * @param {?string} str
  * @param {boolean} isHtml
  * @return {Direction}
  * @public
  */
 m_estimateDirection__java_lang_String__boolean(str, isHtml) {
  return BidiUtils.m_get__().m_estimateDirection__java_lang_String__boolean(str, isHtml);
 }
 /**
  * @return {boolean}
  * @public
  */
 m_getAlwaysSpan__() {
  return this.f_alwaysSpan__org_gwtproject_i18n_shared_BidiFormatterBase_;
 }
 /**
  * @return {Direction}
  * @public
  */
 m_getContextDir__() {
  return this.f_contextDir__org_gwtproject_i18n_shared_BidiFormatterBase_;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isRtlContext__() {
  return $Equality.$same(this.f_contextDir__org_gwtproject_i18n_shared_BidiFormatterBase_, Direction.f_RTL__org_gwtproject_i18n_client_HasDirection_Direction);
 }
 /**
  * @param {?string} str
  * @param {boolean} isHtml
  * @return {?string}
  * @public
  */
 m_dirAttrBase__java_lang_String__boolean(str, isHtml) {
  return this.m_knownDirAttrBase__org_gwtproject_i18n_client_HasDirection_Direction(BidiUtils.m_get__().m_estimateDirection__java_lang_String__boolean(str, isHtml));
 }
 /**
  * @return {?string}
  * @public
  */
 m_endEdgeBase__() {
  return $Equality.$same(this.f_contextDir__org_gwtproject_i18n_shared_BidiFormatterBase_, Direction.f_RTL__org_gwtproject_i18n_client_HasDirection_Direction) ? Format.f_LEFT__org_gwtproject_i18n_shared_BidiFormatterBase_Format : Format.f_RIGHT__org_gwtproject_i18n_shared_BidiFormatterBase_Format;
 }
 /**
  * @param {Direction} dir
  * @return {?string}
  * @public
  */
 m_knownDirAttrBase__org_gwtproject_i18n_client_HasDirection_Direction(dir) {
  if (!$Equality.$same(dir, this.f_contextDir__org_gwtproject_i18n_shared_BidiFormatterBase_)) {
   return $Equality.$same(dir, Direction.f_LTR__org_gwtproject_i18n_client_HasDirection_Direction) ? "dir=ltr" : $Equality.$same(dir, Direction.f_RTL__org_gwtproject_i18n_client_HasDirection_Direction) ? "dir=rtl" : "";
  }
  return "";
 }
 /**
  * @param {?string} str
  * @param {boolean} isHtml
  * @return {?string}
  * @public
  */
 m_markAfterBase__java_lang_String__boolean(str, isHtml) {
  str = BidiUtils.m_get__().m_stripHtmlIfNeeded__java_lang_String__boolean_$pp_org_gwtproject_i18n_shared(str, isHtml);
  return this.m_dirResetIfNeeded__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__boolean__boolean_$p_org_gwtproject_i18n_shared_BidiFormatterBase(str, BidiUtils.m_get__().m_estimateDirection__java_lang_String(str), false, true);
 }
 /**
  * @return {?string}
  * @public
  */
 m_markBase__() {
  return $Equality.$same(this.f_contextDir__org_gwtproject_i18n_shared_BidiFormatterBase_, Direction.f_LTR__org_gwtproject_i18n_client_HasDirection_Direction) ? Format.f_LRM_STRING__org_gwtproject_i18n_shared_BidiFormatterBase_Format : $Equality.$same(this.f_contextDir__org_gwtproject_i18n_shared_BidiFormatterBase_, Direction.f_RTL__org_gwtproject_i18n_client_HasDirection_Direction) ? Format.f_RLM_STRING__org_gwtproject_i18n_shared_BidiFormatterBase_Format : "";
 }
 /**
  * @param {?string} str
  * @param {boolean} isHtml
  * @param {boolean} dirReset
  * @return {?string}
  * @public
  */
 m_spanWrapBase__java_lang_String__boolean__boolean(str, isHtml, dirReset) {
  let dir = BidiUtils.m_get__().m_estimateDirection__java_lang_String__boolean(str, isHtml);
  return this.m_spanWrapWithKnownDirBase__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, str, isHtml, dirReset);
 }
 /**
  * @param {Direction} dir
  * @param {?string} str
  * @param {boolean} isHtml
  * @param {boolean} dirReset
  * @return {?string}
  * @public
  */
 m_spanWrapWithKnownDirBase__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, str, isHtml, dirReset) {
  let dirCondition = !$Equality.$same(dir, Direction.f_DEFAULT__org_gwtproject_i18n_client_HasDirection_Direction) && !$Equality.$same(dir, this.f_contextDir__org_gwtproject_i18n_shared_BidiFormatterBase_);
  let origStr = str;
  if (!isHtml) {
   str = SafeHtmlUtils.m_htmlEscape__java_lang_String(str);
  }
  let result = StringBuilder.$create__();
  if (this.f_alwaysSpan__org_gwtproject_i18n_shared_BidiFormatterBase_ || dirCondition) {
   result.m_append__java_lang_String("<span");
   if (dirCondition) {
    result.m_append__java_lang_String(" ");
    result.m_append__java_lang_String($Equality.$same(dir, Direction.f_RTL__org_gwtproject_i18n_client_HasDirection_Direction) ? "dir=rtl" : "dir=ltr");
   }
   result.m_append__java_lang_String(">" + j_l_String.m_valueOf__java_lang_Object(str) + "</span>");
  } else {
   result.m_append__java_lang_String(str);
  }
  result.m_append__java_lang_String(this.m_dirResetIfNeeded__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__boolean__boolean_$p_org_gwtproject_i18n_shared_BidiFormatterBase(origStr, dir, isHtml, dirReset));
  return result.toString();
 }
 /**
  * @return {?string}
  * @public
  */
 m_startEdgeBase__() {
  return $Equality.$same(this.f_contextDir__org_gwtproject_i18n_shared_BidiFormatterBase_, Direction.f_RTL__org_gwtproject_i18n_client_HasDirection_Direction) ? Format.f_RIGHT__org_gwtproject_i18n_shared_BidiFormatterBase_Format : Format.f_LEFT__org_gwtproject_i18n_shared_BidiFormatterBase_Format;
 }
 /**
  * @param {?string} str
  * @param {boolean} isHtml
  * @param {boolean} dirReset
  * @return {?string}
  * @public
  */
 m_unicodeWrapBase__java_lang_String__boolean__boolean(str, isHtml, dirReset) {
  let dir = BidiUtils.m_get__().m_estimateDirection__java_lang_String__boolean(str, isHtml);
  return this.m_unicodeWrapWithKnownDirBase__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, str, isHtml, dirReset);
 }
 /**
  * @param {Direction} dir
  * @param {?string} str
  * @param {boolean} isHtml
  * @param {boolean} dirReset
  * @return {?string}
  * @public
  */
 m_unicodeWrapWithKnownDirBase__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean__boolean(dir, str, isHtml, dirReset) {
  let result = StringBuilder.$create__();
  if (!$Equality.$same(dir, Direction.f_DEFAULT__org_gwtproject_i18n_client_HasDirection_Direction) && !$Equality.$same(dir, this.f_contextDir__org_gwtproject_i18n_shared_BidiFormatterBase_)) {
   result.m_append__char($Equality.$same(dir, Direction.f_RTL__org_gwtproject_i18n_client_HasDirection_Direction) ? Format.f_RLE__org_gwtproject_i18n_shared_BidiFormatterBase_Format : Format.f_LRE__org_gwtproject_i18n_shared_BidiFormatterBase_Format);
   result.m_append__java_lang_String(str);
   result.m_append__char(Format.f_PDF__org_gwtproject_i18n_shared_BidiFormatterBase_Format);
  } else {
   result.m_append__java_lang_String(str);
  }
  result.m_append__java_lang_String(this.m_dirResetIfNeeded__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__boolean__boolean_$p_org_gwtproject_i18n_shared_BidiFormatterBase(str, dir, isHtml, dirReset));
  return result.toString();
 }
 /**
  * @param {?string} str
  * @param {Direction} dir
  * @param {boolean} isHtml
  * @param {boolean} dirReset
  * @return {?string}
  * @public
  */
 m_dirResetIfNeeded__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__boolean__boolean_$p_org_gwtproject_i18n_shared_BidiFormatterBase(str, dir, isHtml, dirReset) {
  if (dirReset && (($Equality.$same(this.f_contextDir__org_gwtproject_i18n_shared_BidiFormatterBase_, Direction.f_LTR__org_gwtproject_i18n_client_HasDirection_Direction) && ($Equality.$same(dir, Direction.f_RTL__org_gwtproject_i18n_client_HasDirection_Direction) || BidiUtils.m_get__().m_endsWithRtl__java_lang_String__boolean(str, isHtml))) || ($Equality.$same(this.f_contextDir__org_gwtproject_i18n_shared_BidiFormatterBase_, Direction.f_RTL__org_gwtproject_i18n_client_HasDirection_Direction) && ($Equality.$same(dir, Direction.f_LTR__org_gwtproject_i18n_client_HasDirection_Direction) || BidiUtils.m_get__().m_endsWithLtr__java_lang_String__boolean(str, isHtml))))) {
   return $Equality.$same(this.f_contextDir__org_gwtproject_i18n_shared_BidiFormatterBase_, Direction.f_LTR__org_gwtproject_i18n_client_HasDirection_Direction) ? Format.f_LRM_STRING__org_gwtproject_i18n_shared_BidiFormatterBase_Format : Format.f_RLM_STRING__org_gwtproject_i18n_shared_BidiFormatterBase_Format;
  } else {
   return "";
  }
 }
 /**
  * @public
  */
 static $clinit() {
  BidiFormatterBase.$clinit = () =>{};
  BidiFormatterBase.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof BidiFormatterBase;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Direction = goog.module.get('org.gwtproject.i18n.client.HasDirection.Direction$impl');
  Format = goog.module.get('org.gwtproject.i18n.shared.BidiFormatterBase.Format$impl');
  BidiUtils = goog.module.get('org.gwtproject.i18n.shared.BidiUtils$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
 }
 
}
$Util.$setClassMetadata(BidiFormatterBase, 'org.gwtproject.i18n.shared.BidiFormatterBase');

exports = BidiFormatterBase; 
//# sourceMappingURL=BidiFormatterBase.js.map