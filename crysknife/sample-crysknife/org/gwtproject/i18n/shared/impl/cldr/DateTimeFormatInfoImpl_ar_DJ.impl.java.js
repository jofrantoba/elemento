goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ar_DJ$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ar__001 = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ar_001$impl');

class DateTimeFormatInfoImpl__ar__DJ extends DateTimeFormatInfoImpl__ar__001 {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__ar__DJ}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__ar__DJ.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ar__DJ();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ar_DJ__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ar_DJ__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ar_001__();
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
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__ar__DJ.$clinit = () =>{};
  DateTimeFormatInfoImpl__ar__DJ.$loadModules();
  DateTimeFormatInfoImpl__ar__001.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__ar__DJ;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ar__DJ, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ar_DJ');

exports = DateTimeFormatInfoImpl__ar__DJ; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ar_DJ.js.map