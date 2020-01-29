goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ce$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ce extends DateTimeFormatInfoImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__ce}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__ce.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ce();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ce__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ce__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u04C0\u0438\u0439\u0441\u0430 \u043F\u0430\u0439\u0445\u0430\u043C\u0430\u0440 \u0432\u0438\u043D\u0430 \u0434\u0435 \u043A\u0445\u0430\u0447\u0430\u043B\u0435", "\u04C0\u0438\u0439\u0441\u0430 \u043F\u0430\u0439\u0445\u0430\u043C\u0430\u0440 \u0432\u0438\u043D\u0430 \u0434\u0438\u0439\u043D\u0430\u0445\u044C \u0434\u0443\u044C\u0439\u043D\u0430"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0432. \u044D. \u0442\u04C0. \u044F", "\u0432. \u044D"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u044F\u043D\u0432\u0430\u0440\u044C", "\u0444\u0435\u0432\u0440\u0430\u043B\u044C", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440\u0435\u043B\u044C", "\u043C\u0430\u0439", "\u0438\u044E\u043D\u044C", "\u0438\u044E\u043B\u044C", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C", "\u043E\u043A\u0442\u044F\u0431\u0440\u044C", "\u043D\u043E\u044F\u0431\u0440\u044C", "\u0434\u0435\u043A\u0430\u0431\u0440\u044C"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u042F", "\u0424", "\u041C", "\u0410", "\u041C", "\u0418", "\u0418", "\u0410", "\u0421", "\u041E", "\u041D", "\u0414"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u044F\u043D\u0432", "\u0444\u0435\u0432", "\u043C\u0430\u0440", "\u0430\u043F\u0440", "\u043C\u0430\u0439", "\u0438\u044E\u043D", "\u0438\u044E\u043B", "\u0430\u0432\u0433", "\u0441\u0435\u043D", "\u043E\u043A\u0442", "\u043D\u043E\u044F", "\u0434\u0435\u043A"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["1-\u0433\u04C0\u0430 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "2-\u0433\u04C0\u0430 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "3-\u0433\u04C0\u0430 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "4-\u0433\u04C0\u0430 \u043A\u0432\u0430\u0440\u0442\u0430\u043B"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["1-\u0433\u04C0\u0430 \u043A\u0432.", "2-\u0433\u04C0\u0430 \u043A\u0432.", "3-\u0433\u04C0\u0430 \u043A\u0432.", "4-\u0433\u04C0\u0430 \u043A\u0432."], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u043A\u04C0\u0438\u0440\u0430", "\u043E\u0440\u0448\u043E\u0442", "\u0448\u0438\u043D\u0430\u0440\u0430", "\u043A\u0445\u0430\u0430\u0440\u0430", "\u0435\u0430\u0440\u0430", "\u043F\u04C0\u0435\u0440\u0430\u0441\u043A\u0430", "\u0448\u0443\u043E\u0442"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u043A\u04C0\u0438", "\u043E\u0440", "\u0448\u0438", "\u043A\u0445\u0430", "\u0435\u0430", "\u043F\u04C0\u0435", "\u0448\u0443\u043E"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysNarrowStandalone__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u043A\u04C0", "\u043E", "\u0448", "\u043A\u0445", "\u0435", "\u043F\u04C0", "\u0448"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u043A\u04C0\u0438", "\u043E\u0440", "\u0448\u0438", "\u043A\u0445\u0430", "\u0435\u0430", "\u043F\u04C0\u0435", "\u0448\u0443\u043E"], j_l_String));
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__ce.$clinit = () =>{};
  DateTimeFormatInfoImpl__ce.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__ce;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ce, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ce');

exports = DateTimeFormatInfoImpl__ce; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ce.js.map