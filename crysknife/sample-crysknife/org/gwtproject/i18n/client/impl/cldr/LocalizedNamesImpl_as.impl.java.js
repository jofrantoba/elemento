goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_as$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class LocalizedNamesImpl__as extends LocalizedNamesImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!LocalizedNamesImpl__as}
  * @public
  */
 static $create__() {
  LocalizedNamesImpl__as.$clinit();
  let $instance = new LocalizedNamesImpl__as();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_as__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_as__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_loadLikelyRegionCodes__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["IN"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_loadSortedRegionCodes__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["XA", "XB", "AT", "AU", "IS", "IM", "QO", "AZ", "AD", "AF", "AS", "IE", "DZ", "AX", "AL", "AW", "AR", "AM", "UM", "VI", "UA", "EZ", "EU", "GQ", "EC", "EG", "IL", "IT", "ID", "ET", "EE", "IQ", "IR", "UG", "UZ", "KP", "MP", "UY", "AO", "AC", "AQ", "AG", "AI", "SV", "ER", "OM", "CD", "CG", "XK", "KH", "CO", "KZ", "QA", "CA", "CU", "KI", "KG", "CK", "CW", "KW", "KY", "KE", "IC", "CV", "CM", "BQ", "CC", "CI", "KM", "CR", "CP", "HR", "CX", "GM", "GY", "GN", "GW", "GT", "GP", "GU", "GA", "GG", "GR", "GL", "GD", "GH", "CY", "ST", "TD", "SM", "SJ", "WS", "CZ", "SX", "SL", "CL", "SY", "CN", "CH", "SE", "SD", "EA", "SN", "SO", "SB", "SA", "RS", "SG", "SC", "SR", "KN", "PM", "BL", "VC", "MF", "LC", "SH", "JP", "JM", "ZM", "JE", "DE", "DJ", "GI", "ZW", "GE", "JO", "TO", "TW", "TC", "TL", "TN", "TV", "TK", "TG", "TT", "DG", "DK", "DM", "DO", "TJ", "TZ", "TM", "TR", "TA", "TH", "ZA", "KR", "SS", "GS", "TF", "NE", "NG", "NR", "NA", "NU", "NC", "NZ", "NI", "NL", "NP", "NO", "NF", "EH", "PK", "PA", "PG", "PW", "PY", "PN", "PR", "PE", "PL", "PT", "FK", "FO", "FJ", "FI", "PH", "PS", "FR", "GF", "PF", "BO", "BD", "BS", "BH", "BB", "BM", "BV", "BG", "BF", "BI", "BJ", "BE", "BY", "BZ", "BR", "IO", "VG", "BN", "BA", "BW", "VU", "IN", "VN", "BT", "VA", "VE", "MN", "ME", "CF", "FM", "MR", "MO", "MG", "YT", "MV", "MY", "MW", "ML", "MT", "US", "MQ", "MH", "MX", "MK", "MC", "MD", "MM", "MA", "MU", "MZ", "MS", "YE", "LA", "LU", "LV", "LI", "LT", "LY", "LR", "LS", "LB", "LK", "SK", "SI", "AE", "GB", "ES", "SZ", "HK", "HN", "HU", "HT", "HM", "RU", "UN", "RE", "RO", "RW", "WF"], j_l_String));
 }
 /**
  * @override
  * @public
  */
 m_loadNameMap__() {
  super.m_loadNameMap__();
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("001", "\u09AC\u09BF\u09B6\u09CD\u09AC");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("002", "\u0986\u09AB\u09CD\u09F0\u09BF\u0995\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("003", "\u0989\u09A6\u09C0\u099A\u09CD\u09AF \u0986\u09AE\u09C7\u09F0\u09BF\u0995\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("005", "\u09A6\u0995\u09CD\u09B7\u09BF\u09A3 \u0986\u09AE\u09C7\u09F0\u09BF\u0995\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("009", "\u0985\u2019\u099A\u09C7\u09A8\u09C0\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("011", "\u09AA\u09BE\u09B6\u09CD\u099A\u09BE\u09A4\u09CD\u09AF \u0986\u09AB\u09CD\u09F0\u09BF\u0995\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("013", "\u09AE\u09A7\u09CD\u09AF \u0986\u09AE\u09C7\u09F0\u09BF\u0995\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("014", "\u09AA\u09CD\u09F0\u09BE\u099A\u09CD\u09AF \u0986\u09AB\u09CD\u09F0\u09BF\u0995\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("015", "\u0989\u09A6\u09C0\u099A\u09CD\u09AF \u0986\u09AB\u09CD\u09F0\u09BF\u0995\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("017", "\u09AE\u09A7\u09CD\u09AF \u0986\u09AB\u09CD\u09F0\u09BF\u0995\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("018", "\u09A6\u09BE\u0995\u09CD\u09B7\u09BF\u09A3\u09BE\u09A4\u09CD\u09AF \u0986\u09AB\u09CD\u09F0\u09BF\u0995\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("019", "\u0986\u09AE\u09C7\u09F0\u09BF\u0995\u09BE\u099B\u09CD");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("021", "\u0989\u09A4\u09CD\u09A4\u09F0\u09C0\u09AF\u09BC \u0986\u09AE\u09C7\u09F0\u09BF\u0995\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("029", "\u0995\u09C7\u09F0\u09BF\u09AC\u09BF\u09AF\u09BC\u09BE\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("030", "\u09AA\u09CD\u09F0\u09BE\u099A\u09CD\u09AF \u098F\u099B\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("034", "\u09A6\u09BE\u0995\u09CD\u09B7\u09BF\u09A3\u09BE\u09A4\u09CD\u09AF \u098F\u099B\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("035", "\u09A6\u0995\u09CD\u09B7\u09BF\u09A3-\u09AA\u09C2\u09AC \u098F\u099B\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("039", "\u09A6\u09BE\u0995\u09CD\u09B7\u09BF\u09A3\u09BE\u09A4\u09CD\u09AF \u0987\u0989\u09F0\u09CB\u09AA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("053", "\u0985\u09B7\u09CD\u099F\u09CD\u09F0\u09C7\u09B2\u09C7\u099B\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("054", "\u09AE\u09C7\u09B2\u09BE\u09A8\u09C7\u099B\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("057", "\u09AE\u09BE\u0987\u0995\u09CD\u09F0\u09CB\u09A8\u09C7\u099A\u09BF\u09AF\u09BC \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09F0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("061", "\u09AA\u09B2\u09BF\u09A8\u09C7\u099A\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("142", "\u098F\u099B\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("143", "\u09AE\u09A7\u09CD\u09AF \u098F\u099B\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("145", "\u09AA\u09BE\u09B6\u09CD\u099A\u09BE\u09A4\u09CD\u09AF \u098F\u099B\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("150", "\u0987\u0989\u09F0\u09CB\u09AA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("151", "\u09AA\u09CD\u09F0\u09BE\u099A\u09CD\u09AF \u0987\u0989\u09F0\u09CB\u09AA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("154", "\u0989\u09A6\u09C0\u099A\u09CD\u09AF \u0987\u0989\u09F0\u09CB\u09AA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("155", "\u09AA\u09BE\u09B6\u09CD\u099A\u09BE\u09A4\u09CD\u09AF \u0987\u0989\u09F0\u09CB\u09AA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("202", "\u0989\u09AA-\u099B\u09BE\u09B9\u09BE\u09F0\u09BE\u09A8 \u0986\u09AB\u09CD\u09F0\u09BF\u0995\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("419", "\u09B2\u09C7\u099F\u09BF\u09A8 \u0986\u09AE\u09C7\u09F0\u09BF\u0995\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AC", "\u098F\u099A\u09C7\u09A8\u099A\u09BF\u09AF\u09BC\u09A8 \u09A6\u09CD\u09AC\u09C0\u09AA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AD", "\u0986\u09A8\u09CD\u09A6\u09CB\u09F0\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AE", "\u09B8\u0982\u09AF\u09C1\u0995\u09CD\u09A4 \u0986\u09F0\u09AC \u0986\u09AE\u09BF\u09F0\u09BE\u09A4");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AF", "\u0986\u09AB\u0997\u09BE\u09A8\u09BF\u09B8\u09CD\u09A4\u09BE\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AG", "\u098F\u09A3\u09CD\u099F\u09BF\u0997\u09C1\u09F1\u09BE \u0986\u09F0\u09C1 \u09AC\u09BE\u09F0\u09CD\u09AC\u09C1\u09A1\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AI", "\u098F\u09A8\u0997\u09C1\u0987\u09B2\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AL", "\u0986\u09B2\u09AC\u09C7\u09A8\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AM", "\u0986\u09F0\u09CD\u09AE\u09C7\u09A8\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AO", "\u098F\u0982\u0997\u09CB\u09B2\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AQ", "\u098F\u09A3\u09CD\u099F\u09BE\u09F0\u09CD\u0995\u099F\u09BF\u0995\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AR", "\u0986\u09F0\u09CD\u099C\u09C7\u09A3\u09CD\u099F\u09BF\u09A8\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AS", "\u0986\u09AE\u09C7\u09F0\u09BF\u0995\u09BE\u09A8 \u099A\u09BE\u09AE\u09CB\u09F1\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AT", "\u0985\u09B7\u09CD\u099F\u09CD\u09F0\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AU", "\u0985\u09B7\u09CD\u099F\u09CD\u09F0\u09C7\u09B2\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AW", "\u0986\u09F0\u09C1\u09AC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AX", "\u0986\u09B2\u09A3\u09CD\u09A1 \u09A6\u09CD\u09AC\u09C0\u09AA\u09AA\u09C1\u099E\u09CD\u099C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AZ", "\u0986\u099C\u09BE\u09F0\u09AC\u09C7\u0987\u099C\u09BE\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BA", "\u09AC\u2019\u099B\u09A8\u09BF\u09AF\u09BC\u09BE \u0986\u09F0\u09C1 \u09B9\u09BE\u09F0\u09CD\u099C\u09C7\u0997\u2019\u09AD\u09BF\u09A8\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BB", "\u09AC\u09BE\u09F0\u09CD\u09AC\u09BE\u09A1\u09CB\u099A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BD", "\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BE", "\u09AC\u09C7\u09B2\u099C\u09BF\u09AF\u09BC\u09BE\u09AE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BF", "\u09AC\u09C1\u09F0\u0995\u09BF\u09A8\u09BE \u09AB\u09BE\u099A\u09CB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BG", "\u09AC\u09C1\u09B2\u0997\u09C7\u09F0\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BH", "\u09AC\u09BE\u09B9\u09F0\u09C7\u0987\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BI", "\u09AC\u09C1\u09F0\u09C1\u09A3\u09CD\u09A1\u09BF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BJ", "\u09AC\u09C7\u09A8\u09BF\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BL", "\u099B\u09C7\u0987\u09A3\u09CD\u099F \u09AC\u09BE\u09F0\u09CD\u09A5\u09B2\u09C7\u09AE\u09C7");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BM", "\u09AC\u09BE\u09F0\u09CD\u09AE\u09C1\u09A1\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BN", "\u09AC\u09CD\u09F0\u09C1\u09A8\u09C7\u0987");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BO", "\u09AC\u09B2\u09BF\u09AD\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BQ", "\u0995\u09C7\u09F0\u09BF\u09AC\u09BF\u09AF\u09BC\u09BE\u09A8 \u09A8\u09C7\u09A6\u09BE\u09F0\u09B2\u09C7\u09A3\u09CD\u09A1\u099B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BR", "\u09AC\u09CD\u09F0\u09BE\u099C\u09BF\u09B2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BS", "\u09AC\u09BE\u09B9\u09BE\u09AE\u09BE\u099B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BT", "\u09AD\u09C1\u099F\u09BE\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BV", "\u09AC\u09C1\u09AD\u09C7 \u09A6\u09CD\u09AC\u09C0\u09AA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BW", "\u09AC\u2019\u099F\u099A\u09CB\u09F1\u09BE\u09A8\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BY", "\u09AC\u09C7\u09B2\u09BE\u09F0\u09C1\u099B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BZ", "\u09AC\u09C7\u09B2\u09BF\u099C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CA", "\u0995\u09BE\u09A8\u09BE\u09A1\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CC", "\u0995\u09CB\u0995\u09CB\u099A (\u0995\u09C0\u09B2\u09BF\u0982) \u09A6\u09CD\u09AC\u09C0\u09AA\u09AA\u09C1\u099E\u09CD\u099C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CD", "\u0995\u0999\u09CD\u0997\u09CB - \u0995\u09BF\u09A8\u099A\u09BE\u099B\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CF", "\u09AE\u09A7\u09CD\u09AF \u0986\u09AB\u09CD\u09B0\u09BF\u0995\u09BE\u09A8 \u09AA\u09CD\u09B0\u099C\u09BE\u09A4\u09A8\u09CD\u09A4\u09CD\u09B0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CG", "\u0995\u0999\u09CD\u0997\u09CB - \u09AC\u09CD\u09B0\u09BE\u099C\u09BE\u09AD\u09BF\u09B2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CH", "\u099A\u09C1\u0987\u099C\u09BE\u09F0\u09B2\u09C7\u09A3\u09CD\u09A1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CI", "\u0995\u09CB\u099F\u09C7 \u09A1\u09BF \u0986\u0987\u09AD\u09F0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CK", "\u0995\u09C1\u0995 \u09A6\u09CD\u09AC\u09C0\u09AA\u09AA\u09C1\u099E\u09CD\u099C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CL", "\u099A\u09BF\u09B2\u09BF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CM", "\u0995\u09C7\u09AE\u09C7\u09F0\u09C1\u09A3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CN", "\u099A\u09C0\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CO", "\u0995\u09B2\u09AE\u09CD\u09AC\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CP", "\u0995\u09CD\u09B2\u09BF\u09AA\u09BE\u09F0\u099F\u09CB\u09A8 \u09A6\u09CD\u09AC\u09C0\u09AA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CR", "\u0995\u09CB\u09B7\u09CD\u099F\u09BE \u09F0\u09BF\u0995\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CU", "\u0995\u09BF\u0989\u09AC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CV", "\u0995\u09C7\u09AA \u09AD\u09BE\u09B0\u09CD\u09A6\u09C7");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CW", "\u0995\u09C1\u09F0\u09BE\u0995\u09BE\u0993");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CX", "\u0996\u09CD\u09F0\u09C0\u09B7\u09CD\u099F\u09AE\u09BE\u099B \u09A6\u09CD\u09AC\u09C0\u09AA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CY", "\u099A\u09BE\u0987\u09AA\u09CD\u09F0\u09BE\u099B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CZ", "\u099A\u09BF\u099C\u09C7\u099A\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DE", "\u099C\u09BE\u09F0\u09CD\u09AE\u09BE\u09A8\u09C0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DG", "\u09A1\u09BF\u09AF\u09BC\u09C7\u0997\u09CB \u0997\u09BE\u09F0\u09CD\u099A\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DJ", "\u099C\u09BF\u09AC\u09C1\u099F\u09BF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DK", "\u09A1\u09C7\u09A8\u09AE\u09BE\u09F0\u09CD\u0995");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DM", "\u09A1\u2019\u09AE\u09BF\u09A8\u09BF\u0995\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DO", "\u09A1\u2019\u09AE\u09BF\u09A8\u09BF\u0995\u09BE\u09A8 \u09F0\u09BF\u09AA\u09BE\u09AC\u09CD\u09B2\u09BF\u0995");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DZ", "\u0986\u09B2\u099C\u09C7\u09F0\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EA", "\u099A\u09C7\u0989\u099F\u09BE \u0986\u09F0\u09C1 \u09AE\u09C7\u09B2\u09BF\u09B2\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EC", "\u0987\u0995\u09C1\u09F1\u09C7\u09A1\u09F0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EE", "\u0987\u09B7\u09CD\u099F\u09CB\u09A8\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EG", "\u0987\u099C\u09BF\u09AA\u09CD\u09A4");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EH", "\u09AA\u09B6\u09CD\u099A\u09BF\u09AE\u09C0\u09AF\u09BC \u099B\u09BE\u09B9\u09BE\u09F0\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ER", "\u098F\u09F0\u09BF\u09A4\u09CD\u09F0\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ES", "\u09B8\u09CD\u09AA\u09C7\u0987\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ET", "\u0987\u09A5\u09BF\u0985\u2019\u09AA\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EU", "\u0987\u0989\u09F0\u09CB\u09AA\u09C0\u09AF\u09BC \u09B8\u0982\u0998");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EZ", "\u0987\u0989\u09F0\u09CB\u099C\u2019\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FI", "\u09AB\u09BF\u09A8\u09B2\u09C7\u09A3\u09CD\u09A1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FJ", "\u09AB\u09BF\u099C\u09BF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FK", "\u09AB\u0995\u09B2\u09C7\u09A3\u09CD\u09A1 \u09A6\u09CD\u09AC\u09C0\u09AA\u09AA\u09C1\u099E\u09CD\u099C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FM", "\u09AE\u09BE\u0987\u0995\u09CD\u09F0\u09CB\u09A8\u09C7\u099A\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FO", "\u09AB\u09BE\u09F0\u09CB \u09A6\u09CD\u09AC\u09C0\u09AA\u09AA\u09C1\u099E\u09CD\u099C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FR", "\u09AB\u09CD\u09F0\u09BE\u09A8\u09CD\u09B8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GA", "\u0997\u09C7\u09AC\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GB", "\u09B8\u0982\u09AF\u09C1\u0995\u09CD\u09A4 \u09F0\u09BE\u099C\u09CD\u09AF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GD", "\u0997\u09CD\u09F0\u09C7\u09A8\u09BE\u09A1\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GE", "\u099C\u09F0\u09CD\u099C\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GF", "\u09AB\u09CD\u09F0\u09BE\u09A8\u09CD\u09B8 \u0997\u09AF\u09BC\u09BE\u09A8\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GG", "\u0997\u09CB\u09F0\u09C7\u09A8\u099A\u09BF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GH", "\u0998\u09BE\u09A8\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GI", "\u099C\u09BF\u09AC\u09CD\u09F0\u09BE\u09B2\u09CD\u099F\u09F0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GL", "\u0997\u09CD\u09F0\u09C0\u09A3\u09B2\u09C7\u09A3\u09CD\u09A1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GM", "\u0997\u09BE\u09AE\u09CD\u09AC\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GN", "\u0997\u09BF\u09A8\u09BF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GP", "\u0997\u09C1\u09F1\u09BE\u09A1\u09C7\u09B2\u09C1\u09AA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GQ", "\u0987\u0995\u09C1\u09F1\u09C7\u099F\u09F0\u09BF\u09AF\u09BC\u09C7\u09B2 \u0997\u09BF\u09A8\u09BF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GR", "\u0997\u09CD\u09F0\u09C0\u099A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GS", "\u09A6\u0995\u09CD\u09B7\u09BF\u09A3 \u099C\u09F0\u09CD\u099C\u09BF\u09AF\u09BC\u09BE \u0986\u09F0\u09C1 \u09A6\u0995\u09CD\u09B7\u09BF\u09A3 \u099A\u09C7\u09A3\u09CD\u09A1\u09F1\u09BF\u099A \u09A6\u09CD\u09AC\u09C0\u09AA\u09AA\u09C1\u099E\u09CD\u099C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GT", "\u0997\u09C1\u09F1\u09BE\u099F\u09C7\u09AE\u09BE\u09B2\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GU", "\u0997\u09C1\u09F1\u09BE\u09AE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GW", "\u0997\u09BF\u09A8\u09BF-\u09AC\u09BF\u099B\u09BE\u0993");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GY", "\u0997\u09BE\u09AF\u09BC\u09BE\u09A8\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HK", "\u09B9\u0982 \u0995\u0982 \u098F\u099B. \u098F. \u0986\u09F0. \u099A\u09C0\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HM", "\u09B9\u09BE\u09F0\u09CD\u09A1 \u09A6\u09CD\u09AC\u09C0\u09AA \u0986\u09F0\u09C1 \u09AE\u09C7\u0995\u09A1\u09CB\u09A8\u09BE\u09B2\u09CD\u09A1 \u09A6\u09CD\u09AC\u09C0\u09AA\u09AA\u09C1\u099E\u09CD\u099C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HN", "\u09B9\u09A8\u09CD\u09A6\u09C1\u09F0\u09BE\u099B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HR", "\u0995\u09CD\u09F0\u09CB\u09F1\u09C7\u099B\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HT", "\u09B9\u09BE\u0987\u099F\u09BF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HU", "\u09B9\u09BE\u0982\u0997\u09C7\u09F0\u09C0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IC", "\u0995\u09C7\u09A8\u09C7\u09F0\u09C0 \u09A6\u09CD\u09AC\u09C0\u09AA\u09AA\u09C1\u099E\u09CD\u099C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ID", "\u0987\u09A3\u09CD\u09A1\u09CB\u09A8\u09C7\u099A\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IE", "\u0986\u09AF\u09BC\u09BE\u09F0\u09B2\u09C7\u09A3\u09CD\u09A1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IL", "\u0987\u099C\u09F0\u09BE\u0987\u09B2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IM", "\u0986\u0987\u09B2 \u0985\u09AB \u09AE\u09C7\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IN", "\u09AD\u09BE\u09F0\u09A4");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IO", "\u09AC\u09CD\u09F0\u09BF\u099F\u09BF\u099B \u0987\u09A3\u09CD\u09A1\u09BF\u09AF\u09BC\u09BE\u09A8 \u0985\u2019\u099A\u09A8 \u099F\u09C7\u09F0\u09BF\u099F\u2019\u09F0\u09BF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IQ", "\u0987\u09F0\u09BE\u0995");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IR", "\u0987\u09F0\u09BE\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IS", "\u0986\u0987\u099A\u09B2\u09C7\u09A3\u09CD\u09A1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IT", "\u0987\u099F\u09BE\u09B2\u09BF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JE", "\u099C\u09BE\u09F0\u09CD\u099A\u09BF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JM", "\u099C\u09BE\u09AE\u09BE\u0987\u0995\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JO", "\u099C\u09F0\u09CD\u09A1\u09BE\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JP", "\u099C\u09BE\u09AA\u09BE\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KE", "\u0995\u09C7\u09A8\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KG", "\u0995\u09BF\u09F0\u09CD\u0997\u09BF\u099C\u09B8\u09CD\u09A4\u09BE\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KH", "\u0995\u09AE\u09CD\u09AC\u09CB\u09A1\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KI", "\u0995\u09BF\u09F0\u09BF\u09AC\u09BE\u099F\u09BF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KM", "\u0995\u09CB\u09AE\u09CB\u09F0\u09CB\u099C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KN", "\u099B\u09C7\u0987\u09A3\u09CD\u099F \u0995\u09BF\u099F\u099B \u0986\u09F0\u09C1 \u09A8\u09C7\u09AD\u09BF\u099B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KP", "\u0989\u09A4\u09CD\u09A4\u09F0 \u0995\u09CB\u09F0\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KR", "\u09A6\u0995\u09CD\u09B7\u09BF\u09A3 \u0995\u09CB\u09F0\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KW", "\u0995\u09C1\u09F1\u09C7\u0987\u099F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KY", "\u0995\u09C7\u0987\u09AE\u09C7\u09A8 \u09A6\u09CD\u09AC\u09C0\u09AA\u09AA\u09C1\u099E\u09CD\u099C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KZ", "\u0995\u09BE\u099C\u09BE\u0996\u09BE\u09B8\u09CD\u09A4\u09BE\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LA", "\u09B2\u09BE\u0993\u099A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LB", "\u09B2\u09C7\u09AC\u09BE\u09A8\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LC", "\u099B\u09C7\u0987\u09A3\u09CD\u099F \u09B2\u09C1\u099A\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LI", "\u09B2\u09BF\u099A\u099F\u09C7\u09A8\u09B7\u09CD\u099F\u09C7\u0987\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LK", "\u09B6\u09CD\u09B0\u09C0\u09B2\u0982\u0995\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LR", "\u09B2\u09BF\u09AC\u09C7\u09F0\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LS", "\u09B2\u09C7\u099B\u2019\u09A5\u2019");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LT", "\u09B2\u09BF\u09A5\u09C1\u09F1\u09BE\u09A8\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LU", "\u09B2\u09BE\u0995\u09CD\u09B8\u09C7\u09AE\u09AC\u09BE\u09F0\u09CD\u0997");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LV", "\u09B2\u09BE\u099F\u09AD\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LY", "\u09B2\u09BF\u09AC\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MA", "\u09AE\u09F0\u0995\u09CD\u0995\u09CB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MC", "\u09AE\u09CB\u09A8\u09BE\u0995\u09CB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MD", "\u09AE\u09CB\u09B2\u09A1\u09CB\u09AD\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ME", "\u09AE\u09A3\u09CD\u099F\u09C7\u09A8\u09C7\u0997\u09CD\u09F0\u09C1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MF", "\u099B\u09C7\u0987\u09A3\u09CD\u099F \u09AE\u09BE\u09F0\u09CD\u099F\u09BF\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MG", "\u09AE\u09BE\u09A6\u09BE\u0997\u09BE\u09B8\u09CD\u0995\u09BE\u09F0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MH", "\u09AE\u09BE\u09F0\u09CD\u09B6\u09CD\u09AC\u09BE\u09B2 \u09A6\u09CD\u09AC\u09C0\u09AA\u09AA\u09C1\u099E\u09CD\u099C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MK", "\u09AE\u09C7\u099A\u09BF\u09A1\u09CB\u09A8\u09C0\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ML", "\u09AE\u09BE\u09B2\u09BF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MM", "\u09AE\u09CD\u09AF\u09BE\u09A8\u09AE\u09BE\u09F0 (\u09AC\u09BE\u09F0\u09CD\u09AE\u09BE)");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MN", "\u09AE\u0999\u09CD\u0997\u09CB\u09B2\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MO", "\u09AE\u09BE\u0995\u09BE\u0989 \u098F\u099B. \u098F. \u0986\u09F0. \u099A\u09C0\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MP", "\u0989\u09A4\u09CD\u09A4\u09F0 \u09AE\u09BE\u09F0\u09BF\u09AF\u09BC\u09BE\u09A8\u09BE \u09A6\u09CD\u09AC\u09C0\u09AA\u09AA\u09C1\u099E\u09CD\u099C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MQ", "\u09AE\u09BE\u09F0\u09CD\u099F\u09BF\u09A8\u09BF\u0995");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MR", "\u09AE\u09BE\u0989\u09F0\u09BF\u099F\u09BE\u09A8\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MS", "\u09AE\u2019\u09A3\u09CD\u099F\u099B\u09C7\u09F0\u09BE\u099F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MT", "\u09AE\u09BE\u09B2\u09CD\u099F\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MU", "\u09AE\u09F0\u09BF\u099B\u09BE\u099B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MV", "\u09AE\u09BE\u09B2\u09A6\u09CD\u09AC\u09C0\u09AA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MW", "\u09AE\u09BE\u09B2\u09BE\u09F1\u09BF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MX", "\u09AE\u09C7\u0995\u09CD\u09B8\u09BF\u0995\u09CB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MY", "\u09AE\u09BE\u09B2\u09AF\u09BC\u09C7\u099A\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MZ", "\u09AE\u2019\u099C\u09BE\u09AE\u09AC\u09BF\u0995");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NA", "\u09A8\u09BE\u09AE\u09BF\u09AC\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NC", "\u09A8\u09BF\u0989 \u0995\u09C7\u09B2\u09BF\u09A1\u09CB\u09A8\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NE", "\u09A8\u09BE\u0987\u099C\u09BE\u09F0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NF", "\u09A8\u2019\u09F0\u09AB\u2019\u0995 \u09A6\u09CD\u09AC\u09C0\u09AA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NG", "\u09A8\u09BE\u0987\u099C\u09C7\u09F0\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NI", "\u09A8\u09BF\u0995\u09BE\u09F0\u09BE\u0997\u09C1\u09F1\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NL", "\u09A8\u09C7\u09A1\u09BE\u09F0\u09B2\u09C7\u09A3\u09CD\u09A1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NO", "\u09A8\u09F0\u09F1\u09C7");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NP", "\u09A8\u09C7\u09AA\u09BE\u09B2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NR", "\u09A8\u09BE\u0989\u09F0\u09C1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NU", "\u09A8\u09BF\u0989");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NZ", "\u09A8\u09BF\u0989\u099C\u09BF\u09B2\u09C7\u09A3\u09CD\u09A1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("OM", "\u0993\u09AE\u09BE\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PA", "\u09AA\u09BE\u09A8\u09BE\u09AE\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PE", "\u09AA\u09C7\u09F0\u09C1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PF", "\u09AB\u09CD\u09F0\u09BE\u09A8\u09CD\u09B8 \u09AA\u09CB\u09B2\u09C7\u09A8\u099A\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PG", "\u09AA\u09BE\u09AA\u09C1\u09F1\u09BE \u09A8\u09BF\u0989 \u0997\u09BF\u09A8\u09BF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PH", "\u09AB\u09BF\u09B2\u09BF\u09AA\u09BE\u0987\u09A8\u099B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PK", "\u09AA\u09BE\u0995\u09BF\u09B8\u09CD\u09A4\u09BE\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PL", "\u09AA\u09CB\u09B2\u09C7\u09A3\u09CD\u09A1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PM", "\u099B\u09C7\u0987\u09A3\u09CD\u099F \u09AA\u09BF\u09AF\u09BC\u09C7\u09F0\u09C7 \u0986\u09F0\u09C1 \u09AE\u09BF\u0995\u09BF\u0989\u09F1\u09C7\u09B2\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PN", "\u09AA\u09BF\u099F\u0995\u09C7\u0987\u09F0\u09CD\u09A3 \u09A6\u09CD\u09AC\u09C0\u09AA\u09AA\u09C1\u099E\u09CD\u099C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PR", "\u09AA\u09C1\u09F1\u09C7\u09F0\u09CD\u099F\u09CB \u09F0\u09BF\u0995\u09CB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PS", "\u09AB\u09BF\u09B2\u09BF\u09B8\u09CD\u09A4\u09BF\u09A8 \u0985\u099E\u09CD\u099A\u09B2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PT", "\u09AA\u09F0\u09CD\u09A4\u09C1\u0997\u09BE\u09B2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PW", "\u09AA\u09BE\u09B2\u09BE\u0989");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PY", "\u09AA\u09BE\u09F0\u09BE\u0997\u09C1\u09F1\u09C7");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("QA", "\u0995\u09BE\u099F\u09BE\u09F0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("QO", "\u0986\u0989\u099F\u09B2\u09BE\u09AF\u09BC\u09BF\u0982 \u0985\u2019\u099A\u09BF\u09AF\u09BC\u09BE\u09A8\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RE", "\u09F0\u09BF\u0987\u0989\u09A8\u09BF\u09AF\u09BC\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RO", "\u09F0\u09CB\u09AE\u09BE\u09A8\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RS", "\u099B\u09BE\u09F0\u09CD\u09AC\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RU", "\u09F0\u09BE\u099B\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RW", "\u09F0\u09CB\u09F1\u09BE\u09A3\u09CD\u09A1\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SA", "\u099A\u09CC\u09A1\u09BF \u0986\u09F0\u09AC\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SB", "\u099A\u09CB\u09B2\u09CB\u09AE\u09CB\u09A8 \u09A6\u09CD\u09AC\u09C0\u09AA\u09AA\u09C1\u099E\u09CD\u099C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SC", "\u099B\u09BF\u099A\u09BF\u09B2\u09BF\u099B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SD", "\u099A\u09C1\u09A1\u09BE\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SE", "\u099A\u09C1\u0987\u09A1\u09C7\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SG", "\u099B\u09BF\u0982\u0997\u09BE\u09AA\u09C1\u09F0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SH", "\u099B\u09C7\u0987\u09A3\u09CD\u099F \u09B9\u09C7\u09B2\u09C7\u09A8\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SI", "\u09B6\u09CD\u09B2\u09CB\u09AD\u09C7\u09A8\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SJ", "\u099A\u09BE\u09AD\u09BE\u09B2\u09AC\u09BE\u09F0\u09CD\u09A1 \u0986\u09F0\u09C1 \u099C\u09A8 \u09AE\u09C7\u09AF\u09BC\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SK", "\u09B6\u09CD\u09B2\u09CB\u09AD\u09BE\u0995\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SL", "\u099A\u09BF\u09AF\u09BC\u09C7\u09F0\u09BE \u09B2\u09BF\u0985\u2019\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SM", "\u099A\u09BE\u09A8 \u09AE\u09BE\u09F0\u09BF\u09A8\u09CB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SN", "\u099A\u09C7\u09A8\u09C7\u0997\u09BE\u09B2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SO", "\u099A\u09CB\u09AE\u09BE\u09B2\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SR", "\u099B\u09C1\u09F0\u09BF\u09A8\u09BE\u09AE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SS", "\u09A6\u0995\u09CD\u09B7\u09BF\u09A3 \u099A\u09C1\u09A1\u09BE\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ST", "\u099A\u09BE\u0993 \u099F\u09CB\u09AE\u09C7 \u0986\u09F0\u09C1 \u09AA\u09CD\u09F0\u09BF\u09A8\u099A\u09BF\u09AA\u09C7");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SV", "\u098F\u09B2 \u099B\u09C7\u09B2\u09AD\u09C7\u09A1\u2019\u09F0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SX", "\u099A\u09BF\u09A3\u09CD\u099F \u09AE\u09BE\u09F0\u09CD\u099F\u09C7\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SY", "\u099A\u09BF\u09F0\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SZ", "\u09B8\u09CD\u09AC\u09BE\u099C\u09BF\u09B2\u09C7\u09A3\u09CD\u09A1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TA", "\u09A4\u09CD\u09F0\u09BF\u09B8\u09CD\u09A4\u09BE\u09A8 \u09A6\u09CD\u09AF\u09BE \u0995\u09C1\u09A8\u09B9\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TC", "\u099F\u09BE\u09F0\u09CD\u0995\u099B \u0985\u09F0\u09C1 \u0995\u09C7\u0987\u0995\u2019\u099B \u09A6\u09CD\u09AC\u09C0\u09AA\u09AA\u09C1\u099E\u09CD\u099C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TD", "\u099A\u09BE\u09A1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TF", "\u09A6\u0995\u09CD\u09B7\u09BF\u09A3 \u09AB\u09CD\u09F0\u09BE\u09A8\u09CD\u09B8\u09F0 \u0985\u099E\u09CD\u099A\u09B2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TG", "\u099F\u09CB\u0997\u09CB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TH", "\u09A5\u09BE\u0987\u09B2\u09C7\u09A3\u09CD\u09A1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TJ", "\u09A4\u09BE\u099C\u09BF\u0995\u09BF\u09B8\u09CD\u09A4\u09BE\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TK", "\u099F\u09CB\u0995\u09C7\u09B2\u09BE\u0989");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TL", "\u099F\u09BF\u09AE\u09CB\u09F0-\u09B2\u09C7\u099A\u099F\u09C7");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TM", "\u09A4\u09C1\u09F0\u09CD\u0995\u09AE\u09C7\u09A8\u09BF\u09B8\u09CD\u09A4\u09BE\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TN", "\u099F\u09C1\u09A8\u09BF\u099A\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TO", "\u099F\u0982\u0997\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TR", "\u09A4\u09C1\u09F0\u09CD\u0995\u09BF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TT", "\u099F\u09CD\u09F0\u09BF\u09A8\u09BF\u09A1\u09BE\u09A1 \u0986\u09F0\u09C1 \u099F\u09CB\u09AC\u09BE\u0997\u09CB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TV", "\u099F\u09C1\u09AD\u09BE\u09B2\u09C1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TW", "\u099F\u09BE\u0987\u09F1\u09BE\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TZ", "\u09A4\u09BE\u099E\u09CD\u099C\u09BE\u09A8\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UA", "\u0987\u0989\u0995\u09CD\u09F0\u09C7\u0987\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UG", "\u0989\u0997\u09BE\u09A3\u09CD\u09A1\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UM", "\u0987\u0989. \u098F\u099B. \u0986\u0989\u099F\u09B2\u09BE\u09AF\u09BC\u09BF\u0982 \u09A6\u09CD\u09AC\u09C0\u09AA\u09AA\u09C1\u099E\u09CD\u099C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UN", "\u09F0\u09BE\u09B7\u09CD\u099F\u09CD\u09F0\u09B8\u0982\u0998");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("US", "\u09AE\u09BE\u09F0\u09CD\u0995\u09BF\u09A8 \u09AF\u09C1\u0995\u09CD\u09A4\u09F0\u09BE\u09B7\u09CD\u099F\u09CD\u09F0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UY", "\u0989\u09F0\u09C1\u0997\u09C1\u09F1\u09C7");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UZ", "\u0989\u099C\u09AC\u09C7\u0995\u09BF\u09B8\u09CD\u09A4\u09BE\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VA", "\u09AD\u09C7\u099F\u09BF\u0995\u09BE\u09A8 \u099A\u09BF\u099F\u09BF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VC", "\u099B\u09C7\u0987\u09A3\u09CD\u099F \u09AD\u09BF\u09A8\u099A\u09C7\u09A3\u09CD\u099F \u0986\u09F0\u09C1 \u0997\u09CD\u09F0\u09C0\u09A3\u09BE\u09A1\u09BE\u0987\u09A8\u099B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VE", "\u09AD\u09C7\u09A8\u09BF\u099C\u09C1\u09F1\u09C7\u09B2\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VG", "\u09AC\u09CD\u09F0\u09BF\u099F\u09BF\u099B \u09AD\u09BE\u09F0\u09CD\u099C\u09BF\u09A8 \u09A6\u09CD\u09AC\u09C0\u09AA\u09AA\u09C1\u099E\u09CD\u099C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VI", "\u0987\u0989. \u098F\u099B. \u09AD\u09BE\u09F0\u09CD\u099C\u09BF\u09A8 \u09A6\u09CD\u09AC\u09C0\u09AA\u09AA\u09C1\u099E\u09CD\u099C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VN", "\u09AD\u09BF\u09AF\u09BC\u09C7\u099F\u09A8\u09BE\u09AE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VU", "\u09AD\u09BE\u09A8\u09BE\u099F\u09C1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("WF", "\u09F1\u09BE\u09B2\u09BF\u099B \u0986\u09F0\u09C1 \u09AB\u09C1\u099F\u09C1\u09A8\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("WS", "\u099A\u09BE\u09AE\u09CB\u09F1\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("XK", "\u0995\u099A\u2019\u09AD\u2019");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("YE", "\u09AF\u09BC\u09C7\u09AE\u09C7\u09A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("YT", "\u09AE\u09BE\u09AF\u09BC\u09CB\u099F\u09CD\u099F\u09C7");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZA", "\u09A6\u0995\u09CD\u09B7\u09BF\u09A3 \u0986\u09AB\u09CD\u09B0\u09BF\u0995\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZM", "\u099C\u09BE\u09AE\u09CD\u09AC\u09BF\u09AF\u09BC\u09BE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZW", "\u099C\u09BF\u09AE\u09CD\u09AC\u09BE\u09AC\u09F1\u09C7");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZZ", "\u0985\u099C\u09CD\u099E\u09BE\u09A4 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09F0");
 }
 /**
  * @public
  */
 static $clinit() {
  LocalizedNamesImpl__as.$clinit = () =>{};
  LocalizedNamesImpl__as.$loadModules();
  LocalizedNamesImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof LocalizedNamesImpl__as;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(LocalizedNamesImpl__as, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_as');

exports = LocalizedNamesImpl__as; 
//# sourceMappingURL=LocalizedNamesImpl_as.js.map