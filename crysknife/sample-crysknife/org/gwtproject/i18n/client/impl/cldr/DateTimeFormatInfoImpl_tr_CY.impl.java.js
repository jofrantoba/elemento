goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_tr_CY$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__tr = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_tr$impl');

class DateTimeFormatInfoImpl__tr__CY extends DateTimeFormatInfoImpl__tr {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__tr__CY}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__tr__CY.$clinit();
  let $instance = new DateTimeFormatInfoImpl__tr__CY();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_tr_CY__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_tr_CY__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_tr__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatHour12Minute__() {
  return "h:mm a";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatHour12MinuteSecond__() {
  return "h:mm:ss a";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatFull__() {
  return "h:mm:ss a zzzz";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatLong__() {
  return "h:mm:ss a z";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatMedium__() {
  return "h:mm:ss a";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatShort__() {
  return "h:mm a";
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__tr__CY.$clinit = () =>{};
  DateTimeFormatInfoImpl__tr__CY.$loadModules();
  DateTimeFormatInfoImpl__tr.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__tr__CY;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__tr__CY, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_tr_CY');

exports = DateTimeFormatInfoImpl__tr__CY; 
//# sourceMappingURL=DateTimeFormatInfoImpl_tr_CY.js.map