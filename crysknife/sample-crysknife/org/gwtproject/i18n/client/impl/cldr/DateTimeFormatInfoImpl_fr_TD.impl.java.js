goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_fr_TD$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__fr = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_fr$impl');

class DateTimeFormatInfoImpl__fr__TD extends DateTimeFormatInfoImpl__fr {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__fr__TD}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__fr__TD.$clinit();
  let $instance = new DateTimeFormatInfoImpl__fr__TD();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_fr_TD__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_fr_TD__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_fr__();
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
  DateTimeFormatInfoImpl__fr__TD.$clinit = () =>{};
  DateTimeFormatInfoImpl__fr__TD.$loadModules();
  DateTimeFormatInfoImpl__fr.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__fr__TD;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__fr__TD, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_fr_TD');

exports = DateTimeFormatInfoImpl__fr__TD; 
//# sourceMappingURL=DateTimeFormatInfoImpl_fr_TD.js.map