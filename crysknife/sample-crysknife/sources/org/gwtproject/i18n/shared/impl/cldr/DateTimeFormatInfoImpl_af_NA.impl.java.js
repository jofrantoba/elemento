goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_af_NA$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__af = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_af$impl');

class DateTimeFormatInfoImpl__af__NA extends DateTimeFormatInfoImpl__af {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__af__NA}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__af__NA.$clinit();
  let $instance = new DateTimeFormatInfoImpl__af__NA();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_af_NA__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_af_NA__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_af__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatFull__() {
  return "EEEE d MMMM y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatLong__() {
  return "d MMMM y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatMedium__() {
  return "d MMM y";
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
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__af__NA.$clinit = () =>{};
  DateTimeFormatInfoImpl__af__NA.$loadModules();
  DateTimeFormatInfoImpl__af.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__af__NA;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__af__NA, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_af_NA');

exports = DateTimeFormatInfoImpl__af__NA; 
//# sourceMappingURL=DateTimeFormatInfoImpl_af_NA.js.map