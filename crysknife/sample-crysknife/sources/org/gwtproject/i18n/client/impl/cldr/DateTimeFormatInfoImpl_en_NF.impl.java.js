goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_NF$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__001 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_001$impl');

class DateTimeFormatInfoImpl__en__NF extends DateTimeFormatInfoImpl__en__001 {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__en__NF}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__en__NF.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__NF();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_NF__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_NF__() {
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
  DateTimeFormatInfoImpl__en__NF.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__NF.$loadModules();
  DateTimeFormatInfoImpl__en__001.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__NF;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__NF, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_NF');

exports = DateTimeFormatInfoImpl__en__NF; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_NF.js.map