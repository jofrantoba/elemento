goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_de_AT$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImpl__de = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_de$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class LocalizedNamesImpl__de__AT extends LocalizedNamesImpl__de {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!LocalizedNamesImpl__de__AT}
  * @public
  */
 static $create__() {
  LocalizedNamesImpl__de__AT.$clinit();
  let $instance = new LocalizedNamesImpl__de__AT();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_de_AT__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_de_AT__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_de__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_loadSortedRegionCodes__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["AF", "EG", "AX", "AL", "DZ", "VI", "UM", "AS", "AD", "AO", "AI", "AQ", "AG", "GQ", "AR", "AM", "AW", "AC", "AZ", "ET", "QO", "AU", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "VG", "IO", "BN", "BG", "BF", "BI", "CV", "EA", "CL", "CN", "CP", "CK", "CR", "CI", "CW", "DK", "DE", "DG", "DM", "DO", "DJ", "EC", "SV", "ER", "EE", "EU", "EZ", "FK", "FO", "FJ", "FI", "FR", "TF", "GF", "PF", "GA", "GM", "GE", "GH", "GI", "GD", "GR", "GL", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "HN", "IN", "ID", "IQ", "IR", "IE", "IS", "IM", "IL", "IT", "JM", "JP", "YE", "JE", "JO", "KY", "KH", "CM", "CA", "IC", "KZ", "QA", "KE", "KG", "KI", "CC", "CO", "KM", "CG", "CD", "XK", "HR", "CU", "KW", "LA", "LS", "LV", "LB", "LR", "LY", "LI", "LT", "LU", "MG", "MW", "MY", "MV", "ML", "MT", "MA", "MH", "MQ", "MR", "MU", "YT", "MK", "MX", "FM", "MC", "MN", "ME", "MS", "MZ", "MM", "NA", "NR", "NP", "NC", "NZ", "NI", "NL", "NE", "NG", "NU", "KP", "MP", "NF", "NO", "OM", "AT", "PK", "PS", "PW", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "MD", "RE", "RW", "RO", "RU", "SB", "ZM", "WS", "SM", "ST", "SA", "SE", "CH", "SN", "RS", "SC", "SL", "ZW", "SG", "SX", "SK", "SI", "SO", "HK", "MO", "ES", "LK", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "ZA", "SD", "GS", "KR", "SS", "SR", "SJ", "SZ", "SY", "TJ", "TW", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TA", "TD", "CZ", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "HU", "UY", "UZ", "VU", "VA", "VE", "AE", "GB", "US", "UN", "VN", "WF", "CX", "EH", "XA", "XB", "CF", "CY"], j_l_String));
 }
 /**
  * @override
  * @public
  */
 m_loadNameMap__() {
  super.m_loadNameMap__();
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SJ", "Svalbard und Jan Mayen");
 }
 /**
  * @public
  */
 static $clinit() {
  LocalizedNamesImpl__de__AT.$clinit = () =>{};
  LocalizedNamesImpl__de__AT.$loadModules();
  LocalizedNamesImpl__de.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof LocalizedNamesImpl__de__AT;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(LocalizedNamesImpl__de__AT, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_de_AT');

exports = LocalizedNamesImpl__de__AT; 
//# sourceMappingURL=LocalizedNamesImpl_de_AT.js.map