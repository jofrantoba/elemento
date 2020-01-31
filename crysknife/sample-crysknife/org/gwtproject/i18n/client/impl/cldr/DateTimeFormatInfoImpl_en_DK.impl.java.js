goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_DK$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__150 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_150$impl');

class DateTimeFormatInfoImpl__en__DK extends DateTimeFormatInfoImpl__en__150 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__en__DK} */
 static $create__() {
  DateTimeFormatInfoImpl__en__DK.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__DK();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_DK__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_DK__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_150__();
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
  return "HH.mm";
 }
 /** @override @return {?string} */
 m_formatHour24MinuteSecond__() {
  return "HH.mm.ss";
 }
 /** @override @return {?string} */
 m_formatMinuteSecond__() {
  return "mm.ss";
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "HH.mm.ss zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "HH.mm.ss z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "HH.mm.ss";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "HH.mm";
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__en__DK.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__DK.$loadModules();
  DateTimeFormatInfoImpl__en__150.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__DK;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__DK, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_DK');

exports = DateTimeFormatInfoImpl__en__DK; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_DK.js.map