goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_fr_MA$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__fr = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_fr$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__fr__MA extends DateTimeFormatInfoImpl__fr {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__fr__MA}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__fr__MA.$clinit();
  let $instance = new DateTimeFormatInfoImpl__fr__MA();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_fr_MA__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_fr_MA__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_fr__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["jan.", "f\u00E9v.", "mar.", "avr.", "mai", "jui.", "juil.", "ao\u00FBt", "sept.", "oct.", "nov.", "d\u00E9c."], j_l_String));
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__fr__MA.$clinit = () =>{};
  DateTimeFormatInfoImpl__fr__MA.$loadModules();
  DateTimeFormatInfoImpl__fr.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__fr__MA;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__fr__MA, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_fr_MA');

exports = DateTimeFormatInfoImpl__fr__MA; 
//# sourceMappingURL=DateTimeFormatInfoImpl_fr_MA.js.map