goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_zh_Hans_HK$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImpl__zh = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_zh$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class LocalizedNamesImpl__zh__Hans__HK extends LocalizedNamesImpl__zh {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LocalizedNamesImpl__zh__Hans__HK} */
 static $create__() {
  LocalizedNamesImpl__zh__Hans__HK.$clinit();
  let $instance = new LocalizedNamesImpl__zh__Hans__HK();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_zh_Hans_HK__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_zh_Hans_HK__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_zh__();
 }
 /** @override @return {Array<?string>} */
 m_loadSortedRegionCodes__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["XA", "XB", "GN", "GW", "YE", "TR", "TM", "QO", "BT", "CF", "CN", "HK", "MO", "DK", "EC", "ER", "BB", "PG", "BR", "PY", "BH", "BS", "PA", "PS", "PK", "BN", "JP", "BE", "MU", "MR", "JM", "TD", "IL", "CA", "GA", "GH", "IC", "MP", "QA", "CU", "TW", "NG", "NE", "NI", "NP", "BF", "BI", "BV", "GP", "WF", "VU", "BY", "PN", "LT", "IQ", "IR", "EA", "IS", "LI", "HU", "IN", "ID", "GT", "DJ", "KG", "GY", "DO", "DM", "TG", "AI", "AO", "AG", "AD", "TK", "BM", "LA", "ES", "EH", "CV", "BZ", "CP", "HR", "LR", "LY", "GR", "SA", "GQ", "TZ", "VE", "BD", "PW", "SB", "LV", "PR", "BA", "PL", "FR", "GF", "PF", "TF", "MF", "FO", "GI", "KE", "FI", "AE", "AR", "OM", "AF", "AC", "AZ", "DZ", "AL", "AW", "BG", "RU", "ZA", "AQ", "GS", "SS", "KZ", "KH", "HN", "ZW", "BO", "KW", "CC", "CI", "XK", "KM", "TN", "US", "UM", "VI", "AS", "GB", "IO", "VG", "DG", "CR", "CO", "EG", "ET", "NO", "GG", "GD", "GL", "GE", "TH", "HT", "TT", "TC", "TA", "RE", "PE", "SO", "KI", "FM", "CZ", "VA", "MZ", "NL", "BQ", "SX", "BW", "CM", "FJ", "SJ", "LK", "SZ", "SI", "SK", "CL", "KP", "PH", "VN", "ME", "SC", "SL", "CY", "SN", "RS", "TJ", "IT", "SG", "NZ", "NC", "CH", "SE", "NR", "PT", "FK", "MN", "MS", "HM", "DE", "MA", "MD", "MC", "LB", "MX", "AU", "BL", "VC", "PM", "ST", "KN", "SH", "LC", "CX", "SM", "TL", "UG", "UA", "UY", "UZ", "AM", "GU", "GM", "CG", "CD", "RW", "LU", "SY", "TV", "AT", "AX", "CK", "CW", "KY", "EZ", "EU", "TO", "JE", "EE", "IE", "JO", "NA", "NU", "MM", "RO", "UN", "SD", "SR", "LS", "WS", "SV", "NF", "BJ", "ZM", "KR", "MT", "ML", "MK", "MW", "IM", "MQ", "MV", "MY", "YT", "MH", "MG"], j_l_String));
 }
 
 static $clinit() {
  LocalizedNamesImpl__zh__Hans__HK.$clinit = () =>{};
  LocalizedNamesImpl__zh__Hans__HK.$loadModules();
  LocalizedNamesImpl__zh.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LocalizedNamesImpl__zh__Hans__HK;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(LocalizedNamesImpl__zh__Hans__HK, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_zh_Hans_HK');

exports = LocalizedNamesImpl__zh__Hans__HK; 
//# sourceMappingURL=LocalizedNamesImpl_zh_Hans_HK.js.map