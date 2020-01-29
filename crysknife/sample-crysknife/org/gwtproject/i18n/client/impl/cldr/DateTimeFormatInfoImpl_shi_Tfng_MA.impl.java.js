goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_shi_Tfng_MA$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__shi__Tfng = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_shi_Tfng$impl');

class DateTimeFormatInfoImpl__shi__Tfng__MA extends DateTimeFormatInfoImpl__shi__Tfng {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__shi__Tfng__MA}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__shi__Tfng__MA.$clinit();
  let $instance = new DateTimeFormatInfoImpl__shi__Tfng__MA();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_shi_Tfng_MA__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_shi_Tfng_MA__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_shi_Tfng__();
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_firstDayOfTheWeek__() {
  return 6;
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
  DateTimeFormatInfoImpl__shi__Tfng__MA.$clinit = () =>{};
  DateTimeFormatInfoImpl__shi__Tfng__MA.$loadModules();
  DateTimeFormatInfoImpl__shi__Tfng.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__shi__Tfng__MA;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__shi__Tfng__MA, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_shi_Tfng_MA');

exports = DateTimeFormatInfoImpl__shi__Tfng__MA; 
//# sourceMappingURL=DateTimeFormatInfoImpl_shi_Tfng_MA.js.map