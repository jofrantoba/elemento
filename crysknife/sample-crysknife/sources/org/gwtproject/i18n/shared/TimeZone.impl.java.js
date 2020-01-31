goog.module('org.gwtproject.i18n.shared.TimeZone$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');

/**
 * @interface
 */
class TimeZone {
 /** @abstract @return {number} */
 m_getDaylightAdjustment__java_util_Date(/** Date */ date) {}
 /** @abstract @return {?string} */
 m_getGMTString__java_util_Date(/** Date */ date) {}
 /** @abstract @return {?string} */
 m_getID__() {}
 /** @abstract @return {?string} */
 m_getISOTimeZoneString__java_util_Date(/** Date */ date) {}
 /** @abstract @return {?string} */
 m_getLongName__java_util_Date(/** Date */ date) {}
 /** @abstract @return {number} */
 m_getOffset__java_util_Date(/** Date */ date) {}
 /** @abstract @return {?string} */
 m_getRFCTimeZoneString__java_util_Date(/** Date */ date) {}
 /** @abstract @return {?string} */
 m_getShortName__java_util_Date(/** Date */ date) {}
 /** @abstract @return {number} */
 m_getStandardOffset__() {}
 /** @abstract @return {boolean} */
 m_isDaylightTime__java_util_Date(/** Date */ date) {}
 
 static $clinit() {
  TimeZone.$clinit = () =>{};
  TimeZone.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_i18n_shared_TimeZone = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_shared_TimeZone;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TimeZone, 'org.gwtproject.i18n.shared.TimeZone');

TimeZone.$markImplementor(/** @type {Function} */ (TimeZone));

exports = TimeZone; 
//# sourceMappingURL=TimeZone.js.map