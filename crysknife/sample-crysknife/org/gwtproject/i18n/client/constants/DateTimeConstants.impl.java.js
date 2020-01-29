goog.module('org.gwtproject.i18n.client.constants.DateTimeConstants$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @deprecated
 */
class DateTimeConstants {
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_ampms__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_dateFormats__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_eraNames__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_eras__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_firstDayOfTheWeek__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_months__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_narrowMonths__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_narrowWeekdays__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_quarters__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_shortMonths__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_shortQuarters__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_shortWeekdays__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_standaloneMonths__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_standaloneNarrowMonths__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_standaloneNarrowWeekdays__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_standaloneShortMonths__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_standaloneShortWeekdays__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_standaloneWeekdays__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_timeFormats__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_weekdays__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_weekendRange__() {}
 /**
  * @public
  */
 static $clinit() {
  DateTimeConstants.$clinit = () =>{};
  DateTimeConstants.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_constants_DateTimeConstants = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_constants_DateTimeConstants;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DateTimeConstants, 'org.gwtproject.i18n.client.constants.DateTimeConstants');

DateTimeConstants.$markImplementor(/** @type {Function} */ (DateTimeConstants));

exports = DateTimeConstants; 
//# sourceMappingURL=DateTimeConstants.js.map