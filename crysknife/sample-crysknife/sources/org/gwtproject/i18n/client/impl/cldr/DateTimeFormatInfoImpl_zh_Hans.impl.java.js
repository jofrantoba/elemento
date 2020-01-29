goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_zh_Hans$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__zh = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_zh$impl');

class DateTimeFormatInfoImpl__zh__Hans extends DateTimeFormatInfoImpl__zh {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__zh__Hans}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__zh__Hans.$clinit();
  let $instance = new DateTimeFormatInfoImpl__zh__Hans();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_zh_Hans__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_zh_Hans__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_zh__();
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
  DateTimeFormatInfoImpl__zh__Hans.$clinit = () =>{};
  DateTimeFormatInfoImpl__zh__Hans.$loadModules();
  DateTimeFormatInfoImpl__zh.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__zh__Hans;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__zh__Hans, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_zh_Hans');

exports = DateTimeFormatInfoImpl__zh__Hans; 
//# sourceMappingURL=DateTimeFormatInfoImpl_zh_Hans.js.map