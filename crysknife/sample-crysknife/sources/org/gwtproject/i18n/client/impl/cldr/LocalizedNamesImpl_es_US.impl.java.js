goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_US$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImpl__es = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class LocalizedNamesImpl__es__US extends LocalizedNamesImpl__es {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LocalizedNamesImpl__es__US} */
 static $create__() {
  LocalizedNamesImpl__es__US.$clinit();
  let $instance = new LocalizedNamesImpl__es__US();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_es_US__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_es_US__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_es__();
 }
 /** @override @return {Array<?string>} */
 m_loadSortedRegionCodes__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["AF", "AL", "DE", "AD", "AO", "AI", "AQ", "AG", "SA", "DZ", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BD", "BB", "BH", "BE", "BZ", "BJ", "BM", "BY", "BO", "BA", "BW", "BR", "BN", "BG", "BF", "BI", "BT", "CV", "KH", "CM", "CA", "BQ", "QA", "EA", "TD", "CZ", "CL", "CN", "CY", "VA", "CO", "KM", "KP", "KR", "CR", "CI", "HR", "CU", "CW", "DG", "DK", "DM", "EC", "EG", "SV", "AE", "ER", "SK", "SI", "ES", "US", "EE", "ET", "PH", "FI", "FJ", "FR", "GA", "GM", "GE", "GH", "GI", "GD", "GR", "GL", "GP", "GU", "GT", "GF", "GG", "GN", "GW", "GQ", "GY", "HT", "HN", "HU", "IN", "ID", "IQ", "IR", "IE", "BV", "CP", "AC", "IM", "CX", "IS", "NF", "AX", "KY", "IC", "CC", "CK", "FO", "GS", "HM", "FK", "MP", "MH", "UM", "PN", "SB", "TC", "VG", "VI", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KG", "KI", "XK", "KW", "LA", "LS", "LV", "LB", "LR", "LY", "LI", "LT", "LU", "MK", "MG", "MY", "MW", "MV", "ML", "MT", "MA", "MQ", "MU", "MR", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MZ", "MM", "UN", "NA", "NR", "NP", "NI", "NE", "NG", "NU", "NO", "NC", "NZ", "OM", "NL", "PK", "PW", "PA", "PG", "PY", "PE", "PF", "PL", "PT", "PR", "HK", "MO", "GB", "CF", "CG", "CD", "DO", "RE", "RW", "RO", "RU", "EH", "WS", "AS", "BL", "KN", "SM", "MF", "PM", "SH", "LC", "ST", "VC", "SN", "RS", "SC", "SL", "SG", "SX", "SY", "SO", "LK", "SZ", "ZA", "SD", "SS", "SE", "CH", "SR", "SJ", "TH", "TW", "TZ", "TJ", "IO", "QO", "TF", "PS", "TL", "TG", "TK", "TO", "TT", "TA", "TN", "TM", "TR", "TV", "UA", "UG", "EU", "UY", "UZ", "VU", "VE", "VN", "WF", "XA", "XB", "YE", "DJ", "ZM", "ZW", "EZ"], j_l_String));
 }
 /** @override */
 m_loadNameMap__() {
  super.m_loadNameMap__();
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CG", "Rep\u00FAblica del Congo");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IC", "Islas Canarias");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TA", "Trist\u00E1n da Cunha");
 }
 
 static $clinit() {
  LocalizedNamesImpl__es__US.$clinit = () =>{};
  LocalizedNamesImpl__es__US.$loadModules();
  LocalizedNamesImpl__es.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LocalizedNamesImpl__es__US;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(LocalizedNamesImpl__es__US, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_US');

exports = LocalizedNamesImpl__es__US; 
//# sourceMappingURL=LocalizedNamesImpl_es_US.js.map