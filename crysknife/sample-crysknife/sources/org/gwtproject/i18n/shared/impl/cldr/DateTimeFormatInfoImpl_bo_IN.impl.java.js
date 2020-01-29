goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_bo_IN$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__bo = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_bo$impl');

class DateTimeFormatInfoImpl__bo__IN extends DateTimeFormatInfoImpl__bo {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__bo__IN}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__bo__IN.$clinit();
  let $instance = new DateTimeFormatInfoImpl__bo__IN();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_bo_IN__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_bo_IN__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_bo__();
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
  DateTimeFormatInfoImpl__bo__IN.$clinit = () =>{};
  DateTimeFormatInfoImpl__bo__IN.$loadModules();
  DateTimeFormatInfoImpl__bo.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__bo__IN;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__bo__IN, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_bo_IN');

exports = DateTimeFormatInfoImpl__bo__IN; 
//# sourceMappingURL=DateTimeFormatInfoImpl_bo_IN.js.map