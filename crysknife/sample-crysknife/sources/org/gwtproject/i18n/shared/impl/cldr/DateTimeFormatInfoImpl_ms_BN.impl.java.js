goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ms_BN$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ms = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ms$impl');

class DateTimeFormatInfoImpl__ms__BN extends DateTimeFormatInfoImpl__ms {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__ms__BN}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__ms__BN.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ms__BN();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ms_BN__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ms_BN__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ms__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatFull__() {
  return "dd MMMM y";
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__ms__BN.$clinit = () =>{};
  DateTimeFormatInfoImpl__ms__BN.$loadModules();
  DateTimeFormatInfoImpl__ms.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__ms__BN;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ms__BN, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ms_BN');

exports = DateTimeFormatInfoImpl__ms__BN; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ms_BN.js.map