goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ee_TG$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ee = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ee$impl');

class DateTimeFormatInfoImpl__ee__TG extends DateTimeFormatInfoImpl__ee {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__ee__TG}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__ee__TG.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ee__TG();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ee_TG__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ee_TG__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ee__();
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
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__ee__TG.$clinit = () =>{};
  DateTimeFormatInfoImpl__ee__TG.$loadModules();
  DateTimeFormatInfoImpl__ee.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__ee__TG;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ee__TG, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ee_TG');

exports = DateTimeFormatInfoImpl__ee__TG; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ee_TG.js.map