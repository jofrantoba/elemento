goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_sq_XK$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__sq = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_sq$impl');

class DateTimeFormatInfoImpl__sq__XK extends DateTimeFormatInfoImpl__sq {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__sq__XK}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__sq__XK.$clinit();
  let $instance = new DateTimeFormatInfoImpl__sq__XK();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_sq_XK__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_sq_XK__() {
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
  DateTimeFormatInfoImpl__sq__XK.$clinit = () =>{};
  DateTimeFormatInfoImpl__sq__XK.$loadModules();
  DateTimeFormatInfoImpl__sq.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__sq__XK;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__sq__XK, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_sq_XK');

exports = DateTimeFormatInfoImpl__sq__XK; 
//# sourceMappingURL=DateTimeFormatInfoImpl_sq_XK.js.map