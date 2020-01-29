goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_DE$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__150 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_150$impl');

class DateTimeFormatInfoImpl__en__DE extends DateTimeFormatInfoImpl__en__150 {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__en__DE}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__en__DE.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__DE();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_DE__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_DE__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_150__();
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__en__DE.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__DE.$loadModules();
  DateTimeFormatInfoImpl__en__150.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__DE;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__DE, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_DE');

exports = DateTimeFormatInfoImpl__en__DE; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_DE.js.map