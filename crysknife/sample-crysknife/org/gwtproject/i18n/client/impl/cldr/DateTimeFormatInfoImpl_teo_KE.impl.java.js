goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_teo_KE$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__teo = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_teo$impl');

class DateTimeFormatInfoImpl__teo__KE extends DateTimeFormatInfoImpl__teo {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__teo__KE}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__teo__KE.$clinit();
  let $instance = new DateTimeFormatInfoImpl__teo__KE();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_teo_KE__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_teo_KE__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_teo__();
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
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__teo__KE.$clinit = () =>{};
  DateTimeFormatInfoImpl__teo__KE.$loadModules();
  DateTimeFormatInfoImpl__teo.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__teo__KE;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__teo__KE, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_teo_KE');

exports = DateTimeFormatInfoImpl__teo__KE; 
//# sourceMappingURL=DateTimeFormatInfoImpl_teo_KE.js.map