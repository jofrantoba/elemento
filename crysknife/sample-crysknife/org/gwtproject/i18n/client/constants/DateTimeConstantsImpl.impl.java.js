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
 /**
  * @abstract
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_ampms__() {}
 /**
  * @abstract
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_dateFormats__() {}
 /**
  * @abstract
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_eraNames__() {}
 /**
  * @abstract
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_eras__() {}
 /**
  * @abstract
  * @override
  * @return {?string}
  * @public
  */
 m_firstDayOfTheWeek__() {}
 /**
  * @abstract
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_months__() {}
 /**
  * @abstract
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_narrowMonths__() {}
 /**
  * @abstract
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_narrowWeekdays__() {}
 /**
  * @abstract
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quarters__() {}
 /**
  * @abstract
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_shortMonths__() {}
 /**
  * @abstract
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_shortQuarters__() {}
 /**
  * @abstract
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_shortWeekdays__() {}
 /**
  * @abstract
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_standaloneMonths__() {}
 /**
  * @abstract
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_standaloneNarrowMonths__() {}
 /**
  * @abstract
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_standaloneNarrowWeekdays__() {}
 /**
  * @abstract
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_standaloneShortMonths__() {}
 /**
  * @abstract
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_standaloneShortWeekdays__() {}
 /**
  * @abstract
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_standaloneWeekdays__() {}
 /**
  * @abstract
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_timeFormats__() {}
 /**
  * @abstract
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdays__() {}
 /**
  * @abstract
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekendRange__() {}
 /**
  * @public
  */
 static $clinit() {
  DateTimeConstantsImpl.$clinit = () =>{};
  DateTimeConstantsImpl.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Constants.$markImplementor(classConstructor);
  DateTimeConstants.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_constants_DateTimeConstantsImpl = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_constants_DateTimeConstantsImpl;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DateTimeConstantsImpl, 'org.gwtproject.i18n.client.constants.DateTimeConstantsImpl');

DateTimeConstantsImpl.$markImplementor(/** @type {Function} */ (DateTimeConstantsImpl));

exports = DateTimeConstantsImpl; 
//# sourceMappingURL=DateTimeConstantsImpl.js.map