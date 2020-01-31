goog.module('org.gwtproject.i18n.shared.BidiUtils$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let RegExp = goog.forwardDeclare('org.gwtproject.regexp.shared.RegExp$impl');

class BidiUtils extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {BidiUtils} */
 static m_get__() {
  BidiUtils.$clinit();
  return BidiUtils.f_INSTANCE__org_gwtproject_i18n_shared_BidiUtils_;
 }
 /** @return {!BidiUtils} */
 static $create__() {
  let $instance = new BidiUtils();
  $instance.$ctor__org_gwtproject_i18n_shared_BidiUtils__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_BidiUtils__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {boolean} */
 m_endsWithLtr__java_lang_String(/** ?string */ str) {
  return BidiUtils.f_LAST_STRONG_IS_LTR_RE__org_gwtproject_i18n_shared_BidiUtils_.m_test__java_lang_String(str);
 }
 /** @return {boolean} */
 m_endsWithLtr__java_lang_String__boolean(/** ?string */ str, /** boolean */ isHtml) {
  return this.m_endsWithLtr__java_lang_String(this.m_stripHtmlIfNeeded__java_lang_String__boolean_$pp_org_gwtproject_i18n_shared(str, isHtml));
 }
 /** @return {boolean} */
 m_endsWithRtl__java_lang_String(/** ?string */ str) {
  return BidiUtils.f_LAST_STRONG_IS_RTL_RE__org_gwtproject_i18n_shared_BidiUtils_.m_test__java_lang_String(str);
 }
 /** @return {boolean} */
 m_endsWithRtl__java_lang_String__boolean(/** ?string */ str, /** boolean */ isHtml) {
  return this.m_endsWithRtl__java_lang_String(this.m_stripHtmlIfNeeded__java_lang_String__boolean_$pp_org_gwtproject_i18n_shared(str, isHtml));
 }
 /** @return {Direction} */
 m_estimateDirection__java_lang_String(/** ?string */ str) {
  let rtlCount = 0;
  let total = 0;
  let hasWeaklyLtr = false;
  let tokens = BidiUtils.f_WORD_SEPARATOR_RE__org_gwtproject_i18n_shared_BidiUtils_.m_split__java_lang_String(str);
  for (let i = 0; i < tokens.m_length__(); i++) {
   let token = tokens.m_get__int(i);
   if (this.m_startsWithRtl__java_lang_String(token)) {
    rtlCount++;
    total++;
   } else if (BidiUtils.f_IS_REQUIRED_LTR_RE__org_gwtproject_i18n_shared_BidiUtils_.m_test__java_lang_String(token)) {
    hasWeaklyLtr = true;
   } else if (this.m_hasAnyLtr__java_lang_String(token)) {
    total++;
   } else if (BidiUtils.f_HAS_NUMERALS_RE__org_gwtproject_i18n_shared_BidiUtils_.m_test__java_lang_String(token)) {
    hasWeaklyLtr = true;
   }
  }
  return total == 0 ? (hasWeaklyLtr ? Direction.f_LTR__org_gwtproject_i18n_client_HasDirection_Direction : Direction.f_DEFAULT__org_gwtproject_i18n_client_HasDirection_Direction) : (rtlCount / total > BidiUtils.f_RTL_DETECTION_THRESHOLD__org_gwtproject_i18n_shared_BidiUtils_ ? Direction.f_RTL__org_gwtproject_i18n_client_HasDirection_Direction : Direction.f_LTR__org_gwtproject_i18n_client_HasDirection_Direction);
 }
 /** @return {Direction} */
 m_estimateDirection__java_lang_String__boolean(/** ?string */ str, /** boolean */ isHtml) {
  return this.m_estimateDirection__java_lang_String(this.m_stripHtmlIfNeeded__java_lang_String__boolean_$pp_org_gwtproject_i18n_shared(str, isHtml));
 }
 /** @return {boolean} */
 m_hasAnyLtr__java_lang_String(/** ?string */ str) {
  return BidiUtils.f_HAS_ANY_LTR_RE__org_gwtproject_i18n_shared_BidiUtils_.m_test__java_lang_String(str);
 }
 /** @return {boolean} */
 m_hasAnyLtr__java_lang_String__boolean(/** ?string */ str, /** boolean */ isHtml) {
  return this.m_hasAnyLtr__java_lang_String(this.m_stripHtmlIfNeeded__java_lang_String__boolean_$pp_org_gwtproject_i18n_shared(str, isHtml));
 }
 /** @return {boolean} */
 m_hasAnyRtl__java_lang_String(/** ?string */ str) {
  return BidiUtils.f_HAS_ANY_RTL_RE__org_gwtproject_i18n_shared_BidiUtils_.m_test__java_lang_String(str);
 }
 /** @return {boolean} */
 m_hasAnyRtl__java_lang_String__boolean(/** ?string */ str, /** boolean */ isHtml) {
  return this.m_hasAnyRtl__java_lang_String(this.m_stripHtmlIfNeeded__java_lang_String__boolean_$pp_org_gwtproject_i18n_shared(str, isHtml));
 }
 /** @return {boolean} */
 m_startsWithLtr__java_lang_String(/** ?string */ str) {
  return BidiUtils.f_FIRST_STRONG_IS_LTR_RE__org_gwtproject_i18n_shared_BidiUtils_.m_test__java_lang_String(str);
 }
 /** @return {boolean} */
 m_startsWithLtr__java_lang_String__boolean(/** ?string */ str, /** boolean */ isHtml) {
  return this.m_startsWithLtr__java_lang_String(this.m_stripHtmlIfNeeded__java_lang_String__boolean_$pp_org_gwtproject_i18n_shared(str, isHtml));
 }
 /** @return {boolean} */
 m_startsWithRtl__java_lang_String(/** ?string */ str) {
  return BidiUtils.f_FIRST_STRONG_IS_RTL_RE__org_gwtproject_i18n_shared_BidiUtils_.m_test__java_lang_String(str);
 }
 /** @return {boolean} */
 m_startsWithRtl__java_lang_String__boolean(/** ?string */ str, /** boolean */ isHtml) {
  return this.m_startsWithRtl__java_lang_String(this.m_stripHtmlIfNeeded__java_lang_String__boolean_$pp_org_gwtproject_i18n_shared(str, isHtml));
 }
 /** @return {?string} */
 m_stripHtmlIfNeeded__java_lang_String__boolean_$pp_org_gwtproject_i18n_shared(/** ?string */ str, /** boolean */ isStripNeeded) {
  return isStripNeeded ? BidiUtils.f_SKIP_HTML_RE__org_gwtproject_i18n_shared_BidiUtils_.m_replace__java_lang_String__java_lang_String(str, " ") : str;
 }
 
 static $clinit() {
  BidiUtils.$clinit = () =>{};
  BidiUtils.$loadModules();
  j_l_Object.$clinit();
  BidiUtils.f_LTR_CHARS__org_gwtproject_i18n_shared_BidiUtils_ = "A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF" + "\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF";
  BidiUtils.f_RTL_CHARS__org_gwtproject_i18n_shared_BidiUtils_ = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC";
  BidiUtils.f_FIRST_STRONG_IS_LTR_RE__org_gwtproject_i18n_shared_BidiUtils_ = RegExp.m_compile__java_lang_String("^[^" + j_l_String.m_valueOf__java_lang_Object(BidiUtils.f_RTL_CHARS__org_gwtproject_i18n_shared_BidiUtils_) + "]*[" + j_l_String.m_valueOf__java_lang_Object(BidiUtils.f_LTR_CHARS__org_gwtproject_i18n_shared_BidiUtils_) + j_l_String.m_valueOf__char(93 /* ']' */));
  BidiUtils.f_FIRST_STRONG_IS_RTL_RE__org_gwtproject_i18n_shared_BidiUtils_ = RegExp.m_compile__java_lang_String("^[^" + j_l_String.m_valueOf__java_lang_Object(BidiUtils.f_LTR_CHARS__org_gwtproject_i18n_shared_BidiUtils_) + "]*[" + j_l_String.m_valueOf__java_lang_Object(BidiUtils.f_RTL_CHARS__org_gwtproject_i18n_shared_BidiUtils_) + j_l_String.m_valueOf__char(93 /* ']' */));
  BidiUtils.f_HAS_ANY_LTR_RE__org_gwtproject_i18n_shared_BidiUtils_ = RegExp.m_compile__java_lang_String("[" + j_l_String.m_valueOf__java_lang_Object(BidiUtils.f_LTR_CHARS__org_gwtproject_i18n_shared_BidiUtils_) + j_l_String.m_valueOf__char(93 /* ']' */));
  BidiUtils.f_HAS_ANY_RTL_RE__org_gwtproject_i18n_shared_BidiUtils_ = RegExp.m_compile__java_lang_String("[" + j_l_String.m_valueOf__java_lang_Object(BidiUtils.f_RTL_CHARS__org_gwtproject_i18n_shared_BidiUtils_) + j_l_String.m_valueOf__char(93 /* ']' */));
  BidiUtils.f_HAS_NUMERALS_RE__org_gwtproject_i18n_shared_BidiUtils_ = RegExp.m_compile__java_lang_String("\\d");
  BidiUtils.f_SKIP_HTML_RE__org_gwtproject_i18n_shared_BidiUtils_ = RegExp.m_compile__java_lang_String__java_lang_String("<[^>]*>|&[^;]+;", "g");
  BidiUtils.f_INSTANCE__org_gwtproject_i18n_shared_BidiUtils_ = BidiUtils.$create__();
  BidiUtils.f_IS_REQUIRED_LTR_RE__org_gwtproject_i18n_shared_BidiUtils_ = RegExp.m_compile__java_lang_String("^http://.*");
  BidiUtils.f_LAST_STRONG_IS_LTR_RE__org_gwtproject_i18n_shared_BidiUtils_ = RegExp.m_compile__java_lang_String("[" + j_l_String.m_valueOf__java_lang_Object(BidiUtils.f_LTR_CHARS__org_gwtproject_i18n_shared_BidiUtils_) + "][^" + j_l_String.m_valueOf__java_lang_Object(BidiUtils.f_RTL_CHARS__org_gwtproject_i18n_shared_BidiUtils_) + "]*$");
  BidiUtils.f_LAST_STRONG_IS_RTL_RE__org_gwtproject_i18n_shared_BidiUtils_ = RegExp.m_compile__java_lang_String("[" + j_l_String.m_valueOf__java_lang_Object(BidiUtils.f_RTL_CHARS__org_gwtproject_i18n_shared_BidiUtils_) + "][^" + j_l_String.m_valueOf__java_lang_Object(BidiUtils.f_LTR_CHARS__org_gwtproject_i18n_shared_BidiUtils_) + "]*$");
  BidiUtils.f_WORD_SEPARATOR_RE__org_gwtproject_i18n_shared_BidiUtils_ = RegExp.m_compile__java_lang_String("\\s+");
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BidiUtils;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Direction = goog.module.get('org.gwtproject.i18n.client.HasDirection.Direction$impl');
  RegExp = goog.module.get('org.gwtproject.regexp.shared.RegExp$impl');
 }
 
}
$Util.$setClassMetadata(BidiUtils, 'org.gwtproject.i18n.shared.BidiUtils');

/**@type {?string}*/
BidiUtils.f_LTR_CHARS__org_gwtproject_i18n_shared_BidiUtils_;
/**@type {?string}*/
BidiUtils.f_RTL_CHARS__org_gwtproject_i18n_shared_BidiUtils_;
/**@type {RegExp}*/
BidiUtils.f_FIRST_STRONG_IS_LTR_RE__org_gwtproject_i18n_shared_BidiUtils_;
/**@type {RegExp}*/
BidiUtils.f_FIRST_STRONG_IS_RTL_RE__org_gwtproject_i18n_shared_BidiUtils_;
/**@type {RegExp}*/
BidiUtils.f_HAS_ANY_LTR_RE__org_gwtproject_i18n_shared_BidiUtils_;
/**@type {RegExp}*/
BidiUtils.f_HAS_ANY_RTL_RE__org_gwtproject_i18n_shared_BidiUtils_;
/**@type {RegExp}*/
BidiUtils.f_HAS_NUMERALS_RE__org_gwtproject_i18n_shared_BidiUtils_;
/**@type {RegExp}*/
BidiUtils.f_SKIP_HTML_RE__org_gwtproject_i18n_shared_BidiUtils_;
/**@type {BidiUtils}*/
BidiUtils.f_INSTANCE__org_gwtproject_i18n_shared_BidiUtils_;
/**@type {RegExp}*/
BidiUtils.f_IS_REQUIRED_LTR_RE__org_gwtproject_i18n_shared_BidiUtils_;
/**@type {RegExp}*/
BidiUtils.f_LAST_STRONG_IS_LTR_RE__org_gwtproject_i18n_shared_BidiUtils_;
/**@type {RegExp}*/
BidiUtils.f_LAST_STRONG_IS_RTL_RE__org_gwtproject_i18n_shared_BidiUtils_;
/**@const {number}*/
BidiUtils.f_RTL_DETECTION_THRESHOLD__org_gwtproject_i18n_shared_BidiUtils_ = 0.4000000059604645;
/**@type {RegExp}*/
BidiUtils.f_WORD_SEPARATOR_RE__org_gwtproject_i18n_shared_BidiUtils_;

exports = BidiUtils; 
//# sourceMappingURL=BidiUtils.js.map