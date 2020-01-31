goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_sw_KE$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__sw = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_sw$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');

class DateTimeFormatInfoImpl__sw__KE extends DateTimeFormatInfoImpl__sw {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__sw__KE} */
 static $create__() {
  DateTimeFormatInfoImpl__sw__KE.$clinit();
  let $instance = new DateTimeFormatInfoImpl__sw__KE();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_sw_KE__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_sw_KE__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_sw__();
 }
 /** @override @return {?string} */
 m_dateTimeFull__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " 'saa' " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeLong__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " 'saa' " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeMedium__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeShort__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__sw__KE.$clinit = () =>{};
  DateTimeFormatInfoImpl__sw__KE.$loadModules();
  DateTimeFormatInfoImpl__sw.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__sw__KE;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__sw__KE, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_sw_KE');

exports = DateTimeFormatInfoImpl__sw__KE; 
//# sourceMappingURL=DateTimeFormatInfoImpl_sw_KE.js.map