goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_sq_MK$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__sq = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_sq$impl');

class DateTimeFormatInfoImpl__sq__MK extends DateTimeFormatInfoImpl__sq {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__sq__MK}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__sq__MK.$clinit();
  let $instance = new DateTimeFormatInfoImpl__sq__MK();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_sq_MK__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_sq_MK__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_sq__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatFull__() {
  return "HH:mm:ss zzzz";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatLong__() {
  return "HH:mm:ss z";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatMedium__() {
  return "HH:mm:ss";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatShort__() {
  return "HH:mm";
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__sq__MK.$clinit = () =>{};
  DateTimeFormatInfoImpl__sq__MK.$loadModules();
  DateTimeFormatInfoImpl__sq.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__sq__MK;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__sq__MK, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_sq_MK');

exports = DateTimeFormatInfoImpl__sq__MK; 
//# sourceMappingURL=DateTimeFormatInfoImpl_sq_MK.js.map