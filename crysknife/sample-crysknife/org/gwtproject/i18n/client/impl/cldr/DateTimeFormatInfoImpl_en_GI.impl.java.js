goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_GI$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__150 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_150$impl');

class DateTimeFormatInfoImpl__en__GI extends DateTimeFormatInfoImpl__en__150 {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__en__GI}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__en__GI.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__GI();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_GI__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_GI__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_150__();
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__en__GI.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__GI.$loadModules();
  DateTimeFormatInfoImpl__en__150.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__GI;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__GI, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_GI');

exports = DateTimeFormatInfoImpl__en__GI; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_GI.js.map