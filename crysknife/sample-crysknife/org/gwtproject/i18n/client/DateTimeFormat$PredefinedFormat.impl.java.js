goog.module('org.gwtproject.i18n.client.DateTimeFormat.PredefinedFormat$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<PredefinedFormat>}
  */
class PredefinedFormat extends Enum {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!PredefinedFormat}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  let $instance = new PredefinedFormat();
  $instance.$ctor__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat__java_lang_String__int($name, $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /**
  * @param {string} name
  * @return {!PredefinedFormat}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  PredefinedFormat.$clinit();
  if ($Equality.$same(PredefinedFormat.f_namesToValuesMap__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat_, null)) {
   PredefinedFormat.f_namesToValuesMap__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat_ = $Enums.createMapFromValues(PredefinedFormat.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, PredefinedFormat.f_namesToValuesMap__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat_);
 }
 /**
  * @return {!Array<!PredefinedFormat>}
  * @public
  */
 static m_values__() {
  PredefinedFormat.$clinit();
  return /**@type {!Array<PredefinedFormat>} */ ($Arrays.$init([PredefinedFormat.$f_ISO_8601__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_RFC_2822__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_DATE_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_DATE_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_DATE_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_DATE_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_TIME_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_TIME_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_TIME_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_TIME_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_DATE_TIME_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_DATE_TIME_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_DATE_TIME_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_DATE_TIME_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_HOUR_MINUTE__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_HOUR_MINUTE_SECOND__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_HOUR24_MINUTE__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_HOUR24_MINUTE_SECOND__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_MINUTE_SECOND__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_MONTH__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_MONTH_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_MONTH_ABBR_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_MONTH_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_MONTH_NUM_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_MONTH_WEEKDAY_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_YEAR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_YEAR_MONTH__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_YEAR_MONTH_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_YEAR_MONTH_ABBR_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_YEAR_MONTH_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_YEAR_MONTH_NUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_YEAR_MONTH_NUM_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_YEAR_MONTH_WEEKDAY_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_YEAR_QUARTER__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat, PredefinedFormat.$f_YEAR_QUARTER_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat], PredefinedFormat));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {PredefinedFormat} */ ($Casts.$to(arg0, PredefinedFormat)));
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_ISO_8601__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_ISO_8601__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_RFC_2822__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_RFC_2822__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_DATE_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_DATE_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_DATE_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_DATE_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_DATE_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_DATE_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_DATE_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_DATE_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_TIME_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_TIME_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_TIME_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_TIME_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_TIME_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_TIME_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_TIME_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_TIME_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_DATE_TIME_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_DATE_TIME_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_DATE_TIME_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_DATE_TIME_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_DATE_TIME_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_DATE_TIME_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_DATE_TIME_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_DATE_TIME_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_HOUR_MINUTE__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_HOUR_MINUTE__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_HOUR_MINUTE_SECOND__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_HOUR_MINUTE_SECOND__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_HOUR24_MINUTE__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_HOUR24_MINUTE__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_HOUR24_MINUTE_SECOND__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_HOUR24_MINUTE_SECOND__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_MINUTE_SECOND__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_MINUTE_SECOND__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_MONTH__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_MONTH__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_MONTH_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_MONTH_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_MONTH_ABBR_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_MONTH_ABBR_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_MONTH_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_MONTH_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_MONTH_NUM_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_MONTH_NUM_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_MONTH_WEEKDAY_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_MONTH_WEEKDAY_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_YEAR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_YEAR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_YEAR_MONTH__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_YEAR_MONTH__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_YEAR_MONTH_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_YEAR_MONTH_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_YEAR_MONTH_ABBR_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_YEAR_MONTH_ABBR_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_YEAR_MONTH_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_YEAR_MONTH_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_YEAR_MONTH_NUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_YEAR_MONTH_NUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_YEAR_MONTH_NUM_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_YEAR_MONTH_NUM_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_YEAR_MONTH_WEEKDAY_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_YEAR_MONTH_WEEKDAY_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_YEAR_QUARTER__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_YEAR_QUARTER__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {!PredefinedFormat}
  * @public
  */
 static get f_YEAR_QUARTER_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat() {
  return (PredefinedFormat.$clinit(), PredefinedFormat.$f_YEAR_QUARTER_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @public
  */
 static $clinit() {
  PredefinedFormat.$clinit = () =>{};
  PredefinedFormat.$loadModules();
  Enum.$clinit();
  PredefinedFormat.$f_ISO_8601__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("ISO_8601"), PredefinedFormat.$ordinal$f_ISO_8601__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_RFC_2822__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("RFC_2822"), PredefinedFormat.$ordinal$f_RFC_2822__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_DATE_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("DATE_FULL"), PredefinedFormat.$ordinal$f_DATE_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_DATE_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("DATE_LONG"), PredefinedFormat.$ordinal$f_DATE_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_DATE_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("DATE_MEDIUM"), PredefinedFormat.$ordinal$f_DATE_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_DATE_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("DATE_SHORT"), PredefinedFormat.$ordinal$f_DATE_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_TIME_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("TIME_FULL"), PredefinedFormat.$ordinal$f_TIME_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_TIME_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("TIME_LONG"), PredefinedFormat.$ordinal$f_TIME_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_TIME_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("TIME_MEDIUM"), PredefinedFormat.$ordinal$f_TIME_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_TIME_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("TIME_SHORT"), PredefinedFormat.$ordinal$f_TIME_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_DATE_TIME_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("DATE_TIME_FULL"), PredefinedFormat.$ordinal$f_DATE_TIME_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_DATE_TIME_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("DATE_TIME_LONG"), PredefinedFormat.$ordinal$f_DATE_TIME_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_DATE_TIME_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("DATE_TIME_MEDIUM"), PredefinedFormat.$ordinal$f_DATE_TIME_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_DATE_TIME_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("DATE_TIME_SHORT"), PredefinedFormat.$ordinal$f_DATE_TIME_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("DAY"), PredefinedFormat.$ordinal$f_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_HOUR_MINUTE__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("HOUR_MINUTE"), PredefinedFormat.$ordinal$f_HOUR_MINUTE__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_HOUR_MINUTE_SECOND__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("HOUR_MINUTE_SECOND"), PredefinedFormat.$ordinal$f_HOUR_MINUTE_SECOND__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_HOUR24_MINUTE__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("HOUR24_MINUTE"), PredefinedFormat.$ordinal$f_HOUR24_MINUTE__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_HOUR24_MINUTE_SECOND__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("HOUR24_MINUTE_SECOND"), PredefinedFormat.$ordinal$f_HOUR24_MINUTE_SECOND__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_MINUTE_SECOND__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("MINUTE_SECOND"), PredefinedFormat.$ordinal$f_MINUTE_SECOND__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_MONTH__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("MONTH"), PredefinedFormat.$ordinal$f_MONTH__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_MONTH_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("MONTH_ABBR"), PredefinedFormat.$ordinal$f_MONTH_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_MONTH_ABBR_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("MONTH_ABBR_DAY"), PredefinedFormat.$ordinal$f_MONTH_ABBR_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_MONTH_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("MONTH_DAY"), PredefinedFormat.$ordinal$f_MONTH_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_MONTH_NUM_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("MONTH_NUM_DAY"), PredefinedFormat.$ordinal$f_MONTH_NUM_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_MONTH_WEEKDAY_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("MONTH_WEEKDAY_DAY"), PredefinedFormat.$ordinal$f_MONTH_WEEKDAY_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_YEAR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("YEAR"), PredefinedFormat.$ordinal$f_YEAR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_YEAR_MONTH__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("YEAR_MONTH"), PredefinedFormat.$ordinal$f_YEAR_MONTH__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_YEAR_MONTH_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("YEAR_MONTH_ABBR"), PredefinedFormat.$ordinal$f_YEAR_MONTH_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_YEAR_MONTH_ABBR_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("YEAR_MONTH_ABBR_DAY"), PredefinedFormat.$ordinal$f_YEAR_MONTH_ABBR_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_YEAR_MONTH_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("YEAR_MONTH_DAY"), PredefinedFormat.$ordinal$f_YEAR_MONTH_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_YEAR_MONTH_NUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("YEAR_MONTH_NUM"), PredefinedFormat.$ordinal$f_YEAR_MONTH_NUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_YEAR_MONTH_NUM_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("YEAR_MONTH_NUM_DAY"), PredefinedFormat.$ordinal$f_YEAR_MONTH_NUM_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_YEAR_MONTH_WEEKDAY_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("YEAR_MONTH_WEEKDAY_DAY"), PredefinedFormat.$ordinal$f_YEAR_MONTH_WEEKDAY_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_YEAR_QUARTER__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("YEAR_QUARTER"), PredefinedFormat.$ordinal$f_YEAR_QUARTER__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.$f_YEAR_QUARTER_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = PredefinedFormat.$create__java_lang_String__int($Util.$makeEnumName("YEAR_QUARTER_ABBR"), PredefinedFormat.$ordinal$f_YEAR_QUARTER_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
  PredefinedFormat.f_namesToValuesMap__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof PredefinedFormat;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(PredefinedFormat, 'org.gwtproject.i18n.client.DateTimeFormat$PredefinedFormat');

/** @private {!PredefinedFormat} */
PredefinedFormat.$f_ISO_8601__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_RFC_2822__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_DATE_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_DATE_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_DATE_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_DATE_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_TIME_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_TIME_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_TIME_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_TIME_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_DATE_TIME_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_DATE_TIME_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_DATE_TIME_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_DATE_TIME_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_HOUR_MINUTE__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_HOUR_MINUTE_SECOND__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_HOUR24_MINUTE__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_HOUR24_MINUTE_SECOND__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_MINUTE_SECOND__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_MONTH__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_MONTH_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_MONTH_ABBR_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_MONTH_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_MONTH_NUM_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_MONTH_WEEKDAY_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_YEAR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_YEAR_MONTH__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_YEAR_MONTH_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_YEAR_MONTH_ABBR_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_YEAR_MONTH_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_YEAR_MONTH_NUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_YEAR_MONTH_NUM_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_YEAR_MONTH_WEEKDAY_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_YEAR_QUARTER__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @private {!PredefinedFormat} */
PredefinedFormat.$f_YEAR_QUARTER_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat;
/** @public {Map<?string, !PredefinedFormat>} */
PredefinedFormat.f_namesToValuesMap__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat_;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_ISO_8601__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 0;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_RFC_2822__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 1;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_DATE_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 2;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_DATE_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 3;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_DATE_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 4;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_DATE_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 5;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_TIME_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 6;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_TIME_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 7;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_TIME_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 8;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_TIME_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 9;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_DATE_TIME_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 10;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_DATE_TIME_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 11;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_DATE_TIME_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 12;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_DATE_TIME_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 13;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 14;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_HOUR_MINUTE__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 15;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_HOUR_MINUTE_SECOND__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 16;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_HOUR24_MINUTE__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 17;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_HOUR24_MINUTE_SECOND__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 18;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_MINUTE_SECOND__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 19;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_MONTH__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 20;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_MONTH_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 21;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_MONTH_ABBR_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 22;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_MONTH_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 23;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_MONTH_NUM_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 24;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_MONTH_WEEKDAY_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 25;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_YEAR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 26;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_YEAR_MONTH__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 27;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_YEAR_MONTH_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 28;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_YEAR_MONTH_ABBR_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 29;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_YEAR_MONTH_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 30;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_YEAR_MONTH_NUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 31;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_YEAR_MONTH_NUM_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 32;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_YEAR_MONTH_WEEKDAY_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 33;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_YEAR_QUARTER__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 34;
/** @public {number} @const */
PredefinedFormat.$ordinal$f_YEAR_QUARTER_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat = 35;

exports = PredefinedFormat; 
//# sourceMappingURL=DateTimeFormat$PredefinedFormat.js.map