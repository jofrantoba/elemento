goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_es_IC$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__es = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_es$impl');

class DateTimeFormatInfoImpl__es__IC extends DateTimeFormatInfoImpl__es {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__es__IC}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__es__IC.$clinit();
  let $instance = new DateTimeFormatInfoImpl__es__IC();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_es_IC__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_es_IC__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_es__();
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
  DateTimeFormatInfoImpl__es__IC.$clinit = () =>{};
  DateTimeFormatInfoImpl__es__IC.$loadModules();
  DateTimeFormatInfoImpl__es.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__es__IC;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__es__IC, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_es_IC');

exports = DateTimeFormatInfoImpl__es__IC; 
//# sourceMappingURL=DateTimeFormatInfoImpl_es_IC.js.map