goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ja$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class LocalizedNamesImpl__ja extends LocalizedNamesImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LocalizedNamesImpl__ja} */
 static $create__() {
  LocalizedNamesImpl__ja.$clinit();
  let $instance = new LocalizedNamesImpl__ja();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_ja__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_ja__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl__();
 }
 /** @override @return {Array<?string>} */
 m_loadLikelyRegionCodes__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["JP"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_loadSortedRegionCodes__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["XA", "XB", "IS", "IE", "AZ", "AC", "AF", "US", "AE", "DZ", "AR", "AW", "AL", "AM", "AI", "AO", "AG", "AD", "YE", "GB", "IL", "IT", "IQ", "IR", "IN", "ID", "WF", "UG", "UA", "UZ", "UY", "EC", "EG", "EE", "ET", "ER", "SV", "AU", "AT", "AX", "QO", "OM", "NL", "BQ", "CV", "GY", "KZ", "QA", "CA", "IC", "GA", "CM", "GM", "KH", "GH", "GG", "GN", "GW", "CY", "CU", "CW", "GR", "KI", "KG", "GT", "GP", "GU", "KW", "CK", "GL", "CX", "CP", "GD", "HR", "KY", "KE", "CI", "CC", "CR", "XK", "KM", "CO", "CG", "CD", "SA", "GS", "WS", "ST", "ZM", "PM", "SM", "BL", "MF", "SL", "DJ", "GI", "JE", "JM", "GE", "SY", "SG", "SX", "ZW", "CH", "SE", "SD", "SJ", "ES", "SR", "LK", "SK", "SI", "SZ", "EA", "SC", "SN", "RS", "KN", "VC", "SH", "LC", "SO", "SB", "TC", "TH", "TJ", "TZ", "CZ", "TD", "TN", "CL", "TV", "DG", "DK", "DE", "TG", "TK", "DO", "DM", "TA", "TT", "TM", "TR", "TO", "NG", "NR", "NA", "NU", "NI", "NE", "NC", "NZ", "NP", "NF", "NO", "HM", "HT", "PK", "VA", "PA", "VU", "BS", "PG", "BM", "PW", "PY", "BB", "PS", "HU", "BD", "BH", "PN", "FJ", "PH", "FI", "PR", "FO", "FK", "BR", "FR", "BG", "BF", "BN", "BI", "BT", "BV", "VN", "BJ", "VE", "BY", "BZ", "PE", "BE", "BA", "BW", "BO", "PT", "HN", "PL", "MH", "MK", "MG", "YT", "MW", "ML", "MT", "MQ", "MY", "IM", "FM", "MM", "MX", "MU", "MR", "MZ", "MC", "MV", "MD", "MA", "MN", "ME", "MS", "EZ", "JO", "LA", "LV", "LT", "LY", "LI", "LR", "RO", "LU", "RW", "LS", "LB", "RE", "RU", "IO", "VG", "EU", "KR", "UM", "UN", "EH", "GQ", "TW", "CF", "MO", "HK", "CN", "TL", "ZA", "SS", "AQ", "JP", "GF", "PF", "TF", "VI", "AS", "MP", "KP"], j_l_String));
 }
 /** @override */
 m_loadNameMap__() {
  super.m_loadNameMap__();
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("001", "\u4E16\u754C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("002", "\u30A2\u30D5\u30EA\u30AB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("003", "\u5317\u30A2\u30E1\u30EA\u30AB\u5927\u9678");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("005", "\u5357\u30A2\u30E1\u30EA\u30AB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("009", "\u30AA\u30BB\u30A2\u30CB\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("011", "\u897F\u30A2\u30D5\u30EA\u30AB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("013", "\u4E2D\u592E\u30A2\u30E1\u30EA\u30AB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("014", "\u6771\u30A2\u30D5\u30EA\u30AB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("015", "\u5317\u30A2\u30D5\u30EA\u30AB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("017", "\u4E2D\u90E8\u30A2\u30D5\u30EA\u30AB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("018", "\u5357\u90E8\u30A2\u30D5\u30EA\u30AB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("019", "\u30A2\u30E1\u30EA\u30AB\u5927\u9678");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("021", "\u5317\u30A2\u30E1\u30EA\u30AB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("029", "\u30AB\u30EA\u30D6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("030", "\u6771\u30A2\u30B8\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("034", "\u5357\u30A2\u30B8\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("035", "\u6771\u5357\u30A2\u30B8\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("039", "\u5357\u30E8\u30FC\u30ED\u30C3\u30D1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("053", "\u30AA\u30FC\u30B9\u30C8\u30E9\u30E9\u30B7\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("054", "\u30E1\u30E9\u30CD\u30B7\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("057", "\u30DF\u30AF\u30ED\u30CD\u30B7\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("061", "\u30DD\u30EA\u30CD\u30B7\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("142", "\u30A2\u30B8\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("143", "\u4E2D\u592E\u30A2\u30B8\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("145", "\u897F\u30A2\u30B8\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("150", "\u30E8\u30FC\u30ED\u30C3\u30D1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("151", "\u6771\u30E8\u30FC\u30ED\u30C3\u30D1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("154", "\u5317\u30E8\u30FC\u30ED\u30C3\u30D1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("155", "\u897F\u30E8\u30FC\u30ED\u30C3\u30D1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("202", "\u30B5\u30D6\u30B5\u30CF\u30E9\u30A2\u30D5\u30EA\u30AB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("419", "\u30E9\u30C6\u30F3\u30A2\u30E1\u30EA\u30AB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AC", "\u30A2\u30BB\u30F3\u30B7\u30E7\u30F3\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AD", "\u30A2\u30F3\u30C9\u30E9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AE", "\u30A2\u30E9\u30D6\u9996\u9577\u56FD\u9023\u90A6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AF", "\u30A2\u30D5\u30AC\u30CB\u30B9\u30BF\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AG", "\u30A2\u30F3\u30C6\u30A3\u30B0\u30A2\u30FB\u30D0\u30FC\u30D6\u30FC\u30C0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AI", "\u30A2\u30F3\u30AE\u30E9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AL", "\u30A2\u30EB\u30D0\u30CB\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AM", "\u30A2\u30EB\u30E1\u30CB\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AO", "\u30A2\u30F3\u30B4\u30E9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AQ", "\u5357\u6975");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AR", "\u30A2\u30EB\u30BC\u30F3\u30C1\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AS", "\u7C73\u9818\u30B5\u30E2\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AT", "\u30AA\u30FC\u30B9\u30C8\u30EA\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AU", "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AW", "\u30A2\u30EB\u30D0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AX", "\u30AA\u30FC\u30E9\u30F3\u30C9\u8AF8\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AZ", "\u30A2\u30BC\u30EB\u30D0\u30A4\u30B8\u30E3\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BA", "\u30DC\u30B9\u30CB\u30A2\u30FB\u30D8\u30EB\u30C4\u30A7\u30B4\u30D3\u30CA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BB", "\u30D0\u30EB\u30D0\u30C9\u30B9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BD", "\u30D0\u30F3\u30B0\u30E9\u30C7\u30B7\u30E5");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BE", "\u30D9\u30EB\u30AE\u30FC");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BF", "\u30D6\u30EB\u30AD\u30CA\u30D5\u30A1\u30BD");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BG", "\u30D6\u30EB\u30AC\u30EA\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BH", "\u30D0\u30FC\u30EC\u30FC\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BI", "\u30D6\u30EB\u30F3\u30B8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BJ", "\u30D9\u30CA\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BL", "\u30B5\u30F3\u30FB\u30D0\u30EB\u30C6\u30EB\u30DF\u30FC");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BM", "\u30D0\u30DF\u30E5\u30FC\u30C0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BN", "\u30D6\u30EB\u30CD\u30A4");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BO", "\u30DC\u30EA\u30D3\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BQ", "\u30AA\u30E9\u30F3\u30C0\u9818\u30AB\u30EA\u30D6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BR", "\u30D6\u30E9\u30B8\u30EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BS", "\u30D0\u30CF\u30DE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BT", "\u30D6\u30FC\u30BF\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BV", "\u30D6\u30FC\u30D9\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BW", "\u30DC\u30C4\u30EF\u30CA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BY", "\u30D9\u30E9\u30EB\u30FC\u30B7");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BZ", "\u30D9\u30EA\u30FC\u30BA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CA", "\u30AB\u30CA\u30C0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CC", "\u30B3\u30B3\u30B9(\u30AD\u30FC\u30EA\u30F3\u30B0)\u8AF8\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CD", "\u30B3\u30F3\u30B4\u6C11\u4E3B\u5171\u548C\u56FD(\u30AD\u30F3\u30B7\u30E3\u30B5)");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CF", "\u4E2D\u592E\u30A2\u30D5\u30EA\u30AB\u5171\u548C\u56FD");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CG", "\u30B3\u30F3\u30B4\u5171\u548C\u56FD(\u30D6\u30E9\u30B6\u30D3\u30EB)");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CH", "\u30B9\u30A4\u30B9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CI", "\u30B3\u30FC\u30C8\u30B8\u30DC\u30EF\u30FC\u30EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CK", "\u30AF\u30C3\u30AF\u8AF8\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CL", "\u30C1\u30EA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CM", "\u30AB\u30E1\u30EB\u30FC\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CN", "\u4E2D\u56FD");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CO", "\u30B3\u30ED\u30F3\u30D3\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CP", "\u30AF\u30EA\u30C3\u30D1\u30FC\u30C8\u30F3\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CR", "\u30B3\u30B9\u30BF\u30EA\u30AB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CU", "\u30AD\u30E5\u30FC\u30D0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CV", "\u30AB\u30FC\u30DC\u30D9\u30EB\u30C7");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CW", "\u30AD\u30E5\u30E9\u30BD\u30FC");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CX", "\u30AF\u30EA\u30B9\u30DE\u30B9\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CY", "\u30AD\u30D7\u30ED\u30B9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CZ", "\u30C1\u30A7\u30B3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DE", "\u30C9\u30A4\u30C4");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DG", "\u30C7\u30A3\u30A8\u30B4\u30AC\u30EB\u30B7\u30A2\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DJ", "\u30B8\u30D6\u30C1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DK", "\u30C7\u30F3\u30DE\u30FC\u30AF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DM", "\u30C9\u30DF\u30CB\u30AB\u56FD");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DO", "\u30C9\u30DF\u30CB\u30AB\u5171\u548C\u56FD");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DZ", "\u30A2\u30EB\u30B8\u30A7\u30EA\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EA", "\u30BB\u30A6\u30BF\u30FB\u30E1\u30EA\u30EA\u30E3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EC", "\u30A8\u30AF\u30A2\u30C9\u30EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EE", "\u30A8\u30B9\u30C8\u30CB\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EG", "\u30A8\u30B8\u30D7\u30C8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EH", "\u897F\u30B5\u30CF\u30E9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ER", "\u30A8\u30EA\u30C8\u30EA\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ES", "\u30B9\u30DA\u30A4\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ET", "\u30A8\u30C1\u30AA\u30D4\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EU", "\u6B27\u5DDE\u9023\u5408");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EZ", "\u30E6\u30FC\u30ED\u570F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FI", "\u30D5\u30A3\u30F3\u30E9\u30F3\u30C9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FJ", "\u30D5\u30A3\u30B8\u30FC");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FK", "\u30D5\u30A9\u30FC\u30AF\u30E9\u30F3\u30C9\u8AF8\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FM", "\u30DF\u30AF\u30ED\u30CD\u30B7\u30A2\u9023\u90A6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FO", "\u30D5\u30A7\u30ED\u30FC\u8AF8\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FR", "\u30D5\u30E9\u30F3\u30B9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GA", "\u30AC\u30DC\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GB", "\u30A4\u30AE\u30EA\u30B9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GD", "\u30B0\u30EC\u30CA\u30C0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GE", "\u30B8\u30E7\u30FC\u30B8\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GF", "\u4ECF\u9818\u30AE\u30A2\u30CA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GG", "\u30AC\u30FC\u30F3\u30B8\u30FC");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GH", "\u30AC\u30FC\u30CA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GI", "\u30B8\u30D6\u30E9\u30EB\u30BF\u30EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GL", "\u30B0\u30EA\u30FC\u30F3\u30E9\u30F3\u30C9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GM", "\u30AC\u30F3\u30D3\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GN", "\u30AE\u30CB\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GP", "\u30B0\u30A2\u30C9\u30EB\u30FC\u30D7");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GQ", "\u8D64\u9053\u30AE\u30CB\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GR", "\u30AE\u30EA\u30B7\u30E3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GS", "\u30B5\u30A6\u30B9\u30B8\u30E7\u30FC\u30B8\u30A2\u30FB\u30B5\u30A6\u30B9\u30B5\u30F3\u30C9\u30A6\u30A3\u30C3\u30C1\u8AF8\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GT", "\u30B0\u30A2\u30C6\u30DE\u30E9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GU", "\u30B0\u30A2\u30E0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GW", "\u30AE\u30CB\u30A2\u30D3\u30B5\u30A6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GY", "\u30AC\u30A4\u30A2\u30CA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HK", "\u4E2D\u83EF\u4EBA\u6C11\u5171\u548C\u56FD\u9999\u6E2F\u7279\u5225\u884C\u653F\u533A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HM", "\u30CF\u30FC\u30C9\u5CF6\u30FB\u30DE\u30AF\u30C9\u30CA\u30EB\u30C9\u8AF8\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HN", "\u30DB\u30F3\u30B8\u30E5\u30E9\u30B9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HR", "\u30AF\u30ED\u30A2\u30C1\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HT", "\u30CF\u30A4\u30C1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HU", "\u30CF\u30F3\u30AC\u30EA\u30FC");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IC", "\u30AB\u30CA\u30EA\u30A2\u8AF8\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ID", "\u30A4\u30F3\u30C9\u30CD\u30B7\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IE", "\u30A2\u30A4\u30EB\u30E9\u30F3\u30C9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IL", "\u30A4\u30B9\u30E9\u30A8\u30EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IM", "\u30DE\u30F3\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IN", "\u30A4\u30F3\u30C9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IO", "\u82F1\u9818\u30A4\u30F3\u30C9\u6D0B\u5730\u57DF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IQ", "\u30A4\u30E9\u30AF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IR", "\u30A4\u30E9\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IS", "\u30A2\u30A4\u30B9\u30E9\u30F3\u30C9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IT", "\u30A4\u30BF\u30EA\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JE", "\u30B8\u30E3\u30FC\u30B8\u30FC");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JM", "\u30B8\u30E3\u30DE\u30A4\u30AB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JO", "\u30E8\u30EB\u30C0\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JP", "\u65E5\u672C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KE", "\u30B1\u30CB\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KG", "\u30AD\u30EB\u30AE\u30B9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KH", "\u30AB\u30F3\u30DC\u30B8\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KI", "\u30AD\u30EA\u30D0\u30B9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KM", "\u30B3\u30E2\u30ED");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KN", "\u30BB\u30F3\u30C8\u30AF\u30EA\u30B9\u30C8\u30D5\u30A1\u30FC\u30FB\u30CD\u30FC\u30F4\u30A3\u30B9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KP", "\u5317\u671D\u9BAE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KR", "\u97D3\u56FD");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KW", "\u30AF\u30A6\u30A7\u30FC\u30C8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KY", "\u30B1\u30A4\u30DE\u30F3\u8AF8\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KZ", "\u30AB\u30B6\u30D5\u30B9\u30BF\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LA", "\u30E9\u30AA\u30B9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LB", "\u30EC\u30D0\u30CE\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LC", "\u30BB\u30F3\u30C8\u30EB\u30B7\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LI", "\u30EA\u30D2\u30C6\u30F3\u30B7\u30E5\u30BF\u30A4\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LK", "\u30B9\u30EA\u30E9\u30F3\u30AB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LR", "\u30EA\u30D9\u30EA\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LS", "\u30EC\u30BD\u30C8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LT", "\u30EA\u30C8\u30A2\u30CB\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LU", "\u30EB\u30AF\u30BB\u30F3\u30D6\u30EB\u30AF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LV", "\u30E9\u30C8\u30D3\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LY", "\u30EA\u30D3\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MA", "\u30E2\u30ED\u30C3\u30B3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MC", "\u30E2\u30CA\u30B3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MD", "\u30E2\u30EB\u30C9\u30D0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ME", "\u30E2\u30F3\u30C6\u30CD\u30B0\u30ED");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MF", "\u30B5\u30F3\u30FB\u30DE\u30EB\u30BF\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MG", "\u30DE\u30C0\u30AC\u30B9\u30AB\u30EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MH", "\u30DE\u30FC\u30B7\u30E3\u30EB\u8AF8\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MK", "\u30DE\u30B1\u30C9\u30CB\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ML", "\u30DE\u30EA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MM", "\u30DF\u30E3\u30F3\u30DE\u30FC (\u30D3\u30EB\u30DE)");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MN", "\u30E2\u30F3\u30B4\u30EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MO", "\u4E2D\u83EF\u4EBA\u6C11\u5171\u548C\u56FD\u30DE\u30AB\u30AA\u7279\u5225\u884C\u653F\u533A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MP", "\u5317\u30DE\u30EA\u30A2\u30CA\u8AF8\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MQ", "\u30DE\u30EB\u30C6\u30A3\u30CB\u30FC\u30AF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MR", "\u30E2\u30FC\u30EA\u30BF\u30CB\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MS", "\u30E2\u30F3\u30C8\u30BB\u30E9\u30C8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MT", "\u30DE\u30EB\u30BF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MU", "\u30E2\u30FC\u30EA\u30B7\u30E3\u30B9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MV", "\u30E2\u30EB\u30C7\u30A3\u30D6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MW", "\u30DE\u30E9\u30A6\u30A4");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MX", "\u30E1\u30AD\u30B7\u30B3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MY", "\u30DE\u30EC\u30FC\u30B7\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MZ", "\u30E2\u30B6\u30F3\u30D3\u30FC\u30AF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NA", "\u30CA\u30DF\u30D3\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NC", "\u30CB\u30E5\u30FC\u30AB\u30EC\u30C9\u30CB\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NE", "\u30CB\u30B8\u30A7\u30FC\u30EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NF", "\u30CE\u30FC\u30D5\u30A9\u30FC\u30AF\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NG", "\u30CA\u30A4\u30B8\u30A7\u30EA\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NI", "\u30CB\u30AB\u30E9\u30B0\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NL", "\u30AA\u30E9\u30F3\u30C0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NO", "\u30CE\u30EB\u30A6\u30A7\u30FC");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NP", "\u30CD\u30D1\u30FC\u30EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NR", "\u30CA\u30A6\u30EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NU", "\u30CB\u30A6\u30A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NZ", "\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("OM", "\u30AA\u30DE\u30FC\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PA", "\u30D1\u30CA\u30DE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PE", "\u30DA\u30EB\u30FC");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PF", "\u4ECF\u9818\u30DD\u30EA\u30CD\u30B7\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PG", "\u30D1\u30D7\u30A2\u30CB\u30E5\u30FC\u30AE\u30CB\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PH", "\u30D5\u30A3\u30EA\u30D4\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PK", "\u30D1\u30AD\u30B9\u30BF\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PL", "\u30DD\u30FC\u30E9\u30F3\u30C9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PM", "\u30B5\u30F3\u30D4\u30A8\u30FC\u30EB\u5CF6\u30FB\u30DF\u30AF\u30ED\u30F3\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PN", "\u30D4\u30C8\u30B1\u30A2\u30F3\u8AF8\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PR", "\u30D7\u30A8\u30EB\u30C8\u30EA\u30B3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PS", "\u30D1\u30EC\u30B9\u30C1\u30CA\u81EA\u6CBB\u533A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PT", "\u30DD\u30EB\u30C8\u30AC\u30EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PW", "\u30D1\u30E9\u30AA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PY", "\u30D1\u30E9\u30B0\u30A2\u30A4");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("QA", "\u30AB\u30BF\u30FC\u30EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("QO", "\u30AA\u30BB\u30A2\u30CB\u30A2\u5468\u8FBA\u5730\u57DF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RE", "\u30EC\u30E6\u30CB\u30AA\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RO", "\u30EB\u30FC\u30DE\u30CB\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RS", "\u30BB\u30EB\u30D3\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RU", "\u30ED\u30B7\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RW", "\u30EB\u30EF\u30F3\u30C0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SA", "\u30B5\u30A6\u30B8\u30A2\u30E9\u30D3\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SB", "\u30BD\u30ED\u30E2\u30F3\u8AF8\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SC", "\u30BB\u30FC\u30B7\u30A7\u30EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SD", "\u30B9\u30FC\u30C0\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SE", "\u30B9\u30A6\u30A7\u30FC\u30C7\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SG", "\u30B7\u30F3\u30AC\u30DD\u30FC\u30EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SH", "\u30BB\u30F3\u30C8\u30D8\u30EC\u30CA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SI", "\u30B9\u30ED\u30D9\u30CB\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SJ", "\u30B9\u30D0\u30FC\u30EB\u30D0\u30EB\u8AF8\u5CF6\u30FB\u30E4\u30F3\u30DE\u30A4\u30A8\u30F3\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SK", "\u30B9\u30ED\u30D0\u30AD\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SL", "\u30B7\u30A8\u30E9\u30EC\u30AA\u30CD");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SM", "\u30B5\u30F3\u30DE\u30EA\u30CE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SN", "\u30BB\u30CD\u30AC\u30EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SO", "\u30BD\u30DE\u30EA\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SR", "\u30B9\u30EA\u30CA\u30E0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SS", "\u5357\u30B9\u30FC\u30C0\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ST", "\u30B5\u30F3\u30C8\u30E1\u30FB\u30D7\u30EA\u30F3\u30B7\u30DA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SV", "\u30A8\u30EB\u30B5\u30EB\u30D0\u30C9\u30EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SX", "\u30B7\u30F3\u30C8\u30FB\u30DE\u30FC\u30EB\u30C6\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SY", "\u30B7\u30EA\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SZ", "\u30B9\u30EF\u30B8\u30E9\u30F3\u30C9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TA", "\u30C8\u30EA\u30B9\u30BF\u30F3\u30FB\u30C0\u30FB\u30AF\u30FC\u30CB\u30E3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TC", "\u30BF\u30FC\u30AF\u30B9\u30FB\u30AB\u30A4\u30B3\u30B9\u8AF8\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TD", "\u30C1\u30E3\u30C9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TF", "\u4ECF\u9818\u6975\u5357\u8AF8\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TG", "\u30C8\u30FC\u30B4");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TH", "\u30BF\u30A4");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TJ", "\u30BF\u30B8\u30AD\u30B9\u30BF\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TK", "\u30C8\u30B1\u30E9\u30A6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TL", "\u6771\u30C6\u30A3\u30E2\u30FC\u30EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TM", "\u30C8\u30EB\u30AF\u30E1\u30CB\u30B9\u30BF\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TN", "\u30C1\u30E5\u30CB\u30B8\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TO", "\u30C8\u30F3\u30AC");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TR", "\u30C8\u30EB\u30B3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TT", "\u30C8\u30EA\u30CB\u30C0\u30FC\u30C9\u30FB\u30C8\u30D0\u30B4");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TV", "\u30C4\u30D0\u30EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TW", "\u53F0\u6E7E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TZ", "\u30BF\u30F3\u30B6\u30CB\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UA", "\u30A6\u30AF\u30E9\u30A4\u30CA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UG", "\u30A6\u30AC\u30F3\u30C0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UM", "\u5408\u8846\u56FD\u9818\u6709\u5C0F\u96E2\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UN", "\u56FD\u969B\u9023\u5408");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("US", "\u30A2\u30E1\u30EA\u30AB\u5408\u8846\u56FD");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UY", "\u30A6\u30EB\u30B0\u30A2\u30A4");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UZ", "\u30A6\u30BA\u30D9\u30AD\u30B9\u30BF\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VA", "\u30D0\u30C1\u30AB\u30F3\u5E02\u56FD");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VC", "\u30BB\u30F3\u30C8\u30D3\u30F3\u30BB\u30F3\u30C8\u53CA\u3073\u30B0\u30EC\u30CA\u30C7\u30A3\u30FC\u30F3\u8AF8\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VE", "\u30D9\u30CD\u30BA\u30A8\u30E9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VG", "\u82F1\u9818\u30F4\u30A1\u30FC\u30B8\u30F3\u8AF8\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VI", "\u7C73\u9818\u30F4\u30A1\u30FC\u30B8\u30F3\u8AF8\u5CF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VN", "\u30D9\u30C8\u30CA\u30E0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VU", "\u30D0\u30CC\u30A2\u30C4");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("WF", "\u30A6\u30A9\u30EA\u30B9\u30FB\u30D5\u30C4\u30CA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("WS", "\u30B5\u30E2\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("XK", "\u30B3\u30BD\u30DC");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("YE", "\u30A4\u30A8\u30E1\u30F3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("YT", "\u30DE\u30E8\u30C3\u30C8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZA", "\u5357\u30A2\u30D5\u30EA\u30AB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZM", "\u30B6\u30F3\u30D3\u30A2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZW", "\u30B8\u30F3\u30D0\u30D6\u30A8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZZ", "\u4E0D\u660E\u306A\u5730\u57DF");
 }
 
 static $clinit() {
  LocalizedNamesImpl__ja.$clinit = () =>{};
  LocalizedNamesImpl__ja.$loadModules();
  LocalizedNamesImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LocalizedNamesImpl__ja;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(LocalizedNamesImpl__ja, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ja');

exports = LocalizedNamesImpl__ja; 
//# sourceMappingURL=LocalizedNamesImpl_ja.js.map