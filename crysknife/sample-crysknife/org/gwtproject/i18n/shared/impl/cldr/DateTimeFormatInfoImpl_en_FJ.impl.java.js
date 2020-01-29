goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_FJ$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__001 = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_001$impl');

class DateTimeFormatInfoImpl__en__FJ extends DateTimeFormatInfoImpl__en__001 {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__en__FJ}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__en__FJ.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__FJ();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_FJ__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_FJ__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_001__();
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__en__FJ.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__FJ.$loadModules();
  DateTimeFormatInfoImpl__en__001.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__FJ;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__FJ, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_FJ');

exports = DateTimeFormatInfoImpl__en__FJ; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_FJ.js.map