goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ru$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class LocalizedNamesImpl__ru extends LocalizedNamesImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!LocalizedNamesImpl__ru}
  * @public
  */
 static $create__() {
  LocalizedNamesImpl__ru.$clinit();
  let $instance = new LocalizedNamesImpl__ru();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_ru__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_ru__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_loadLikelyRegionCodes__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["RU", "UA", "KZ", "PL", "DE", "UZ"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_loadSortedRegionCodes__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["XA", "XB", "AU", "AT", "AZ", "AX", "AL", "DZ", "AS", "AI", "AO", "AD", "AQ", "AG", "AR", "AM", "AW", "AF", "BS", "BD", "BB", "BH", "BY", "BZ", "BE", "BJ", "BM", "BG", "BO", "BQ", "BA", "BW", "BR", "IO", "BN", "BF", "BI", "BT", "VU", "VA", "GB", "HU", "VE", "VG", "VI", "UM", "QO", "TL", "VN", "GA", "HT", "GY", "GM", "GH", "GP", "GT", "GN", "GW", "DE", "GG", "GI", "HN", "HK", "GD", "GL", "GR", "GE", "GU", "DK", "JE", "DJ", "DG", "DM", "DO", "EZ", "EU", "EG", "ZM", "EH", "ZW", "IL", "IN", "ID", "JO", "IQ", "IR", "IE", "IS", "ES", "IT", "YE", "CV", "KZ", "KH", "CM", "CA", "IC", "QA", "KE", "CY", "KG", "KI", "CN", "KP", "CC", "CO", "KM", "CG", "CD", "XK", "CR", "CI", "CU", "KW", "CW", "LA", "LV", "LS", "LR", "LB", "LY", "LT", "LI", "LU", "MU", "MR", "MG", "YT", "MO", "MK", "MW", "MY", "ML", "MV", "MT", "MA", "MQ", "MH", "MX", "MZ", "MD", "MC", "MN", "MS", "MM", "NA", "NR", "NP", "NE", "NG", "NL", "NI", "NU", "NZ", "NC", "NO", "AE", "PN", "TC", "HM", "BV", "AC", "CP", "IM", "NF", "CX", "SH", "OM", "UN", "KY", "CK", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PL", "PT", "PR", "KR", "RE", "RU", "RW", "RO", "SV", "WS", "SM", "ST", "SA", "SZ", "MP", "SC", "BL", "SN", "MF", "PM", "VC", "KN", "LC", "RS", "EA", "SG", "SX", "SY", "SK", "SI", "US", "SB", "SO", "SD", "SR", "SL", "TJ", "TH", "TW", "TZ", "TG", "TK", "TO", "TT", "TA", "TV", "TN", "TM", "TR", "UG", "UZ", "UA", "WF", "UY", "FO", "FM", "FJ", "PH", "FI", "FK", "FR", "GF", "PF", "TF", "HR", "CF", "TD", "ME", "CZ", "CL", "CH", "SE", "SJ", "LK", "EC", "GQ", "ER", "EE", "ET", "GS", "ZA", "SS", "JM", "JP"], j_l_String));
 }
 /**
  * @override
  * @public
  */
 m_loadNameMap__() {
  super.m_loadNameMap__();
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("001", "\u0432\u0435\u0441\u044C \u043C\u0438\u0440");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("002", "\u0410\u0444\u0440\u0438\u043A\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("003", "\u0421\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0410\u043C\u0435\u0440\u0438\u043A\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("005", "\u042E\u0436\u043D\u0430\u044F \u0410\u043C\u0435\u0440\u0438\u043A\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("009", "\u041E\u043A\u0435\u0430\u043D\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("011", "\u0417\u0430\u043F\u0430\u0434\u043D\u0430\u044F \u0410\u0444\u0440\u0438\u043A\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("013", "\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0410\u043C\u0435\u0440\u0438\u043A\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("014", "\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F \u0410\u0444\u0440\u0438\u043A\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("015", "\u0421\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0410\u0444\u0440\u0438\u043A\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("017", "\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0410\u0444\u0440\u0438\u043A\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("018", "\u042E\u0436\u043D\u0430\u044F \u0410\u0444\u0440\u0438\u043A\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("019", "\u0410\u043C\u0435\u0440\u0438\u043A\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("021", "\u0421\u0435\u0432\u0435\u0440\u043E\u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u0440\u0435\u0433\u0438\u043E\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("029", "\u041A\u0430\u0440\u0438\u0431\u044B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("030", "\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F \u0410\u0437\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("034", "\u042E\u0436\u043D\u0430\u044F \u0410\u0437\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("035", "\u042E\u0433\u043E-\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F \u0410\u0437\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("039", "\u042E\u0436\u043D\u0430\u044F \u0415\u0432\u0440\u043E\u043F\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("053", "\u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0430\u0437\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("054", "\u041C\u0435\u043B\u0430\u043D\u0435\u0437\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("057", "\u041C\u0438\u043A\u0440\u043E\u043D\u0435\u0437\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("061", "\u041F\u043E\u043B\u0438\u043D\u0435\u0437\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("142", "\u0410\u0437\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("143", "\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0410\u0437\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("145", "\u0417\u0430\u043F\u0430\u0434\u043D\u0430\u044F \u0410\u0437\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("150", "\u0415\u0432\u0440\u043E\u043F\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("151", "\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F \u0415\u0432\u0440\u043E\u043F\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("154", "\u0421\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0415\u0432\u0440\u043E\u043F\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("155", "\u0417\u0430\u043F\u0430\u0434\u043D\u0430\u044F \u0415\u0432\u0440\u043E\u043F\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("202", "\u0422\u0440\u043E\u043F\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0410\u0444\u0440\u0438\u043A\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("419", "\u041B\u0430\u0442\u0438\u043D\u0441\u043A\u0430\u044F \u0410\u043C\u0435\u0440\u0438\u043A\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AC", "\u043E-\u0432 \u0412\u043E\u0437\u043D\u0435\u0441\u0435\u043D\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AD", "\u0410\u043D\u0434\u043E\u0440\u0440\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AE", "\u041E\u0410\u042D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AF", "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AG", "\u0410\u043D\u0442\u0438\u0433\u0443\u0430 \u0438 \u0411\u0430\u0440\u0431\u0443\u0434\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AI", "\u0410\u043D\u0433\u0438\u043B\u044C\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AL", "\u0410\u043B\u0431\u0430\u043D\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AM", "\u0410\u0440\u043C\u0435\u043D\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AO", "\u0410\u043D\u0433\u043E\u043B\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AQ", "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u0434\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AR", "\u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AS", "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0435 \u0421\u0430\u043C\u043E\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AT", "\u0410\u0432\u0441\u0442\u0440\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AU", "\u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AW", "\u0410\u0440\u0443\u0431\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AX", "\u0410\u043B\u0430\u043D\u0434\u0441\u043A\u0438\u0435 \u043E-\u0432\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AZ", "\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BA", "\u0411\u043E\u0441\u043D\u0438\u044F \u0438 \u0413\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BB", "\u0411\u0430\u0440\u0431\u0430\u0434\u043E\u0441");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BD", "\u0411\u0430\u043D\u0433\u043B\u0430\u0434\u0435\u0448");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BE", "\u0411\u0435\u043B\u044C\u0433\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BF", "\u0411\u0443\u0440\u043A\u0438\u043D\u0430-\u0424\u0430\u0441\u043E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BG", "\u0411\u043E\u043B\u0433\u0430\u0440\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BH", "\u0411\u0430\u0445\u0440\u0435\u0439\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BI", "\u0411\u0443\u0440\u0443\u043D\u0434\u0438");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BJ", "\u0411\u0435\u043D\u0438\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BL", "\u0421\u0435\u043D-\u0411\u0430\u0440\u0442\u0435\u043B\u0435\u043C\u0438");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BM", "\u0411\u0435\u0440\u043C\u0443\u0434\u0441\u043A\u0438\u0435 \u043E-\u0432\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BN", "\u0411\u0440\u0443\u043D\u0435\u0439-\u0414\u0430\u0440\u0443\u0441\u0441\u0430\u043B\u0430\u043C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BO", "\u0411\u043E\u043B\u0438\u0432\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BQ", "\u0411\u043E\u043D\u044D\u0439\u0440, \u0421\u0438\u043D\u0442-\u042D\u0441\u0442\u0430\u0442\u0438\u0443\u0441 \u0438 \u0421\u0430\u0431\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BR", "\u0411\u0440\u0430\u0437\u0438\u043B\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BS", "\u0411\u0430\u0433\u0430\u043C\u044B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BT", "\u0411\u0443\u0442\u0430\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BV", "\u043E-\u0432 \u0411\u0443\u0432\u0435");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BW", "\u0411\u043E\u0442\u0441\u0432\u0430\u043D\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BY", "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BZ", "\u0411\u0435\u043B\u0438\u0437");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CA", "\u041A\u0430\u043D\u0430\u0434\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CC", "\u041A\u043E\u043A\u043E\u0441\u043E\u0432\u044B\u0435 \u043E-\u0432\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CD", "\u041A\u043E\u043D\u0433\u043E - \u041A\u0438\u043D\u0448\u0430\u0441\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CF", "\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u043E-\u0410\u0444\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CG", "\u041A\u043E\u043D\u0433\u043E - \u0411\u0440\u0430\u0437\u0437\u0430\u0432\u0438\u043B\u044C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CH", "\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CI", "\u041A\u043E\u0442-\u0434\u2019\u0418\u0432\u0443\u0430\u0440");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CK", "\u041E\u0441\u0442\u0440\u043E\u0432\u0430 \u041A\u0443\u043A\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CL", "\u0427\u0438\u043B\u0438");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CM", "\u041A\u0430\u043C\u0435\u0440\u0443\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CN", "\u041A\u0438\u0442\u0430\u0439");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CO", "\u041A\u043E\u043B\u0443\u043C\u0431\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CP", "\u043E-\u0432 \u041A\u043B\u0438\u043F\u043F\u0435\u0440\u0442\u043E\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CR", "\u041A\u043E\u0441\u0442\u0430-\u0420\u0438\u043A\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CU", "\u041A\u0443\u0431\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CV", "\u041A\u0430\u0431\u043E-\u0412\u0435\u0440\u0434\u0435");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CW", "\u041A\u044E\u0440\u0430\u0441\u0430\u043E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CX", "\u043E-\u0432 \u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CY", "\u041A\u0438\u043F\u0440");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CZ", "\u0427\u0435\u0445\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DE", "\u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DG", "\u0414\u0438\u0435\u0433\u043E-\u0413\u0430\u0440\u0441\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DJ", "\u0414\u0436\u0438\u0431\u0443\u0442\u0438");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DK", "\u0414\u0430\u043D\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DM", "\u0414\u043E\u043C\u0438\u043D\u0438\u043A\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DO", "\u0414\u043E\u043C\u0438\u043D\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DZ", "\u0410\u043B\u0436\u0438\u0440");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EA", "\u0421\u0435\u0443\u0442\u0430 \u0438 \u041C\u0435\u043B\u0438\u043B\u044C\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EC", "\u042D\u043A\u0432\u0430\u0434\u043E\u0440");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EE", "\u042D\u0441\u0442\u043E\u043D\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EG", "\u0415\u0433\u0438\u043F\u0435\u0442");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EH", "\u0417\u0430\u043F\u0430\u0434\u043D\u0430\u044F \u0421\u0430\u0445\u0430\u0440\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ER", "\u042D\u0440\u0438\u0442\u0440\u0435\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ES", "\u0418\u0441\u043F\u0430\u043D\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ET", "\u042D\u0444\u0438\u043E\u043F\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EU", "\u0415\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u0438\u0439 \u0441\u043E\u044E\u0437");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EZ", "\u0435\u0432\u0440\u043E\u0437\u043E\u043D\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FI", "\u0424\u0438\u043D\u043B\u044F\u043D\u0434\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FJ", "\u0424\u0438\u0434\u0436\u0438");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FK", "\u0424\u043E\u043B\u043A\u043B\u0435\u043D\u0434\u0441\u043A\u0438\u0435 \u043E-\u0432\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FM", "\u0424\u0435\u0434\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u0428\u0442\u0430\u0442\u044B \u041C\u0438\u043A\u0440\u043E\u043D\u0435\u0437\u0438\u0438");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FO", "\u0424\u0430\u0440\u0435\u0440\u0441\u043A\u0438\u0435 \u043E-\u0432\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FR", "\u0424\u0440\u0430\u043D\u0446\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GA", "\u0413\u0430\u0431\u043E\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GB", "\u0412\u0435\u043B\u0438\u043A\u043E\u0431\u0440\u0438\u0442\u0430\u043D\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GD", "\u0413\u0440\u0435\u043D\u0430\u0434\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GE", "\u0413\u0440\u0443\u0437\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GF", "\u0424\u0440\u0430\u043D\u0446\u0443\u0437\u0441\u043A\u0430\u044F \u0413\u0432\u0438\u0430\u043D\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GG", "\u0413\u0435\u0440\u043D\u0441\u0438");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GH", "\u0413\u0430\u043D\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GI", "\u0413\u0438\u0431\u0440\u0430\u043B\u0442\u0430\u0440");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GL", "\u0413\u0440\u0435\u043D\u043B\u0430\u043D\u0434\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GM", "\u0413\u0430\u043C\u0431\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GN", "\u0413\u0432\u0438\u043D\u0435\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GP", "\u0413\u0432\u0430\u0434\u0435\u043B\u0443\u043F\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GQ", "\u042D\u043A\u0432\u0430\u0442\u043E\u0440\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u0413\u0432\u0438\u043D\u0435\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GR", "\u0413\u0440\u0435\u0446\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GS", "\u042E\u0436\u043D\u0430\u044F \u0413\u0435\u043E\u0440\u0433\u0438\u044F \u0438 \u042E\u0436\u043D\u044B\u0435 \u0421\u0430\u043D\u0434\u0432\u0438\u0447\u0435\u0432\u044B \u043E-\u0432\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GT", "\u0413\u0432\u0430\u0442\u0435\u043C\u0430\u043B\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GU", "\u0413\u0443\u0430\u043C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GW", "\u0413\u0432\u0438\u043D\u0435\u044F-\u0411\u0438\u0441\u0430\u0443");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GY", "\u0413\u0430\u0439\u0430\u043D\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HK", "\u0413\u043E\u043D\u043A\u043E\u043D\u0433 (\u0421\u0410\u0420)");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HM", "\u043E-\u0432\u0430 \u0425\u0435\u0440\u0434 \u0438 \u041C\u0430\u043A\u0434\u043E\u043D\u0430\u043B\u044C\u0434");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HN", "\u0413\u043E\u043D\u0434\u0443\u0440\u0430\u0441");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HR", "\u0425\u043E\u0440\u0432\u0430\u0442\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HT", "\u0413\u0430\u0438\u0442\u0438");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HU", "\u0412\u0435\u043D\u0433\u0440\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IC", "\u041A\u0430\u043D\u0430\u0440\u0441\u043A\u0438\u0435 \u043E-\u0432\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ID", "\u0418\u043D\u0434\u043E\u043D\u0435\u0437\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IE", "\u0418\u0440\u043B\u0430\u043D\u0434\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IL", "\u0418\u0437\u0440\u0430\u0438\u043B\u044C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IM", "\u043E-\u0432 \u041C\u044D\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IN", "\u0418\u043D\u0434\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IO", "\u0411\u0440\u0438\u0442\u0430\u043D\u0441\u043A\u0430\u044F \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u044F \u0432 \u0418\u043D\u0434\u0438\u0439\u0441\u043A\u043E\u043C \u043E\u043A\u0435\u0430\u043D\u0435");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IQ", "\u0418\u0440\u0430\u043A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IR", "\u0418\u0440\u0430\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IS", "\u0418\u0441\u043B\u0430\u043D\u0434\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IT", "\u0418\u0442\u0430\u043B\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JE", "\u0414\u0436\u0435\u0440\u0441\u0438");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JM", "\u042F\u043C\u0430\u0439\u043A\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JO", "\u0418\u043E\u0440\u0434\u0430\u043D\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JP", "\u042F\u043F\u043E\u043D\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KE", "\u041A\u0435\u043D\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KG", "\u041A\u0438\u0440\u0433\u0438\u0437\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KH", "\u041A\u0430\u043C\u0431\u043E\u0434\u0436\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KI", "\u041A\u0438\u0440\u0438\u0431\u0430\u0442\u0438");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KM", "\u041A\u043E\u043C\u043E\u0440\u044B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KN", "\u0421\u0435\u043D\u0442-\u041A\u0438\u0442\u0441 \u0438 \u041D\u0435\u0432\u0438\u0441");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KP", "\u041A\u041D\u0414\u0420");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KR", "\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u043E\u0440\u0435\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KW", "\u041A\u0443\u0432\u0435\u0439\u0442");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KY", "\u041E\u0441\u0442\u0440\u043E\u0432\u0430 \u041A\u0430\u0439\u043C\u0430\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KZ", "\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LA", "\u041B\u0430\u043E\u0441");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LB", "\u041B\u0438\u0432\u0430\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LC", "\u0421\u0435\u043D\u0442-\u041B\u044E\u0441\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LI", "\u041B\u0438\u0445\u0442\u0435\u043D\u0448\u0442\u0435\u0439\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LK", "\u0428\u0440\u0438-\u041B\u0430\u043D\u043A\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LR", "\u041B\u0438\u0431\u0435\u0440\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LS", "\u041B\u0435\u0441\u043E\u0442\u043E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LT", "\u041B\u0438\u0442\u0432\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LU", "\u041B\u044E\u043A\u0441\u0435\u043C\u0431\u0443\u0440\u0433");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LV", "\u041B\u0430\u0442\u0432\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LY", "\u041B\u0438\u0432\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MA", "\u041C\u0430\u0440\u043E\u043A\u043A\u043E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MC", "\u041C\u043E\u043D\u0430\u043A\u043E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MD", "\u041C\u043E\u043B\u0434\u043E\u0432\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ME", "\u0427\u0435\u0440\u043D\u043E\u0433\u043E\u0440\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MF", "\u0421\u0435\u043D-\u041C\u0430\u0440\u0442\u0435\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MG", "\u041C\u0430\u0434\u0430\u0433\u0430\u0441\u043A\u0430\u0440");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MH", "\u041C\u0430\u0440\u0448\u0430\u043B\u043B\u043E\u0432\u044B \u041E\u0441\u0442\u0440\u043E\u0432\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MK", "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ML", "\u041C\u0430\u043B\u0438");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MM", "\u041C\u044C\u044F\u043D\u043C\u0430 (\u0411\u0438\u0440\u043C\u0430)");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MN", "\u041C\u043E\u043D\u0433\u043E\u043B\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MO", "\u041C\u0430\u043A\u0430\u043E (\u0421\u0410\u0420)");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MP", "\u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u041C\u0430\u0440\u0438\u0430\u043D\u0441\u043A\u0438\u0435 \u043E-\u0432\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MQ", "\u041C\u0430\u0440\u0442\u0438\u043D\u0438\u043A\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MR", "\u041C\u0430\u0432\u0440\u0438\u0442\u0430\u043D\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MS", "\u041C\u043E\u043D\u0442\u0441\u0435\u0440\u0440\u0430\u0442");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MT", "\u041C\u0430\u043B\u044C\u0442\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MU", "\u041C\u0430\u0432\u0440\u0438\u043A\u0438\u0439");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MV", "\u041C\u0430\u043B\u044C\u0434\u0438\u0432\u044B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MW", "\u041C\u0430\u043B\u0430\u0432\u0438");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MX", "\u041C\u0435\u043A\u0441\u0438\u043A\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MY", "\u041C\u0430\u043B\u0430\u0439\u0437\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MZ", "\u041C\u043E\u0437\u0430\u043C\u0431\u0438\u043A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NA", "\u041D\u0430\u043C\u0438\u0431\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NC", "\u041D\u043E\u0432\u0430\u044F \u041A\u0430\u043B\u0435\u0434\u043E\u043D\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NE", "\u041D\u0438\u0433\u0435\u0440");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NF", "\u043E-\u0432 \u041D\u043E\u0440\u0444\u043E\u043B\u043A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NG", "\u041D\u0438\u0433\u0435\u0440\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NI", "\u041D\u0438\u043A\u0430\u0440\u0430\u0433\u0443\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NL", "\u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u044B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NO", "\u041D\u043E\u0440\u0432\u0435\u0433\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NP", "\u041D\u0435\u043F\u0430\u043B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NR", "\u041D\u0430\u0443\u0440\u0443");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NU", "\u041D\u0438\u0443\u044D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NZ", "\u041D\u043E\u0432\u0430\u044F \u0417\u0435\u043B\u0430\u043D\u0434\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("OM", "\u041E\u043C\u0430\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PA", "\u041F\u0430\u043D\u0430\u043C\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PE", "\u041F\u0435\u0440\u0443");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PF", "\u0424\u0440\u0430\u043D\u0446\u0443\u0437\u0441\u043A\u0430\u044F \u041F\u043E\u043B\u0438\u043D\u0435\u0437\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PG", "\u041F\u0430\u043F\u0443\u0430 \u2014 \u041D\u043E\u0432\u0430\u044F \u0413\u0432\u0438\u043D\u0435\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PH", "\u0424\u0438\u043B\u0438\u043F\u043F\u0438\u043D\u044B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PK", "\u041F\u0430\u043A\u0438\u0441\u0442\u0430\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PL", "\u041F\u043E\u043B\u044C\u0448\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PM", "\u0421\u0435\u043D-\u041F\u044C\u0435\u0440 \u0438 \u041C\u0438\u043A\u0435\u043B\u043E\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PN", "\u043E-\u0432\u0430 \u041F\u0438\u0442\u043A\u044D\u0440\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PR", "\u041F\u0443\u044D\u0440\u0442\u043E-\u0420\u0438\u043A\u043E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PS", "\u041F\u0430\u043B\u0435\u0441\u0442\u0438\u043D\u0441\u043A\u0438\u0435 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PT", "\u041F\u043E\u0440\u0442\u0443\u0433\u0430\u043B\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PW", "\u041F\u0430\u043B\u0430\u0443");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PY", "\u041F\u0430\u0440\u0430\u0433\u0432\u0430\u0439");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("QA", "\u041A\u0430\u0442\u0430\u0440");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("QO", "\u0412\u043D\u0435\u0448\u043D\u044F\u044F \u041E\u043A\u0435\u0430\u043D\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RE", "\u0420\u0435\u044E\u043D\u044C\u043E\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RO", "\u0420\u0443\u043C\u044B\u043D\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RS", "\u0421\u0435\u0440\u0431\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RU", "\u0420\u043E\u0441\u0441\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RW", "\u0420\u0443\u0430\u043D\u0434\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SA", "\u0421\u0430\u0443\u0434\u043E\u0432\u0441\u043A\u0430\u044F \u0410\u0440\u0430\u0432\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SB", "\u0421\u043E\u043B\u043E\u043C\u043E\u043D\u043E\u0432\u044B \u041E\u0441\u0442\u0440\u043E\u0432\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SC", "\u0421\u0435\u0439\u0448\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u041E\u0441\u0442\u0440\u043E\u0432\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SD", "\u0421\u0443\u0434\u0430\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SE", "\u0428\u0432\u0435\u0446\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SG", "\u0421\u0438\u043D\u0433\u0430\u043F\u0443\u0440");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SH", "\u043E-\u0432 \u0421\u0432. \u0415\u043B\u0435\u043D\u044B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SI", "\u0421\u043B\u043E\u0432\u0435\u043D\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SJ", "\u0428\u043F\u0438\u0446\u0431\u0435\u0440\u0433\u0435\u043D \u0438 \u042F\u043D-\u041C\u0430\u0439\u0435\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SK", "\u0421\u043B\u043E\u0432\u0430\u043A\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SL", "\u0421\u044C\u0435\u0440\u0440\u0430-\u041B\u0435\u043E\u043D\u0435");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SM", "\u0421\u0430\u043D-\u041C\u0430\u0440\u0438\u043D\u043E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SN", "\u0421\u0435\u043D\u0435\u0433\u0430\u043B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SO", "\u0421\u043E\u043C\u0430\u043B\u0438");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SR", "\u0421\u0443\u0440\u0438\u043D\u0430\u043C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SS", "\u042E\u0436\u043D\u044B\u0439 \u0421\u0443\u0434\u0430\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ST", "\u0421\u0430\u043D-\u0422\u043E\u043C\u0435 \u0438 \u041F\u0440\u0438\u043D\u0441\u0438\u043F\u0438");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SV", "\u0421\u0430\u043B\u044C\u0432\u0430\u0434\u043E\u0440");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SX", "\u0421\u0438\u043D\u0442-\u041C\u0430\u0440\u0442\u0435\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SY", "\u0421\u0438\u0440\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SZ", "\u0421\u0432\u0430\u0437\u0438\u043B\u0435\u043D\u0434");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TA", "\u0422\u0440\u0438\u0441\u0442\u0430\u043D-\u0434\u0430-\u041A\u0443\u043D\u044C\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TC", "\u043E-\u0432\u0430 \u0422\u0451\u0440\u043A\u0441 \u0438 \u041A\u0430\u0439\u043A\u043E\u0441");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TD", "\u0427\u0430\u0434");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TF", "\u0424\u0440\u0430\u043D\u0446\u0443\u0437\u0441\u043A\u0438\u0435 \u042E\u0436\u043D\u044B\u0435 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TG", "\u0422\u043E\u0433\u043E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TH", "\u0422\u0430\u0438\u043B\u0430\u043D\u0434");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TJ", "\u0422\u0430\u0434\u0436\u0438\u043A\u0438\u0441\u0442\u0430\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TK", "\u0422\u043E\u043A\u0435\u043B\u0430\u0443");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TL", "\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u044B\u0439 \u0422\u0438\u043C\u043E\u0440");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TM", "\u0422\u0443\u0440\u043A\u043C\u0435\u043D\u0438\u0441\u0442\u0430\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TN", "\u0422\u0443\u043D\u0438\u0441");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TO", "\u0422\u043E\u043D\u0433\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TR", "\u0422\u0443\u0440\u0446\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TT", "\u0422\u0440\u0438\u043D\u0438\u0434\u0430\u0434 \u0438 \u0422\u043E\u0431\u0430\u0433\u043E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TV", "\u0422\u0443\u0432\u0430\u043B\u0443");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TW", "\u0422\u0430\u0439\u0432\u0430\u043D\u044C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TZ", "\u0422\u0430\u043D\u0437\u0430\u043D\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UA", "\u0423\u043A\u0440\u0430\u0438\u043D\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UG", "\u0423\u0433\u0430\u043D\u0434\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UM", "\u0412\u043D\u0435\u0448\u043D\u0438\u0435 \u043C\u0430\u043B\u044B\u0435 \u043E-\u0432\u0430 (\u0421\u0428\u0410)");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UN", "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u043D\u044B\u0445 \u041D\u0430\u0446\u0438\u0439");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("US", "\u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u043D\u044B\u0435 \u0428\u0442\u0430\u0442\u044B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UY", "\u0423\u0440\u0443\u0433\u0432\u0430\u0439");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UZ", "\u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VA", "\u0412\u0430\u0442\u0438\u043A\u0430\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VC", "\u0421\u0435\u043D\u0442-\u0412\u0438\u043D\u0441\u0435\u043D\u0442 \u0438 \u0413\u0440\u0435\u043D\u0430\u0434\u0438\u043D\u044B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VE", "\u0412\u0435\u043D\u0435\u0441\u0443\u044D\u043B\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VG", "\u0412\u0438\u0440\u0433\u0438\u043D\u0441\u043A\u0438\u0435 \u043E-\u0432\u0430 (\u0412\u0435\u043B\u0438\u043A\u043E\u0431\u0440\u0438\u0442\u0430\u043D\u0438\u044F)");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VI", "\u0412\u0438\u0440\u0433\u0438\u043D\u0441\u043A\u0438\u0435 \u043E-\u0432\u0430 (\u0421\u0428\u0410)");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VN", "\u0412\u044C\u0435\u0442\u043D\u0430\u043C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VU", "\u0412\u0430\u043D\u0443\u0430\u0442\u0443");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("WF", "\u0423\u043E\u043B\u043B\u0438\u0441 \u0438 \u0424\u0443\u0442\u0443\u043D\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("WS", "\u0421\u0430\u043C\u043E\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("XK", "\u041A\u043E\u0441\u043E\u0432\u043E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("YE", "\u0419\u0435\u043C\u0435\u043D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("YT", "\u041C\u0430\u0439\u043E\u0442\u0442\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZA", "\u042E\u0436\u043D\u043E-\u0410\u0444\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZM", "\u0417\u0430\u043C\u0431\u0438\u044F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZW", "\u0417\u0438\u043C\u0431\u0430\u0431\u0432\u0435");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZZ", "\u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0440\u0435\u0433\u0438\u043E\u043D");
 }
 /**
  * @public
  */
 static $clinit() {
  LocalizedNamesImpl__ru.$clinit = () =>{};
  LocalizedNamesImpl__ru.$loadModules();
  LocalizedNamesImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof LocalizedNamesImpl__ru;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(LocalizedNamesImpl__ru, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ru');

exports = LocalizedNamesImpl__ru; 
//# sourceMappingURL=LocalizedNamesImpl_ru.js.map