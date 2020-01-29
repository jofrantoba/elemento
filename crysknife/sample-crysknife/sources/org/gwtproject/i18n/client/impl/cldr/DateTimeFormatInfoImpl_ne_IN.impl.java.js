goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ne_IN$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ne = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ne$impl');

class DateTimeFormatInfoImpl__ne__IN extends DateTimeFormatInfoImpl__ne {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__ne__IN}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__ne__IN.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ne__IN();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ne_IN__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ne_IN__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ne__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatFull__() {
  return "h:mm:ss a zzzz";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatLong__() {
  return "h:mm:ss a z";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatMedium__() {
  return "h:mm:ss a";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatShort__() {
  return "h:mm a";
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
  DateTimeFormatInfoImpl__ne__IN.$clinit = () =>{};
  DateTimeFormatInfoImpl__ne__IN.$loadModules();
  DateTimeFormatInfoImpl__ne.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__ne__IN;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ne__IN, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ne_IN');

exports = DateTimeFormatInfoImpl__ne__IN; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ne_IN.js.map