goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ko_KP$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ko = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ko$impl');

class DateTimeFormatInfoImpl__ko__KP extends DateTimeFormatInfoImpl__ko {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__ko__KP}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__ko__KP.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ko__KP();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ko_KP__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ko_KP__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ko__();
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
  DateTimeFormatInfoImpl__ko__KP.$clinit = () =>{};
  DateTimeFormatInfoImpl__ko__KP.$loadModules();
  DateTimeFormatInfoImpl__ko.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__ko__KP;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ko__KP, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ko_KP');

exports = DateTimeFormatInfoImpl__ko__KP; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ko_KP.js.map