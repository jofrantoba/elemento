goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ta_LK$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ta = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ta$impl');

class DateTimeFormatInfoImpl__ta__LK extends DateTimeFormatInfoImpl__ta {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__ta__LK}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__ta__LK.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ta__LK();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ta_LK__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ta_LK__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ta__();
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_firstDayOfTheWeek__() {
  return 1;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatFull__() {
  return "HH:mm:ss zzzz";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatLong__() {
  return "HH:mm:ss z";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatMedium__() {
  return "HH:mm:ss";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatShort__() {
  return "HH:mm";
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_weekendStart__() {
  return 6;
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__ta__LK.$clinit = () =>{};
  DateTimeFormatInfoImpl__ta__LK.$loadModules();
  DateTimeFormatInfoImpl__ta.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__ta__LK;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ta__LK, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ta_LK');

exports = DateTimeFormatInfoImpl__ta__LK; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ta_LK.js.map