goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_so_DJ$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__so = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_so$impl');

class DateTimeFormatInfoImpl__so__DJ extends DateTimeFormatInfoImpl__so {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__so__DJ} */
 static $create__() {
  DateTimeFormatInfoImpl__so__DJ.$clinit();
  let $instance = new DateTimeFormatInfoImpl__so__DJ();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_so_DJ__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_so_DJ__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_so__();
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 6;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__so__DJ.$clinit = () =>{};
  DateTimeFormatInfoImpl__so__DJ.$loadModules();
  DateTimeFormatInfoImpl__so.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__so__DJ;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__so__DJ, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_so_DJ');

exports = DateTimeFormatInfoImpl__so__DJ; 
//# sourceMappingURL=DateTimeFormatInfoImpl_so_DJ.js.map