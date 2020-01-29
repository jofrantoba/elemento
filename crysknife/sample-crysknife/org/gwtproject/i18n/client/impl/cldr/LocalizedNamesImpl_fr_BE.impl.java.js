goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_fr_BE$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImpl__fr = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_fr$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class LocalizedNamesImpl__fr__BE extends LocalizedNamesImpl__fr {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!LocalizedNamesImpl__fr__BE}
  * @public
  */
 static $create__() {
  LocalizedNamesImpl__fr__BE.$clinit();
  let $instance = new LocalizedNamesImpl__fr__BE();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_fr_BE__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_fr_BE__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_fr__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_loadSortedRegionCodes__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["AF", "ZA", "AL", "DZ", "DE", "AD", "AO", "AI", "AQ", "AG", "SA", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BE", "BZ", "BJ", "BM", "BT", "BY", "BO", "BA", "BW", "BR", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "EA", "CL", "CN", "CY", "CO", "KM", "CG", "CD", "KP", "KR", "CR", "CI", "HR", "CU", "CW", "DK", "DG", "DJ", "DM", "EG", "AE", "EC", "ER", "ES", "EE", "VA", "FM", "US", "ET", "FJ", "FI", "FR", "GA", "GM", "GE", "GH", "GI", "GR", "GD", "GL", "GP", "GU", "GT", "GG", "GN", "GW", "GQ", "GY", "GF", "HT", "HN", "HU", "BV", "CX", "CP", "AC", "IM", "NF", "AX", "KY", "IC", "CC", "CK", "FO", "GS", "HM", "FK", "MP", "MH", "UM", "PN", "SB", "TC", "VG", "VI", "IN", "ID", "IQ", "IR", "IE", "IS", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KG", "KI", "XK", "KW", "LA", "RE", "LS", "LV", "LB", "LR", "LY", "LI", "LT", "LU", "MK", "MG", "MY", "MW", "MV", "ML", "MT", "MA", "MQ", "MU", "MR", "YT", "MX", "MD", "MC", "MN", "ME", "MS", "MZ", "MM", "NA", "UN", "NR", "NP", "NI", "NE", "NG", "NU", "NO", "NC", "NZ", "OM", "UG", "UZ", "PK", "PW", "PA", "PG", "PY", "NL", "BQ", "PE", "PH", "PL", "PF", "PR", "PT", "QA", "HK", "MO", "QO", "CF", "DO", "RO", "GB", "RU", "RW", "EH", "BL", "KN", "SH", "LC", "SM", "MF", "SX", "PM", "VC", "SV", "WS", "AS", "ST", "SN", "RS", "SC", "SL", "SG", "SK", "SI", "SO", "SD", "SS", "LK", "SE", "CH", "SR", "SJ", "SZ", "SY", "TJ", "TW", "TZ", "TD", "CZ", "TF", "IO", "PS", "TH", "TL", "TG", "TK", "TO", "TT", "TA", "TN", "TM", "TR", "TV", "UA", "EU", "UY", "VU", "VE", "VN", "WF", "XA", "XB", "YE", "ZM", "ZW", "EZ"], j_l_String));
 }
 /**
  * @override
  * @public
  */
 m_loadNameMap__() {
  super.m_loadNameMap__();
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BN", "Brunei");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GS", "\u00CEles G\u00E9orgie du Sud et Sandwich du Sud");
 }
 /**
  * @public
  */
 static $clinit() {
  LocalizedNamesImpl__fr__BE.$clinit = () =>{};
  LocalizedNamesImpl__fr__BE.$loadModules();
  LocalizedNamesImpl__fr.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof LocalizedNamesImpl__fr__BE;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(LocalizedNamesImpl__fr__BE, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_fr_BE');

exports = LocalizedNamesImpl__fr__BE; 
//# sourceMappingURL=LocalizedNamesImpl_fr_BE.js.map