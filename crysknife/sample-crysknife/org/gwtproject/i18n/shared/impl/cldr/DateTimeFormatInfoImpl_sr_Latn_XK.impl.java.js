goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_sr_Latn_XK$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__sr__Latn = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_sr_Latn$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__sr__Latn__XK extends DateTimeFormatInfoImpl__sr__Latn {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__sr__Latn__XK}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__sr__Latn__XK.$clinit();
  let $instance = new DateTimeFormatInfoImpl__sr__Latn__XK();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_sr_Latn_XK__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_sr_Latn_XK__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_sr_Latn__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["jan.", "feb.", "mart", "apr.", "maj", "jun", "jul", "avg.", "sept.", "okt.", "nov.", "dec."], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["ned.", "pon.", "ut.", "sr.", "\u010Det.", "pet.", "sub."], j_l_String));
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__sr__Latn__XK.$clinit = () =>{};
  DateTimeFormatInfoImpl__sr__Latn__XK.$loadModules();
  DateTimeFormatInfoImpl__sr__Latn.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__sr__Latn__XK;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__sr__Latn__XK, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_sr_Latn_XK');

exports = DateTimeFormatInfoImpl__sr__Latn__XK; 
//# sourceMappingURL=DateTimeFormatInfoImpl_sr_Latn_XK.js.map