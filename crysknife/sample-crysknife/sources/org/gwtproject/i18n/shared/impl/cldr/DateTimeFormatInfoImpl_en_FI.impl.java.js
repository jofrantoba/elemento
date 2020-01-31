goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_FI$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__150 = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_150$impl');

class DateTimeFormatInfoImpl__en__FI extends DateTimeFormatInfoImpl__en__150 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__en__FI} */
 static $create__() {
  DateTimeFormatInfoImpl__en__FI.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__FI();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_FI__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_FI__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_150__();
 }
 /** @override @return {?string} */
 m_formatHour12Minute__() {
  return "h.mm a";
 }
 /** @override @return {?string} */
 m_formatHour12MinuteSecond__() {
  return "h.mm.ss a";
 }
 /** @override @return {?string} */
 m_formatHour24Minute__() {
  return "H.mm";
 }
 /** @override @return {?string} */
 m_formatHour24MinuteSecond__() {
  return "H.mm.ss";
 }
 /** @override @return {?string} */
 m_formatMinuteSecond__() {
  return "mm.ss";
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "H.mm.ss zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "H.mm.ss z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "H.mm.ss";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "H.mm";
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__en__FI.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__FI.$loadModules();
  DateTimeFormatInfoImpl__en__150.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__FI;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__FI, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_FI');

exports = DateTimeFormatInfoImpl__en__FI; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_FI.js.map