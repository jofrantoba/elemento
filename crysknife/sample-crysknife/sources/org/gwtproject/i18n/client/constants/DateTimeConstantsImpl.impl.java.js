goog.module('org.gwtproject.i18n.client.constants.DateTimeConstantsImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Constants = goog.require('org.gwtproject.i18n.client.Constants$impl');
const DateTimeConstants = goog.require('org.gwtproject.i18n.client.constants.DateTimeConstants$impl');

/**
 * @interface
 * @extends {Constants}
 * @extends {DateTimeConstants}
 */
class DateTimeConstantsImpl {
 /** @abstract @override @return {Array<?string>} */
 m_ampms__() {}
 /** @abstract @override @return {Array<?string>} */
 m_dateFormats__() {}
 /** @abstract @override @return {Array<?string>} */
 m_eraNames__() {}
 /** @abstract @override @return {Array<?string>} */
 m_eras__() {}
 /** @abstract @override @return {?string} */
 m_firstDayOfTheWeek__() {}
 /** @abstract @override @return {Array<?string>} */
 m_months__() {}
 /** @abstract @override @return {Array<?string>} */
 m_narrowMonths__() {}
 /** @abstract @override @return {Array<?string>} */
 m_narrowWeekdays__() {}
 /** @abstract @override @return {Array<?string>} */
 m_quarters__() {}
 /** @abstract @override @return {Array<?string>} */
 m_shortMonths__() {}
 /** @abstract @override @return {Array<?string>} */
 m_shortQuarters__() {}
 /** @abstract @override @return {Array<?string>} */
 m_shortWeekdays__() {}
 /** @abstract @override @return {Array<?string>} */
 m_standaloneMonths__() {}
 /** @abstract @override @return {Array<?string>} */
 m_standaloneNarrowMonths__() {}
 /** @abstract @override @return {Array<?string>} */
 m_standaloneNarrowWeekdays__() {}
 /** @abstract @override @return {Array<?string>} */
 m_standaloneShortMonths__() {}
 /** @abstract @override @return {Array<?string>} */
 m_standaloneShortWeekdays__() {}
 /** @abstract @override @return {Array<?string>} */
 m_standaloneWeekdays__() {}
 /** @abstract @override @return {Array<?string>} */
 m_timeFormats__() {}
 /** @abstract @override @return {Array<?string>} */
 m_weekdays__() {}
 /** @abstract @override @return {Array<?string>} */
 m_weekendRange__() {}
 
 static $clinit() {
  DateTimeConstantsImpl.$clinit = () =>{};
  DateTimeConstantsImpl.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Constants.$markImplementor(ctor);
  DateTimeConstants.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_constants_DateTimeConstantsImpl = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_constants_DateTimeConstantsImpl;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DateTimeConstantsImpl, 'org.gwtproject.i18n.client.constants.DateTimeConstantsImpl');

DateTimeConstantsImpl.$markImplementor(/** @type {Function} */ (DateTimeConstantsImpl));

exports = DateTimeConstantsImpl; 
//# sourceMappingURL=DateTimeConstantsImpl.js.map