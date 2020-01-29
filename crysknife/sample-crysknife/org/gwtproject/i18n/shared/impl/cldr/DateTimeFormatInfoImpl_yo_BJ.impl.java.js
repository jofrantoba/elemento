goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_yo_BJ$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__yo = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_yo$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__yo__BJ extends DateTimeFormatInfoImpl__yo {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__yo__BJ}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__yo__BJ.$clinit();
  let $instance = new DateTimeFormatInfoImpl__yo__BJ();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_yo_BJ__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_yo_BJ__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_yo__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_ampms__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u00C0\u00E1r\u0254\u0300", "\u0186\u0300s\u00E1n"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["Osh\u00F9 Sh\u025B\u0301r\u025B\u0301", "Osh\u00F9 \u00C8r\u00E8l\u00E8", "Osh\u00F9 \u0190r\u025B\u0300n\u00E0", "Osh\u00F9 \u00CCgb\u00E9", "Osh\u00F9 \u0190\u0300bibi", "Osh\u00F9 \u00D2k\u00FAdu", "Osh\u00F9 Ag\u025Bm\u0254", "Osh\u00F9 \u00D2g\u00FAn", "Osh\u00F9 Owewe", "Osh\u00F9 \u0186\u0300w\u00E0r\u00E0", "Osh\u00F9 B\u00E9l\u00FA", "Osh\u00F9 \u0186\u0300p\u025B\u0300"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["Sh\u025B\u0301r\u025B\u0301", "\u00C8r\u00E8l\u00E8", "\u0190r\u025B\u0300n\u00E0", "\u00CCgb\u00E9", "\u0190\u0300bibi", "\u00D2k\u00FAdu", "Ag\u025Bm\u0254", "\u00D2g\u00FAn", "Owewe", "\u0186\u0300w\u00E0r\u00E0", "B\u00E9l\u00FA", "\u0186\u0300p\u025B\u0300"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["K\u0254\u0301t\u00E0 K\u00EDnn\u00ED", "K\u0254\u0301t\u00E0 Kej\u00EC", "K\u0254\u0301\u00E0 Keta", "K\u0254\u0301t\u00E0 K\u025Brin"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0186j\u0254\u0301 \u00C0\u00ECk\u00FA", "\u0186j\u0254\u0301 Aj\u00E9", "\u0186j\u0254\u0301 \u00CCs\u025B\u0301gun", "\u0186j\u0254\u0301r\u00FA", "\u0186j\u0254\u0301b\u0254", "\u0186j\u0254\u0301 \u0190t\u00EC", "\u0186j\u0254\u0301 \u00C0b\u00E1m\u025B\u0301ta"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u00C0\u00ECk\u00FA", "Aj\u00E9", "\u00CCs\u025B\u0301gun", "\u0186j\u0254\u0301r\u00FA", "\u0186j\u0254\u0301b\u0254", "\u0190t\u00EC", "\u00C0b\u00E1m\u025B\u0301ta"], j_l_String));
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__yo__BJ.$clinit = () =>{};
  DateTimeFormatInfoImpl__yo__BJ.$loadModules();
  DateTimeFormatInfoImpl__yo.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__yo__BJ;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__yo__BJ, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_yo_BJ');

exports = DateTimeFormatInfoImpl__yo__BJ; 
//# sourceMappingURL=DateTimeFormatInfoImpl_yo_BJ.js.map