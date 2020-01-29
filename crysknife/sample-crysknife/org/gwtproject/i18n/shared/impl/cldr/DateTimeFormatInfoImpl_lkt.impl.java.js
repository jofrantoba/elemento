goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_lkt$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__lkt extends DateTimeFormatInfoImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__lkt}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__lkt.$clinit();
  let $instance = new DateTimeFormatInfoImpl__lkt();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_lkt__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_lkt__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatFull__() {
  return "EEEE, MMMM d, y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatLong__() {
  return "MMMM d, y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatMedium__() {
  return "MMM d, y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatShort__() {
  return "M/d/yy";
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["BCE", "CE"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["BCE", "CE"], j_l_String));
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["Wi\u00F3the\u021Fika W\u00ED", "Thiy\u00F3\u021Feyu\u014Bka W\u00ED", "I\u0161t\u00E1wi\u010Dhayaza\u014B W\u00ED", "P\u021Fe\u017E\u00EDt\u021Fo W\u00ED", "\u010Cha\u014Bw\u00E1pet\u021Fo W\u00ED", "W\u00EDpazuk\u021Fa-wa\u0161t\u00E9 W\u00ED", "\u010Cha\u014Bp\u021F\u00E1sapa W\u00ED", "Was\u00FAt\u021Fu\u014B W\u00ED", "\u010Cha\u014Bw\u00E1pe\u01E7i W\u00ED", "\u010Cha\u014Bw\u00E1pe-kasn\u00E1 W\u00ED", "Wan\u00EDyetu W\u00ED", "T\u021Fah\u00E9kap\u0161u\u014B W\u00ED"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["Wi\u00F3the\u021Fika W\u00ED", "Thiy\u00F3\u021Feyu\u014Bka W\u00ED", "I\u0161t\u00E1wi\u010Dhayaza\u014B W\u00ED", "P\u021Fe\u017E\u00EDt\u021Fo W\u00ED", "\u010Cha\u014Bw\u00E1pet\u021Fo W\u00ED", "W\u00EDpazuk\u021Fa-wa\u0161t\u00E9 W\u00ED", "\u010Cha\u014Bp\u021F\u00E1sapa W\u00ED", "Was\u00FAt\u021Fu\u014B W\u00ED", "\u010Cha\u014Bw\u00E1pe\u01E7i W\u00ED", "\u010Cha\u014Bw\u00E1pe-kasn\u00E1 W\u00ED", "Wan\u00EDyetu W\u00ED", "T\u021Fah\u00E9kap\u0161u\u014B W\u00ED"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["Q1", "Q2", "Q3", "Q4"], j_l_String));
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatFull__() {
  return "h:mm:ss a zzzz";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatLong__() {
  return "h:mm:ss a z";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatMedium__() {
  return "h:mm:ss a";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatShort__() {
  return "h:mm a";
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["A\u014Bp\u00E9tuwak\u021Fa\u014B", "A\u014Bp\u00E9tuwa\u014B\u017Ei", "A\u014Bp\u00E9tunu\u014Bpa", "A\u014Bp\u00E9tuyamni", "A\u014Bp\u00E9tutopa", "A\u014Bp\u00E9tuzapta\u014B", "Ow\u00E1\u014Bgyu\u017Ea\u017Eapi"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["A", "W", "N", "Y", "T", "Z", "O"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["A\u014Bp\u00E9tuwak\u021Fa\u014B", "A\u014Bp\u00E9tuwa\u014B\u017Ei", "A\u014Bp\u00E9tunu\u014Bpa", "A\u014Bp\u00E9tuyamni", "A\u014Bp\u00E9tutopa", "A\u014Bp\u00E9tuzapta\u014B", "Ow\u00E1\u014Bgyu\u017Ea\u017Eapi"], j_l_String));
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__lkt.$clinit = () =>{};
  DateTimeFormatInfoImpl__lkt.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__lkt;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__lkt, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_lkt');

exports = DateTimeFormatInfoImpl__lkt; 
//# sourceMappingURL=DateTimeFormatInfoImpl_lkt.js.map