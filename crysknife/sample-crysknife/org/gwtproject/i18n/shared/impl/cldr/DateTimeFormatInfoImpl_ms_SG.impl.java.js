goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ms_SG$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ms = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ms$impl');

class DateTimeFormatInfoImpl__ms__SG extends DateTimeFormatInfoImpl__ms {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__ms__SG}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__ms__SG.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ms__SG();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ms_SG__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ms_SG__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ms__();
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
  DateTimeFormatInfoImpl__ms__SG.$clinit = () =>{};
  DateTimeFormatInfoImpl__ms__SG.$loadModules();
  DateTimeFormatInfoImpl__ms.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__ms__SG;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ms__SG, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ms_SG');

exports = DateTimeFormatInfoImpl__ms__SG; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ms_SG.js.map