goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bn_IN$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImpl__bn = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bn$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class LocalizedNamesImpl__bn__IN extends LocalizedNamesImpl__bn {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!LocalizedNamesImpl__bn__IN}
  * @public
  */
 static $create__() {
  LocalizedNamesImpl__bn__IN.$clinit();
  let $instance = new LocalizedNamesImpl__bn__IN();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_bn_IN__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_bn_IN__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_bn__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_loadSortedRegionCodes__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["XA", "XB", "AT", "AU", "AO", "AQ", "AG", "AC", "IM", "IS", "QO", "AZ", "AD", "AF", "AS", "IE", "AW", "AR", "AM", "DZ", "AL", "AX", "UA", "EZ", "EU", "EC", "IL", "IT", "ET", "ID", "YE", "IQ", "IR", "ER", "UG", "UZ", "KP", "MP", "UY", "SV", "EE", "AI", "OM", "WF", "CD", "CG", "KM", "KH", "CO", "XK", "KZ", "QA", "CA", "CU", "KG", "KI", "EA", "CK", "KW", "CW", "KE", "CV", "KY", "CC", "CI", "CR", "IC", "CM", "BQ", "CX", "HR", "CP", "GM", "GN", "GW", "GY", "GT", "GP", "GU", "GG", "GA", "GL", "GR", "GD", "GH", "TD", "CL", "CN", "CZ", "GE", "JO", "UN", "JP", "JM", "ZM", "DE", "JE", "DJ", "GI", "ZW", "TV", "TK", "TG", "TO", "TA", "DK", "DM", "DO", "TW", "TJ", "TZ", "TN", "TL", "TR", "TM", "TC", "TT", "TH", "ZA", "KR", "GS", "SS", "DG", "NO", "NF", "NE", "NG", "NR", "NA", "NC", "NZ", "NU", "NI", "GQ", "NL", "NP", "PT", "EH", "PK", "PA", "PG", "PW", "PN", "PR", "PE", "PL", "PY", "PS", "FK", "GF", "TF", "PF", "FJ", "FI", "PH", "FO", "FR", "BW", "BO", "BA", "BD", "BB", "BM", "BH", "BS", "BF", "BI", "BG", "BJ", "BE", "BY", "BZ", "BV", "BR", "IO", "VG", "BN", "VU", "IN", "VN", "BT", "VE", "VA", "MN", "CF", "MS", "ME", "MR", "MU", "MD", "FM", "MG", "MM", "YT", "US", "UM", "VI", "MQ", "MH", "MV", "MY", "MW", "ML", "MT", "EG", "MX", "MZ", "MC", "MA", "MO", "MK", "GB", "RU", "RE", "RW", "RO", "LR", "LA", "LU", "LV", "LI", "LT", "LY", "LB", "LS", "LK", "AE", "SB", "CY", "ST", "SM", "WS", "RS", "SG", "SX", "SL", "SY", "SC", "CH", "SE", "SD", "SR", "SN", "KN", "PM", "BL", "VC", "MF", "LC", "SH", "SO", "SZ", "SA", "ES", "SJ", "SK", "SI", "HK", "HN", "HT", "HU", "HM"], j_l_String));
 }
 /**
  * @override
  * @public
  */
 m_loadNameMap__() {
  super.m_loadNameMap__();
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UM", "\u09AE\u09BE\u09B0\u09CD\u0995\u09BF\u09A8 \u09AF\u09C1\u0995\u09CD\u09A4\u09B0\u09BE\u09B7\u09CD\u099F\u09CD\u09B0\u09C7\u09B0 \u09AA\u09BE\u09B0\u09CD\u09B6\u09CD\u09AC\u09AC\u09B0\u09CD\u09A4\u09C0 \u09A6\u09CD\u09AC\u09C0\u09AA\u09AA\u09C1\u099E\u09CD\u099C");
 }
 /**
  * @public
  */
 static $clinit() {
  LocalizedNamesImpl__bn__IN.$clinit = () =>{};
  LocalizedNamesImpl__bn__IN.$loadModules();
  LocalizedNamesImpl__bn.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof LocalizedNamesImpl__bn__IN;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(LocalizedNamesImpl__bn__IN, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bn_IN');

exports = LocalizedNamesImpl__bn__IN; 
//# sourceMappingURL=LocalizedNamesImpl_bn_IN.js.map