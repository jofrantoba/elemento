goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ff_Latn_MR$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ff = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ff$impl');

class DateTimeFormatInfoImpl__ff__Latn__MR extends DateTimeFormatInfoImpl__ff {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__ff__Latn__MR}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__ff__Latn__MR.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ff__Latn__MR();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ff_Latn_MR__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ff_Latn_MR__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ff__();
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
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__ff__Latn__MR.$clinit = () =>{};
  DateTimeFormatInfoImpl__ff__Latn__MR.$loadModules();
  DateTimeFormatInfoImpl__ff.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__ff__Latn__MR;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ff__Latn__MR, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ff_Latn_MR');

exports = DateTimeFormatInfoImpl__ff__Latn__MR; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ff_Latn_MR.js.map