goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_NL$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__150 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_150$impl');

class DateTimeFormatInfoImpl__en__NL extends DateTimeFormatInfoImpl__en__150 {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__en__NL}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__en__NL.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__NL();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_NL__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_NL__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_150__();
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__en__NL.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__NL.$loadModules();
  DateTimeFormatInfoImpl__en__150.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__NL;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__NL, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_NL');

exports = DateTimeFormatInfoImpl__en__NL; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_NL.js.map