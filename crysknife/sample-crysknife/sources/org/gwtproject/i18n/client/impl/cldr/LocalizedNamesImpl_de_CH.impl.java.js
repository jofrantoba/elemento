goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_de_CH$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImpl__de = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_de$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class LocalizedNamesImpl__de__CH extends LocalizedNamesImpl__de {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LocalizedNamesImpl__de__CH} */
 static $create__() {
  LocalizedNamesImpl__de__CH.$clinit();
  let $instance = new LocalizedNamesImpl__de__CH();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_de_CH__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_de_CH__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_de__();
 }
 /** @override @return {Array<?string>} */
 m_loadSortedRegionCodes__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["AF", "EG", "AX", "AL", "DZ", "VI", "UM", "AS", "AD", "AO", "AI", "AQ", "AG", "GQ", "AR", "AM", "AW", "AC", "AZ", "ET", "QO", "AU", "BS", "BH", "BD", "BB", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "VG", "IO", "BN", "BG", "BF", "BI", "EA", "CL", "CN", "CP", "CK", "CR", "CI", "CW", "DK", "DE", "DG", "DM", "DO", "DJ", "EC", "SV", "ER", "EE", "EU", "EZ", "FK", "FO", "FJ", "FI", "FR", "TF", "GF", "PF", "GA", "GM", "GE", "GH", "GI", "GD", "GR", "GL", "GB", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "HN", "IN", "ID", "IQ", "IR", "IE", "IS", "IM", "IL", "IT", "JM", "JP", "YE", "JE", "JO", "KY", "KH", "CM", "CA", "IC", "CV", "KZ", "QA", "KE", "KG", "KI", "CC", "CO", "KM", "CG", "CD", "XK", "HR", "CU", "KW", "LA", "LS", "LV", "LB", "LR", "LY", "LI", "LT", "LU", "MG", "MW", "MY", "MV", "ML", "MT", "MA", "MH", "MQ", "MR", "MU", "YT", "MK", "MX", "FM", "MC", "MN", "ME", "MS", "MZ", "MM", "NA", "NR", "NP", "NC", "NZ", "NI", "NL", "NE", "NG", "NU", "KP", "MP", "NF", "NO", "OM", "AT", "TL", "PK", "PS", "PW", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "MD", "RE", "RW", "RO", "RU", "SB", "ZM", "WS", "SM", "ST", "SA", "SE", "CH", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SO", "HK", "MO", "ES", "SJ", "LK", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "ZA", "SD", "GS", "KR", "SS", "SR", "SZ", "SY", "TJ", "TW", "TZ", "TH", "TG", "TK", "TO", "TT", "TA", "TD", "CZ", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "HU", "UY", "UZ", "VU", "VA", "VE", "AE", "US", "UN", "VN", "WF", "CX", "BY", "EH", "XA", "XB", "CF", "ZW", "CY"], j_l_String));
 }
 /** @override */
 m_loadNameMap__() {
  super.m_loadNameMap__();
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BN", "Brunei");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BW", "Botswana");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BY", "Weissrussland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CV", "Kapverden");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GB", "Grossbritannien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("QO", "\u00C4usseres Ozeanien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SB", "Salomon-Inseln");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TL", "Osttimor");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZW", "Zimbabwe");
 }
 
 static $clinit() {
  LocalizedNamesImpl__de__CH.$clinit = () =>{};
  LocalizedNamesImpl__de__CH.$loadModules();
  LocalizedNamesImpl__de.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LocalizedNamesImpl__de__CH;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(LocalizedNamesImpl__de__CH, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_de_CH');

exports = LocalizedNamesImpl__de__CH; 
//# sourceMappingURL=LocalizedNamesImpl_de_CH.js.map