goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ne_IN$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ne = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ne$impl');

class DateTimeFormatInfoImpl__ne__IN extends DateTimeFormatInfoImpl__ne {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ne__IN} */
 static $create__() {
  DateTimeFormatInfoImpl__ne__IN.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ne__IN();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ne_IN__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ne_IN__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ne__();
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "h:mm:ss a zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "h:mm:ss a z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "h:mm:ss a";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "h:mm a";
 }
 /** @override @return {number} */
 m_weekendStart__() {
  return 0;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ne__IN.$clinit = () =>{};
  DateTimeFormatInfoImpl__ne__IN.$loadModules();
  DateTimeFormatInfoImpl__ne.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ne__IN;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ne__IN, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ne_IN');

exports = DateTimeFormatInfoImpl__ne__IN; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ne_IN.js.map