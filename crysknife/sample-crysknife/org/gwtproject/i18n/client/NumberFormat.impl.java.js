goog.module('org.gwtproject.i18n.client.NumberFormat$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Long = goog.forwardDeclare('java.lang.Long$impl');
let j_l_Number = goog.forwardDeclare('java.lang.Number$impl');
let NumberFormatException = goog.forwardDeclare('java.lang.NumberFormatException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let BigDecimal = goog.forwardDeclare('java.math.BigDecimal$impl');
let BigInteger = goog.forwardDeclare('java.math.BigInteger$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let CurrencyData = goog.forwardDeclare('org.gwtproject.i18n.client.CurrencyData$impl');
let CurrencyList = goog.forwardDeclare('org.gwtproject.i18n.client.CurrencyList$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let $1 = goog.forwardDeclare('org.gwtproject.i18n.client.NumberFormat.$1$impl');
let NumberConstants = goog.forwardDeclare('org.gwtproject.i18n.client.constants.NumberConstants$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Numbers = goog.forwardDeclare('vmbootstrap.Numbers$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class NumberFormat extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {CurrencyData} */
  this.f_currencyData__org_gwtproject_i18n_client_NumberFormat_;
  /** @public {number} */
  this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_ = 0;
  /** @public {boolean} */
  this.f_decimalSeparatorAlwaysShown__org_gwtproject_i18n_client_NumberFormat_ = false;
  /** @public {number} */
  this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_ = 0;
  /** @public {number} */
  this.f_exponent__org_gwtproject_i18n_client_NumberFormat_ = 0;
  /** @public {number} */
  this.f_groupingSize__org_gwtproject_i18n_client_NumberFormat_ = 0;
  /** @public {boolean} */
  this.f_isCurrencyFormat__org_gwtproject_i18n_client_NumberFormat_ = false;
  /** @public {number} */
  this.f_maximumFractionDigits__org_gwtproject_i18n_client_NumberFormat_ = 0;
  /** @public {number} */
  this.f_maximumIntegerDigits__org_gwtproject_i18n_client_NumberFormat_ = 0;
  /** @public {number} */
  this.f_minExponentDigits__org_gwtproject_i18n_client_NumberFormat_ = 0;
  /** @public {number} */
  this.f_minimumFractionDigits__org_gwtproject_i18n_client_NumberFormat_ = 0;
  /** @public {number} */
  this.f_minimumIntegerDigits__org_gwtproject_i18n_client_NumberFormat_ = 0;
  /** @public {number} */
  this.f_multiplier__org_gwtproject_i18n_client_NumberFormat_ = 0;
  /** @public {?string} */
  this.f_negativePrefix__org_gwtproject_i18n_client_NumberFormat_;
  /** @public {?string} */
  this.f_negativeSuffix__org_gwtproject_i18n_client_NumberFormat_;
  /** @public {NumberConstants} */
  this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_;
  /** @public {?string} */
  this.f_pattern__org_gwtproject_i18n_client_NumberFormat_;
  /** @public {?string} */
  this.f_positivePrefix__org_gwtproject_i18n_client_NumberFormat_;
  /** @public {?string} */
  this.f_positiveSuffix__org_gwtproject_i18n_client_NumberFormat_;
  /** @public {boolean} */
  this.f_useExponentialNotation__org_gwtproject_i18n_client_NumberFormat_ = false;
 }
 /**
  * @return {boolean}
  * @public
  */
 static m_forcedLatinDigits__() {
  NumberFormat.$clinit();
  return !$Equality.$same(NumberFormat.$f_defaultNumberConstants__org_gwtproject_i18n_client_NumberFormat, NumberFormat.$f_localizedNumberConstants__org_gwtproject_i18n_client_NumberFormat);
 }
 /**
  * @return {NumberFormat}
  * @public
  */
 static m_getCurrencyFormat__() {
  NumberFormat.$clinit();
  if ($Equality.$same(NumberFormat.f_cachedCurrencyFormat__org_gwtproject_i18n_client_NumberFormat_, null)) {
   NumberFormat.f_cachedCurrencyFormat__org_gwtproject_i18n_client_NumberFormat_ = NumberFormat.m_getCurrencyFormat__org_gwtproject_i18n_client_CurrencyData(CurrencyList.m_get__().m_getDefault__());
  }
  return NumberFormat.f_cachedCurrencyFormat__org_gwtproject_i18n_client_NumberFormat_;
 }
 /**
  * @param {CurrencyData} currencyData
  * @return {NumberFormat}
  * @public
  */
 static m_getCurrencyFormat__org_gwtproject_i18n_client_CurrencyData(currencyData) {
  NumberFormat.$clinit();
  return NumberFormat.$create__java_lang_String__org_gwtproject_i18n_client_CurrencyData__boolean(NumberFormat.$f_defaultNumberConstants__org_gwtproject_i18n_client_NumberFormat.m_currencyPattern__(), currencyData, false);
 }
 /**
  * @param {?string} currencyCode
  * @return {NumberFormat}
  * @public
  */
 static m_getCurrencyFormat__java_lang_String(currencyCode) {
  NumberFormat.$clinit();
  return NumberFormat.m_getCurrencyFormat__org_gwtproject_i18n_client_CurrencyData(NumberFormat.m_lookupCurrency__java_lang_String(currencyCode));
 }
 /**
  * @return {NumberFormat}
  * @public
  */
 static m_getDecimalFormat__() {
  NumberFormat.$clinit();
  if ($Equality.$same(NumberFormat.f_cachedDecimalFormat__org_gwtproject_i18n_client_NumberFormat_, null)) {
   NumberFormat.f_cachedDecimalFormat__org_gwtproject_i18n_client_NumberFormat_ = NumberFormat.$create__java_lang_String__org_gwtproject_i18n_client_CurrencyData__boolean(NumberFormat.$f_defaultNumberConstants__org_gwtproject_i18n_client_NumberFormat.m_decimalPattern__(), CurrencyList.m_get__().m_getDefault__(), false);
  }
  return NumberFormat.f_cachedDecimalFormat__org_gwtproject_i18n_client_NumberFormat_;
 }
 /**
  * @param {?string} pattern
  * @return {NumberFormat}
  * @public
  */
 static m_getFormat__java_lang_String(pattern) {
  NumberFormat.$clinit();
  return NumberFormat.$create__java_lang_String__org_gwtproject_i18n_client_CurrencyData__boolean(pattern, CurrencyList.m_get__().m_getDefault__(), true);
 }
 /**
  * @param {?string} pattern
  * @param {CurrencyData} currencyData
  * @return {NumberFormat}
  * @public
  */
 static m_getFormat__java_lang_String__org_gwtproject_i18n_client_CurrencyData(pattern, currencyData) {
  NumberFormat.$clinit();
  return NumberFormat.$create__java_lang_String__org_gwtproject_i18n_client_CurrencyData__boolean(pattern, currencyData, true);
 }
 /**
  * @param {?string} pattern
  * @param {?string} currencyCode
  * @return {NumberFormat}
  * @public
  */
 static m_getFormat__java_lang_String__java_lang_String(pattern, currencyCode) {
  NumberFormat.$clinit();
  return NumberFormat.$create__java_lang_String__org_gwtproject_i18n_client_CurrencyData__boolean(pattern, NumberFormat.m_lookupCurrency__java_lang_String(currencyCode), true);
 }
 /**
  * @return {NumberFormat}
  * @public
  */
 static m_getGlobalCurrencyFormat__() {
  NumberFormat.$clinit();
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("getGlobalCurrencyFormat"));
 }
 /**
  * @param {CurrencyData} currencyData
  * @return {NumberFormat}
  * @public
  */
 static m_getGlobalCurrencyFormat__org_gwtproject_i18n_client_CurrencyData(currencyData) {
  NumberFormat.$clinit();
  return NumberFormat.$create__java_lang_String__org_gwtproject_i18n_client_CurrencyData__boolean(NumberFormat.$f_defaultNumberConstants__org_gwtproject_i18n_client_NumberFormat.m_globalCurrencyPattern__(), currencyData, false);
 }
 /**
  * @param {?string} currencyCode
  * @return {NumberFormat}
  * @public
  */
 static m_getGlobalCurrencyFormat__java_lang_String(currencyCode) {
  NumberFormat.$clinit();
  return NumberFormat.m_getGlobalCurrencyFormat__org_gwtproject_i18n_client_CurrencyData(NumberFormat.m_lookupCurrency__java_lang_String(currencyCode));
 }
 /**
  * @return {NumberFormat}
  * @public
  */
 static m_getPercentFormat__() {
  NumberFormat.$clinit();
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("getPercentFormat"));
 }
 /**
  * @return {NumberFormat}
  * @public
  */
 static m_getScientificFormat__() {
  NumberFormat.$clinit();
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("getScientificFormat"));
 }
 /**
  * @return {NumberFormat}
  * @public
  */
 static m_getSimpleCurrencyFormat__() {
  NumberFormat.$clinit();
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("getSimpleCurrencyFormat"));
 }
 /**
  * @param {CurrencyData} currencyData
  * @return {NumberFormat}
  * @public
  */
 static m_getSimpleCurrencyFormat__org_gwtproject_i18n_client_CurrencyData(currencyData) {
  NumberFormat.$clinit();
  return NumberFormat.$create__java_lang_String__org_gwtproject_i18n_client_CurrencyData__boolean(NumberFormat.$f_defaultNumberConstants__org_gwtproject_i18n_client_NumberFormat.m_simpleCurrencyPattern__(), currencyData, false);
 }
 /**
  * @param {?string} currencyCode
  * @return {NumberFormat}
  * @public
  */
 static m_getSimpleCurrencyFormat__java_lang_String(currencyCode) {
  NumberFormat.$clinit();
  return NumberFormat.m_getSimpleCurrencyFormat__org_gwtproject_i18n_client_CurrencyData(NumberFormat.m_lookupCurrency__java_lang_String(currencyCode));
 }
 /**
  * @param {boolean} useLatinDigits
  * @public
  */
 static m_setForcedLatinDigits__boolean(useLatinDigits) {
  NumberFormat.$clinit();
  if (useLatinDigits != NumberFormat.m_forcedLatinDigits__()) {
   NumberFormat.f_cachedCurrencyFormat__org_gwtproject_i18n_client_NumberFormat_ = null;
   NumberFormat.f_cachedDecimalFormat__org_gwtproject_i18n_client_NumberFormat_ = null;
   NumberFormat.f_cachedPercentFormat__org_gwtproject_i18n_client_NumberFormat_ = null;
   NumberFormat.f_cachedScientificFormat__org_gwtproject_i18n_client_NumberFormat_ = null;
  }
  if (useLatinDigits) {
   if ($Equality.$same(NumberFormat.f_latinNumberConstants__org_gwtproject_i18n_client_NumberFormat_, null)) {
    NumberFormat.f_latinNumberConstants__org_gwtproject_i18n_client_NumberFormat_ = NumberFormat.m_createLatinNumberConstants__org_gwtproject_i18n_client_constants_NumberConstants(NumberFormat.$f_localizedNumberConstants__org_gwtproject_i18n_client_NumberFormat);
   }
   NumberFormat.$f_defaultNumberConstants__org_gwtproject_i18n_client_NumberFormat = NumberFormat.f_latinNumberConstants__org_gwtproject_i18n_client_NumberFormat_;
  } else {
   NumberFormat.$f_defaultNumberConstants__org_gwtproject_i18n_client_NumberFormat = NumberFormat.$f_localizedNumberConstants__org_gwtproject_i18n_client_NumberFormat;
  }
 }
 /**
  * @param {NumberConstants} orig
  * @return {NumberConstants}
  * @public
  */
 static m_createLatinNumberConstants__org_gwtproject_i18n_client_constants_NumberConstants(orig) {
  NumberFormat.$clinit();
  let groupingSeparator = NumberFormat.m_remapSeparator__java_lang_String(orig.m_groupingSeparator__());
  let decimalSeparator = NumberFormat.m_remapSeparator__java_lang_String(orig.m_decimalSeparator__());
  let monetaryGroupingSeparator = NumberFormat.m_remapSeparator__java_lang_String(orig.m_monetaryGroupingSeparator__());
  let monetarySeparator = NumberFormat.m_remapSeparator__java_lang_String(orig.m_monetarySeparator__());
  return $1.$create__org_gwtproject_i18n_client_constants_NumberConstants__java_lang_String__java_lang_String__java_lang_String__java_lang_String(orig, decimalSeparator, groupingSeparator, monetaryGroupingSeparator, monetarySeparator);
 }
 /**
  * @param {?string} separator
  * @return {?string}
  * @public
  */
 static m_remapSeparator__java_lang_String(separator) {
  NumberFormat.$clinit();
  let ch = j_l_String.m_length__java_lang_String(separator) > 0 ? j_l_String.m_charAt__java_lang_String__int(separator, 0) : 65535 /* '\uFFFF' */;
  if (j_l_String.m_indexOf__java_lang_String__int(NumberFormat.f_LOCALIZED_DOT_EQUIVALENTS__org_gwtproject_i18n_client_NumberFormat_, ch) >= 0) {
   return ".";
  }
  if (j_l_String.m_indexOf__java_lang_String__int(NumberFormat.f_LOCALIZED_COMMA_EQUIVALENTS__org_gwtproject_i18n_client_NumberFormat_, ch) >= 0) {
   return ",";
  }
  return "\u00A0";
 }
 /**
  * @param {StringBuilder} buf
  * @param {number} val
  * @return {number}
  * @public
  */
 static m_toScaledString__java_lang_StringBuilder__double(buf, val) {
  NumberFormat.$clinit();
  let startLen = buf.m_length__();
  buf.m_append__java_lang_String(NumberFormat.m_toPrecision__double__int(val, 20));
  let scale = 0;
  let expIdx = buf.m_indexOf__java_lang_String__int("e", startLen);
  if (expIdx < 0) {
   expIdx = buf.m_indexOf__java_lang_String__int("E", startLen);
  }
  if (expIdx >= 0) {
   let expDigits = expIdx + 1;
   if (expDigits < buf.m_length__() && buf.m_charAt__int(expDigits) == 43 /* '+' */) {
    ++expDigits;
   }
   if (expDigits < buf.m_length__()) {
    scale = Integer.m_parseInt__java_lang_String(buf.m_substring__int(expDigits));
   }
   buf.m_delete__int__int(expIdx, buf.m_length__());
  }
  let dot = buf.m_indexOf__java_lang_String__int(".", startLen);
  if (dot >= 0) {
   buf.m_deleteCharAt__int(dot);
   scale -= buf.m_length__() - dot;
  }
  return scale;
 }
 /**
  * @param {?string} currencyCode
  * @return {CurrencyData}
  * @public
  */
 static m_lookupCurrency__java_lang_String(currencyCode) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("lookupCurrency"));
 }
 /**
  * @param {number} d
  * @param {number} digits
  * @return {?string}
  * @public
  */
 static m_toPrecision__double__int(d, digits) {
  return new Number(d).toPrecision();
 }
 /**
  * Factory method corresponding to constructor 'NumberFormat(NumberConstants, String, CurrencyData, boolean)'.
  * @param {NumberConstants} numberConstants
  * @param {?string} pattern
  * @param {CurrencyData} cdata
  * @param {boolean} userSuppliedPattern
  * @return {!NumberFormat}
  * @public
  */
 static $create__org_gwtproject_i18n_client_constants_NumberConstants__java_lang_String__org_gwtproject_i18n_client_CurrencyData__boolean(numberConstants, pattern, cdata, userSuppliedPattern) {
  NumberFormat.$clinit();
  let $instance = new NumberFormat();
  $instance.$ctor__org_gwtproject_i18n_client_NumberFormat__org_gwtproject_i18n_client_constants_NumberConstants__java_lang_String__org_gwtproject_i18n_client_CurrencyData__boolean(numberConstants, pattern, cdata, userSuppliedPattern);
  return $instance;
 }
 /**
  * Initialization from constructor 'NumberFormat(NumberConstants, String, CurrencyData, boolean)'.
  * @param {NumberConstants} numberConstants
  * @param {?string} pattern
  * @param {CurrencyData} cdata
  * @param {boolean} userSuppliedPattern
  * @public
  */
 $ctor__org_gwtproject_i18n_client_NumberFormat__org_gwtproject_i18n_client_constants_NumberConstants__java_lang_String__org_gwtproject_i18n_client_CurrencyData__boolean(numberConstants, pattern, cdata, userSuppliedPattern) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_i18n_client_NumberFormat();
  if ($Equality.$same(cdata, null)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Unknown currency code"));
  }
  this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_ = numberConstants;
  this.f_pattern__org_gwtproject_i18n_client_NumberFormat_ = pattern;
  this.f_currencyData__org_gwtproject_i18n_client_NumberFormat_ = cdata;
  this.m_parsePattern__java_lang_String_$p_org_gwtproject_i18n_client_NumberFormat(this.f_pattern__org_gwtproject_i18n_client_NumberFormat_);
  if (!userSuppliedPattern && this.f_isCurrencyFormat__org_gwtproject_i18n_client_NumberFormat_) {
   this.f_minimumFractionDigits__org_gwtproject_i18n_client_NumberFormat_ = this.f_currencyData__org_gwtproject_i18n_client_NumberFormat_.m_getDefaultFractionDigits__();
   this.f_maximumFractionDigits__org_gwtproject_i18n_client_NumberFormat_ = this.f_minimumFractionDigits__org_gwtproject_i18n_client_NumberFormat_;
  }
 }
 /**
  * Factory method corresponding to constructor 'NumberFormat(String, CurrencyData, boolean)'.
  * @param {?string} pattern
  * @param {CurrencyData} cdata
  * @param {boolean} userSuppliedPattern
  * @return {!NumberFormat}
  * @public
  */
 static $create__java_lang_String__org_gwtproject_i18n_client_CurrencyData__boolean(pattern, cdata, userSuppliedPattern) {
  NumberFormat.$clinit();
  let $instance = new NumberFormat();
  $instance.$ctor__org_gwtproject_i18n_client_NumberFormat__java_lang_String__org_gwtproject_i18n_client_CurrencyData__boolean(pattern, cdata, userSuppliedPattern);
  return $instance;
 }
 /**
  * Initialization from constructor 'NumberFormat(String, CurrencyData, boolean)'.
  * @param {?string} pattern
  * @param {CurrencyData} cdata
  * @param {boolean} userSuppliedPattern
  * @public
  */
 $ctor__org_gwtproject_i18n_client_NumberFormat__java_lang_String__org_gwtproject_i18n_client_CurrencyData__boolean(pattern, cdata, userSuppliedPattern) {
  this.$ctor__org_gwtproject_i18n_client_NumberFormat__org_gwtproject_i18n_client_constants_NumberConstants__java_lang_String__org_gwtproject_i18n_client_CurrencyData__boolean(NumberFormat.$f_defaultNumberConstants__org_gwtproject_i18n_client_NumberFormat, pattern, cdata, userSuppliedPattern);
 }
 /**
  * @param {number} number_1
  * @return {?string}
  * @public
  */
 m_format__double(number_1) {
  if (isNaN(number_1)) {
   return this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_.m_notANumber__();
  }
  let isNegative = ((number_1 < 0.0) || (number_1 == 0.0 && 1 / number_1 < 0.0));
  if (isNegative) {
   number_1 = -number_1;
  }
  let buf = StringBuilder.$create__();
  if (Double.m_isInfinite__double(number_1)) {
   buf.m_append__java_lang_String(isNegative ? this.f_negativePrefix__org_gwtproject_i18n_client_NumberFormat_ : this.f_positivePrefix__org_gwtproject_i18n_client_NumberFormat_);
   buf.m_append__java_lang_String(this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_.m_infinity__());
   buf.m_append__java_lang_String(isNegative ? this.f_negativeSuffix__org_gwtproject_i18n_client_NumberFormat_ : this.f_positiveSuffix__org_gwtproject_i18n_client_NumberFormat_);
   return buf.toString();
  }
  number_1 *= this.f_multiplier__org_gwtproject_i18n_client_NumberFormat_;
  let scale = NumberFormat.m_toScaledString__java_lang_StringBuilder__double(buf, number_1);
  let preRound = buf.m_length__() + scale + this.f_maximumFractionDigits__org_gwtproject_i18n_client_NumberFormat_ + 3;
  if (preRound > 0 && preRound < buf.m_length__() && buf.m_charAt__int(preRound) == 57 /* '9' */) {
   this.m_propagateCarry__java_lang_StringBuilder__int_$p_org_gwtproject_i18n_client_NumberFormat(buf, preRound - 1);
   scale += buf.m_length__() - preRound;
   buf.m_delete__int__int(preRound, buf.m_length__());
  }
  this.m_format__boolean__java_lang_StringBuilder__int(isNegative, buf, scale);
  return buf.toString();
 }
 /**
  * @param {(j_l_Number|number)} number_1
  * @return {?string}
  * @public
  */
 m_format__java_lang_Number(number_1) {
  if (BigDecimal.$isInstance(number_1)) {
   let bigDec = /**@type {BigDecimal} */ ($Casts.$to(number_1, BigDecimal));
   let isNegative = bigDec.m_signum__() < 0;
   if (isNegative) {
    bigDec = bigDec.m_negate__();
   }
   bigDec = bigDec.m_multiply__java_math_BigDecimal(BigDecimal.m_valueOf__long($Primitives.$widenIntToLong(this.f_multiplier__org_gwtproject_i18n_client_NumberFormat_)));
   let buf = StringBuilder.$create__();
   buf.m_append__java_lang_String(bigDec.m_unscaledValue__().toString());
   this.m_format__boolean__java_lang_StringBuilder__int(isNegative, buf, -bigDec.m_scale__());
   return buf.toString();
  } else if (BigInteger.$isInstance(number_1)) {
   let bigInt = /**@type {BigInteger} */ ($Casts.$to(number_1, BigInteger));
   let isNegative_1 = bigInt.m_signum__() < 0;
   if (isNegative_1) {
    bigInt = bigInt.m_negate__();
   }
   bigInt = bigInt.m_multiply__java_math_BigInteger(BigInteger.m_valueOf__long($Primitives.$widenIntToLong(this.f_multiplier__org_gwtproject_i18n_client_NumberFormat_)));
   let buf_1 = StringBuilder.$create__();
   buf_1.m_append__java_lang_String(bigInt.toString());
   this.m_format__boolean__java_lang_StringBuilder__int(isNegative_1, buf_1, 0);
   return buf_1.toString();
  } else if (Long.$isInstance(number_1)) {
   return this.m_format__long__int($Numbers.m_longValue__java_lang_Number(number_1), 0);
  } else {
   return this.m_format__double($Numbers.m_doubleValue__java_lang_Number(number_1));
  }
 }
 /**
  * @return {?string}
  * @public
  */
 m_getPattern__() {
  return this.f_pattern__org_gwtproject_i18n_client_NumberFormat_;
 }
 /**
  * @param {number} digits
  * @return {NumberFormat}
  * @public
  */
 m_overrideFractionDigits__int(digits) {
  return this.m_overrideFractionDigits__int__int(digits, digits);
 }
 /**
  * @param {number} minDigits
  * @param {number} maxDigits
  * @return {NumberFormat}
  * @public
  */
 m_overrideFractionDigits__int__int(minDigits, maxDigits) {
  $Asserts.$assert(minDigits >= 0);
  $Asserts.$assert(maxDigits >= minDigits);
  this.f_minimumFractionDigits__org_gwtproject_i18n_client_NumberFormat_ = minDigits;
  this.f_maximumFractionDigits__org_gwtproject_i18n_client_NumberFormat_ = maxDigits;
  return this;
 }
 /**
  * @param {?string} text
  * @return {number}
  * @public
  */
 m_parse__java_lang_String(text) {
  let pos = /**@type {!Array<number>} */ ($Arrays.$init([0], $int));
  let result = this.m_parse__java_lang_String__arrayOf_int(text, pos);
  if (pos[0] == 0 || pos[0] != j_l_String.m_length__java_lang_String(text)) {
   throw $Exceptions.toJs(NumberFormatException.$create__java_lang_String(text));
  }
  return result;
 }
 /**
  * @param {?string} text
  * @param {Array<number>} inOutPos
  * @return {number}
  * @public
  */
 m_parse__java_lang_String__arrayOf_int(text, inOutPos) {
  let ret = 0.0;
  let gotPositivePrefix = j_l_String.m_startsWith__java_lang_String__java_lang_String__int(text, this.f_positivePrefix__org_gwtproject_i18n_client_NumberFormat_, inOutPos[0]);
  let gotNegativePrefix = j_l_String.m_startsWith__java_lang_String__java_lang_String__int(text, this.f_negativePrefix__org_gwtproject_i18n_client_NumberFormat_, inOutPos[0]);
  let gotPositiveSuffix = j_l_String.m_endsWith__java_lang_String__java_lang_String(text, this.f_positiveSuffix__org_gwtproject_i18n_client_NumberFormat_);
  let gotNegativeSuffix = j_l_String.m_endsWith__java_lang_String__java_lang_String(text, this.f_negativeSuffix__org_gwtproject_i18n_client_NumberFormat_);
  let gotPositive = gotPositivePrefix && gotPositiveSuffix;
  let gotNegative = gotNegativePrefix && gotNegativeSuffix;
  if (gotPositive && gotNegative) {
   if (j_l_String.m_length__java_lang_String(this.f_positivePrefix__org_gwtproject_i18n_client_NumberFormat_) > j_l_String.m_length__java_lang_String(this.f_negativePrefix__org_gwtproject_i18n_client_NumberFormat_)) {
    gotNegative = false;
   } else if (j_l_String.m_length__java_lang_String(this.f_positivePrefix__org_gwtproject_i18n_client_NumberFormat_) < j_l_String.m_length__java_lang_String(this.f_negativePrefix__org_gwtproject_i18n_client_NumberFormat_)) {
    gotPositive = false;
   } else if (j_l_String.m_length__java_lang_String(this.f_positiveSuffix__org_gwtproject_i18n_client_NumberFormat_) > j_l_String.m_length__java_lang_String(this.f_negativeSuffix__org_gwtproject_i18n_client_NumberFormat_)) {
    gotNegative = false;
   } else if (j_l_String.m_length__java_lang_String(this.f_positiveSuffix__org_gwtproject_i18n_client_NumberFormat_) < j_l_String.m_length__java_lang_String(this.f_negativeSuffix__org_gwtproject_i18n_client_NumberFormat_)) {
    gotPositive = false;
   } else {
    gotNegative = false;
   }
  } else if (!gotPositive && !gotNegative) {
   throw $Exceptions.toJs(NumberFormatException.$create__java_lang_String(j_l_String.m_valueOf__java_lang_Object(text) + " does not have either positive or negative affixes"));
  }
  let valueOnly = null;
  if (gotPositive) {
   inOutPos[0] += j_l_String.m_length__java_lang_String(this.f_positivePrefix__org_gwtproject_i18n_client_NumberFormat_);
   valueOnly = j_l_String.m_substring__java_lang_String__int__int(text, inOutPos[0], j_l_String.m_length__java_lang_String(text) - j_l_String.m_length__java_lang_String(this.f_positiveSuffix__org_gwtproject_i18n_client_NumberFormat_));
  } else {
   inOutPos[0] += j_l_String.m_length__java_lang_String(this.f_negativePrefix__org_gwtproject_i18n_client_NumberFormat_);
   valueOnly = j_l_String.m_substring__java_lang_String__int__int(text, inOutPos[0], j_l_String.m_length__java_lang_String(text) - j_l_String.m_length__java_lang_String(this.f_negativeSuffix__org_gwtproject_i18n_client_NumberFormat_));
  }
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(valueOnly, this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_.m_infinity__())) {
   inOutPos[0] += j_l_String.m_length__java_lang_String(this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_.m_infinity__());
   ret = Double.f_POSITIVE_INFINITY__java_lang_Double;
  } else if (j_l_String.m_equals__java_lang_String__java_lang_Object(valueOnly, this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_.m_notANumber__())) {
   inOutPos[0] += j_l_String.m_length__java_lang_String(this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_.m_notANumber__());
   ret = Double.f_NaN__java_lang_Double;
  } else {
   let tempPos = /**@type {!Array<number>} */ ($Arrays.$init([0], $int));
   ret = this.m_parseNumber__java_lang_String__arrayOf_int_$p_org_gwtproject_i18n_client_NumberFormat(valueOnly, tempPos) / this.f_multiplier__org_gwtproject_i18n_client_NumberFormat_;
   inOutPos[0] += tempPos[0];
  }
  if (gotPositive) {
   inOutPos[0] += j_l_String.m_length__java_lang_String(this.f_positiveSuffix__org_gwtproject_i18n_client_NumberFormat_);
  } else if (gotNegative) {
   inOutPos[0] += j_l_String.m_length__java_lang_String(this.f_negativeSuffix__org_gwtproject_i18n_client_NumberFormat_);
  }
  if (gotNegative) {
   ret = -ret;
  }
  return ret;
 }
 /**
  * @param {boolean} isNegative
  * @param {StringBuilder} digits
  * @param {number} scale
  * @public
  */
 m_format__boolean__java_lang_StringBuilder__int(isNegative, digits, scale) {
  let /** number */ decimalSeparator;
  let /** number */ groupingSeparator;
  if (this.f_isCurrencyFormat__org_gwtproject_i18n_client_NumberFormat_) {
   decimalSeparator = j_l_String.m_charAt__java_lang_String__int(this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_.m_monetarySeparator__(), 0);
   groupingSeparator = j_l_String.m_charAt__java_lang_String__int(this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_.m_monetaryGroupingSeparator__(), 0);
  } else {
   decimalSeparator = j_l_String.m_charAt__java_lang_String__int(this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_.m_decimalSeparator__(), 0);
   groupingSeparator = j_l_String.m_charAt__java_lang_String__int(this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_.m_groupingSeparator__(), 0);
  }
  this.f_exponent__org_gwtproject_i18n_client_NumberFormat_ = 0;
  this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_ = digits.m_length__();
  this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_ = this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_ + scale;
  let useExponent = this.f_useExponentialNotation__org_gwtproject_i18n_client_NumberFormat_;
  let currentGroupingSize = this.f_groupingSize__org_gwtproject_i18n_client_NumberFormat_;
  if (this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_ > 1024) {
   useExponent = true;
  }
  if (useExponent) {
   this.m_computeExponent__java_lang_StringBuilder_$p_org_gwtproject_i18n_client_NumberFormat(digits);
  }
  this.m_processLeadingZeros__java_lang_StringBuilder_$p_org_gwtproject_i18n_client_NumberFormat(digits);
  this.m_roundValue__java_lang_StringBuilder_$p_org_gwtproject_i18n_client_NumberFormat(digits);
  this.m_insertGroupingSeparators__java_lang_StringBuilder__char__int_$p_org_gwtproject_i18n_client_NumberFormat(digits, groupingSeparator, currentGroupingSize);
  this.m_adjustFractionDigits__java_lang_StringBuilder_$p_org_gwtproject_i18n_client_NumberFormat(digits);
  this.m_addZeroAndDecimal__java_lang_StringBuilder__char_$p_org_gwtproject_i18n_client_NumberFormat(digits, decimalSeparator);
  if (useExponent) {
   this.m_addExponent__java_lang_StringBuilder_$p_org_gwtproject_i18n_client_NumberFormat(digits);
  }
  let zeroChar = j_l_String.m_charAt__java_lang_String__int(this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_.m_zeroDigit__(), 0);
  if (zeroChar != 48 /* '0' */) {
   this.m_localizeDigits__java_lang_StringBuilder__char_$p_org_gwtproject_i18n_client_NumberFormat(digits, zeroChar);
  }
  digits.m_insert__int__java_lang_String(0, isNegative ? this.f_negativePrefix__org_gwtproject_i18n_client_NumberFormat_ : this.f_positivePrefix__org_gwtproject_i18n_client_NumberFormat_);
  digits.m_append__java_lang_String(isNegative ? this.f_negativeSuffix__org_gwtproject_i18n_client_NumberFormat_ : this.f_positiveSuffix__org_gwtproject_i18n_client_NumberFormat_);
 }
 /**
  * @param {!$Long} value
  * @param {number} scale
  * @return {?string}
  * @public
  */
 m_format__long__int(value, scale) {
  let isNegative = $LongUtils.$less(value, $Long.fromInt(0));
  if (isNegative) {
   value = $LongUtils.$negate(value);
  }
  value = $LongUtils.$times(value, $Primitives.$widenIntToLong(this.f_multiplier__org_gwtproject_i18n_client_NumberFormat_));
  let buf = StringBuilder.$create__();
  buf.m_append__java_lang_String(j_l_String.m_valueOf__long(value));
  this.m_format__boolean__java_lang_StringBuilder__int(isNegative, buf, scale);
  return buf.toString();
 }
 /**
  * @return {number}
  * @public
  */
 m_getGroupingSize__() {
  return this.f_groupingSize__org_gwtproject_i18n_client_NumberFormat_;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getNegativePrefix__() {
  return this.f_negativePrefix__org_gwtproject_i18n_client_NumberFormat_;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getNegativeSuffix__() {
  return this.f_negativeSuffix__org_gwtproject_i18n_client_NumberFormat_;
 }
 /**
  * @return {NumberConstants}
  * @public
  */
 m_getNumberConstants__() {
  return this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getPositivePrefix__() {
  return this.f_positivePrefix__org_gwtproject_i18n_client_NumberFormat_;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getPositiveSuffix__() {
  return this.f_positiveSuffix__org_gwtproject_i18n_client_NumberFormat_;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isDecimalSeparatorAlwaysShown__() {
  return this.f_decimalSeparatorAlwaysShown__org_gwtproject_i18n_client_NumberFormat_;
 }
 /**
  * @param {StringBuilder} digits
  * @public
  */
 m_addExponent__java_lang_StringBuilder_$p_org_gwtproject_i18n_client_NumberFormat(digits) {
  digits.m_append__java_lang_String(this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_.m_exponentialSymbol__());
  if (this.f_exponent__org_gwtproject_i18n_client_NumberFormat_ < 0) {
   this.f_exponent__org_gwtproject_i18n_client_NumberFormat_ = -this.f_exponent__org_gwtproject_i18n_client_NumberFormat_;
   digits.m_append__java_lang_String(this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_.m_minusSign__());
  }
  let exponentDigits = j_l_String.m_valueOf__int(this.f_exponent__org_gwtproject_i18n_client_NumberFormat_);
  for (let i = j_l_String.m_length__java_lang_String(exponentDigits); i < this.f_minExponentDigits__org_gwtproject_i18n_client_NumberFormat_; ++i) {
   digits.m_append__char(48 /* '0' */);
  }
  digits.m_append__java_lang_String(exponentDigits);
 }
 /**
  * @param {StringBuilder} digits
  * @param {number} decimalSeparator
  * @public
  */
 m_addZeroAndDecimal__java_lang_StringBuilder__char_$p_org_gwtproject_i18n_client_NumberFormat(digits, decimalSeparator) {
  if (this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_ == 0) {
   digits.m_insert__int__char(0, 48 /* '0' */);
   ++this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_;
   ++this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_;
  }
  if (this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_ < this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_ || this.f_decimalSeparatorAlwaysShown__org_gwtproject_i18n_client_NumberFormat_) {
   digits.m_insert__int__char(this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_, decimalSeparator);
   ++this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_;
  }
 }
 /**
  * @param {StringBuilder} digits
  * @public
  */
 m_adjustFractionDigits__java_lang_StringBuilder_$p_org_gwtproject_i18n_client_NumberFormat(digits) {
  let requiredDigits = this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_ + this.f_minimumFractionDigits__org_gwtproject_i18n_client_NumberFormat_;
  if (this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_ < requiredDigits) {
   while (this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_ < requiredDigits) {
    digits.m_append__char(48 /* '0' */);
    ++this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_;
   }
  } else {
   let toRemove = this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_ + this.f_maximumFractionDigits__org_gwtproject_i18n_client_NumberFormat_;
   if (toRemove > this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_) {
    toRemove = this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_;
   }
   while (toRemove > requiredDigits && digits.m_charAt__int(toRemove - 1) == 48 /* '0' */) {
    --toRemove;
   }
   if (toRemove < this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_) {
    digits.m_delete__int__int(toRemove, this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_);
    this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_ = toRemove;
   }
  }
 }
 /**
  * @param {StringBuilder} digits
  * @public
  */
 m_computeExponent__java_lang_StringBuilder_$p_org_gwtproject_i18n_client_NumberFormat(digits) {
  let strip = 0;
  while (strip < this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_ - 1 && digits.m_charAt__int(strip) == 48 /* '0' */) {
   ++strip;
  }
  if (strip > 0) {
   digits.m_delete__int__int(0, strip);
   this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_ -= strip;
   this.f_exponent__org_gwtproject_i18n_client_NumberFormat_ -= strip;
  }
  if (this.f_maximumIntegerDigits__org_gwtproject_i18n_client_NumberFormat_ > this.f_minimumIntegerDigits__org_gwtproject_i18n_client_NumberFormat_ && this.f_maximumIntegerDigits__org_gwtproject_i18n_client_NumberFormat_ > 0) {
   this.f_exponent__org_gwtproject_i18n_client_NumberFormat_ += this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_ - 1;
   let remainder = $Primitives.$coerceDivision(this.f_exponent__org_gwtproject_i18n_client_NumberFormat_ % this.f_maximumIntegerDigits__org_gwtproject_i18n_client_NumberFormat_);
   if (remainder < 0) {
    remainder += this.f_maximumIntegerDigits__org_gwtproject_i18n_client_NumberFormat_;
   }
   this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_ = remainder + 1;
   this.f_exponent__org_gwtproject_i18n_client_NumberFormat_ -= remainder;
  } else {
   this.f_exponent__org_gwtproject_i18n_client_NumberFormat_ += this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_ - this.f_minimumIntegerDigits__org_gwtproject_i18n_client_NumberFormat_;
   this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_ = this.f_minimumIntegerDigits__org_gwtproject_i18n_client_NumberFormat_;
  }
  if (this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_ == 1 && digits.m_charAt__int(0) == 48 /* '0' */) {
   this.f_exponent__org_gwtproject_i18n_client_NumberFormat_ = 0;
   this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_ = this.f_minimumIntegerDigits__org_gwtproject_i18n_client_NumberFormat_;
  }
 }
 /**
  * @param {number} ch
  * @return {number}
  * @public
  */
 m_getDigit__char_$p_org_gwtproject_i18n_client_NumberFormat(ch) {
  if (48 /* '0' */ <= ch && ch <= 48 /* '0' */ + 9) {
   return (ch - 48 /* '0' */);
  } else {
   let zeroChar = j_l_String.m_charAt__java_lang_String__int(this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_.m_zeroDigit__(), 0);
   return ((zeroChar <= ch && ch <= zeroChar + 9) ? (ch - zeroChar) : -1);
  }
 }
 /**
  * @param {StringBuilder} digits
  * @param {number} groupingSeparator
  * @param {number} g
  * @public
  */
 m_insertGroupingSeparators__java_lang_StringBuilder__char__int_$p_org_gwtproject_i18n_client_NumberFormat(digits, groupingSeparator, g) {
  if (g > 0) {
   for (let i = g; i < this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_; i += g + 1) {
    digits.m_insert__int__char(this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_ - i, groupingSeparator);
    ++this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_;
    ++this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_;
   }
  }
 }
 /**
  * @param {StringBuilder} digits
  * @param {number} zero
  * @public
  */
 m_localizeDigits__java_lang_StringBuilder__char_$p_org_gwtproject_i18n_client_NumberFormat(digits, zero) {
  let n = digits.m_length__();
  for (let i = 0; i < n; ++i) {
   let ch = digits.m_charAt__int(i);
   if (ch >= 48 /* '0' */ && ch <= 57 /* '9' */) {
    digits.m_setCharAt__int__char(i, $Primitives.$narrowIntToChar((ch - 48 /* '0' */ + zero)));
   }
  }
 }
 /**
  * @param {?string} pattern
  * @param {number} start
  * @param {StringBuilder} affix
  * @param {boolean} inNegativePattern
  * @return {number}
  * @public
  */
 m_parseAffix__java_lang_String__int__java_lang_StringBuilder__boolean_$p_org_gwtproject_i18n_client_NumberFormat(pattern, start, affix, inNegativePattern) {
  affix.m_delete__int__int(0, affix.m_length__());
  let inQuote = false;
  let len = j_l_String.m_length__java_lang_String(pattern);
  for (let pos = start; pos < len; ++pos) {
   let ch = j_l_String.m_charAt__java_lang_String__int(pattern, pos);
   if (ch == NumberFormat.f_QUOTE__org_gwtproject_i18n_client_NumberFormat_) {
    if ((pos + 1) < len && j_l_String.m_charAt__java_lang_String__int(pattern, pos + 1) == NumberFormat.f_QUOTE__org_gwtproject_i18n_client_NumberFormat_) {
     ++pos;
     affix.m_append__java_lang_String("'");
    } else {
     inQuote = !inQuote;
    }
    continue;
   }
   if (inQuote) {
    affix.m_append__char(ch);
   } else {
    switch (ch) {
     case NumberFormat.f_PATTERN_DIGIT__org_gwtproject_i18n_client_NumberFormat_: 
     case NumberFormat.f_PATTERN_ZERO_DIGIT__org_gwtproject_i18n_client_NumberFormat_: 
     case NumberFormat.f_PATTERN_GROUPING_SEPARATOR__org_gwtproject_i18n_client_NumberFormat_: 
     case NumberFormat.f_PATTERN_DECIMAL_SEPARATOR__org_gwtproject_i18n_client_NumberFormat_: 
     case NumberFormat.f_PATTERN_SEPARATOR__org_gwtproject_i18n_client_NumberFormat_: 
      return pos - start;
     case NumberFormat.f_CURRENCY_SIGN__org_gwtproject_i18n_client_NumberFormat_: 
      this.f_isCurrencyFormat__org_gwtproject_i18n_client_NumberFormat_ = true;
      if ((pos + 1) < len && j_l_String.m_charAt__java_lang_String__int(pattern, pos + 1) == NumberFormat.f_CURRENCY_SIGN__org_gwtproject_i18n_client_NumberFormat_) {
       ++pos;
       if (pos < len - 2 && j_l_String.m_charAt__java_lang_String__int(pattern, pos + 1) == NumberFormat.f_CURRENCY_SIGN__org_gwtproject_i18n_client_NumberFormat_ && j_l_String.m_charAt__java_lang_String__int(pattern, pos + 2) == NumberFormat.f_CURRENCY_SIGN__org_gwtproject_i18n_client_NumberFormat_) {
        pos += 2;
        affix.m_append__java_lang_String(this.f_currencyData__org_gwtproject_i18n_client_NumberFormat_.m_getSimpleCurrencySymbol__());
       } else {
        affix.m_append__java_lang_String(this.f_currencyData__org_gwtproject_i18n_client_NumberFormat_.m_getCurrencyCode__());
       }
      } else {
       affix.m_append__java_lang_String(this.f_currencyData__org_gwtproject_i18n_client_NumberFormat_.m_getCurrencySymbol__());
      }
      break;
     case NumberFormat.f_PATTERN_PERCENT__org_gwtproject_i18n_client_NumberFormat_: 
      if (!inNegativePattern) {
       if (this.f_multiplier__org_gwtproject_i18n_client_NumberFormat_ != 1) {
        throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Too many percent/per mille characters in pattern \"" + j_l_String.m_valueOf__java_lang_Object(pattern) + j_l_String.m_valueOf__char(34 /* '\"' */)));
       }
       this.f_multiplier__org_gwtproject_i18n_client_NumberFormat_ = 100;
      }
      affix.m_append__java_lang_String(this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_.m_percent__());
      break;
     case NumberFormat.f_PATTERN_PER_MILLE__org_gwtproject_i18n_client_NumberFormat_: 
      if (!inNegativePattern) {
       if (this.f_multiplier__org_gwtproject_i18n_client_NumberFormat_ != 1) {
        throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Too many percent/per mille characters in pattern \"" + j_l_String.m_valueOf__java_lang_Object(pattern) + j_l_String.m_valueOf__char(34 /* '\"' */)));
       }
       this.f_multiplier__org_gwtproject_i18n_client_NumberFormat_ = 1000;
      }
      affix.m_append__java_lang_String(this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_.m_perMill__());
      break;
     case NumberFormat.f_PATTERN_MINUS__org_gwtproject_i18n_client_NumberFormat_: 
      affix.m_append__java_lang_String("-");
      break;
     default: 
      affix.m_append__char(ch);
    }
   }
  }
  return len - start;
 }
 /**
  * @param {?string} text
  * @param {Array<number>} pos
  * @return {number}
  * @public
  */
 m_parseNumber__java_lang_String__arrayOf_int_$p_org_gwtproject_i18n_client_NumberFormat(text, pos) {
  let /** number */ ret;
  let sawDecimal = false;
  let sawExponent = false;
  let sawDigit = false;
  let scale = 1;
  let decimal = this.f_isCurrencyFormat__org_gwtproject_i18n_client_NumberFormat_ ? this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_.m_monetarySeparator__() : this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_.m_decimalSeparator__();
  let grouping = this.f_isCurrencyFormat__org_gwtproject_i18n_client_NumberFormat_ ? this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_.m_monetaryGroupingSeparator__() : this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_.m_groupingSeparator__();
  let exponentChar = this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_.m_exponentialSymbol__();
  let normalizedText = StringBuilder.$create__();
  for (; pos[0] < j_l_String.m_length__java_lang_String(text); ++pos[0]) {
   let ch = j_l_String.m_charAt__java_lang_String__int(text, pos[0]);
   let digit = this.m_getDigit__char_$p_org_gwtproject_i18n_client_NumberFormat(ch);
   if (digit >= 0 && digit <= 9) {
    normalizedText.m_append__char($Primitives.$narrowIntToChar((digit + 48 /* '0' */)));
    sawDigit = true;
   } else if (ch == j_l_String.m_charAt__java_lang_String__int(decimal, 0)) {
    if (sawDecimal || sawExponent) {
     break;
    }
    normalizedText.m_append__char(46 /* '.' */);
    sawDecimal = true;
   } else if (ch == j_l_String.m_charAt__java_lang_String__int(grouping, 0)) {
    if (sawDecimal || sawExponent) {
     break;
    }
    continue;
   } else if (ch == j_l_String.m_charAt__java_lang_String__int(exponentChar, 0)) {
    if (sawExponent) {
     break;
    }
    normalizedText.m_append__char(69 /* 'E' */);
    sawExponent = true;
   } else if (ch == 43 /* '+' */ || ch == 45 /* '-' */) {
    normalizedText.m_append__char(ch);
   } else if (ch == j_l_String.m_charAt__java_lang_String__int(this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_.m_percent__(), 0)) {
    if (scale != 1) {
     break;
    }
    scale = 100;
    if (sawDigit) {
     ++pos[0];
     break;
    }
   } else if (ch == j_l_String.m_charAt__java_lang_String__int(this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_.m_perMill__(), 0)) {
    if (scale != 1) {
     break;
    }
    scale = 1000;
    if (sawDigit) {
     ++pos[0];
     break;
    }
   } else {
    break;
   }
  }
  try {
   ret = Double.m_parseDouble__java_lang_String(normalizedText.toString());
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (NumberFormatException.$isInstance(__$exc)) {
    let e = /**@type {NumberFormatException} */ (__$exc);
    throw $Exceptions.toJs(NumberFormatException.$create__java_lang_String(text));
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
  ret = ret / scale;
  return ret;
 }
 /**
  * @param {?string} pattern
  * @public
  */
 m_parsePattern__java_lang_String_$p_org_gwtproject_i18n_client_NumberFormat(pattern) {
  let pos = 0;
  let affix = StringBuilder.$create__();
  pos += this.m_parseAffix__java_lang_String__int__java_lang_StringBuilder__boolean_$p_org_gwtproject_i18n_client_NumberFormat(pattern, pos, affix, false);
  this.f_positivePrefix__org_gwtproject_i18n_client_NumberFormat_ = affix.toString();
  pos += this.m_parseTrunk__java_lang_String__int__boolean_$p_org_gwtproject_i18n_client_NumberFormat(pattern, pos, false);
  pos += this.m_parseAffix__java_lang_String__int__java_lang_StringBuilder__boolean_$p_org_gwtproject_i18n_client_NumberFormat(pattern, pos, affix, false);
  this.f_positiveSuffix__org_gwtproject_i18n_client_NumberFormat_ = affix.toString();
  if (pos < j_l_String.m_length__java_lang_String(pattern) && j_l_String.m_charAt__java_lang_String__int(pattern, pos) == NumberFormat.f_PATTERN_SEPARATOR__org_gwtproject_i18n_client_NumberFormat_) {
   ++pos;
   pos += this.m_parseAffix__java_lang_String__int__java_lang_StringBuilder__boolean_$p_org_gwtproject_i18n_client_NumberFormat(pattern, pos, affix, true);
   this.f_negativePrefix__org_gwtproject_i18n_client_NumberFormat_ = affix.toString();
   pos += this.m_parseTrunk__java_lang_String__int__boolean_$p_org_gwtproject_i18n_client_NumberFormat(pattern, pos, true);
   pos += this.m_parseAffix__java_lang_String__int__java_lang_StringBuilder__boolean_$p_org_gwtproject_i18n_client_NumberFormat(pattern, pos, affix, true);
   this.f_negativeSuffix__org_gwtproject_i18n_client_NumberFormat_ = affix.toString();
  } else {
   this.f_negativePrefix__org_gwtproject_i18n_client_NumberFormat_ = j_l_String.m_valueOf__java_lang_Object(this.f_numberConstants__org_gwtproject_i18n_client_NumberFormat_.m_minusSign__()) + j_l_String.m_valueOf__java_lang_Object(this.f_positivePrefix__org_gwtproject_i18n_client_NumberFormat_);
   this.f_negativeSuffix__org_gwtproject_i18n_client_NumberFormat_ = this.f_positiveSuffix__org_gwtproject_i18n_client_NumberFormat_;
  }
 }
 /**
  * @param {?string} pattern
  * @param {number} start
  * @param {boolean} ignorePattern
  * @return {number}
  * @public
  */
 m_parseTrunk__java_lang_String__int__boolean_$p_org_gwtproject_i18n_client_NumberFormat(pattern, start, ignorePattern) {
  let decimalPos = -1;
  let digitLeftCount = 0, zeroDigitCount = 0, digitRightCount = 0;
  let groupingCount = $Primitives.$narrowIntToByte(-1);
  let len = j_l_String.m_length__java_lang_String(pattern);
  let pos = start;
  let loop = true;
  for (; (pos < len) && loop; ++pos) {
   let ch = j_l_String.m_charAt__java_lang_String__int(pattern, pos);
   switch (ch) {
    case NumberFormat.f_PATTERN_DIGIT__org_gwtproject_i18n_client_NumberFormat_: 
     if (zeroDigitCount > 0) {
      ++digitRightCount;
     } else {
      ++digitLeftCount;
     }
     if (groupingCount >= 0 && decimalPos < 0) {
      groupingCount = $Primitives.$narrowIntToByte(groupingCount + 1);
     }
     break;
    case NumberFormat.f_PATTERN_ZERO_DIGIT__org_gwtproject_i18n_client_NumberFormat_: 
     if (digitRightCount > 0) {
      throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Unexpected '0' in pattern \"" + j_l_String.m_valueOf__java_lang_Object(pattern) + j_l_String.m_valueOf__char(34 /* '\"' */)));
     }
     ++zeroDigitCount;
     if (groupingCount >= 0 && decimalPos < 0) {
      groupingCount = $Primitives.$narrowIntToByte(groupingCount + 1);
     }
     break;
    case NumberFormat.f_PATTERN_GROUPING_SEPARATOR__org_gwtproject_i18n_client_NumberFormat_: 
     groupingCount = 0;
     break;
    case NumberFormat.f_PATTERN_DECIMAL_SEPARATOR__org_gwtproject_i18n_client_NumberFormat_: 
     if (decimalPos >= 0) {
      throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Multiple decimal separators in pattern \"" + j_l_String.m_valueOf__java_lang_Object(pattern) + j_l_String.m_valueOf__char(34 /* '\"' */)));
     }
     decimalPos = digitLeftCount + zeroDigitCount + digitRightCount;
     break;
    case NumberFormat.f_PATTERN_EXPONENT__org_gwtproject_i18n_client_NumberFormat_: 
     if (!ignorePattern) {
      if (this.f_useExponentialNotation__org_gwtproject_i18n_client_NumberFormat_) {
       throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Multiple exponential " + "symbols in pattern \"" + j_l_String.m_valueOf__java_lang_Object(pattern) + j_l_String.m_valueOf__char(34 /* '\"' */)));
      }
      this.f_useExponentialNotation__org_gwtproject_i18n_client_NumberFormat_ = true;
      this.f_minExponentDigits__org_gwtproject_i18n_client_NumberFormat_ = 0;
     }
     while ((pos + 1) < len && j_l_String.m_charAt__java_lang_String__int(pattern, pos + 1) == NumberFormat.f_PATTERN_ZERO_DIGIT__org_gwtproject_i18n_client_NumberFormat_) {
      ++pos;
      if (!ignorePattern) {
       ++this.f_minExponentDigits__org_gwtproject_i18n_client_NumberFormat_;
      }
     }
     if (!ignorePattern && (digitLeftCount + zeroDigitCount) < 1 || this.f_minExponentDigits__org_gwtproject_i18n_client_NumberFormat_ < 1) {
      throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Malformed exponential " + "pattern \"" + j_l_String.m_valueOf__java_lang_Object(pattern) + j_l_String.m_valueOf__char(34 /* '\"' */)));
     }
     loop = false;
     break;
    default: 
     --pos;
     loop = false;
     break;
   }
  }
  if (zeroDigitCount == 0 && digitLeftCount > 0 && decimalPos >= 0) {
   let n = decimalPos;
   if (n == 0) {
    ++n;
   }
   digitRightCount = digitLeftCount - n;
   digitLeftCount = n - 1;
   zeroDigitCount = 1;
  }
  if ((decimalPos < 0 && digitRightCount > 0) || (decimalPos >= 0 && (decimalPos < digitLeftCount || decimalPos > (digitLeftCount + zeroDigitCount))) || groupingCount == 0) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Malformed pattern \"" + j_l_String.m_valueOf__java_lang_Object(pattern) + j_l_String.m_valueOf__char(34 /* '\"' */)));
  }
  if (ignorePattern) {
   return pos - start;
  }
  let totalDigits = digitLeftCount + zeroDigitCount + digitRightCount;
  this.f_maximumFractionDigits__org_gwtproject_i18n_client_NumberFormat_ = (decimalPos >= 0 ? (totalDigits - decimalPos) : 0);
  if (decimalPos >= 0) {
   this.f_minimumFractionDigits__org_gwtproject_i18n_client_NumberFormat_ = digitLeftCount + zeroDigitCount - decimalPos;
   if (this.f_minimumFractionDigits__org_gwtproject_i18n_client_NumberFormat_ < 0) {
    this.f_minimumFractionDigits__org_gwtproject_i18n_client_NumberFormat_ = 0;
   }
  }
  let effectiveDecimalPos = decimalPos >= 0 ? decimalPos : totalDigits;
  this.f_minimumIntegerDigits__org_gwtproject_i18n_client_NumberFormat_ = effectiveDecimalPos - digitLeftCount;
  if (this.f_useExponentialNotation__org_gwtproject_i18n_client_NumberFormat_) {
   this.f_maximumIntegerDigits__org_gwtproject_i18n_client_NumberFormat_ = digitLeftCount + this.f_minimumIntegerDigits__org_gwtproject_i18n_client_NumberFormat_;
   if (this.f_maximumFractionDigits__org_gwtproject_i18n_client_NumberFormat_ == 0 && this.f_minimumIntegerDigits__org_gwtproject_i18n_client_NumberFormat_ == 0) {
    this.f_minimumIntegerDigits__org_gwtproject_i18n_client_NumberFormat_ = 1;
   }
  }
  this.f_groupingSize__org_gwtproject_i18n_client_NumberFormat_ = (groupingCount > 0) ? groupingCount : 0;
  this.f_decimalSeparatorAlwaysShown__org_gwtproject_i18n_client_NumberFormat_ = (decimalPos == 0 || decimalPos == totalDigits);
  return pos - start;
 }
 /**
  * @param {StringBuilder} digits
  * @public
  */
 m_processLeadingZeros__java_lang_StringBuilder_$p_org_gwtproject_i18n_client_NumberFormat(digits) {
  if (this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_ > this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_) {
   while (this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_ < this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_) {
    digits.m_append__char(48 /* '0' */);
    ++this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_;
   }
  }
  if (!this.f_useExponentialNotation__org_gwtproject_i18n_client_NumberFormat_) {
   if (this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_ < this.f_minimumIntegerDigits__org_gwtproject_i18n_client_NumberFormat_) {
    let prefix = StringBuilder.$create__();
    while (this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_ < this.f_minimumIntegerDigits__org_gwtproject_i18n_client_NumberFormat_) {
     prefix.m_append__char(48 /* '0' */);
     ++this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_;
     ++this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_;
    }
    digits.m_insert__int__java_lang_CharSequence(0, prefix);
   } else if (this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_ > this.f_minimumIntegerDigits__org_gwtproject_i18n_client_NumberFormat_) {
    let strip = this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_ - this.f_minimumIntegerDigits__org_gwtproject_i18n_client_NumberFormat_;
    for (let i = 0; i < strip; ++i) {
     if (digits.m_charAt__int(i) != 48 /* '0' */) {
      strip = i;
      break;
     }
    }
    if (strip > 0) {
     digits.m_delete__int__int(0, strip);
     this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_ -= strip;
     this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_ -= strip;
    }
   }
  }
 }
 /**
  * @param {StringBuilder} digits
  * @param {number} i
  * @public
  */
 m_propagateCarry__java_lang_StringBuilder__int_$p_org_gwtproject_i18n_client_NumberFormat(digits, i) {
  let carry = true;
  while (carry && i >= 0) {
   let digit = digits.m_charAt__int(i);
   if (digit == 57 /* '9' */) {
    digits.m_setCharAt__int__char(i--, 48 /* '0' */);
   } else {
    digits.m_setCharAt__int__char(i, $Primitives.$narrowIntToChar((digit + 1)));
    carry = false;
   }
  }
  if (carry) {
   digits.m_insert__int__char(0, 49 /* '1' */);
   ++this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_;
   ++this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_;
  }
 }
 /**
  * @param {StringBuilder} digits
  * @public
  */
 m_roundValue__java_lang_StringBuilder_$p_org_gwtproject_i18n_client_NumberFormat(digits) {
  if (this.f_digitsLength__org_gwtproject_i18n_client_NumberFormat_ > this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_ + this.f_maximumFractionDigits__org_gwtproject_i18n_client_NumberFormat_ && digits.m_charAt__int(this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_ + this.f_maximumFractionDigits__org_gwtproject_i18n_client_NumberFormat_) >= 53 /* '5' */) {
   let i = this.f_decimalPosition__org_gwtproject_i18n_client_NumberFormat_ + this.f_maximumFractionDigits__org_gwtproject_i18n_client_NumberFormat_ - 1;
   this.m_propagateCarry__java_lang_StringBuilder__int_$p_org_gwtproject_i18n_client_NumberFormat(digits, i);
  }
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_i18n_client_NumberFormat() {
  this.f_decimalSeparatorAlwaysShown__org_gwtproject_i18n_client_NumberFormat_ = false;
  this.f_groupingSize__org_gwtproject_i18n_client_NumberFormat_ = 3;
  this.f_isCurrencyFormat__org_gwtproject_i18n_client_NumberFormat_ = false;
  this.f_maximumFractionDigits__org_gwtproject_i18n_client_NumberFormat_ = 3;
  this.f_maximumIntegerDigits__org_gwtproject_i18n_client_NumberFormat_ = 40;
  this.f_minimumFractionDigits__org_gwtproject_i18n_client_NumberFormat_ = 0;
  this.f_minimumIntegerDigits__org_gwtproject_i18n_client_NumberFormat_ = 1;
  this.f_multiplier__org_gwtproject_i18n_client_NumberFormat_ = 1;
  this.f_negativePrefix__org_gwtproject_i18n_client_NumberFormat_ = "-";
  this.f_negativeSuffix__org_gwtproject_i18n_client_NumberFormat_ = "";
  this.f_positivePrefix__org_gwtproject_i18n_client_NumberFormat_ = "";
  this.f_positiveSuffix__org_gwtproject_i18n_client_NumberFormat_ = "";
  this.f_useExponentialNotation__org_gwtproject_i18n_client_NumberFormat_ = false;
 }
 /**
  * @return {NumberConstants}
  * @public
  */
 static get f_localizedNumberConstants__org_gwtproject_i18n_client_NumberFormat() {
  return (NumberFormat.$clinit(), NumberFormat.$f_localizedNumberConstants__org_gwtproject_i18n_client_NumberFormat);
 }
 /**
  * @return {NumberConstants}
  * @public
  */
 static get f_defaultNumberConstants__org_gwtproject_i18n_client_NumberFormat() {
  return (NumberFormat.$clinit(), NumberFormat.$f_defaultNumberConstants__org_gwtproject_i18n_client_NumberFormat);
 }
 /**
  * @param {NumberConstants} value
  * @public
  */
 static set f_defaultNumberConstants__org_gwtproject_i18n_client_NumberFormat(value) {
  (NumberFormat.$clinit(), NumberFormat.$f_defaultNumberConstants__org_gwtproject_i18n_client_NumberFormat = value);
 }
 /**
  * @public
  */
 static $clinit() {
  NumberFormat.$clinit = () =>{};
  NumberFormat.$loadModules();
  j_l_Object.$clinit();
  NumberFormat.$f_localizedNumberConstants__org_gwtproject_i18n_client_NumberFormat = LocaleInfo.m_getCurrentLocale__().m_getNumberConstants__();
  NumberFormat.$f_defaultNumberConstants__org_gwtproject_i18n_client_NumberFormat = NumberFormat.$f_localizedNumberConstants__org_gwtproject_i18n_client_NumberFormat;
  NumberFormat.f_latinNumberConstants__org_gwtproject_i18n_client_NumberFormat_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof NumberFormat;
 }
 /**
  * @public
  */
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  Long = goog.module.get('java.lang.Long$impl');
  NumberFormatException = goog.module.get('java.lang.NumberFormatException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  BigDecimal = goog.module.get('java.math.BigDecimal$impl');
  BigInteger = goog.module.get('java.math.BigInteger$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  CurrencyList = goog.module.get('org.gwtproject.i18n.client.CurrencyList$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  $1 = goog.module.get('org.gwtproject.i18n.client.NumberFormat.$1$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Numbers = goog.module.get('vmbootstrap.Numbers$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
 
}
$Util.$setClassMetadata(NumberFormat, 'org.gwtproject.i18n.client.NumberFormat');

/** @private {NumberConstants} */
NumberFormat.$f_localizedNumberConstants__org_gwtproject_i18n_client_NumberFormat;
/** @private {NumberConstants} */
NumberFormat.$f_defaultNumberConstants__org_gwtproject_i18n_client_NumberFormat;
/** @public {NumberFormat} */
NumberFormat.f_cachedCurrencyFormat__org_gwtproject_i18n_client_NumberFormat_;
/** @public {NumberFormat} */
NumberFormat.f_cachedDecimalFormat__org_gwtproject_i18n_client_NumberFormat_;
/** @public {NumberFormat} */
NumberFormat.f_cachedPercentFormat__org_gwtproject_i18n_client_NumberFormat_;
/** @public {NumberFormat} */
NumberFormat.f_cachedScientificFormat__org_gwtproject_i18n_client_NumberFormat_;
/** @public {number} @const */
NumberFormat.f_CURRENCY_SIGN__org_gwtproject_i18n_client_NumberFormat_ = 164 /* '\u00A4' */;
/** @public {NumberConstants} */
NumberFormat.f_latinNumberConstants__org_gwtproject_i18n_client_NumberFormat_;
/** @public {?string} @const */
NumberFormat.f_LOCALIZED_COMMA_EQUIVALENTS__org_gwtproject_i18n_client_NumberFormat_ = ",\u060C\u066B\u3001\uFE10\uFE11\uFE50\uFE51\uFF0C\uFF64";
/** @public {?string} @const */
NumberFormat.f_LOCALIZED_DOT_EQUIVALENTS__org_gwtproject_i18n_client_NumberFormat_ = ".\u2024\u3002\uFE12\uFE52\uFF0E\uFF61";
/** @public {number} @const */
NumberFormat.f_PATTERN_DECIMAL_SEPARATOR__org_gwtproject_i18n_client_NumberFormat_ = 46 /* '.' */;
/** @public {number} @const */
NumberFormat.f_PATTERN_DIGIT__org_gwtproject_i18n_client_NumberFormat_ = 35 /* '#' */;
/** @public {number} @const */
NumberFormat.f_PATTERN_EXPONENT__org_gwtproject_i18n_client_NumberFormat_ = 69 /* 'E' */;
/** @public {number} @const */
NumberFormat.f_PATTERN_GROUPING_SEPARATOR__org_gwtproject_i18n_client_NumberFormat_ = 44 /* ',' */;
/** @public {number} @const */
NumberFormat.f_PATTERN_MINUS__org_gwtproject_i18n_client_NumberFormat_ = 45 /* '-' */;
/** @public {number} @const */
NumberFormat.f_PATTERN_PER_MILLE__org_gwtproject_i18n_client_NumberFormat_ = 8240 /* '\u2030' */;
/** @public {number} @const */
NumberFormat.f_PATTERN_PERCENT__org_gwtproject_i18n_client_NumberFormat_ = 37 /* '%' */;
/** @public {number} @const */
NumberFormat.f_PATTERN_SEPARATOR__org_gwtproject_i18n_client_NumberFormat_ = 59 /* ';' */;
/** @public {number} @const */
NumberFormat.f_PATTERN_ZERO_DIGIT__org_gwtproject_i18n_client_NumberFormat_ = 48 /* '0' */;
/** @public {number} @const */
NumberFormat.f_QUOTE__org_gwtproject_i18n_client_NumberFormat_ = 39 /* '\'' */;

exports = NumberFormat; 
//# sourceMappingURL=NumberFormat.js.map