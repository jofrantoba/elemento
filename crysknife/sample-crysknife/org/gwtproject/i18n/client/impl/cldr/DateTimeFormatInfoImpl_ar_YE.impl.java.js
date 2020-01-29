goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ar_YE$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ar__001 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ar_001$impl');

class DateTimeFormatInfoImpl__ar__YE extends DateTimeFormatInfoImpl__ar__001 {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__ar__YE}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__ar__YE.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ar__YE();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ar_YE__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ar_YE__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ar_001__();
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_weekendEnd__() {
  return 6;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_weekendStart__() {
  return 5;
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__ar__YE.$clinit = () =>{};
  DateTimeFormatInfoImpl__ar__YE.$loadModules();
  DateTimeFormatInfoImpl__ar__001.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__ar__YE;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ar__YE, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ar_YE');

exports = DateTimeFormatInfoImpl__ar__YE; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ar_YE.js.map