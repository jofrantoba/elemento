goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_nl_SR$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__nl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_nl$impl');

class DateTimeFormatInfoImpl__nl__SR extends DateTimeFormatInfoImpl__nl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__nl__SR} */
 static $create__() {
  DateTimeFormatInfoImpl__nl__SR.$clinit();
  let $instance = new DateTimeFormatInfoImpl__nl__SR();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_nl_SR__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_nl_SR__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_nl__();
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__nl__SR.$clinit = () =>{};
  DateTimeFormatInfoImpl__nl__SR.$loadModules();
  DateTimeFormatInfoImpl__nl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__nl__SR;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__nl__SR, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_nl_SR');

exports = DateTimeFormatInfoImpl__nl__SR; 
//# sourceMappingURL=DateTimeFormatInfoImpl_nl_SR.js.map