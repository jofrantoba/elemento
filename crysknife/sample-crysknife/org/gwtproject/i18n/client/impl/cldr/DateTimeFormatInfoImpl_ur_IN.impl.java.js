goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ur_IN$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ur = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ur$impl');

class DateTimeFormatInfoImpl__ur__IN extends DateTimeFormatInfoImpl__ur {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__ur__IN}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__ur__IN.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ur__IN();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ur_IN__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ur_IN__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ur__();
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_weekendStart__() {
  return 0;
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__ur__IN.$clinit = () =>{};
  DateTimeFormatInfoImpl__ur__IN.$loadModules();
  DateTimeFormatInfoImpl__ur.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__ur__IN;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ur__IN, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ur_IN');

exports = DateTimeFormatInfoImpl__ur__IN; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ur_IN.js.map