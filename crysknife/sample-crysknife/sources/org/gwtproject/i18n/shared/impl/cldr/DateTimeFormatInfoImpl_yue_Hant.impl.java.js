goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_yue_Hant$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__yue = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_yue$impl');

class DateTimeFormatInfoImpl__yue__Hant extends DateTimeFormatInfoImpl__yue {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__yue__Hant}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__yue__Hant.$clinit();
  let $instance = new DateTimeFormatInfoImpl__yue__Hant();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_yue_Hant__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_yue_Hant__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_yue__();
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
  DateTimeFormatInfoImpl__yue__Hant.$clinit = () =>{};
  DateTimeFormatInfoImpl__yue__Hant.$loadModules();
  DateTimeFormatInfoImpl__yue.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__yue__Hant;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__yue__Hant, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_yue_Hant');

exports = DateTimeFormatInfoImpl__yue__Hant; 
//# sourceMappingURL=DateTimeFormatInfoImpl_yue_Hant.js.map