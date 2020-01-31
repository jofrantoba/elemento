goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_TK$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__001 = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_001$impl');

class DateTimeFormatInfoImpl__en__TK extends DateTimeFormatInfoImpl__en__001 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__en__TK} */
 static $create__() {
  DateTimeFormatInfoImpl__en__TK.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__TK();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_TK__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_TK__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_001__();
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "HH:mm:ss zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "HH:mm:ss z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "HH:mm:ss";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "HH:mm";
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__en__TK.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__TK.$loadModules();
  DateTimeFormatInfoImpl__en__001.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__TK;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__TK, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_TK');

exports = DateTimeFormatInfoImpl__en__TK; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_TK.js.map