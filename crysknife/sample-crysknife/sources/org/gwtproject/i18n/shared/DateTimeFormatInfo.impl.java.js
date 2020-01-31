goog.module('org.gwtproject.i18n.shared.DateTimeFormatInfo$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class DateTimeFormatInfo {
 /** @abstract @return {Array<?string>} */
 m_ampms__() {}
 /** @abstract @return {?string} */
 m_dateFormat__() {}
 /** @abstract @return {?string} */
 m_dateFormatFull__() {}
 /** @abstract @return {?string} */
 m_dateFormatLong__() {}
 /** @abstract @return {?string} */
 m_dateFormatMedium__() {}
 /** @abstract @return {?string} */
 m_dateFormatShort__() {}
 /** @abstract @return {?string} */
 m_dateTime__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {}
 /** @abstract @return {?string} */
 m_dateTimeFull__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {}
 /** @abstract @return {?string} */
 m_dateTimeLong__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {}
 /** @abstract @return {?string} */
 m_dateTimeMedium__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {}
 /** @abstract @return {?string} */
 m_dateTimeShort__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {}
 /** @abstract @return {Array<?string>} */
 m_erasFull__() {}
 /** @abstract @return {Array<?string>} */
 m_erasShort__() {}
 /** @abstract @return {number} */
 m_firstDayOfTheWeek__() {}
 /** @abstract @return {?string} */
 m_formatDay__() {}
 /** @abstract @return {?string} */
 m_formatHour12Minute__() {}
 /** @abstract @return {?string} */
 m_formatHour12MinuteSecond__() {}
 /** @abstract @return {?string} */
 m_formatHour24Minute__() {}
 /** @abstract @return {?string} */
 m_formatHour24MinuteSecond__() {}
 /** @abstract @return {?string} */
 m_formatMinuteSecond__() {}
 /** @abstract @return {?string} */
 m_formatMonthAbbrev__() {}
 /** @abstract @return {?string} */
 m_formatMonthAbbrevDay__() {}
 /** @abstract @return {?string} */
 m_formatMonthFull__() {}
 /** @abstract @return {?string} */
 m_formatMonthFullDay__() {}
 /** @abstract @return {?string} */
 m_formatMonthFullWeekdayDay__() {}
 /** @abstract @return {?string} */
 m_formatMonthNumDay__() {}
 /** @abstract @return {?string} */
 m_formatYear__() {}
 /** @abstract @return {?string} */
 m_formatYearMonthAbbrev__() {}
 /** @abstract @return {?string} */
 m_formatYearMonthAbbrevDay__() {}
 /** @abstract @return {?string} */
 m_formatYearMonthFull__() {}
 /** @abstract @return {?string} */
 m_formatYearMonthFullDay__() {}
 /** @abstract @return {?string} */
 m_formatYearMonthNum__() {}
 /** @abstract @return {?string} */
 m_formatYearMonthNumDay__() {}
 /** @abstract @return {?string} */
 m_formatYearMonthWeekdayDay__() {}
 /** @abstract @return {?string} */
 m_formatYearQuarterFull__() {}
 /** @abstract @return {?string} */
 m_formatYearQuarterShort__() {}
 /** @abstract @return {Array<?string>} */
 m_monthsFull__() {}
 /** @abstract @return {Array<?string>} */
 m_monthsFullStandalone__() {}
 /** @abstract @return {Array<?string>} */
 m_monthsNarrow__() {}
 /** @abstract @return {Array<?string>} */
 m_monthsNarrowStandalone__() {}
 /** @abstract @return {Array<?string>} */
 m_monthsShort__() {}
 /** @abstract @return {Array<?string>} */
 m_monthsShortStandalone__() {}
 /** @abstract @return {Array<?string>} */
 m_quartersFull__() {}
 /** @abstract @return {Array<?string>} */
 m_quartersShort__() {}
 /** @abstract @return {?string} */
 m_timeFormat__() {}
 /** @abstract @return {?string} */
 m_timeFormatFull__() {}
 /** @abstract @return {?string} */
 m_timeFormatLong__() {}
 /** @abstract @return {?string} */
 m_timeFormatMedium__() {}
 /** @abstract @return {?string} */
 m_timeFormatShort__() {}
 /** @abstract @return {Array<?string>} */
 m_weekdaysFull__() {}
 /** @abstract @return {Array<?string>} */
 m_weekdaysFullStandalone__() {}
 /** @abstract @return {Array<?string>} */
 m_weekdaysNarrow__() {}
 /** @abstract @return {Array<?string>} */
 m_weekdaysNarrowStandalone__() {}
 /** @abstract @return {Array<?string>} */
 m_weekdaysShort__() {}
 /** @abstract @return {Array<?string>} */
 m_weekdaysShortStandalone__() {}
 /** @abstract @return {number} */
 m_weekendEnd__() {}
 /** @abstract @return {number} */
 m_weekendStart__() {}
 
 static $clinit() {
  DateTimeFormatInfo.$clinit = () =>{};
  DateTimeFormatInfo.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_i18n_shared_DateTimeFormatInfo = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_shared_DateTimeFormatInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DateTimeFormatInfo, 'org.gwtproject.i18n.shared.DateTimeFormatInfo');

DateTimeFormatInfo.$markImplementor(/** @type {Function} */ (DateTimeFormatInfo));

exports = DateTimeFormatInfo; 
//# sourceMappingURL=DateTimeFormatInfo.js.map