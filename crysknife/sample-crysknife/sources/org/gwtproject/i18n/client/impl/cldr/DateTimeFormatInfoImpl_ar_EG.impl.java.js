goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ar_EG$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ar__001 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ar_001$impl');

class DateTimeFormatInfoImpl__ar__EG extends DateTimeFormatInfoImpl__ar__001 {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__ar__EG}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__ar__EG.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ar__EG();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ar_EG__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ar_EG__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ar_001__();
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
  DateTimeFormatInfoImpl__ar__EG.$clinit = () =>{};
  DateTimeFormatInfoImpl__ar__EG.$loadModules();
  DateTimeFormatInfoImpl__ar__001.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__ar__EG;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ar__EG, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ar_EG');

exports = DateTimeFormatInfoImpl__ar__EG; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ar_EG.js.map