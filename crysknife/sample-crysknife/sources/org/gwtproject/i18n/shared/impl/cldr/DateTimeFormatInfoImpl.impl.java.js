goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultDateTimeFormatInfo = goog.require('org.gwtproject.i18n.shared.DefaultDateTimeFormatInfo$impl');

class DateTimeFormatInfoImpl extends DefaultDateTimeFormatInfo {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl.$clinit();
  let $instance = new DateTimeFormatInfoImpl();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__() {
  this.$ctor__org_gwtproject_i18n_shared_DefaultDateTimeFormatInfo__();
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl.$clinit = () =>{};
  DateTimeFormatInfoImpl.$loadModules();
  DefaultDateTimeFormatInfo.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl');

exports = DateTimeFormatInfoImpl; 
//# sourceMappingURL=DateTimeFormatInfoImpl.js.map