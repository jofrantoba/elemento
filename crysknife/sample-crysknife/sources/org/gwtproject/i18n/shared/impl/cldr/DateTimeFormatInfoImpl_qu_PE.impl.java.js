goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_qu_PE$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__qu = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_qu$impl');

class DateTimeFormatInfoImpl__qu__PE extends DateTimeFormatInfoImpl__qu {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__qu__PE}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__qu__PE.$clinit();
  let $instance = new DateTimeFormatInfoImpl__qu__PE();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_qu_PE__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_qu_PE__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_qu__();
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__qu__PE.$clinit = () =>{};
  DateTimeFormatInfoImpl__qu__PE.$loadModules();
  DateTimeFormatInfoImpl__qu.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__qu__PE;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__qu__PE, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_qu_PE');

exports = DateTimeFormatInfoImpl__qu__PE; 
//# sourceMappingURL=DateTimeFormatInfoImpl_qu_PE.js.map