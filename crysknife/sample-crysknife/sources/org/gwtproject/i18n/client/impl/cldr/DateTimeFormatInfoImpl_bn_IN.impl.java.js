goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_bn_IN$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__bn = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_bn$impl');

class DateTimeFormatInfoImpl__bn__IN extends DateTimeFormatInfoImpl__bn {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__bn__IN}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__bn__IN.$clinit();
  let $instance = new DateTimeFormatInfoImpl__bn__IN();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_bn_IN__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_bn_IN__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_bn__();
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
  DateTimeFormatInfoImpl__bn__IN.$clinit = () =>{};
  DateTimeFormatInfoImpl__bn__IN.$loadModules();
  DateTimeFormatInfoImpl__bn.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__bn__IN;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__bn__IN, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_bn_IN');

exports = DateTimeFormatInfoImpl__bn__IN; 
//# sourceMappingURL=DateTimeFormatInfoImpl_bn_IN.js.map