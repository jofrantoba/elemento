goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_SV$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImpl__es__419 = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_419$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class LocalizedNamesImpl__es__SV extends LocalizedNamesImpl__es__419 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LocalizedNamesImpl__es__SV} */
 static $create__() {
  LocalizedNamesImpl__es__SV.$clinit();
  let $instance = new LocalizedNamesImpl__es__SV();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_es_SV__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_es_SV__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_es_419__();
 }
 /** @override @return {Array<?string>} */
 m_loadSortedRegionCodes__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["AF", "AL", "DE", "AD", "AO", "AI", "AQ", "AG", "SA", "DZ", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BD", "BB", "BH", "BE", "BZ", "BJ", "BM", "BY", "BO", "BA", "BW", "BR", "BN", "BG", "BF", "BI", "BT", "CV", "KH", "CM", "CA", "BQ", "QA", "EA", "TD", "CZ", "CL", "CN", "CY", "VA", "CO", "KM", "KP", "KR", "CI", "CR", "HR", "CU", "CW", "DG", "DK", "DM", "EC", "EG", "SV", "AE", "ER", "SK", "SI", "ES", "US", "EE", "ET", "EZ", "PH", "FI", "FJ", "FR", "GA", "GM", "GE", "GH", "GI", "GD", "GR", "GL", "GP", "GU", "GT", "GF", "GG", "GN", "GW", "GQ", "GY", "HT", "HN", "HU", "IN", "ID", "IQ", "IR", "IE", "AC", "BV", "CP", "IM", "CX", "IS", "NF", "AX", "KY", "IC", "CC", "CK", "FO", "GS", "HM", "FK", "MP", "MH", "UM", "PN", "SB", "TC", "QO", "VG", "VI", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KG", "KI", "XK", "KW", "LA", "LS", "LV", "LB", "LR", "LY", "LI", "LT", "LU", "MK", "MG", "MY", "MW", "MV", "ML", "MT", "MA", "MQ", "MU", "MR", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MZ", "MM", "UN", "NA", "NR", "NP", "NI", "NE", "NG", "NU", "NO", "NC", "NZ", "OM", "NL", "PK", "PW", "PA", "PG", "PY", "PE", "PF", "PL", "PT", "PR", "HK", "MO", "GB", "CF", "CG", "CD", "DO", "RE", "RW", "RO", "RU", "EH", "WS", "AS", "BL", "KN", "SM", "MF", "PM", "SH", "LC", "ST", "VC", "SN", "RS", "SC", "SL", "SG", "SX", "SY", "SO", "LK", "SZ", "ZA", "SD", "SS", "SE", "CH", "SR", "SJ", "TH", "TW", "TZ", "TJ", "IO", "TF", "PS", "TL", "TG", "TK", "TO", "TT", "TA", "TN", "TM", "TR", "TV", "UA", "UG", "EU", "UY", "UZ", "VU", "VE", "VN", "WF", "XA", "XB", "YE", "DJ", "ZM", "ZW"], j_l_String));
 }
 /** @override */
 m_loadNameMap__() {
  super.m_loadNameMap__();
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UM", "Islas menores alejadas de EE. UU.");
 }
 
 static $clinit() {
  LocalizedNamesImpl__es__SV.$clinit = () =>{};
  LocalizedNamesImpl__es__SV.$loadModules();
  LocalizedNamesImpl__es__419.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LocalizedNamesImpl__es__SV;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(LocalizedNamesImpl__es__SV, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_SV');

exports = LocalizedNamesImpl__es__SV; 
//# sourceMappingURL=LocalizedNamesImpl_es_SV.js.map