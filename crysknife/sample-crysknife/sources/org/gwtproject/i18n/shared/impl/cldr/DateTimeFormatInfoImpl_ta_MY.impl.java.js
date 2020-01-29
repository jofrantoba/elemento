goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ta_MY$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ta = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ta$impl');

class DateTimeFormatInfoImpl__ta__MY extends DateTimeFormatInfoImpl__ta {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__ta__MY}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__ta__MY.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ta__MY();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ta_MY__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ta_MY__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ta__();
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
  * @override
  * @return {number}
  * @public
  */
 m_weekendStart__() {
  return 6;
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__ta__MY.$clinit = () =>{};
  DateTimeFormatInfoImpl__ta__MY.$loadModules();
  DateTimeFormatInfoImpl__ta.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__ta__MY;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ta__MY, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ta_MY');

exports = DateTimeFormatInfoImpl__ta__MY; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ta_MY.js.map