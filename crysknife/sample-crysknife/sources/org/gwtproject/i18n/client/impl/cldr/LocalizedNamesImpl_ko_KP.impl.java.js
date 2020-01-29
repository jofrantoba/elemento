goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ko_KP$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImpl__ko = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ko$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class LocalizedNamesImpl__ko__KP extends LocalizedNamesImpl__ko {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!LocalizedNamesImpl__ko__KP}
  * @public
  */
 static $create__() {
  LocalizedNamesImpl__ko__KP.$clinit();
  let $instance = new LocalizedNamesImpl__ko__KP();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_ko_KP__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_ko_KP__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_ko__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_loadSortedRegionCodes__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["XA", "XB", "GH", "GA", "GY", "GM", "GG", "GP", "GT", "GU", "GD", "GR", "GL", "GN", "GW", "NA", "NR", "NG", "AQ", "SS", "ZA", "NL", "BQ", "NP", "NO", "NF", "NZ", "NC", "NU", "NE", "NI", "TW", "KR", "DK", "DM", "DO", "DE", "TL", "DG", "LA", "LR", "LV", "RU", "LB", "LS", "RO", "LU", "RW", "LY", "RE", "LT", "LI", "MG", "MQ", "MH", "YT", "MO", "MK", "MW", "MY", "ML", "IM", "MX", "MC", "MA", "MU", "MR", "MZ", "ME", "MS", "MD", "MV", "MT", "MN", "US", "VI", "UM", "MM", "FM", "VU", "BH", "BB", "VA", "BS", "BD", "BM", "BJ", "VE", "VN", "BE", "BY", "BZ", "BA", "BW", "BO", "BI", "BF", "BV", "BT", "MP", "BG", "BR", "BN", "WS", "SA", "GS", "SM", "ST", "MF", "BL", "PM", "EH", "SN", "RS", "EA", "SC", "LC", "VC", "KN", "SH", "SO", "SB", "SD", "SR", "LK", "SJ", "SZ", "SE", "CH", "ES", "SK", "SI", "SY", "SL", "SX", "SG", "AE", "AW", "AM", "AR", "AS", "IS", "HT", "IE", "AZ", "AF", "AD", "AL", "DZ", "AO", "AG", "AI", "AC", "ER", "EE", "EC", "ET", "SV", "GB", "VG", "IO", "YE", "OM", "QO", "AU", "AT", "HN", "AX", "WF", "JO", "UG", "UY", "UZ", "UA", "EU", "EZ", "UN", "IQ", "IR", "IL", "EG", "IT", "IN", "ID", "JP", "JM", "ZM", "JE", "GQ", "KP", "GE", "CN", "CF", "DJ", "GI", "ZW", "TD", "CZ", "CL", "IC", "CM", "CV", "KZ", "QA", "KH", "CA", "KE", "KY", "KM", "XK", "CR", "CC", "CI", "CO", "CG", "CD", "CU", "KW", "CK", "CW", "HR", "CX", "CP", "KG", "KI", "CY", "TJ", "TZ", "TH", "TC", "TR", "TG", "TK", "TO", "TM", "TV", "TN", "TT", "TA", "PA", "PY", "PK", "PG", "PW", "PS", "FO", "PE", "PT", "FK", "PL", "PR", "FR", "TF", "GF", "PF", "FJ", "FI", "PH", "PN", "HM", "HU", "HK"], j_l_String));
 }
 /**
  * @override
  * @public
  */
 m_loadNameMap__() {
  super.m_loadNameMap__();
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KP", "\uC870\uC120\uBBFC\uC8FC\uC8FC\uC758\uC778\uBBFC\uACF5\uD654\uAD6D");
 }
 /**
  * @public
  */
 static $clinit() {
  LocalizedNamesImpl__ko__KP.$clinit = () =>{};
  LocalizedNamesImpl__ko__KP.$loadModules();
  LocalizedNamesImpl__ko.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof LocalizedNamesImpl__ko__KP;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(LocalizedNamesImpl__ko__KP, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ko_KP');

exports = LocalizedNamesImpl__ko__KP; 
//# sourceMappingURL=LocalizedNamesImpl_ko_KP.js.map