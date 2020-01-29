goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sr_Latn_XK$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImpl__sr__Latn = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sr_Latn$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class LocalizedNamesImpl__sr__Latn__XK extends LocalizedNamesImpl__sr__Latn {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!LocalizedNamesImpl__sr__Latn__XK}
  * @public
  */
 static $create__() {
  LocalizedNamesImpl__sr__Latn__XK.$clinit();
  let $instance = new LocalizedNamesImpl__sr__Latn__XK();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_sr_Latn_XK__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_sr_Latn_XK__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_sr_Latn__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_loadSortedRegionCodes__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["AL", "DZ", "VI", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AW", "AU", "AT", "AF", "AZ", "BS", "BH", "BD", "BB", "BE", "BZ", "BY", "BJ", "BM", "BW", "BO", "BA", "CX", "BR", "VG", "IO", "BN", "BG", "BF", "BI", "BT", "TD", "CF", "CZ", "CL", "ME", "DK", "DG", "DM", "DO", "JE", "DJ", "EG", "EC", "GQ", "ER", "EE", "ET", "EU", "EZ", "FO", "FJ", "PH", "FI", "FK", "FR", "GF", "PF", "TF", "GA", "GM", "GH", "GG", "GI", "GR", "GD", "GL", "GE", "GU", "GP", "GY", "GT", "GN", "GW", "HT", "NL", "HN", "HR", "IN", "ID", "IQ", "IR", "IE", "IS", "IT", "IL", "JM", "JP", "YE", "AM", "JO", "GS", "KR", "SS", "ZA", "CV", "KY", "KH", "CM", "CA", "IC", "BQ", "QA", "KZ", "KE", "CN", "CY", "KG", "KI", "CC", "CO", "KM", "CG", "CD", "XK", "CR", "CU", "CK", "CW", "KW", "LA", "LS", "LV", "LB", "LR", "LY", "LI", "LT", "LU", "MG", "YT", "MK", "MW", "MV", "MY", "ML", "MT", "UM", "MA", "MH", "MQ", "MU", "MR", "HU", "MX", "MM", "FM", "MD", "MC", "MN", "MS", "MZ", "NA", "NR", "DE", "NP", "NE", "NG", "NI", "NU", "NO", "NC", "NZ", "CI", "QO", "AX", "OM", "TC", "AC", "BV", "HM", "CP", "IM", "NF", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PN", "PL", "PR", "PT", "RE", "RW", "RO", "RU", "SV", "WS", "SM", "ST", "HK", "MO", "SA", "SC", "SN", "EA", "KP", "MP", "SL", "SG", "SY", "US", "SK", "SI", "SB", "SO", "ES", "RS", "LK", "SD", "SR", "CH", "SJ", "SZ", "SE", "SH", "LC", "BL", "KN", "MF", "SX", "PM", "VC", "TJ", "TH", "TW", "TZ", "TL", "TG", "TK", "TO", "TT", "TA", "TN", "TM", "TR", "TV", "UG", "UN", "AE", "GB", "UA", "UY", "UZ", "WF", "VU", "VA", "VE", "VN", "XA", "XB", "ZM", "EH", "ZW"], j_l_String));
 }
 /**
  * @override
  * @public
  */
 m_loadNameMap__() {
  super.m_loadNameMap__();
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CG", "Kongo");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CV", "Kabo Verde");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CZ", "\u010Ce\u0161ka Republika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HK", "SAR Hongkong");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KN", "Sveti Kits i Nevis");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MO", "SAR Makao");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PM", "Sveti Pjer i Mikelon");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RE", "Reunion");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UM", "Manja udaljena ostrva SAD");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VC", "Sveti Vinsent i Grenadini");
 }
 /**
  * @public
  */
 static $clinit() {
  LocalizedNamesImpl__sr__Latn__XK.$clinit = () =>{};
  LocalizedNamesImpl__sr__Latn__XK.$loadModules();
  LocalizedNamesImpl__sr__Latn.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof LocalizedNamesImpl__sr__Latn__XK;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(LocalizedNamesImpl__sr__Latn__XK, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sr_Latn_XK');

exports = LocalizedNamesImpl__sr__Latn__XK; 
//# sourceMappingURL=LocalizedNamesImpl_sr_Latn_XK.js.map