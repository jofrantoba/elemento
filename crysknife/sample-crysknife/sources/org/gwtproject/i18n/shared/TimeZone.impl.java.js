goog.module('org.gwtproject.i18n.shared.TimeZone$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');

/**
 * @interface
 */
class TimeZone {
 /**
  * @abstract
  * @param {Date} date
  * @return {number}
  * @public
  */
 m_getDaylightAdjustment__java_util_Date(date) {}
 /**
  * @abstract
  * @param {Date} date
  * @return {?string}
  * @public
  */
 m_getGMTString__java_util_Date(date) {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getID__() {}
 /**
  * @abstract
  * @param {Date} date
  * @return {?string}
  * @public
  */
 m_getISOTimeZoneString__java_util_Date(date) {}
 /**
  * @abstract
  * @param {Date} date
  * @return {?string}
  * @public
  */
 m_getLongName__java_util_Date(date) {}
 /**
  * @abstract
  * @param {Date} date
  * @return {number}
  * @public
  */
 m_getOffset__java_util_Date(date) {}
 /**
  * @abstract
  * @param {Date} date
  * @return {?string}
  * @public
  */
 m_getRFCTimeZoneString__java_util_Date(date) {}
 /**
  * @abstract
  * @param {Date} date
  * @return {?string}
  * @public
  */
 m_getShortName__java_util_Date(date) {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getStandardOffset__() {}
 /**
  * @abstract
  * @param {Date} date
  * @return {boolean}
  * @public
  */
 m_isDaylightTime__java_util_Date(date) {}
 /**
  * @public
  */
 static $clinit() {
  TimeZone.$clinit = () =>{};
  TimeZone.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_shared_TimeZone = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_shared_TimeZone;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TimeZone, 'org.gwtproject.i18n.shared.TimeZone');

TimeZone.$markImplementor(/** @type {Function} */ (TimeZone));

exports = TimeZone; 
//# sourceMappingURL=TimeZone.js.map