goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_zh_Hans_SG$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__zh__Hans = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_zh_Hans$impl');

class DateTimeFormatInfoImpl__zh__Hans__SG extends DateTimeFormatInfoImpl__zh__Hans {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__zh__Hans__SG}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__zh__Hans__SG.$clinit();
  let $instance = new DateTimeFormatInfoImpl__zh__Hans__SG();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_zh_Hans_SG__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_zh_Hans_SG__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_zh_Hans__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatShort__() {
  return "dd/MM/yy";
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
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthAbbrev__() {
  return "M\u6708";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthFull__() {
  return "M\u6708";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthNumDay__() {
  return "M-d";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthNumDay__() {
  return "y\u5E74M\u6708d\u65E5";
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__zh__Hans__SG.$clinit = () =>{};
  DateTimeFormatInfoImpl__zh__Hans__SG.$loadModules();
  DateTimeFormatInfoImpl__zh__Hans.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__zh__Hans__SG;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__zh__Hans__SG, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_zh_Hans_SG');

exports = DateTimeFormatInfoImpl__zh__Hans__SG; 
//# sourceMappingURL=DateTimeFormatInfoImpl_zh_Hans_SG.js.map