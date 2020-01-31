goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ar_LY$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImpl__ar = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ar$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class LocalizedNamesImpl__ar__LY extends LocalizedNamesImpl__ar {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LocalizedNamesImpl__ar__LY} */
 static $create__() {
  LocalizedNamesImpl__ar__LY.$clinit();
  let $instance = new LocalizedNamesImpl__ar__LY();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_ar_LY__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_ar_LY__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_ar__();
 }
 /** @override @return {Array<?string>} */
 m_loadSortedRegionCodes__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["XA", "XB", "ET", "AZ", "AM", "AW", "ER", "ES", "AU", "EE", "IL", "AF", "AL", "DE", "AQ", "AG", "AD", "ID", "AO", "AI", "UY", "UZ", "UG", "QO", "UA", "IR", "IE", "IS", "IT", "PS", "AR", "JO", "TF", "IO", "EC", "AE", "UN", "EU", "BH", "BR", "PT", "BS", "BA", "CZ", "ME", "DZ", "DK", "CV", "SV", "SN", "SD", "SE", "EH", "SO", "CN", "IQ", "GA", "VA", "PH", "CM", "CG", "CD", "KW", "MA", "MX", "SA", "GB", "NO", "AT", "NE", "IN", "US", "JP", "YE", "GR", "PG", "PY", "PK", "PW", "BB", "BM", "BN", "BE", "BG", "BZ", "BD", "PA", "BJ", "BT", "BW", "PR", "BF", "BI", "PL", "BO", "PF", "PE", "BY", "TH", "TW", "TM", "TR", "TA", "TT", "TD", "CL", "TZ", "TG", "TV", "TK", "TN", "TO", "TL", "JM", "GI", "AX", "KM", "IC", "MQ", "MV", "UM", "PN", "TC", "SB", "FO", "FK", "VG", "VI", "KY", "CK", "CC", "MH", "MP", "WF", "AC", "BV", "CX", "CP", "IM", "NF", "HM", "CF", "DO", "ZA", "SS", "GE", "GS", "DJ", "JE", "DM", "DG", "RW", "RU", "RO", "RE", "ZM", "ZW", "CI", "WS", "AS", "BL", "PM", "VC", "KN", "LC", "SX", "SH", "MF", "SM", "ST", "EA", "LK", "SJ", "SK", "SI", "SG", "SZ", "SY", "SR", "CH", "SL", "SC", "RS", "TJ", "OM", "GM", "GH", "GD", "GL", "GT", "GP", "GU", "GF", "GY", "GG", "GN", "GQ", "GW", "VU", "FR", "VE", "FI", "VN", "FJ", "CY", "QA", "KG", "KZ", "NC", "HR", "KH", "CA", "CU", "CW", "KR", "KP", "CR", "XK", "CO", "KI", "KE", "LV", "LA", "LB", "LU", "LY", "LR", "LT", "LI", "LS", "MT", "ML", "MY", "YT", "MG", "EG", "MK", "MO", "MW", "EZ", "MN", "MR", "MU", "MZ", "MD", "MC", "MS", "MM", "FM", "NA", "NR", "NP", "NG", "NI", "NZ", "NU", "HT", "HN", "HU", "NL", "BQ", "HK"], j_l_String));
 }
 /** @override */
 m_loadNameMap__() {
  super.m_loadNameMap__();
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EA", "\u0633\u0628\u062A\u0629 \u0648\u0645\u0644\u064A\u0644\u064A\u0629");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MS", "\u0645\u0648\u0646\u062A\u064A\u0633\u064A\u0631\u0627\u062A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UY", "\u0623\u0648\u0631\u0648\u063A\u0648\u0627\u064A");
 }
 
 static $clinit() {
  LocalizedNamesImpl__ar__LY.$clinit = () =>{};
  LocalizedNamesImpl__ar__LY.$loadModules();
  LocalizedNamesImpl__ar.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LocalizedNamesImpl__ar__LY;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(LocalizedNamesImpl__ar__LY, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ar_LY');

exports = LocalizedNamesImpl__ar__LY; 
//# sourceMappingURL=LocalizedNamesImpl_ar_LY.js.map