goog.module('org.gwtproject.i18n.shared.DateTimeFormatInfo$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class DateTimeFormatInfo {
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_ampms__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dateFormat__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dateFormatFull__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dateFormatLong__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dateFormatMedium__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dateFormatShort__() {}
 /**
  * @abstract
  * @param {?string} timePattern
  * @param {?string} datePattern
  * @return {?string}
  * @public
  */
 m_dateTime__java_lang_String__java_lang_String(timePattern, datePattern) {}
 /**
  * @abstract
  * @param {?string} timePattern
  * @param {?string} datePattern
  * @return {?string}
  * @public
  */
 m_dateTimeFull__java_lang_String__java_lang_String(timePattern, datePattern) {}
 /**
  * @abstract
  * @param {?string} timePattern
  * @param {?string} datePattern
  * @return {?string}
  * @public
  */
 m_dateTimeLong__java_lang_String__java_lang_String(timePattern, datePattern) {}
 /**
  * @abstract
  * @param {?string} timePattern
  * @param {?string} datePattern
  * @return {?string}
  * @public
  */
 m_dateTimeMedium__java_lang_String__java_lang_String(timePattern, datePattern) {}
 /**
  * @abstract
  * @param {?string} timePattern
  * @param {?string} datePattern
  * @return {?string}
  * @public
  */
 m_dateTimeShort__java_lang_String__java_lang_String(timePattern, datePattern) {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_erasFull__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_erasShort__() {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_firstDayOfTheWeek__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_formatDay__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_formatHour12Minute__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_formatHour12MinuteSecond__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_formatHour24Minute__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_formatHour24MinuteSecond__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_formatMinuteSecond__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_formatMonthAbbrev__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_formatMonthAbbrevDay__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_formatMonthFull__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_formatMonthFullDay__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_formatMonthFullWeekdayDay__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_formatMonthNumDay__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_formatYear__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_formatYearMonthAbbrev__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_formatYearMonthAbbrevDay__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_formatYearMonthFull__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_formatYearMonthFullDay__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_formatYearMonthNum__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_formatYearMonthNumDay__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_formatYearMonthWeekdayDay__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_formatYearQuarterFull__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_formatYearQuarterShort__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_monthsFull__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_monthsFullStandalone__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_monthsNarrow__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_monthsNarrowStandalone__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_monthsShort__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_monthsShortStandalone__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_quartersFull__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_quartersShort__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_timeFormat__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_timeFormatFull__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_timeFormatLong__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_timeFormatMedium__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_timeFormatShort__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysFull__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysFullStandalone__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysNarrow__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysNarrowStandalone__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShort__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShortStandalone__() {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_weekendEnd__() {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_weekendStart__() {}
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfo.$clinit = () =>{};
  DateTimeFormatInfo.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_shared_DateTimeFormatInfo = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_shared_DateTimeFormatInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DateTimeFormatInfo, 'org.gwtproject.i18n.shared.DateTimeFormatInfo');

DateTimeFormatInfo.$markImplementor(/** @type {Function} */ (DateTimeFormatInfo));

exports = DateTimeFormatInfo; 
//# sourceMappingURL=DateTimeFormatInfo.js.map