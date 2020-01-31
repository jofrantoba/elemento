goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_nl_BE$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__nl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_nl$impl');

class DateTimeFormatInfoImpl__nl__BE extends DateTimeFormatInfoImpl__nl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__nl__BE} */
 static $create__() {
  DateTimeFormatInfoImpl__nl__BE.$clinit();
  let $instance = new DateTimeFormatInfoImpl__nl__BE();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_nl_BE__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_nl_BE__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_nl__();
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d/MM/y";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "d/M";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "M/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "d/M/y";
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__nl__BE.$clinit = () =>{};
  DateTimeFormatInfoImpl__nl__BE.$loadModules();
  DateTimeFormatInfoImpl__nl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__nl__BE;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__nl__BE, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_nl_BE');

exports = DateTimeFormatInfoImpl__nl__BE; 
//# sourceMappingURL=DateTimeFormatInfoImpl_nl_BE.js.map