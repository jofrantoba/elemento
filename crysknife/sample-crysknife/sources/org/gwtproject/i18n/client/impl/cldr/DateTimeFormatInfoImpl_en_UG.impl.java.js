goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_UG$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__001 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_001$impl');

class DateTimeFormatInfoImpl__en__UG extends DateTimeFormatInfoImpl__en__001 {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__en__UG}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__en__UG.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__UG();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_UG__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_UG__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_001__();
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
  DateTimeFormatInfoImpl__en__UG.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__UG.$loadModules();
  DateTimeFormatInfoImpl__en__001.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__UG;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__UG, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_UG');

exports = DateTimeFormatInfoImpl__en__UG; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_UG.js.map