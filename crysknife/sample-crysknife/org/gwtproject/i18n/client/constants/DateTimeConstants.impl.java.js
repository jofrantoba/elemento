goog.module('org.gwtproject.i18n.client.constants.DateTimeConstants$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @deprecated
 */
class DateTimeConstants {
 /** @abstract @return {Array<?string>} */
 m_ampms__() {}
 /** @abstract @return {Array<?string>} */
 m_dateFormats__() {}
 /** @abstract @return {Array<?string>} */
 m_eraNames__() {}
 /** @abstract @return {Array<?string>} */
 m_eras__() {}
 /** @abstract @return {?string} */
 m_firstDayOfTheWeek__() {}
 /** @abstract @return {Array<?string>} */
 m_months__() {}
 /** @abstract @return {Array<?string>} */
 m_narrowMonths__() {}
 /** @abstract @return {Array<?string>} */
 m_narrowWeekdays__() {}
 /** @abstract @return {Array<?string>} */
 m_quarters__() {}
 /** @abstract @return {Array<?string>} */
 m_shortMonths__() {}
 /** @abstract @return {Array<?string>} */
 m_shortQuarters__() {}
 /** @abstract @return {Array<?string>} */
 m_shortWeekdays__() {}
 /** @abstract @return {Array<?string>} */
 m_standaloneMonths__() {}
 /** @abstract @return {Array<?string>} */
 m_standaloneNarrowMonths__() {}
 /** @abstract @return {Array<?string>} */
 m_standaloneNarrowWeekdays__() {}
 /** @abstract @return {Array<?string>} */
 m_standaloneShortMonths__() {}
 /** @abstract @return {Array<?string>} */
 m_standaloneShortWeekdays__() {}
 /** @abstract @return {Array<?string>} */
 m_standaloneWeekdays__() {}
 /** @abstract @return {Array<?string>} */
 m_timeFormats__() {}
 /** @abstract @return {Array<?string>} */
 m_weekdays__() {}
 /** @abstract @return {Array<?string>} */
 m_weekendRange__() {}
 
 static $clinit() {
  DateTimeConstants.$clinit = () =>{};
  DateTimeConstants.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_i18n_client_constants_DateTimeConstants = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_constants_DateTimeConstants;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DateTimeConstants, 'org.gwtproject.i18n.client.constants.DateTimeConstants');

DateTimeConstants.$markImplementor(/** @type {Function} */ (DateTimeConstants));

exports = DateTimeConstants; 
//# sourceMappingURL=DateTimeConstants.js.map